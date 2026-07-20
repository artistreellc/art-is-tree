// Canonical list of published case studies — single source of truth for the
// homepage "This Week's Case Study" banner (and any future rotation).
//
// ADDING A NEW CASE STUDY: append it here with its real datePublished.
// The banner automatically features any study published in the last 14 days,
// then falls back to a deterministic weekly rotation, so new posts surface
// on the homepage with no other change.
export const CASE_STUDIES = [
  { path: '/case-studies/crane-safety', title: 'Crane-Assisted Removal of Storm-Damaged Pines', datePublished: '2026-07-07' },
  { path: '/case-studies/chesapeake-bay-preservation-act', title: 'The Law Under the Grass: Chesapeake Bay Preservation Act', datePublished: '2026-07-07' },
  { path: '/case-studies/osha-compliance', title: 'Why Safety Isn’t Optional: OSHA & ANSI Z133', datePublished: '2026-07-07' },
  { path: '/case-studies/property-value', title: 'The Listing That Sold in a Week: Trees & Property Value', datePublished: '2026-07-07' },
  { path: '/case-studies/spikeless-pruning', title: 'Why We Never Spike a Tree We’re Keeping', datePublished: '2026-07-07' },
  { path: '/case-studies/emerald-ash-borer', title: 'The 200-Year-Old Church Ash: Emerald Ash Borer', datePublished: '2026-07-10' },
  { path: '/case-studies/virginia-tree-law', title: 'The Tree on the Property Line: Virginia Tree Law', datePublished: '2026-07-10' },
  { path: '/case-studies/storm-damage-mitigation', title: 'After the Storm: Hurricane & Tornado Damage', datePublished: '2026-07-15' },
  { path: '/case-studies/affordable-tree-work', title: 'The Hampton Roads Guide to Affordable Tree Work', datePublished: '2026-07-20' },
];

const DAY_MS = 24 * 60 * 60 * 1000;
const NEW_POST_WINDOW_DAYS = 14;

/**
 * Pick the featured case study for a given date:
 * 1. A study published within the last NEW_POST_WINDOW_DAYS wins (newest first),
 *    so a fresh post takes the homepage slot automatically.
 * 2. Otherwise rotate deterministically by calendar week, so the pick changes
 *    every Monday and every visitor sees the same one that week.
 */
export function pickFeaturedCaseStudy(now = new Date()) {
  const sorted = [...CASE_STUDIES].sort(
    (a, b) => new Date(b.datePublished) - new Date(a.datePublished)
  );
  const newest = sorted[0];
  if (now - new Date(newest.datePublished) < NEW_POST_WINDOW_DAYS * DAY_MS) {
    return newest;
  }
  // Weeks since a fixed Monday epoch (2024-01-01 was a Monday) — rotation
  // advances at the start of each week, independent of build time.
  const week = Math.floor((now - new Date('2024-01-01T00:00:00Z')) / (7 * DAY_MS));
  return CASE_STUDIES[((week % CASE_STUDIES.length) + CASE_STUDIES.length) % CASE_STUDIES.length];
}
