
import { useState, useCallback, useMemo } from 'react';

/**
 * DISABLED: All network requests and caching mechanisms are completely removed.
 * Returns synchronous mock data to prevent any fetch error loops.
 */
export const useGoogleReviews = () => {
  // Use static empty array to avoid network requests
  const [reviews] = useState([]);
  const loading = false;
  const error = null;

  const fetchReviews = useCallback(() => {
    console.log('[useGoogleReviews] fetchReviews called, but network requests are disabled.');
    // No-op
  }, []);

  const getProcessedReviews = useCallback((filterRating = 'all', sortType = 'newest') => {
    return [];
  }, []);

  const stats = useMemo(() => {
    return { average: 0, total: 0, counts: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 } };
  }, []);

  return { 
    reviews, 
    loading, 
    error, 
    refresh: fetchReviews, 
    getProcessedReviews, 
    stats 
  };
};
