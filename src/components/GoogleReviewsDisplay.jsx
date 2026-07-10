import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, RefreshCw, ExternalLink } from 'lucide-react';
import { useGoogleReviews } from '@/hooks/useGoogleReviews';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import SyncReviewsButton from '@/components/SyncReviewsButton';

const GOOGLE_LISTING_URL = "https://www.google.com/maps?cid=12599844776703525086";
// Direct "write a review" deep link — opens Google's review dialog immediately.
const GOOGLE_REVIEW_URL = "https://g.page/r/Cd6AeUwRpNuuEBM/review";

const GoogleReviewsDisplay = () => {
  const { reviews, loading, error, refresh } = useGoogleReviews();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!loading && reviews.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
      }, 6000); 
      return () => clearInterval(timer);
    }
  }, [loading, reviews.length]);

  const nextReview = () => {
    if (reviews.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    if (reviews.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-white min-h-[500px] contain-content">
        <div className="container mx-auto px-4 text-center">
           <div className="max-w-4xl mx-auto">
             <div className="h-10 w-64 bg-gray-200 rounded animate-pulse mx-auto mb-4"></div>
             <div className="h-6 w-96 bg-gray-100 rounded animate-pulse mx-auto mb-12"></div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-xl p-8 shadow-md border border-gray-100 h-72 flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map(s => <div key={s} className="w-4 h-4 bg-gray-200 rounded-full animate-pulse" />)}
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                    </div>
                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                      <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
                      <div className="space-y-2">
                        <div className="h-3 w-24 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-3 w-16 bg-gray-100 rounded animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50 text-center min-h-[300px] flex items-center justify-center contain-content">
        <div className="container mx-auto px-4">
          <p className="text-red-500 mb-4">Unable to load reviews temporarily: {error}</p>
          <div className="flex justify-center gap-2">
            <Button onClick={refresh} variant="outline" className="gap-2 min-h-[44px]">
              <RefreshCw className="w-4 h-4" /> Retry Loading
            </Button>
            <SyncReviewsButton onSyncSuccess={refresh} />
          </div>
        </div>
      </section>
    );
  }

  if (reviews.length === 0) {
    return (
       <section className="py-16 bg-gray-50 text-center min-h-[300px] flex items-center justify-center contain-content">
        <div className="container mx-auto px-4">
          <p className="text-gray-500 mb-6">No reviews available to display.</p>
          <div className="flex justify-center gap-4">
            <Button asChild variant="default" className="bg-[#1B4D3E] min-h-[44px]">
              <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
                  Leave a Review
              </a>
            </Button>
            <SyncReviewsButton onSyncSuccess={refresh} />
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden contain-content" aria-labelledby="reviews-heading">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-[#1B4D3E]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <a href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center gap-2 mb-3">
               <div className="flex">
                 {[1, 2, 3, 4, 5].map((s) => (
                   <Star key={s} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                 ))}
               </div>
               <span className="text-gray-600 font-medium">
                 5.0 out of 5 <span className="text-sm text-gray-400">(134 reviews)</span>
               </span>
            </div>
          </a>
          <h2 id="reviews-heading" className="font-playfair text-3xl md:text-5xl font-bold text-[#1B4D3E] mb-4">
            Neighbors Trust Art-is-Tree LLC
          </h2>
          <p className="font-sans text-gray-600 max-w-2xl mx-auto text-lg">
            See what homeowners across Virginia Beach are saying about our service.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative mb-12">
          <button 
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors text-[#1B4D3E] border border-gray-100 hidden md:flex items-center justify-center min-h-[48px] min-w-[48px]"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors text-[#1B4D3E] border border-gray-100 hidden md:flex items-center justify-center min-h-[48px] min-w-[48px]"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative overflow-hidden min-h-[300px] md:min-h-[350px]">
                <div 
                  key={currentIndex}
                 
                 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {[0, 1, 2].map((offset) => {
                    const index = (currentIndex + offset) % reviews.length;
                    const review = reviews[index];
                    return (
                      <a href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer" key={`${review.reviewer_name}-${index}`} className={cn(
                        "bg-white rounded-xl p-8 shadow-md border border-gray-100 relative flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-xl contain-content group cursor-pointer",
                        offset > 0 ? "hidden md:flex" : "flex"
                      )}>
                         <Quote className="w-10 h-10 text-[#1B4D3E]/10 absolute top-6 right-6" />
                         <div className="flex items-center gap-1 mb-4">
                           {[...Array(5)].map((_, i) => (
                             <Star 
                              key={i} 
                              className={cn(
                                "w-4 h-4", 
                                i < review.rating ? "fill-[#D4AF37] text-[#D4AF37]" : "text-gray-300"
                              )} 
                             />
                           ))}
                         </div>
                         <p className="text-gray-600 mb-6 flex-grow leading-relaxed italic group-hover:text-gray-800 transition-colors">
                           "{review.review_text && review.review_text.length > 150 ? review.review_text.substring(0, 150) + '...' : review.review_text}"
                         </p>
                         <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0 font-bold text-[#1B4D3E]">
                              {review.review_image_url ? (
                                <img src={review.review_image_url} alt={review.reviewer_name} className="w-full h-full object-cover" loading="lazy" />
                              ) : (
                                (review.reviewer_name || '?').charAt(0)
                              )}
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#1B4D3E] transition-colors">{review.reviewer_name}</h4>
                              <p className="text-xs text-gray-500">{formatDate(review.created_at)}</p>
                            </div>
                         </div>
                      </a>
                    );
                  })}
                </div>
          </div>

          <div className="flex justify-center gap-2 mt-8 md:hidden min-h-[44px] items-center">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all touch-target",
                  idx === currentIndex ? "bg-[#1B4D3E] w-6" : "bg-gray-300"
                )}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="text-center mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
           <Button asChild size="lg" className="rounded-full bg-[#D4AF37] hover:bg-[#c39f2f] px-8 text-lg h-14 min-w-[200px] shadow-lg hover:shadow-xl transition-all hover:scale-105 text-[#1B4D3E] font-bold">
             <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
               <Star className="mr-2 w-4 h-4 fill-current" /> Leave a Review
             </a>
           </Button>
           <Button asChild size="lg" variant="outline" className="rounded-full border-[#1B4D3E] text-[#1B4D3E] hover:bg-[#1B4D3E] hover:text-white px-8 text-lg h-14 min-w-[200px] shadow-lg hover:shadow-xl transition-all hover:scale-105">
             <a href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer">
               View Profile & Photos <ExternalLink className="ml-2 w-4 h-4" />
             </a>
           </Button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(GoogleReviewsDisplay);