
import React, { useState } from 'react';
import { ShieldCheck, Award, ThumbsUp, ExternalLink } from 'lucide-react';
import AggregateRatingSchema from '@/components/seo/AggregateRatingSchema';
import LocalSEOMeta from '@/components/LocalSEOMeta';

const GOOGLE_LISTING_URL = "https://www.google.com/maps?cid=12599844776703525086";

const TestimonialsPage = () => {
  // Static state, no useEffect to trigger network calls
  const [reviews] = useState([]);
  const loading = false;

  return (
    <>
      <LocalSEOMeta 
        pageTitle="Reviews | Tree Service Virginia Beach | Art-is-Tree" 
        description="Read customer reviews of Art-is-Tree LLC, the BBB A+, licensed and insured tree service trusted across Virginia Beach and Hampton Roads, VA. 5-star rated." 
        noindex={true}
      />
      
      <AggregateRatingSchema />

      <main className="min-h-screen bg-gray-50 pb-24">
        <header className="relative py-24 bg-[#1B4D3E] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=50&w=1200')] opacity-10 bg-cover bg-center"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
             <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-0">
               Customer Testimonials
             </h1>
             <p className="text-xl text-[#D4AF37] font-medium max-w-2xl mx-auto">
               Hear what your neighbors have to say about our professionalism, safety, and attention to detail.
             </p>
          </div>
        </header>

        <section className="py-16 container mx-auto px-4 max-w-5xl">
           <div className="prose prose-lg text-gray-700 leading-relaxed mx-auto space-y-6 mb-16 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
             <div className="flex justify-center gap-6 mb-8">
               <div className="flex flex-col items-center text-[#1B4D3E]"><ThumbsUp className="w-8 h-8 text-[#D4AF37] mb-2"/> <strong>5.0 Rated (134 Reviews)</strong></div>
               <div className="flex flex-col items-center text-[#1B4D3E]"><ShieldCheck className="w-8 h-8 text-[#D4AF37] mb-2"/> <strong>Fully Insured</strong></div>
               <div className="flex flex-col items-center text-[#1B4D3E]"><Award className="w-8 h-8 text-[#D4AF37] mb-2"/> <strong>Professionals</strong></div>
             </div>
             <p>
               At <strong>Art-is-Tree LLC</strong>, customer satisfaction is the truest measure of our success.
             </p>
           </div>
           
           <div className="text-center py-32 bg-white rounded-2xl shadow-sm border border-gray-200">
              <div className="flex flex-col items-center">
                <ThumbsUp className="w-12 h-12 text-[#1B4D3E] opacity-50 mb-4" />
                <p className="text-gray-500 text-2xl font-playfair font-bold mt-0 mb-6">Live reviews are syncing.</p>
                <a 
                  href={GOOGLE_LISTING_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1B4D3E] text-white px-6 py-3 rounded-lg hover:bg-[#143a2f] transition-colors font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Read our 134 reviews on Google Maps
                </a>
              </div>
           </div>
        </section>
      </main>
    </>
  );
};

export default TestimonialsPage;
