// Lead validation shared by the browser forms (components/*) and the
// server-side proxy (server.js). ONE copy so client and server can never
// disagree about what a valid lead is.

export const LEAD_ENDPOINT = '/api/lead';
export const MAX_FIELD_LENGTH = 500;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const clean = (value) =>
  typeof value === 'string' ? value.trim().slice(0, MAX_FIELD_LENGTH) : '';

// Count digits before any extension marker so "555-0100 x12" is not read as
// a longer number.
export function phoneDigits(phone) {
  return clean(phone).split(/x|ext|#/i)[0].replace(/\D/g, '');
}

export function isValidPhone(phone) {
  const n = phoneDigits(phone).length;
  return n >= 10 && n <= 15;
}

export function isValidEmail(email) {
  return EMAIL_RE.test(clean(email));
}

// Returns null when the lead is acceptable, otherwise a visitor-facing message.
// Rule: a first name, plus at least one way to reach the person.
export function validateLead(lead) {
  if (!lead || typeof lead !== 'object') return 'Please fill in the form.';
  if (clean(lead.firstName).length < 1) return 'Please enter your first name.';
  if (!isValidPhone(lead.phone) && !isValidEmail(lead.email)) {
    return 'Please enter a valid phone number or email address.';
  }
  return null;
}
