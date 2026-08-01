// Shared server-side helpers for the CRM API.
// Files starting with "_" are ignored by Vercel's filesystem router, so this is
// a library, not an endpoint.
//
// Required env vars (Vercel Project Settings -> Environment Variables):
//   SUPABASE_URL                 https://<project>.supabase.co
//   SUPABASE_SERVICE_ROLE_KEY    Service role key (SERVER ONLY — never expose)
//   CRM_ACCESS_TOKEN             Shared secret gating the admin CRM endpoints
// Optional:
//   ANTHROPIC_API_KEY            For the AI receptionist (reuses the site key)

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL =
  process.env.SUPABASE_URL || 'https://djtzvfeyedhwcnwjbwxp.supabase.co';
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

let _client = null;

// Lazily create a service-role client. Returns null if unconfigured so callers
// can degrade gracefully instead of throwing at import time.
export function getDb() {
  if (!SERVICE_KEY) return null;
  if (!_client) {
    _client = createClient(SUPABASE_URL, SERVICE_KEY, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return _client;
}

// Interim auth gate for admin endpoints. Compares an x-crm-token header (or
// Bearer token) against CRM_ACCESS_TOKEN. This is a shared-secret gate, not
// per-user auth — the documented hardening step is Supabase Auth + JWT.
export function isAuthorized(req) {
  const expected = process.env.CRM_ACCESS_TOKEN;
  if (!expected) return false; // fail closed when not configured
  const header =
    req.headers['x-crm-token'] ||
    (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  return typeof header === 'string' && header.length > 0 && header === expected;
}

export function requireAuth(req, res) {
  if (!getDb()) {
    res.status(503).json({ error: 'not_configured', message: 'CRM database is not configured.' });
    return false;
  }
  if (!isAuthorized(req)) {
    res.status(401).json({ error: 'unauthorized' });
    return false;
  }
  return true;
}

export function parseBody(req) {
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  return body || {};
}

export const clip = (v, n) => (v == null ? null : String(v).trim().slice(0, n) || null);

export function isEmail(v) {
  return typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

// ---------------------------------------------------------------------------
// Core intake used by the website form, the AI receptionist, Gmail sync, and
// manual entry. Normalizes a payload into a lead, links/creates a contact, and
// logs an activity. Returns { lead, contact }.
// ---------------------------------------------------------------------------
export async function captureLead(input = {}) {
  const db = getDb();
  if (!db) throw new Error('crm_not_configured');

  const lead = {
    name: clip(input.name, 120),
    email: clip(input.email, 200),
    phone: clip(input.phone, 40),
    address: clip(input.address, 300),
    service_needed: clip(input.service_needed || input.serviceNeeded, 120),
    message: clip(input.message, 5000),
    urgency: clip(input.urgency, 60),
    source: clip(input.source, 40) || 'other',
    source_detail: clip(input.source_detail || input.sourceDetail, 300),
    status: 'new',
    raw: input.raw || input,
  };

  // Best-effort contact matching by phone or email, else create one.
  let contact = null;
  if (lead.phone || lead.email) {
    const orParts = [];
    if (lead.phone) orParts.push(`phone.eq.${lead.phone}`);
    if (lead.email) orParts.push(`email.eq.${lead.email}`);
    const { data: found } = await db
      .from('crm_contacts')
      .select('*')
      .or(orParts.join(','))
      .limit(1);
    contact = found && found[0];
  }
  if (!contact) {
    const { data: created } = await db
      .from('crm_contacts')
      .insert({
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        address: lead.address,
      })
      .select()
      .single();
    contact = created;
  }

  lead.contact_id = contact ? contact.id : null;

  const { data: savedLead, error } = await db
    .from('crm_leads')
    .insert(lead)
    .select()
    .single();
  if (error) throw error;

  await db.from('crm_activities').insert({
    contact_id: lead.contact_id,
    lead_id: savedLead.id,
    type: lead.source === 'receptionist' ? 'receptionist' : 'note',
    direction: 'inbound',
    subject: `New lead from ${lead.source}`,
    body: lead.message || lead.service_needed || null,
    created_by: 'system',
  });

  return { lead: savedLead, contact };
}
