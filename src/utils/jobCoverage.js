// Reads the Bouncie-derived job log and answers "how much work have we actually
// done in this neighborhood".
//
// The point of this file is local-SEO proof. "Neighborhoods we work in every
// week" is a claim; "41 jobs in Kempsville in the last 12 months" is the same
// claim with a number behind it, and the number comes from the trucks rather
// than from marketing copy.
//
// EVERY FUNCTION HERE RETURNS NOTHING WHEN THERE IS NO DATA. jobLog.json ships
// empty and stays empty until someone runs scripts/fetch-bouncie-jobs.mjs. A
// page with no data renders exactly as it did before — it never invents or
// rounds up a count, because a fabricated proof point is worse than no proof
// point, and this is a claim about real work on real properties.
import jobLog from '@/constants/jobLog.json';

/** True once a real log has been generated. */
export const hasJobData = Boolean(jobLog?.generated && jobLog.stopCount > 0);

/** Jobs recorded in one neighborhood, or null when unknown. */
export function jobsIn(neighborhood) {
  if (!hasJobData) return null;
  const n = jobLog.byNeighborhood?.[neighborhood];
  return typeof n === 'number' && n > 0 ? n : null;
}

/** Jobs across every neighborhood belonging to a city, or null. */
export function jobsInCity(cityNeighborhoods = []) {
  if (!hasJobData) return null;
  const total = cityNeighborhoods.reduce((sum, n) => sum + (jobsIn(n) || 0), 0);
  return total > 0 ? total : null;
}

/** Window the log covers, in whole months, or null. */
export function coverageMonths() {
  if (!hasJobData || !jobLog.windowDays) return null;
  return Math.max(1, Math.round(jobLog.windowDays / 30));
}

/**
 * Neighborhoods with recorded jobs, busiest first.
 * Only ever returns names the caller already lists, so the tracker can add
 * evidence to a page but never silently introduce a place the site does not
 * already claim to serve.
 */
export function rankedNeighborhoods(cityNeighborhoods = []) {
  if (!hasJobData) return [];
  return cityNeighborhoods
    .map((n) => ({ name: n, jobs: jobsIn(n) }))
    .filter((x) => x.jobs)
    .sort((a, b) => b.jobs - a.jobs);
}
