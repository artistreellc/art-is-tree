import React, { useEffect, useRef } from 'react';
import { useCookieConsent } from '@/hooks/useCookieConsent';

const ADS_ID = 'AW-10806457837';
const FORM_CONVERSION_LABEL = 'AW-10806457837/i_SkCOqBhMQbEO3r9aAo';

/**
 * Google Ads conversion tracking. Consent-gated on marketing preferences,
 * deferred so it never blocks render. Shares gtag.js with GA4 when present.
 */
const GoogleAdsConversion = () => {
  const initAttempted = useRef(false);
  const { preferences } = useCookieConsent();

  // Safe no-op fallbacks so buttons/forms never crash before consent/init.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.gtag_report_conversion = window.gtag_report_conversion || function () { return false; };
    window.gtag_report_contact_form = window.gtag_report_contact_form || function () {};
    window.gtag_report_phone_click = window.gtag_report_phone_click || function () {};
  }, []);

  useEffect(() => {
    if (initAttempted.current || !preferences?.marketing) return;
    initAttempted.current = true;

    const initAds = () => {
      try {
        window.dataLayer = window.dataLayer || [];
        if (typeof window.gtag !== 'function') {
          window.gtag = function () { window.dataLayer.push(arguments); };
        }
        const applyConfig = () => {
          window.gtag('js', new Date());
          window.gtag('config', ADS_ID);
        };
        // Reuse GA's gtag.js if already loaded; otherwise load it once for Ads.
        if (document.getElementById('ga-script') || document.getElementById('gtag-ads-script')) {
          applyConfig();
        } else {
          const s = document.createElement('script');
          s.id = 'gtag-ads-script';
          s.async = true;
          s.src = `https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`;
          s.onload = applyConfig;
          document.head.appendChild(s);
        }

        window.gtag_report_conversion = function (url) {
          if (typeof window.gtag !== 'function') return false;
          const cb = function () { if (typeof url !== 'undefined') window.location = url; };
          window.gtag('event', 'conversion', { send_to: FORM_CONVERSION_LABEL, event_callback: cb });
          return false;
        };
        window.gtag_report_contact_form = function () {
          if (typeof window.gtag === 'function') {
            window.gtag('event', 'conversion', { send_to: FORM_CONVERSION_LABEL });
          }
        };
        // Phone clicks tracked as a GA4 event (valid). Add a dedicated Ads
        // phone-conversion label here if you create one in Google Ads.
        window.gtag_report_phone_click = function () {
          if (typeof window.gtag === 'function') {
            window.gtag('event', 'phone_call_click', { event_category: 'engagement', event_label: 'phone_number' });
          }
        };
      } catch (e) {
        console.error('[GoogleAdsConversion] init failed', e);
      }
    };

    const schedule = () => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => setTimeout(initAds, 2000), { timeout: 5000 });
      } else {
        setTimeout(initAds, 2000);
      }
    };
    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule, { once: true });
  }, [preferences?.marketing]);

  return null;
};

export default GoogleAdsConversion;
