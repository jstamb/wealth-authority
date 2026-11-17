import { LEAD_ENDPOINT } from './leadValidation.js';

type LeadResult = { ok: true } | { ok: false; status: number };

// Track every failed submission so a broken form shows up in analytics
// instead of in a missing-leads complaint.
function trackLeadError(form: string, status: number) {
  const w = window as unknown as {
    rybbit?: { event?: (name: string, props: Record<string, unknown>) => void };
    gtag?: (...args: unknown[]) => void;
  };
  try {
    w.rybbit?.event?.('lead_error', { form, status });
    w.gtag?.('event', 'lead_error', { form, status });
  } catch {
    // analytics must never break the form
  }
}

// POSTs a lead to the same-origin proxy. The GHL webhook URL lives only on
// the server. status 0 = network failure.
export async function submitLead(form: string, payload: Record<string, unknown>): Promise<LeadResult> {
  try {
    const res = await fetch(LEAD_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (res.ok) return { ok: true };
    trackLeadError(form, res.status);
    return { ok: false, status: res.status };
  } catch {
    trackLeadError(form, 0);
    return { ok: false, status: 0 };
  }
}
