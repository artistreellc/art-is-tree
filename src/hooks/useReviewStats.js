import { useState, useEffect } from 'react';
import { COMPANY_INFO } from '@/constants/seoMetadata';

const FALLBACK_COUNT = Number(COMPANY_INFO.rating.reviewCount) || 136;
const FALLBACK_RATING = Number(COMPANY_INFO.rating.value) || 5.0;

// Module-level singleton so that many components using this hook on one page
// (nav, footer, hero, review sections…) share a SINGLE /api/reviews request
// instead of each firing their own.
let cachedStats = null;
let inflight = null;

async function loadStats() {
  if (cachedStats) return cachedStats;
  if (!inflight) {
    inflight = (async () => {
      const res = await fetch('/api/reviews');
      const contentType = res.headers.get('content-type') || '';
      if (!res.ok || !contentType.includes('application/json')) return null;
      const data = await res.json();
      const next = {};
      if (typeof data.total === 'number' && data.total > 0) next.count = data.total;
      if (typeof data.rating === 'number' && data.rating > 0) next.rating = data.rating;
      cachedStats = next;
      return next;
    })()
      .catch(() => null)
      .finally(() => {
        inflight = null;
      });
  }
  return inflight;
}

/**
 * Live Google review count + average rating, pulled from /api/reviews (which
 * proxies the Google Places API and is edge-cached ~6h). Auto-updates as new
 * reviews land on the Google Business Profile — no code change needed.
 *
 * Falls back to the prerendered COMPANY_INFO values so the static/SSG HTML is
 * always accurate and there is no flash/layout shift if the endpoint is
 * unconfigured (no GOOGLE_PLACES_API_KEY) or unreachable. During SSG prerender
 * the effect never runs, so the baked HTML shows the fallback.
 */
export const useReviewStats = () => {
  const [count, setCount] = useState(FALLBACK_COUNT);
  const [rating, setRating] = useState(FALLBACK_RATING);

  useEffect(() => {
    let active = true;
    loadStats().then((stats) => {
      if (!active || !stats) return;
      if (typeof stats.count === 'number') setCount(stats.count);
      if (typeof stats.rating === 'number') setRating(stats.rating);
    });
    return () => {
      active = false;
    };
  }, []);

  return { count, rating };
};
