
import React, { useState } from 'react';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import { ExternalLink } from 'lucide-react';

const GalleryPage = () => {
  // Static state, no useEffect to trigger network calls
  const [photos] = useState([]);
  const loading = false;

  return (
    <>
      <LocalSEOMeta 
        pageTitle="Tree Service Gallery | Art-is-Tree Virginia Beach" 
        description="See before-and-after photos of tree removal, trimming and crane jobs by Art-is-Tree LLC across Virginia Beach and Hampton Roads. Licensed, insured crews." 
        noindex={true}
      />

      <div className="pt-0 bg-gray-50 min-h-screen">
        <header className="bg-[#1B4D3E] py-20 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-playfair text-5xl font-bold text-white mb-6 mt-0">Our Work Gallery</h1>
          </div>
        </header>

        <main className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl mb-12">
            <div className="prose prose-lg text-gray-700 leading-relaxed mx-auto text-center">
              <p>
                Welcome to the Art-is-Tree LLC professional tree service gallery. They say a picture is worth a thousand words, and we believe our work speaks for itself. Browse through our extensive collection of before and after photos showcasing our expertise in complex tree removals, precision trimming, and comprehensive property transformations throughout Virginia Beach. 
              </p>
            </div>
          </div>
          
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10 md:p-16 text-center max-w-2xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Photos are syncing from our Google Business Profile. Check back shortly — or visit us on Google to see our latest work.
              </p>
              <a 
                href="https://maps.app.goo.gl/hqVc7BmQzXtm36tA6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1B4D3E] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#14392e] transition-colors"
              >
                Visit us on Google
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default GalleryPage;
