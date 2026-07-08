import React, { useEffect, useRef } from 'react';
import { useCookieConsent } from '@/hooks/useCookieConsent';

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-TLDWNQZZ81";

const GoogleAnalytics = () => {
  const initAttempted = useRef(false);
  const { preferences } = useCookieConsent();

  useEffect(() => {
    // Only load GA if user has consented to analytics and we haven't tried yet
    if (initAttempted.current || !preferences?.analytics) return;
    initAttempted.current = true;

    const initGA = () => {
      try {
        if (import.meta.env.DEV) console.log('[GoogleAnalytics] Starting async initialization...');
        
        // Ensure no duplicate script injection
        if (document.getElementById('ga-script')) {
          return;
        }

        const script = document.createElement('script');
        script.id = 'ga-script';
        script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
        script.async = true;
        
        script.onload = () => {
          window.dataLayer = window.dataLayer || [];
          function gtag(){ window.dataLayer.push(arguments); }
          window.gtag = gtag;
          
          gtag('js', new Date());
          gtag('config', MEASUREMENT_ID, {
            page_path: window.location.pathname,
            send_page_view: true
          });
          
          if (import.meta.env.DEV) console.log('[GoogleAnalytics] ✅ GA4 initialized successfully');
        };
        
        script.onerror = () => {
          console.debug('[GoogleAnalytics] Failed to load GA script. Possibly blocked by client.');
        };

        document.head.appendChild(script);
      } catch (error) {
        console.error('[GoogleAnalytics] ❌ Failed to initialize:', error);
      }
    };

    // Defer initialization using requestIdleCallback to ensure it doesn't block critical render
    const scheduleGA = () => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => setTimeout(initGA, 2000), { timeout: 5000 });
      } else {
        setTimeout(initGA, 2000);
      }
    };

    if (document.readyState === 'complete') {
      scheduleGA();
    } else {
      window.addEventListener('load', scheduleGA, { once: true });
    }
  }, [preferences?.analytics]);

  return null; // Render nothing, purely logical
};

export default GoogleAnalytics;