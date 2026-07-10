import { useState, useEffect, useCallback, useMemo } from 'react';

/**
 * Fetches current Google reviews from the /api/reviews serverless function,
 * which pulls live from the Google Places API. Reviews auto-update as the
 * Google listing changes (the endpoint is edge-cached for ~6 hours).
 *
 * Until GOOGLE_PLACES_API_KEY is configured in the deployment, the endpoint
 * returns an empty list and the UI shows its "Leave a Review" state.
 */
export const useGoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReviews = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/reviews');
      if (!res.ok) throw new Error('Failed to load reviews');
      // Guard against an HTML fallback (e.g. missing endpoint) being parsed as JSON.
      const contentType = res.headers.get('content-type') || '';
      if (!contentType.includes('application/json')) throw new Error('Reviews unavailable');
      const data = await res.json();
      setReviews(Array.isArray(data.reviews) ? data.reviews : []);
    } catch (e) {
      setError(e.message || 'Failed to load reviews');
      setReviews([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const getProcessedReviews = useCallback(
    (filterRating = 'all', sortType = 'newest') => {
      let list = [...reviews];
      if (filterRating !== 'all') {
        list = list.filter((r) => Math.round(r.rating) === Number(filterRating));
      }
      list.sort((a, b) => {
        if (sortType === 'highest') return b.rating - a.rating;
        if (sortType === 'lowest') return a.rating - b.rating;
        return new Date(b.created_at || 0) - new Date(a.created_at || 0);
      });
      return list;
    },
    [reviews]
  );

  const stats = useMemo(() => {
    const total = reviews.length;
    const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    let sum = 0;
    for (const r of reviews) {
      const k = Math.round(r.rating);
      if (counts[k] != null) counts[k] += 1;
      sum += r.rating || 0;
    }
    return { average: total ? sum / total : 0, total, counts };
  }, [reviews]);

  return { reviews, loading, error, refresh: fetchReviews, getProcessedReviews, stats };
};
