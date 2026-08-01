// Thin client for the /api/crm/* endpoints. Attaches the interim access token
// (VITE_CRM_ACCESS_TOKEN) so the serverless functions authorize the request.
// When real Supabase Auth is added, swap this header for the user's JWT.

const TOKEN = import.meta.env.VITE_CRM_ACCESS_TOKEN || '';

async function request(path, { method = 'GET', body, params } = {}) {
  const url = new URL(`/api/crm/${path}`, window.location.origin);
  if (params) Object.entries(params).forEach(([k, v]) => v != null && url.searchParams.set(k, v));

  const res = await fetch(url.toString().replace(window.location.origin, ''), {
    method,
    headers: {
      'content-type': 'application/json',
      ...(TOKEN ? { 'x-crm-token': TOKEN } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  let data = null;
  try { data = await res.json(); } catch { /* no body */ }
  if (!res.ok) {
    const err = new Error(data?.error || `Request failed (${res.status})`);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

export const crmApi = {
  // Leads / inbox
  listLeads: (status = 'new') => request('leads', { params: { status } }),
  setLeadStatus: (id, status) => request('leads', { method: 'PATCH', body: { id, status } }),
  convertLead: (id, job = {}) => request('leads', { method: 'POST', body: { action: 'convert', id, job } }),

  // Jobs / pipeline
  listJobs: () => request('jobs'),
  getJob: (id) => request('jobs', { params: { id } }),
  createJob: (job) => request('jobs', { method: 'POST', body: job }),
  updateJob: (patch) => request('jobs', { method: 'PATCH', body: patch }),

  // Timeline
  addActivity: (activity) => request('activities', { method: 'POST', body: activity }),

  // Settings / receptionist config
  getSettings: () => request('settings'),
  updateSettings: (patch) => request('settings', { method: 'PATCH', body: patch }),
};

export const CRM_CONFIGURED = Boolean(TOKEN);
