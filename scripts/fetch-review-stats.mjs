// Pre-build: refresh the Google rating and review count that get baked into
// the prerendered HTML, the LocalBusiness aggregateRating and llms.txt.
//
// The site chrome already updates itself in the browser from /api/reviews,
// but crawlers and answer engines read the static HTML, so the number in the
// build has to be current too. This asks the Google Places API once per build
// and writes the answer into src/constants/reviewStats.json (which
// COMPANY_INFO.rating reads) and the "Rating:" line of public/llms.txt.
//
// It never fails the build. No key, no network, a non-OK Google status or a
// nonsense answer (no rating, zero reviews) all leave the committed values in
// place, so the worst case is the number from the last successful fetch — the
// same as the site shipped with before this existed.
//
// Env (Vercel project settings): GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID,
// either spelling with or without the VITE_ prefix — the same pair that
// api/reviews.js reads at runtime.
import { readFileSync, writeFileSync } from 'node:fs';

const STATS = 'src/constants/reviewStats.json';
const LLMS = 'public/llms.txt';

const API_KEY = process.env.GOOGLE_PLACES_API_KEY || process.env.VITE_GOOGLE_PLACES_API_KEY || '';
const PLACE_ID = process.env.GOOGLE_PLACE_ID || process.env.VITE_GOOGLE_PLACE_ID || '';

const current = JSON.parse(readFileSync(STATS, 'utf8'));

// Says whether the variable is absent, present-but-empty, or set — the length
// is enough to tell a placeholder from a real key (Google's are ~39 chars)
// without ever printing the value.
const keyState = !('GOOGLE_PLACES_API_KEY' in process.env || 'VITE_GOOGLE_PLACES_API_KEY' in process.env)
  ? 'missing'
  : API_KEY
    ? `set, ${API_KEY.length} chars`
    : 'empty';

function keep(why) {
  console.log(
    `\x1b[33m  Review stats: kept committed ${current.rating} / ${current.reviewCount} reviews (${why}).\x1b[0m`
  );
}

async function getJson(url) {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), 8000);
  try {
    const res = await fetch(url, { signal: ctl.signal });
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

// Without GOOGLE_PLACE_ID (the GitHub Action only carries the key), look the
// listing up by name and city — no street address needed for a business this
// findable, and none belongs in a build log.
async function resolvePlaceId() {
  if (PLACE_ID) return PLACE_ID;
  const url =
    'https://maps.googleapis.com/maps/api/place/findplacefromtext/json' +
    `?input=${encodeURIComponent('Art-is-Tree LLC, Virginia Beach, VA')}&inputtype=textquery&fields=place_id&key=${API_KEY}`;
  const data = await getJson(url);
  return data?.candidates?.[0]?.place_id || null;
}

async function fetchStats() {
  if (!API_KEY) return keep(`GOOGLE_PLACES_API_KEY ${keyState}`);

  let data;
  try {
    const placeId = await resolvePlaceId();
    if (!placeId) return keep('GOOGLE_PLACE_ID not set and the name lookup found nothing');
    data = await getJson(
      'https://maps.googleapis.com/maps/api/place/details/json' +
        `?place_id=${encodeURIComponent(placeId)}&fields=rating,user_ratings_total&key=${API_KEY}`
    );
  } catch (err) {
    return keep(`Google unreachable: ${err?.name === 'AbortError' ? 'timeout' : err?.message || err}`);
  }

  if (data?.status !== 'OK') {
    return keep(`Google status ${data?.status || 'UNKNOWN'}${data?.error_message ? ` — ${data.error_message}` : ''}`);
  }

  const rating = Number(data?.result?.rating);
  const total = Number(data?.result?.user_ratings_total);
  if (!(rating >= 1 && rating <= 5) || !(total > 0)) {
    return keep(`Google answered without usable numbers (rating ${rating}, total ${total})`);
  }

  const next = {
    rating: rating.toFixed(1),
    reviewCount: String(total),
    source: 'Google Places API',
    fetchedAt: new Date().toISOString().slice(0, 10),
  };

  if (next.rating === current.rating && next.reviewCount === current.reviewCount) {
    console.log(`\x1b[32m✓ Review stats: Google confirms ${next.rating} / ${next.reviewCount} reviews (unchanged).\x1b[0m`);
    return;
  }

  writeFileSync(STATS, JSON.stringify(next, null, 2) + '\n');

  // llms.txt is a static file in public/, so it is patched in place before
  // Vite copies it into dist/.
  const llms = readFileSync(LLMS, 'utf8');
  const patched = llms.replace(
    /^- Rating: .*$/m,
    `- Rating: ${next.rating} stars across ${next.reviewCount} Google reviews`
  );
  if (patched !== llms) writeFileSync(LLMS, patched);

  console.log(
    `\x1b[32m✓ Review stats: ${current.rating} / ${current.reviewCount} → ${next.rating} / ${next.reviewCount} reviews from Google.\x1b[0m`
  );
}

fetchStats().catch((err) => keep(`unexpected error: ${err?.message || err}`));
