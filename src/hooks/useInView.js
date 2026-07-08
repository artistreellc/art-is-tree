import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook for detecting when an element enters the viewport
 * Uses Intersection Observer API for efficient viewport detection
 * Avoids main-thread layout thrashing by deferring check to GPU
 */
export const useInView = (options = {}, triggerOnce = true) => {
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (triggerOnce && hasTriggered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Debounce intersection logic if necessary, though native IO is already async
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            setHasTriggered(true);
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px', // Pre-load slightly before hitting viewport
        ...options
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options.threshold, options.rootMargin, triggerOnce, hasTriggered]);

  return [ref, isInView];
};

export default useInView;