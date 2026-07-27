import { useEffect, useRef } from 'react';
import { useCookieConsent } from '@/hooks/useCookieConsent';

// Container GTM-K9JBRQBJ carries both GA4 (G-TLDWNQZZ81) and the Google Ads
// "Request quote" form conversion, so all tags are managed in GTM now — the
// old direct gtag.js components were removed to avoid double-counting.
const GTM_ID = 'GTM-K9JBRQBJ';

// Map our cookie-consent preferences to Google Consent Mode v2 signals.
const consentState = (prefs) => ({
  ad_storage: prefs?.marketing ? 'granted' : 'denied',
  ad_user_data: prefs?.marketing ? 'granted' : 'denied',
  ad_personalization: prefs?.marketing ? 'granted' : 'denied',
  analytics_storage: prefs?.analytics ? 'granted' : 'denied',
});

const GoogleTagManager = () => {
  const loaded = useRef(false);
  const { preferences, hasConsented } = useCookieConsent();

  // One-time setup: dataLayer, Consent Mode v2 defaults, global helpers, the
  // site-wide tel: listener, and the (deferred) GTM load. Runs for EVERY
  // visitor — consent is handled by Consent Mode (default denied) rather than
  // by blocking GTM entirely, so conversions are still modeled for users who
  // never interact with the banner instead of being lost outright.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.dataLayer = window.dataLayer || [];
    // Classic gtag shim — Consent Mode requires the raw `arguments` object be
    // pushed to the dataLayer, not a plain object.
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = window.gtag || gtag;

    // Consent Mode v2 DEFAULT — denied until the visitor accepts. With denied
    // analytics/ads storage, GA4 and Ads send cookieless pings that Google uses
    // to model the conversions that consent would otherwise hide.
    gtag('consent', 'default', {
      ...consentState({ analytics: false, marketing: false }),
      wait_for_update: 500,
    });
    gtag('set', 'ads_data_redaction', true);
    gtag('set', 'url_passthrough', true);

    // Contact-form conversion (GTM's Form Submission / custom-event trigger).
    window.gtag_report_contact_form = function () {
      window.dataLayer.push({ event: 'contact_form_submit' });
    };
    // Legacy signature used by a couple of buttons; caller handles navigation.
    window.gtag_report_conversion = function () {
      window.dataLayer.push({ event: 'contact_form_submit' });
      return false;
    };

    // Phone clicks: push a dataLayer event named to match GA4's recommended
    // key event (`phone_call_click`) so the GTM trigger -> GA4 event -> Ads
    // call-conversion can be wired 1:1.
    let lastPhoneClick = 0;
    window.gtag_report_phone_click = function () {
      const now = Date.now();
      if (now - lastPhoneClick < 1000) return; // debounce double handlers
      lastPhoneClick = now;
      window.dataLayer.push({ event: 'phone_call_click' });
    };

    // Global capture for EVERY tel: link on the site — present and future —
    // so no call button can leak an untracked conversion. Individual inline
    // onClick handlers still exist on some links; the debounce above means
    // this listener and those handlers can never double-count. This is the
    // single source of truth for phone-call attribution.
    const handleTelClick = (e) => {
      const link = e.target && e.target.closest && e.target.closest('a[href^="tel:"]');
      if (link) window.gtag_report_phone_click();
    };
    document.addEventListener('click', handleTelClick, true);

    // Load GTM once, deferred so it never blocks the critical render.
    const initGTM = () => {
      if (loaded.current || document.getElementById('gtm-script')) return;
      loaded.current = true;
      window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
      const s = document.createElement('script');
      s.id = 'gtm-script';
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(s);
    };
    const schedule = () => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => setTimeout(initGTM, 1200), { timeout: 5000 });
      } else {
        setTimeout(initGTM, 1200);
      }
    };
    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule, { once: true });

    return () => document.removeEventListener('click', handleTelClick, true);
  }, []);

  // Consent Mode UPDATE — whenever the visitor makes an explicit choice, push
  // the granted/denied state so GA4 and Ads switch to full (cookie-based)
  // measurement for those who accept.
  useEffect(() => {
    if (typeof window === 'undefined' || !window.gtag || !hasConsented) return;
    window.gtag('consent', 'update', consentState(preferences));
  }, [hasConsented, preferences?.analytics, preferences?.marketing]);

  return null;
};

export default GoogleTagManager;
