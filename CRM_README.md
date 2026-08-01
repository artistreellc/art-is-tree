# Art-is-Tree CRM

A dedicated CRM for the tree service, built into this repo as its own app at
**`/crm`** (own login, own shell, own database tables — cleanly separable to a
`crm.artistreevabeach.com` subdomain later). It is the command center for every
lead, from every avenue, through to a paid job.

---

## What's built (Phase 1 — this commit)

| Area | Status | Where |
|---|---|---|
| **Lead Inbox** — every inquiry from every channel in one triage list | ✅ Live | `/crm/inbox` |
| **Job Pipeline** — lead → estimate → scheduled → done → paid, Kanban board | ✅ Live | `/crm/pipeline` |
| **Job detail** — editable job, contact card, activity timeline, call/note logging | ✅ Live | `/crm/jobs/:id` |
| **Dashboard** — new leads, open jobs, pipeline value, emergency alerts | ✅ Live | `/crm` |
| **AI Receptionist** — Claude-powered front desk that captures leads, tuned to your rules | ✅ Live (text) | `/crm/settings` + `/api/crm/receptionist` |
| **Website form → CRM** — the contact form now also drops leads into the inbox | ✅ Live | `api/contact.js` |
| **Gmail sync** | 🔜 Next | see Roadmap |
| **Google Calendar sync** | 🔜 Next | schema + hooks ready |
| **Business phone (calls/SMS) logging** | 🔜 Next | schema + `source: phone` ready |

The data model already includes contacts, leads, jobs, activities,
**appointments** (with a `google_event_id` column for Calendar sync), and
settings — so the "next" items are integrations on top of a schema that's
already there, not new foundations.

---

## Architecture

```
Browser (/crm React app)
   │   x-crm-token: <VITE_CRM_ACCESS_TOKEN>
   ▼
/api/crm/* (Vercel serverless functions)   ← holds the SERVICE ROLE key
   ▼
Supabase Postgres (crm_* tables, RLS on — only service role can read/write)
```

**Why the API layer:** the browser never gets the database service key, and the
public anon key has **zero** access to CRM tables (RLS is on with no anon
policy). All customer PII flows through server functions only.

### Endpoints
- `GET/PATCH/POST /api/crm/leads` — inbox list, status updates, convert-to-job
- `GET/POST/PATCH /api/crm/jobs` — pipeline board + job detail
- `POST /api/crm/activities` — log notes/calls/emails on the timeline
- `GET/PATCH /api/crm/settings` — business info + receptionist persona
- `POST /api/crm/intake` — **public** universal lead capture (website, etc.)
- `POST /api/crm/receptionist` — **public** AI receptionist chat + auto-capture

---

## Setup (one-time)

### 1. Create the database tables
Run `supabase/migrations/0001_crm_schema.sql` against the Supabase project
(`djtzvfeyedhwcnwjbwxp`). Either:
- Supabase Dashboard → SQL Editor → paste the file → Run, **or**
- `supabase db push` if you use the CLI.

### 2. Set environment variables (Vercel → Settings → Environment Variables)

| Variable | Value | Notes |
|---|---|---|
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Settings → API → `service_role` key | **Server only.** Never prefix with `VITE_`. |
| `CRM_ACCESS_TOKEN` | A long random string you generate | Gates the admin CRM API. |
| `VITE_CRM_ACCESS_TOKEN` | **Same value** as `CRM_ACCESS_TOKEN` | Baked into the CRM UI so it can call the API. |
| `ANTHROPIC_API_KEY` | Already set (used by the site chat) | Powers the AI receptionist. |
| `SUPABASE_URL` | *(optional)* project URL | Defaults to the known project URL. |

Generate a token: `openssl rand -hex 32`

### 3. Redeploy
Push/redeploy on Vercel. Visit `/crm`, log in with the admin login, and you're in.

> **Security note (be honest about where this stands):** the interim gate is a
> shared token, and the current admin login is the site's existing mock login.
> That's fine for a private, unlisted internal tool, but before this holds real
> customer data long-term, the hardening step is **Supabase Auth** (real
> per-user accounts + JWT). The code is structured so that's a drop-in: swap the
> `x-crm-token` header for the user's JWT and add RLS policies for the
> `authenticated` role. This is the first item on the roadmap below.

---

## Roadmap (the rest of your vision)

1. **Real authentication.** Turn on Supabase Auth, replace the token gate with
   per-user JWTs, add RLS policies. (Security hardening — do this before heavy use.)
2. **Gmail sync.** A scheduled function (Vercel Cron) reads the business inbox
   for new inquiry emails and calls `captureLead({ source: 'gmail' })`. The
   Gmail connector is already available in this workspace; this wires it to a
   cron + the intake function.
3. **Google Calendar sync.** On a job reaching `estimate_scheduled`/`scheduled`,
   create a Calendar event and store its id in `crm_appointments.google_event_id`
   (column already exists). Two-way sync so drag-to-reschedule updates Google.
4. **Business phone.** Route the business number through a provider (e.g. Twilio)
   so calls/texts log as `crm_activities` and missed calls create leads
   (`source: 'phone'`). Optionally connect the AI receptionist to voice
   (Vapi/Retell → speech-to-text → `/api/crm/receptionist`).
5. **Receptionist → live web widget & after-hours SMS**, using the same endpoint.
6. **Notifications.** Email/text you (via Resend) the moment an emergency lead
   lands.

Each is an additive layer — the inbox, pipeline, schema, and receptionist brain
they plug into are already in place.
