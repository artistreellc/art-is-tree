import { useRef, useCallback } from 'react';

/**
 * Custom hook for throttling function calls
 * Ensures the callback is called at most once per specified delay period
 * 
 * @param {Function} callback - Function to throttle
 * @param {number} delay - Minimum time between calls in milliseconds (default: 200ms)
 * @returns {Function} Throttled function
 * 
 * @example
 * const handleScroll = useThrottle(() => {
 *   console.log('Scroll event processed');
 * }, 200);
 * 
 * useEffect(() => {
 *   window.addEventListener('scroll', handleScroll, { passive: true });
 *   return () => window.removeEventListener('scroll', handleScroll);
 * }, [handleScroll]);
 */
export const useThrottle = (callback, delay = 200) => {
  const lastRun = useRef(Date.now());
  const timeoutRef = useRef(null);

  const throttledFunction = useCallback((...args) => {
    const now = Date.now();
    const timeSinceLastRun = now - lastRun.current;

    if (timeSinceLastRun >= delay) {
      // Enough time has passed, execute immediately
      callback(...args);
      lastRun.current = now;
    } else {
      // Schedule execution for when delay period expires
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        callback(...args);
        lastRun.current = Date.now();
      }, delay - timeSinceLastRun);
    }
  }, [callback, delay]);

  return throttledFunction;
};

export default useThrottle;