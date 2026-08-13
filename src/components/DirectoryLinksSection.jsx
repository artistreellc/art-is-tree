import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { COMPANY_INFO } from '@/constants/seoMetadata';
import { useReviewStats } from '@/hooks/useReviewStats';

/**
 * A single line pointing at /testimonials, where every verified Art-is-Tree LLC
 * profile now lives in one block.
 *
 * This used to render all twelve listings as a grid of 140px tiles — twelve
 * outbound links on the homepage, duplicated again in the header dropdown and
 * a third time in the footer. Three copies of the same list is what made the
 * page read as cluttered, and the homepage is the site's strongest page, so
 * every external link on it leaks equity that its own service pages need.
 *
 * The JSON-LD `sameAs` graph still carries all twelve from COMPANY_INFO.listings,
 * so the citation signal to search engines is unchanged — only the visual
 * duplication is gone.
 */
const DirectoryLinksSection = () => {
  const { count, rating } = useReviewStats();

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" aria-hidden="true" />
          ))}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {rating.toFixed(1)} stars across {count} verified reviews
        </h2>
        <p className="text-gray-600 mb-6">
          Art-is-Tree LLC is reviewed and verified on {COMPANY_INFO.listings.length} public profiles &mdash;
          Google, BBB A+, Yelp, Angi and more.
        </p>
        <Link
          to="/testimonials"
          className="inline-flex items-center gap-2 bg-[#1B4D3E] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#143a2f] transition-colors"
        >
          Read the reviews &amp; find us online
        </Link>
      </div>
    </section>
  );
};

export default DirectoryLinksSection;
