
import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook to defer Supabase queries until the browser is idle.
 * DISABLED: query execution is mocked to prevent network errors.
 * 
 * @param {Function} queryFn - Async function that performs the Supabase query and returns data.
 * @param {Array} dependencies - Dependencies array to trigger re-fetching.
 * @param {any} initialData - Initial data state before fetch completes.
 * @returns {Object} { data, loading, error, refetch, setData }
 */
export const useDeferredSupabaseQuery = (queryFn, dependencies = [], initialData = null) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false); // Default to false to avoid infinite loading screens
  const [error, setError] = useState(null);

  const executeQuery = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // DISABLED: The actual queryFn is intentionally skipped to prevent network calls.
      console.log('[useDeferredSupabaseQuery] Execution disabled to prevent fetch errors.');
      setData(initialData); 
    } catch (err) {
      setError(err.message || 'An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  }, dependencies);

  useEffect(() => {
    // We intentionally bypass execution on mount to completely eliminate network loops.
    // If you explicitly want the mock to run, you can call triggerFetch, but skipping is safer.
  }, [executeQuery]);

  return { data, loading, error, refetch: executeQuery, setData };
};

export default useDeferredSupabaseQuery;
