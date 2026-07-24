import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, ArrowRight, Phone, BadgeCheck } from 'lucide-react';

// Financing promotion — two variants:
//   <FinancingBanner />                 slim, prominent strip (used on the pricing guide)
//   <FinancingSection description="…" /> lower-page section with a unique,
//                                        keyword-rich paragraph per page (avoids
//                                        duplicate-content across the money pages)
//
// Copy is intentionally general about terms (no invented APR/lender/approval
// claims) and routes visitors to request an estimate, where real terms are given.

const CONTACT = '/contact';
const TEL = 'tel:+17573195131';

export const FinancingBanner = ({ className = '' }) => (
  <section aria-label="Financing available" className={`relative overflow-hidden rounded-2xl border-2 border-[#D4AF37]/60 bg-gradient-to-r from-[#0A2F24] via-[#11402F] to-[#0A2F24] shadow-lg ${className}`}>
    <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/4 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-[#D4AF37]/[0.12] to-transparent motion-safe:animate-sheen" />
    <div className="relative px-5 py-5 md:px-8 md:py-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#D4AF37] text-[#0A2F24] flex-shrink-0 shadow">
        <CreditCard className="w-6 h-6" aria-hidden="true" />
      </div>
      <div className="flex-1">
        <p className="flex items-center justify-center sm:justify-start gap-1.5 text-[#D4AF37] font-bold tracking-[0.14em] uppercase text-xs mb-1">
          <BadgeCheck className="w-4 h-4" aria-hidden="true" /> Now Available
        </p>
        <h3 className="font-playfair text-xl md:text-2xl font-bold text-white leading-snug">
          Tree Service Financing in Virginia Beach &amp; Hampton Roads
        </h3>
        <p className="text-white/80 text-sm md:text-base mt-1">
          Get the work done now and pay over time with affordable monthly payments — ask about flexible plans with your free estimate.
        </p>
      </div>
      <Link
        to={CONTACT}
        className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#c39f2f] text-[#0A2F24] font-bold px-6 py-3 rounded-xl whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white flex-shrink-0"
      >
        Ask About Financing <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </Link>
    </div>
  </section>
);

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
          <Link
            to={CONTACT}
            className="inline-flex items-center gap-2 bg-[#1B4D3E] hover:bg-[#143a2f] text-white font-bold px-7 py-3.5 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 w-full sm:w-auto justify-center"
          >
            Get a Free Estimate <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <a
            href={TEL}
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
