import React from 'react';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import YouTubeFacade from '@/components/YouTubeFacade';
import { Eyebrow } from '@/components/design/Primitives';
import { ExternalLink } from 'lucide-react';

// Real job-site photos, self-hosted and optimized (WebP). Descriptive alt text
// doubles as local-SEO signal. Masonry keeps the portrait/landscape mix natural.
const PHOTOS = [
  { src: '/images/virginia-beach-crane-rigging-storm.webp', alt: 'Climber rigging a large storm-damaged trunk to a crane in Virginia Beach, VA' },
  { src: '/images/virginia-beach-church-ash-tree.webp', alt: 'A 200-year-old ash tree being climbed for an emerald ash borer removal in Kempsville, Virginia Beach' },
  { src: '/images/virginia-beach-crane-lift-over-house.webp', alt: 'Crane lifting a rigged tree section over a house in Virginia Beach, VA' },
  { src: '/images/virginia-beach-tall-tree-climb.webp', alt: 'Arborist climbing a tall tree beside a home in Virginia Beach, VA' },
  { src: '/images/virginia-beach-grapple-truck-street.webp', alt: 'Art-is-Tree grapple truck loading logs on a Virginia Beach street' },
  { src: '/images/virginia-beach-oak-crane-climb.webp', alt: 'Climber and crane removing a large oak in Virginia Beach, VA' },
  { src: '/images/virginia-beach-church-ash-crane-rigging.webp', alt: 'Owner in a blue hard hat rigging a large ash lead to a crane in Kempsville' },
  { src: '/images/virginia-beach-crane-operation-oak.webp', alt: 'Crane crew removing a large oak beside a Virginia Beach home' },
  { src: '/images/virginia-beach-crane-storm-pick.webp', alt: 'Crane lifting a tree section under a stormy sky in Virginia Beach' },
  { src: '/images/virginia-beach-tree-climber-portrait.webp', alt: 'Art-is-Tree climber in full gear on a large stump in Virginia Beach' },
  { src: '/images/virginia-beach-pine-log-cross-section.webp', alt: 'Crew member beside a large fresh pine log cross-section in Virginia Beach' },
  { src: '/images/virginia-beach-bucket-truck-pine.webp', alt: 'Bucket truck servicing tall pines in a Virginia Beach neighborhood' },
  { src: '/images/virginia-beach-spar-removal-house.webp', alt: 'Tree spar sectioned down beside a house during a Virginia Beach removal' },
  { src: '/images/virginia-beach-large-stump-neighborhood.webp', alt: 'A very large stump and log section from a Virginia Beach neighborhood removal' },
  { src: '/images/virginia-beach-crane-removal-over-house.webp', alt: 'Crane hoisting a large tree section safely over a house in Virginia Beach' },
  { src: '/images/virginia-beach-arborist-hardwood-removal.webp', alt: 'Arborist sectioning a massive hardwood trunk in Virginia Beach' },
  { src: '/images/virginia-beach-storm-tree-removal.webp', alt: 'Art-is-Tree crew removing a storm-damaged tree in Virginia Beach, VA' },
  { src: '/images/virginia-beach-tree-debris-grapple-truck.webp', alt: 'Grapple truck loading tree debris for cleanup and hauling in Virginia Beach' },
];

const GalleryPage = () => {
  return (
    <>
      <LocalSEOMeta
        pageTitle="Tree Service Gallery | Art-is-Tree Virginia Beach"
        description="See real photos of tree removal, crane work and trimming by Art-is-Tree LLC across Virginia Beach and Hampton Roads. Licensed, insured crews."
      />

      <div className="bg-[#FAF9F6] min-h-screen">
        {/* PHOTO HERO */}
        <header className="relative isolate overflow-hidden py-24 md:py-32 px-4 text-white text-center">
          <img src="/images/virginia-beach-crane-lift-over-house.webp" alt="Crane lifting a tree section over a house in Virginia Beach" className="absolute inset-0 -z-10 w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0A2F24]/88 via-[#0A2F24]/80 to-[#08251C]/92" />
          <Eyebrow className="mb-3">Real jobs, real crews</Eyebrow>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4 mt-0">Our Work Gallery</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Crane removals, technical climbing, storm cleanup, and stump work from real Art-is-Tree job sites across Virginia Beach and Hampton Roads.
          </p>
        </header>

        <main className="py-16 md:py-20">
          {/* VIDEOS */}
          <div className="container mx-auto px-4 max-w-5xl mb-16">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold text-[#1B4D3E] text-center mb-8">Watch Our Crew in Action</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
              <div className="w-full md:flex-1">
                <YouTubeFacade id="7KWf4dSRr_k" title="Art-is-Tree LLC crane tree removal in Virginia Beach, VA" />
              </div>
              <div className="w-full max-w-[280px] mx-auto md:mx-0">
                <YouTubeFacade id="ChAb_pRVwBA" aspectClass="aspect-[9/16]" title="Art-is-Tree tree service short — Virginia Beach, VA" />
              </div>
            </div>
          </div>

          {/* MASONRY PHOTO GRID */}
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 [column-fill:_balance]">
              {PHOTOS.map((photo, i) => (
                <figure
                  key={photo.src}
                  className="break-inside-avoid mb-3 md:mb-4 overflow-hidden rounded-xl border border-black/5 ring-1 ring-black/5 shadow-[0_10px_24px_-12px_rgba(10,47,36,0.4)] bg-gray-100 group"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading={i < 4 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </figure>
              ))}
            </div>

            <div className="text-center mt-14">
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
