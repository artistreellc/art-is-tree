import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import { pickFeaturedCaseStudy } from '@/constants/caseStudies';

const NEW_WINDOW_MS = 14 * 24 * 60 * 60 * 1000;

// Full-width, slim strip under the homepage hero linking to the current
// featured case study. The pick rotates weekly and a newly published study
// takes the slot automatically (see pickFeaturedCaseStudy); fresh posts get
// a NEW pill.
//
// Hydration note: the prerendered HTML bakes the build-time pick; on mount we
// recompute for the visitor's current date so the rotation stays live between
// deploys. Most of the time the two agree and nothing visibly changes.
const FeaturedCaseStudyBanner = () => {
  const [featured, setFeatured] = useState(() => pickFeaturedCaseStudy());

  useEffect(() => {
    setFeatured(pickFeaturedCaseStudy(new Date()));
  }, []);

  const isNew = Date.now() - new Date(featured.datePublished).getTime() < NEW_WINDOW_MS;

  return (
    <section aria-label="Featured case study" className="relative overflow-hidden bg-gradient-to-r from-[#0A2F24] via-[#11402F] to-[#0A2F24] border-y-2 border-[#D4AF37]/50">
      {/* gold sheen: sweeps across every ~6s (motion-safe); sits as a static
          highlight for users with reduced motion enabled */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/4 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-[#D4AF37]/[0.14] to-transparent motion-safe:animate-sheen" />
      <Link
        to={featured.path}
        className="group relative container mx-auto px-4 py-3.5 md:py-4 flex items-center justify-center gap-x-3.5 gap-y-1 flex-wrap text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D4AF37]"
      >
        <span className="flex items-center gap-1.5 bg-[#D4AF37] text-[#0A2F24] font-extrabold tracking-[0.12em] uppercase text-[10px] md:text-[11px] px-2.5 py-1 rounded-full whitespace-nowrap shadow-sm">
          <BookOpen className="w-3.5 h-3.5" aria-hidden="true" /> This Week’s Case Study
        </span>
        {isNew && (
          <span className="bg-white/15 text-[#D4AF37] border border-[#D4AF37]/60 font-extrabold tracking-[0.12em] uppercase text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap motion-safe:animate-pulse">
            New
          </span>
        )}
        <span className="font-playfair text-white text-base md:text-lg font-bold leading-snug group-hover:text-[#D4AF37] transition-colors">
          {featured.title}
        </span>
        <span className="hidden sm:flex items-center gap-1 text-[#D4AF37] text-sm font-semibold whitespace-nowrap">
          Read it <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
        <ArrowRight className="sm:hidden w-4 h-4 text-[#D4AF37] transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </section>
  );
};

export default FeaturedCaseStudyBanner;
