// Vercel serverless function: returns current Google reviews so the site
// auto-updates as new reviews come in. Cached at the edge for 6 hours.
//
// Required env var (Vercel Project Settings -> Environment Variables):
//   GOOGLE_PLACES_API_KEY   A Google Maps/Places API key with the Places API enabled + billing on.
// Optional env var:
//   GOOGLE_PLACE_ID         The business's Place ID. If omitted, we look it up by name + address.
//
// Note: the Google Places API returns up to ~5 reviews (Google's limit), reflecting
// the current state of the listing, which is what makes this auto-update.

// Accept both the plain and VITE_-prefixed names — the keys were originally
// added to Vercel with the VITE_ prefix (Jul 8), which serverless functions
// still receive via process.env; this makes either spelling work.
const API_KEY = process.env.GOOGLE_PLACES_API_KEY || process.env.VITE_GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID || process.env.VITE_GOOGLE_PLACE_ID;
const LOOKUP_QUERY = 'Art-is-Tree LLC, 2597 Nestlebrook Trl, Virginia Beach, VA 23456';

async function resolvePlaceId() {
  if (PLACE_ID) return { placeId: PLACE_ID, status: 'OK' };
  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
    LOOKUP_QUERY
  )}&inputtype=textquery&fields=place_id&key=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return { placeId: data?.candidates?.[0]?.place_id || null, status: data?.status || 'UNKNOWN' };
}

export default async function handler(req, res) {
  // Only a SUCCESSFUL live result gets the long 6h edge cache. Error/unconfigured
  // states get a short cache so a transient Google outage or a brief env-var
  // misconfiguration can't freeze the site on the fallback state for hours.
  const cacheOk = () =>
    res.setHeader('Cache-Control', 'public, s-maxage=21600, stale-while-revalidate=86400');
  const cacheShort = () => res.setHeader('Cache-Control', 'public, s-maxage=60');

  if (!API_KEY) {
    // Not configured yet — respond gracefully so the site shows the "Leave a Review" state.
    cacheShort();
    return res.status(200).json({ reviews: [], rating: null, total: null, configured: false });
  }

  try {
    const { placeId, status: findStatus } = await resolvePlaceId();
    if (!placeId) {
      // Surface the Google status (e.g. REQUEST_DENIED) so the failure is
      // diagnosable instead of silently falling back. Don't long-cache it.
      console.error('[api/reviews] place lookup failed:', findStatus);
      cacheShort();
      return res.status(200).json({ reviews: [], rating: null, total: null, configured: true, googleStatus: findStatus });
    }

    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&reviews_no_translations=true&fields=reviews,rating,user_ratings_total&key=${API_KEY}`;
    const detailsRes = await fetch(detailsUrl);
    const details = await detailsRes.json();

    // A non-OK status (REQUEST_DENIED = key lacks the legacy Places API or
    // billing; OVER_QUERY_LIMIT; INVALID_REQUEST; etc.) must NOT be cached as
    // a success for 6h, and must be reported so we can see what's wrong.
    if (details.status && details.status !== 'OK') {
      console.error('[api/reviews] Places details status:', details.status, details.error_message || '');
      cacheShort();
      return res.status(200).json({ reviews: [], rating: null, total: null, configured: true, googleStatus: details.status });
    }

    const result = details?.result || {};

    const reviews = (result.reviews || []).map((r) => ({
      reviewer_name: r.author_name,
      rating: r.rating,
      review_text: r.text,
      review_image_url: r.profile_photo_url || '',
      created_at: r.time ? new Date(r.time * 1000).toISOString() : null,
      author_url: r.author_url || '',
    }));

    const total = typeof result.user_ratings_total === 'number' ? result.user_ratings_total : null;
    // Only the real, live result earns the 6h edge cache.
    if (total != null) cacheOk();
    else cacheShort();
    return res.status(200).json({
      reviews,
      rating: result.rating ?? null,
      total,
      configured: true,
      googleStatus: 'OK',
    });
  } catch (err) {
    console.error('[api/reviews] error', err);
    cacheShort();
    return res.status(200).json({ reviews: [], rating: null, total: null, error: true });
  }
}
