import { useEffect, useRef } from 'react';
import { useCookieConsent } from '@/hooks/useCookieConsent';

// Container GTM-K9JBRQBJ carries both GA4 (G-TLDWNQZZ81) and the Google Ads
// "Request quote" form conversion, so all tags are managed in GTM now — the
// old direct gtag.js components were removed to avoid double-counting.
const GTM_ID = 'GTM-K9JBRQBJ';

const GoogleTagManager = () => {
  const loaded = useRef(false);
  const { preferences } = useCookieConsent();

  // Keep the site-wide global helpers working so existing call sites (contact
  // form, phone links) never crash — but route them through the dataLayer so
  // GTM owns what fires.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.dataLayer = window.dataLayer || [];

    // The contact-form conversion is fired by GTM's own Form Submission
    // trigger. We also push a custom event so a more reliable custom-event
    // trigger can be used instead if the native one ever misses the AJAX form.
    // (GTM does nothing with this event unless a trigger is added for it, so
    // there is no double-count.)
    window.gtag_report_contact_form = function () {
      window.dataLayer.push({ event: 'contact_form_submit' });
    };
    // Legacy signature used by a couple of buttons; navigation is handled by
    // the caller, we only record the event.
    window.gtag_report_conversion = function () {
      window.dataLayer.push({ event: 'contact_form_submit' });
      return false;
    };

    // Phone clicks aren't in the container yet — push a dataLayer event so a
    // call-conversion / GA4 event can be wired in GTM with no code change.
    let lastPhoneClick = 0;
    window.gtag_report_phone_click = function () {
      const now = Date.now();
      if (now - lastPhoneClick < 1000) return; // debounce double handlers
      lastPhoneClick = now;
      window.dataLayer.push({ event: 'phone_click' });
    };
  }, []);

  useEffect(() => {
    if (loaded.current) return;
    // GTM carries analytics (GA4) and marketing (Ads) tags; load once the user
    // accepts either category, preserving the prior consent gating.
    if (!(preferences?.analytics || preferences?.marketing)) return;
    loaded.current = true;

    const initGTM = () => {
      if (document.getElementById('gtm-script')) return;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
      const s = document.createElement('script');
      s.id = 'gtm-script';
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(s);
    };

    // Defer so tag loading never blocks the critical render.
    const schedule = () => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => setTimeout(initGTM, 1200), { timeout: 5000 });
      } else {
        setTimeout(initGTM, 1200);
      }
    };
    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule, { once: true });
  }, [preferences?.analytics, preferences?.marketing]);

  return null;
};

export default GoogleTagManager;
