import React, { Suspense } from 'react';
import { useInView } from '@/hooks/useInView';

/**
 * Wrapper component for lazy-loading sections based on viewport visibility
 * Replaced Skeleton with an invisible container to prevent CLS (Cumulative Layout Shift)
 */
const LazySection = ({ 
  children, 
  fallback = <SectionPlaceholder />,
  threshold = 0.1,
  rootMargin = '100px'
}) => {
  const [ref, isInView] = useInView({ threshold, rootMargin });

  return (
    <div ref={ref} className="contain-content">
      {isInView ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};

// Invisible placeholder that reserves space without causing visual shift or painting overhead
const SectionPlaceholder = () => (
  <div className="w-full min-h-[400px] opacity-0 pointer-events-none contain-content" aria-hidden="true" />
);

export default LazySection;