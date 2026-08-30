// Neighborhood anchor points, used to resolve a GPS coordinate from the fleet
// trackers to a named neighborhood.
//
// PROVENANCE MATTERS HERE. Every anchor below was derived from a photo already
// in this repo that carries BOTH an EXIF GPS tag and a neighborhood named in its
// alt text — not from coordinates typed from memory. The `source` field records
// which photo each one came from so any anchor can be re-checked.
//
// These are approximations, not boundaries. Resolution is nearest-anchor within
// MAX_KM, which is good enough to say "this job was in Kempsville" and is not
// good enough to draw a map. Once real tracker data lands, the anchors should be
// re-derived from clusters of actual job stops, which will be far better than
// hand-placed photo tags.
//
// `verified: false` means nobody has confirmed it against the real world yet.
export const MAX_KM = 4.5;

export const NEIGHBORHOOD_ANCHORS = [
  // --- Virginia Beach -------------------------------------------------------
  {
    name: 'Kempsville', city: 'Virginia Beach',
    lat: 36.79350, lon: -76.16390, verified: false,
    source: 'virginia-beach-crane-removal-backyard.webp (+4 others share this point)',
  },
  {
    name: 'Kempsville', city: 'Virginia Beach',
    lat: 36.82666, lon: -76.16280, verified: false,
    source: 'virginia-beach-church-ash-tree.webp',
    note: 'Second Kempsville point, ~3.7km north of the first. Both are plausible for a large area; kept separate rather than averaged.',
  },
  {
    name: 'Kings Grant', city: 'Virginia Beach',
    lat: 36.86000, lon: -76.08500, verified: false,
    source: 'virginia-beach-backyard-pine-removal.webp',
  },
  {
    name: 'Red Mill', city: 'Virginia Beach',
    lat: 36.73600, lon: -76.04300, verified: false,
    source: 'virginia-beach-driveway-protection-removal.webp',
  },
  {
    name: 'Courthouse', city: 'Virginia Beach',
    lat: 36.77670, lon: -76.04350, verified: false,
    source: 'virginia-beach-branded-tree-service-truck.webp',
  },
  {
    name: 'Great Neck', city: 'Virginia Beach',
    lat: 36.8833, lon: -76.0667, verified: true,
    source: 'src/data/serviceAreaNeighborhoods.js',
    note:
      'CORRECTED. The photo-derived tag put this at 36.79664, -76.21012 — about ' +
      '13km west, out toward the Norfolk line. The owner confirmed that photo was ' +
      'simply reused and its tag says nothing about where the work happened. ' +
      'Coordinates now come from the repo\'s own neighborhood dataset. This anchor ' +
      'matters twice over: Great Neck is a protected term under CLAUDE.md section 3, ' +
      'and it sits in the oceanfront zone the Aug 2026 heatmap shows as weakest, so ' +
      'a wrong anchor would mislabel jobs in exactly the area worth winning.',
  },
];

/** Great-circle distance in km. */
export function haversineKm(aLat, aLon, bLat, bLon) {
  const R = 6371;
  const dLat = ((bLat - aLat) * Math.PI) / 180;
  const dLon = ((bLon - aLon) * Math.PI) / 180;
  const p =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((aLat * Math.PI) / 180) * Math.cos((bLat * Math.PI) / 180) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(p));
}

/**
 * Nearest anchor to a point, or null when nothing is within MAX_KM.
 * Returning null is deliberate: an unresolved stop is honest, a wrongly
 * labelled one quietly corrupts every count built on top of it.
 */
export function resolveNeighborhood(lat, lon) {
  let best = null;
  for (const a of NEIGHBORHOOD_ANCHORS) {
    const km = haversineKm(lat, lon, a.lat, a.lon);
    if (km <= MAX_KM && (!best || km < best.km)) best = { ...a, km: Number(km.toFixed(2)) };
  }
  return best;
}
