import { useState, useCallback, useRef } from 'react';

/**
 * Custom hook for caching API responses with TTL
 * Implements request deduplication and cache invalidation
 * 
 * @param {number} ttl - Time to live in milliseconds (default: 5 minutes)
 * @returns {Object} Cache utilities
 */
export const useApiCache = (ttl = 5 * 60 * 1000) => {
  const cacheRef = useRef(new Map());
  const pendingRequestsRef = useRef(new Map());

  const getCacheKey = useCallback((key) => {
    return typeof key === 'string' ? key : JSON.stringify(key);
  }, []);

  const get = useCallback((key) => {
    const cacheKey = getCacheKey(key);
    const cached = cacheRef.current.get(cacheKey);
    
    if (!cached) return null;
    
    const isExpired = Date.now() - cached.timestamp > ttl;
    if (isExpired) {
      cacheRef.current.delete(cacheKey);
      return null;
    }
    
    return cached.data;
  }, [getCacheKey, ttl]);

  const set = useCallback((key, data) => {
    const cacheKey = getCacheKey(key);
    cacheRef.current.set(cacheKey, {
      data,
      timestamp: Date.now()
    });
  }, [getCacheKey]);

  const fetchWithCache = useCallback(async (key, fetchFn) => {
    const cacheKey = getCacheKey(key);
    
    // Check cache first
    const cached = get(key);
    if (cached) {
      return cached;
    }
    
    // Check for pending request
    const pending = pendingRequestsRef.current.get(cacheKey);
    if (pending) {
      return pending;
    }
    
    // Create new request
    const requestPromise = fetchFn().then(data => {
      set(key, data);
      pendingRequestsRef.current.delete(cacheKey);
      return data;
    }).catch(error => {
      pendingRequestsRef.current.delete(cacheKey);
      throw error;
    });
    
    pendingRequestsRef.current.set(cacheKey, requestPromise);
    return requestPromise;
  }, [get, set, getCacheKey]);

  const invalidate = useCallback((key) => {
    if (key) {
      const cacheKey = getCacheKey(key);
      cacheRef.current.delete(cacheKey);
    } else {
      cacheRef.current.clear();
    }
  }, [getCacheKey]);

  return {
    get,
    set,
    fetchWithCache,
    invalidate
  };
};

export default useApiCache;