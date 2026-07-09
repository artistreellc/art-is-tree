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

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;
const LOOKUP_QUERY = 'Art-is-Tree LLC, 2597 Nestlebrook Trl, Virginia Beach, VA 23456';

async function resolvePlaceId() {
  if (PLACE_ID) return PLACE_ID;
  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
    LOOKUP_QUERY
  )}&inputtype=textquery&fields=place_id&key=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data?.candidates?.[0]?.place_id || null;
}

export default async function handler(req, res) {
  // Always cache-friendly; reviews refresh at most every 6 hours.
  res.setHeader('Cache-Control', 'public, s-maxage=21600, stale-while-revalidate=86400');

  if (!API_KEY) {
    // Not configured yet — respond gracefully so the site shows the "Leave a Review" state.
    return res.status(200).json({ reviews: [], rating: null, total: null, configured: false });
  }

  try {
    const placeId = await resolvePlaceId();
    if (!placeId) {
      return res.status(200).json({ reviews: [], rating: null, total: null, configured: true });
    }

    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&reviews_no_translations=true&fields=reviews,rating,user_ratings_total&key=${API_KEY}`;
    const detailsRes = await fetch(detailsUrl);
    const details = await detailsRes.json();
    const result = details?.result || {};

    const reviews = (result.reviews || []).map((r) => ({
      reviewer_name: r.author_name,
      rating: r.rating,
      review_text: r.text,
      review_image_url: r.profile_photo_url || '',
      created_at: r.time ? new Date(r.time * 1000).toISOString() : null,
      author_url: r.author_url || '',
    }));

    return res.status(200).json({
      reviews,
      rating: result.rating ?? null,
      total: result.user_ratings_total ?? null,
      configured: true,
    });
  } catch (err) {
    console.error('[api/reviews] error', err);
    return res.status(200).json({ reviews: [], rating: null, total: null, error: true });
  }
}
