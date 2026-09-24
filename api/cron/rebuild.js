// Vercel Cron (schedule in vercel.json) — runs once a day. Its only job is to
// ask Vercel for a fresh production build, so scripts/fetch-review-stats.mjs
// runs again and the prerendered rating, review count and llms.txt pick up new
// Google reviews without anyone pushing a commit.
//
// It needs one env var to do anything: VERCEL_DEPLOY_HOOK_URL, a Deploy Hook
// for the main branch (Vercel → Project → Settings → Git → Deploy Hooks).
// Without it the function returns { skipped: true } and nothing rebuilds.
// CRON_SECRET, when set, is checked so nobody else can start a build by
// hitting this URL — Vercel sends it automatically on cron invocations.
export default async function handler(req, res) {
  const secret = process.env.CRON_SECRET;
  if (secret && req.headers.authorization !== `Bearer ${secret}`) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  const hook = process.env.VERCEL_DEPLOY_HOOK_URL;
  if (!hook) {
    return res.status(200).json({ skipped: true, reason: 'VERCEL_DEPLOY_HOOK_URL not set' });
  }

  try {
    const r = await fetch(hook, { method: 'POST' });
    const body = await r.json().catch(() => ({}));
    return res.status(200).json({ triggered: r.ok, status: r.status, job: body?.job?.id || null });
  } catch (err) {
    console.error('[api/cron/rebuild] deploy hook request failed', err);
    return res.status(500).json({ triggered: false, error: 'deploy hook request failed' });
  }
}
