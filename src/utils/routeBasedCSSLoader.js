import React, { useEffect } from 'react';

/**
 * Route-based CSS/Logic loader wrapper.
 * Logs route access and handles any route-specific initialization 
 * without blocking the main React render cycle.
 */
export const withRouteCSS = (WrappedComponent, routeName) => {
  const RouteWrapper = (props) => {
    useEffect(() => {
      // In a standard Vite+Tailwind app, CSS is bundled globally. 
      // This utility can be extended to lazy-load specific heavy CSS chunks if needed,
      // but primarily serves to mark route entry for performance monitoring.
      if (window.performance && window.performance.mark) {
        window.performance.mark(`route-enter-${routeName}`);
      }
      if (import.meta.env.DEV) console.log(`🛣️ [Route Loaded] ${routeName || 'Unknown Route'}`);
      
      return () => {
        if (window.performance && window.performance.mark) {
          window.performance.mark(`route-exit-${routeName}`);
        }
      };
    }, []);

    // FIX: Using React.createElement instead of JSX to avoid Vite "JSX in .js file" build errors
    return React.createElement(WrappedComponent, props);
  };
  
  RouteWrapper.displayName = `withRouteCSS(${routeName})`;
  return RouteWrapper;
};