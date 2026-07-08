import React from 'react';
import { Link } from 'react-router-dom';
import { useCookieConsent } from '@/hooks/useCookieConsent';

/**
 * Cookie consent banner. Shows until the visitor makes a choice.
 * "Accept All" enables analytics + marketing (GA4 + Google Ads);
 * "Essential only" keeps them off. Choice persists via the consent context.
 */
export default function CookieConsentBanner() {
  const { hasConsented, acceptAll, rejectAll } = useCookieConsent();

  if (hasConsented) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] bg-[#1B4D3E] text-white shadow-2xl border-t border-[#D4AF37]/40">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center gap-4 justify-between">
        <p className="text-sm text-gray-100 leading-relaxed max-w-3xl">
          We use cookies to improve your experience and understand site traffic. You can accept all cookies or keep only what's essential. See our{' '}
          <Link to="/cookies" className="underline text-[#D4AF37] hover:text-white font-semibold">Cookie Policy</Link>.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={rejectAll}
            className="px-5 py-2.5 rounded-full border border-white/50 text-white text-sm font-semibold hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="px-6 py-2.5 rounded-full bg-[#D4AF37] text-black text-sm font-bold hover:bg-[#c19b2e] transition-colors whitespace-nowrap"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
