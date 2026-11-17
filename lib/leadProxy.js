// Same-origin lead proxy: browser -> /api/lead -> GHL inbound webhook.
// The webhook URL is a credential (anyone holding it can create contacts and
// fire the workflow), so it is read from the GHL_WEBHOOK_URL runtime secret
// and never shipped to the browser.
import { validateLead, MAX_FIELD_LENGTH } from './leadValidation.js';

const MAX_BODY_BYTES = 16 * 1024;
const UPSTREAM_TIMEOUT_MS = 10_000;

// Forwarded payload per form: exactly the keys (and encoding) each form sent
// to the webhook before this proxy existed, so the GHL workflow mapping is
// unchanged. source/formType are fixed server-side, never trusted from input.
const FORMS = {
  'advisor-match': {
    encoding: 'form',
    source: 'Wealth Authority Main Lead Form',
    fields: ['firstName', 'lastName', 'email', 'phone', 'city', 'assets', 'timeline'],
  },
  calculator: {
    encoding: 'json',
    source: 'Retirement Calculator Tool',
    fields: ['firstName', 'lastName', 'email', 'phone'],
  },
};

function send(res, status, body) {
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  });
  res.end(JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(Object.assign(new Error('too large'), { status: 413 }));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

const str = (v) => (typeof v === 'string' ? v.trim().slice(0, MAX_FIELD_LENGTH) : '');

function buildPayload(form, input) {
  const out = {};
  for (const key of form.fields) out[key] = str(input[key]);
  if (form === FORMS.calculator) {
    const income = Number(input.desiredAnnualRetirementIncome);
    if (Number.isFinite(income) && income > 0 && income < 1e10) {
      out.desiredAnnualRetirementIncome = income;
      out.calculatedNestEgg = income * 25; // 4% rule, same as the client
    }
  }
  out.source = form.source;
  return out;
}

export async function handleLead(req, res) {
  const webhookUrl = process.env.GHL_WEBHOOK_URL;

  // Config probe: booleans only, never values or lengths.
  if (req.method === 'GET') {
    return send(res, 200, { ok: true, ghlWebhookUrl: Boolean(webhookUrl) });
  }
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return send(res, 405, { ok: false, error: 'Method not allowed' });
  }
  if (!webhookUrl) {
    console.error('lead: GHL_WEBHOOK_URL is not set');
    return send(res, 503, { ok: false, error: 'Lead capture is not configured' });
  }

  const declared = Number(req.headers['content-length'] || 0);
  if (declared > MAX_BODY_BYTES) return send(res, 413, { ok: false, error: 'Request too large' });

  let input;
  try {
    input = JSON.parse(await readBody(req));
  } catch (err) {
    if (err && err.status === 413) return send(res, 413, { ok: false, error: 'Request too large' });
    return send(res, 400, { ok: false, error: 'Invalid request' });
  }
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    return send(res, 400, { ok: false, error: 'Invalid request' });
  }

  const form = FORMS[input.formType];

  // Honeypot: checked server-side only. Answer 200 so bots learn nothing, but
  // log it so a false positive on a real visitor is traceable.
  if (str(input.hp_verify)) {
    console.warn(`lead: honeypot tripped form=${form ? input.formType : 'unknown'} ua=${str(req.headers['user-agent']).slice(0, 120)}`);
    return send(res, 200, { ok: true });
  }

  if (!form) return send(res, 400, { ok: false, error: 'Invalid request' });
  const invalid = validateLead(input);
  if (invalid) return send(res, 400, { ok: false, error: invalid });

  const payload = buildPayload(form, input);
  const body = form.encoding === 'form'
    ? new URLSearchParams({ ...payload, formType: input.formType }).toString()
    : JSON.stringify({ ...payload, formType: input.formType });

  try {
    const upstream = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': form.encoding === 'form' ? 'application/x-www-form-urlencoded' : 'application/json',
      },
      body,
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });
    if (!upstream.ok) {
      console.error(`lead: GHL webhook answered ${upstream.status} form=${input.formType}`);
      return send(res, 502, { ok: false, error: 'Lead delivery failed' });
    }
  } catch (err) {
    console.error(`lead: GHL webhook request failed form=${input.formType}: ${err && err.name}`);
    return send(res, 502, { ok: false, error: 'Lead delivery failed' });
  }

  return send(res, 200, { ok: true });
}
