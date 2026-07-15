import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useReviewStats } from '@/hooks/useReviewStats';

const GOOGLE_LISTING_URL = "https://www.google.com/maps?cid=12599844776703525086";

// Static, real customer reviews rendered straight into the page — no API
// fetch, no loading skeleton, no auto-rotating carousel. Fast, reliable, and
// prerendered for SEO. The full set lives on /testimonials.
const FEATURED_REVIEWS = [
  {
    name: 'Shawn Demayo',
    date: '2025',
    text: 'Mike removed my large red oak and did a fantastic job. Made my yard look better than when they started. This is the second tree job we’ve used them for.',
  },
  {
    name: 'Misty Scanlon',
    date: '2025',
    text: 'We needed a tree cut down in a very tight space. They knocked everything out fast and efficient, and the cleanup was perfection. Absolutely use these guys.',
  },
  {
    name: 'Manoflamancha C.',
    date: 'Jan 2026',
    text: 'These guys do fabulous work. Took down a tree near the house power line with no trouble, and their cleanup was perfect. I’ll use them again for sure.',
  },
];

const GoogleReviewsDisplay = () => {
  const { count, rating } = useReviewStats();
  const ratingText = rating.toFixed(1);
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 contain-content" aria-labelledby="reviews-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <a href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">
                {ratingText} out of 5 <span className="text-sm text-gray-400">({count} reviews)</span>
              </span>
            </div>
          </a>
          <h2 id="reviews-heading" className="font-playfair text-3xl md:text-5xl font-bold text-[#1B4D3E] mb-4">
            What Your Neighbors Say
          </h2>
          <p className="font-sans text-gray-600 max-w-2xl mx-auto text-lg">
            A few of the {count} five-star reviews from homeowners across Virginia Beach and Hampton Roads.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {FEATURED_REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="bg-white rounded-xl p-8 shadow-md border border-gray-100 relative flex flex-col h-full"
            >
              <Quote className="w-10 h-10 text-[#1B4D3E]/10 absolute top-6 right-6" aria-hidden="true" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <blockquote className="text-gray-600 mb-6 flex-grow leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#1B4D3E]/10 flex items-center justify-center flex-shrink-0 font-bold text-[#1B4D3E]">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-500">Google Review &middot; {review.date}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full bg-[#1B4D3E] hover:bg-[#153e32] px-8 text-lg h-14 min-w-[200px] shadow-md text-white">
            <a href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer">
              Read All {count} on Google <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-[#1B4D3E] text-[#1B4D3E] hover:bg-[#1B4D3E] hover:text-white px-8 text-lg h-14 min-w-[200px]">
            <Link to="/testimonials">See More Reviews</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(GoogleReviewsDisplay);
