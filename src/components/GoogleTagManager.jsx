import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useCookieConsent } from '@/hooks/useCookieConsent';

// GA4 via gtag.js, loaded DIRECTLY — no Google Tag Manager.
//
// Why: the site previously only ever loaded GTM (GTM-K9JBRQBJ), while
// `window.gtag` was just the classic shim (`dataLayer.push(arguments)`). When
// that container didn't load, every event — generate_lead, phone_call_click —
// pushed into a dataLayer array that nothing consumed, so GA4 recorded nothing.
// Loading gtag.js here makes `window.gtag` the real Google tag, so events are
// transmitted to GA4 on their own with no container config required.
//
// Mark `generate_lead` and `phone_call_click` as key events in GA4 and import
// them into Google Ads — we deliberately do NOT fire a separate Ads conversion
// tag from the site, which is what would cause double counting.
const GA4_ID = 'G-TLDWNQZZ81';

// Map our cookie-consent preferences to Google Consent Mode v2 signals.
const consentState = (prefs) => ({
  ad_storage: prefs?.marketing ? 'granted' : 'denied',
  ad_user_data: prefs?.marketing ? 'granted' : 'denied',
  ad_personalization: prefs?.marketing ? 'granted' : 'denied',
  analytics_storage: prefs?.analytics ? 'granted' : 'denied',
});

const GoogleTagManager = () => {
  const loaded = useRef(false);
  const lastPath = useRef(null);
  const { preferences, hasConsented } = useCookieConsent();
  const location = useLocation();

  // One-time setup: dataLayer, Consent Mode v2 defaults, global event helpers,
  // the site-wide tel: listener, and the (deferred) gtag.js load. Runs for
  // EVERY visitor — consent is handled by Consent Mode rather than by blocking
  // the tag entirely, so conversions are still measured/modeled instead of
  // being lost outright.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.dataLayer = window.dataLayer || [];
    // Classic gtag shim. This is the standard snippet: gtag.js (loaded below)
    // is what actually drains this queue and transmits to GA4.
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = window.gtag || gtag;

    // Consent Mode v2 DEFAULT — opt-out model (US / Virginia): granted by
    // default so conversions are measured for every visitor, EXCEPT when the
    // browser sends Do Not Track, which we honor as an explicit opt-out. A
    // visitor can still opt out via the banner, which fires a consent update.
    // MUST be pushed before `config` so it applies to the very first hit.
    const dnt = navigator.doNotTrack === '1' || window.doNotTrack === '1' || navigator.doNotTrack === 'yes';
    window.gtag('consent', 'default', {
      ...consentState({ analytics: !dnt, marketing: !dnt }),
      wait_for_update: 500,
    });
    window.gtag('set', 'ads_data_redaction', true);
    window.gtag('set', 'url_passthrough', true);

    // GA4 init. `config` sends the first page_view; SPA route changes are sent
    // manually below, so we don't double-count the initial one.
    window.gtag('js', new Date());
    window.gtag('config', GA4_ID);
    lastPath.current = window.location.pathname + window.location.search;

    // --- Shared conversion helpers -----------------------------------------
    // Every lead/call event on the site goes through one of these, so there is
    // a single place that owns event names, parameters, and de-duplication.

    // Contact-form lead. Called ONLY after a confirmed successful submission.
    // The 1s debounce mirrors gtag_report_phone_click and guarantees a double
    // submit (or a duplicate handler) can never double-count one lead.
    let lastLead = 0;
    window.gtag_report_lead = function (details) {
      const now = Date.now();
      if (now - lastLead < 1000) return false;
      lastLead = now;
      const payload = {
        service_type: (details && details.service_type) || 'Not specified',
        form_location:
          (details && details.form_location) ||
          (typeof window !== 'undefined' ? window.location.pathname : ''),
      };
      window.dataLayer.push({ event: 'generate_lead', ...payload });
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', payload);
      }
      return true;
    };

    // Phone clicks: GA4's recommended key-event name for a tap-to-call.
    let lastPhoneClick = 0;
    window.gtag_report_phone_click = function () {
      const now = Date.now();
      if (now - lastPhoneClick < 1000) return; // debounce double handlers
      lastPhoneClick = now;
      window.dataLayer.push({ event: 'phone_call_click' });
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'phone_call_click', { transport_type: 'beacon' });
      }
    };

    // Global capture for EVERY tel: link on the site — present and future — so
    // no call button can leak an untracked conversion. Individual inline
    // onClick handlers still exist on some links; the debounce above means
    // this listener and those handlers can never double-count.
    const handleTelClick = (e) => {
      const link = e.target && e.target.closest && e.target.closest('a[href^="tel:"]');
      if (link) window.gtag_report_phone_click();
    };
    document.addEventListener('click', handleTelClick, true);

    // Load gtag.js once, deferred so it never blocks the critical render. The
    // queued consent/config/event calls above are processed the moment it runs.
    const initTag = () => {
      if (loaded.current || document.getElementById('ga4-script')) return;
      loaded.current = true;
      const s = document.createElement('script');
      s.id = 'ga4-script';
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
      document.head.appendChild(s);
    };
    const schedule = () => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => setTimeout(initTag, 1200), { timeout: 5000 });
      } else {
        setTimeout(initTag, 1200);
      }
    };
    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule, { once: true });

    return () => document.removeEventListener('click', handleTelClick, true);
  }, []);

  // SPA page_view — gtag.js only auto-sends on initial load, so client-side
  // route changes need an explicit hit. Skips the first render so the
  // `config` page_view above isn't counted twice.
  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    const path = location.pathname + location.search;
    if (lastPath.current === null || lastPath.current === path) {
      lastPath.current = path;
      return;
    }
    lastPath.current = path;
    window.gtag('event', 'page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);

  // Consent Mode UPDATE — whenever the visitor makes an explicit choice, push
  // the granted/denied state so GA4 switches to full (cookie-based)
  // measurement for those who accept.
  useEffect(() => {
    if (typeof window === 'undefined' || !window.gtag || !hasConsented) return;
    window.gtag('consent', 'update', consentState(preferences));
  }, [hasConsented, preferences?.analytics, preferences?.marketing]);

  return null;
};

export default GoogleTagManager;
