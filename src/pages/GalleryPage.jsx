
import React from 'react';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import { ExternalLink } from 'lucide-react';

// Real job-site photos, self-hosted and optimized (WebP). Descriptive alt
// text doubles as local-SEO signal. Portrait/landscape mix is normalized with
// a fixed aspect box + object-cover so the grid stays clean with no layout shift.
const PHOTOS = [
  { src: '/images/virginia-beach-crane-oak-limb-rigging.webp', alt: 'Certified climber rigging a large oak limb for crane removal in Virginia Beach, VA' },
  { src: '/images/virginia-beach-crane-pine-tree-removal.webp', alt: 'Crane-assisted pine tree removal by Art-is-Tree LLC in Virginia Beach, VA' },
  { src: '/images/virginia-beach-crane-removal-over-house.webp', alt: 'Crane hoisting a large tree section safely over a house during a removal in Virginia Beach' },
  { src: '/images/virginia-beach-arborist-hardwood-removal.webp', alt: 'Arborist sectioning a massive hardwood trunk with a chainsaw in Virginia Beach' },
  { src: '/images/virginia-beach-crane-tree-removal.webp', alt: 'Crane boom positioned for a technical tree removal in Virginia Beach, VA' },
  { src: '/images/virginia-beach-pine-removal-near-house.webp', alt: 'Careful pine tree removal beside a home in Virginia Beach, VA' },
  { src: '/images/virginia-beach-tree-debris-grapple-truck.webp', alt: 'Grapple truck loading tree debris for cleanup and hauling in Virginia Beach' },
  { src: '/images/virginia-beach-storm-tree-removal.webp', alt: 'Art-is-Tree crew removing a storm-damaged tree in Virginia Beach, VA' },
];

const GalleryPage = () => {
  return (
    <>
      <LocalSEOMeta
        pageTitle="Tree Service Gallery | Art-is-Tree Virginia Beach"
        description="See real photos of tree removal, crane work and trimming by Art-is-Tree LLC across Virginia Beach and Hampton Roads. Licensed, insured crews."
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
                Our work speaks for itself. Browse real photos from Art-is-Tree LLC job sites across Virginia Beach and Hampton Roads — complex crane removals, technical climbing, precision trimming, and clean debris hauling. Every job is performed by our licensed, insured crew.
              </p>
            </div>
          </div>

          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {PHOTOS.map((photo, i) => (
                <figure
                  key={photo.src}
                  className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-md border border-gray-200 bg-gray-100 group"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading={i < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </figure>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">See even more of our latest jobs and 5-star reviews on Google.</p>
              <a
                href="https://www.google.com/maps?cid=12599844776703525086"
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
