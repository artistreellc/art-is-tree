import React from 'react';
import { CreditCard, ArrowRight, Phone } from 'lucide-react';

// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH for the financing application link.
// Switching financing providers later? Change this ONE line and every
// "Apply for Financing" button across the site updates — no per-page edits.
// (The Acorn banner images live in the banner components below; swap those two
// <img> srcs if the provider changes.)
// ---------------------------------------------------------------------------
export const FINANCING_APPLY_URL =
  'https://www.acornfinance.com/pre-qualify/?d=M7VPJ&utm_medium=web_pre_qual_link_copy';

// Acorn's official hosted banner assets + their banner-attribution link.
const ACORN_BANNER_URL = 'https://www.acornfinance.com/pre-qualify/?d=M7VPJ&utm_medium=web_pre_qual_banner';
const ACORN_BANNER_HORIZONTAL = 'https://fs.acornfinance.com/banners/acorn-finance-banner-easy-payment-options-horizontal-small.png';
const ACORN_BANNER_VERTICAL = 'https://fs.acornfinance.com/banners/acorn-finance-banner-easy-payment-options-vertical-small.png';
const ACORN_BANNER_ALT = 'Acorn Finance — apply and get affordable payment options from multiple lenders';

// Horizontal Acorn banner (home hero + pricing guide).
export const FinancingBanner = ({ className = '' }) => (
  <div className={`flex justify-center ${className}`}>
    <a href={ACORN_BANNER_URL} target="_blank" rel="noopener noreferrer sponsored" aria-label="Apply for financing with Acorn Finance">
      <img
        src={ACORN_BANNER_HORIZONTAL}
        alt={ACORN_BANNER_ALT}
        loading="lazy"
        className="max-w-full h-auto"
        style={{ margin: '10px', padding: '1px', border: '1px solid black', borderRadius: '5px' }}
      />
    </a>
  </div>
);

// Vertical Acorn banner (off the home page — e.g. contact page).
export const FinancingBannerVertical = ({ className = '' }) => (
  <div className={`flex justify-center ${className}`}>
    <a href={ACORN_BANNER_URL} target="_blank" rel="noopener noreferrer sponsored" aria-label="Apply for financing with Acorn Finance">
      <img
        src={ACORN_BANNER_VERTICAL}
        alt={ACORN_BANNER_ALT}
        loading="lazy"
        className="max-w-full h-auto"
        style={{ margin: '10px', padding: '1px', border: '1px solid black', borderRadius: '5px' }}
      />
    </a>
  </div>
);

// Provider-agnostic lower-page financing section (service + city pages).
// Keeps the site's own look; the only provider-specific thing is the link,
// which comes from FINANCING_APPLY_URL above.
export const FinancingSection = ({
  description,
  heading = 'Tree Service Financing Available',
  className = '',
}) => (
  <section aria-label="Financing available" className={`bg-[#FAF9F6] border-t border-gray-100 py-14 md:py-18 ${className}`}>
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="bg-white rounded-3xl border border-gray-200 border-t-4 border-t-[#D4AF37] shadow-sm p-7 md:p-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#0A2F24] text-[#D4AF37] flex-shrink-0">
            <CreditCard className="w-5 h-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-[#A8801A] font-bold tracking-[0.12em] uppercase text-[11px]">Financing Now Available</p>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B4D3E] leading-tight m-0">{heading}</h2>
          </div>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <a
            href={FINANCING_APPLY_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 bg-[#1B4D3E] hover:bg-[#143a2f] text-white font-bold px-7 py-3.5 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 w-full sm:w-auto justify-center"
          >
            Apply for Financing <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href="tel:+17573195131"
            className="inline-flex items-center gap-2 text-[#1B4D3E] font-bold hover:text-[#D4AF37] transition-colors"
          >
            <Phone className="w-4 h-4" aria-hidden="true" /> (757) 319-5131
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default FinancingSection;
