import React from 'react';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import YouTubeFacade from '@/components/YouTubeFacade';
import { Eyebrow } from '@/components/design/Primitives';
import { ExternalLink } from 'lucide-react';

// Real job-site photos, self-hosted and optimized (WebP). Descriptive alt text
// doubles as local-SEO signal. Masonry keeps the portrait/landscape mix natural.
const PHOTOS = [
  { src: '/images/virginia-beach-crane-truck-boom-removal.webp', alt: 'Crane truck set up with outriggers down and boom extended over a house for a tree removal in Kempsville, Virginia Beach, VA' },
  { src: '/images/virginia-beach-crane-removal-backyard.webp', alt: 'Groundman guiding a crane pick as the cable takes the weight of a backyard tree in Kempsville, Virginia Beach, VA' },
  { src: '/images/virginia-beach-storm-uprooted-tree.webp', alt: 'Uprooted tree with a failed root plate beside a home in Kempsville, Virginia Beach, VA after a storm' },
  { src: '/images/virginia-beach-storm-tree-on-house.webp', alt: 'Storm-damaged tree leaning against a house in Kempsville, Virginia Beach, VA' },
  { src: '/images/virginia-beach-storm-snapped-trunk-base.webp', alt: 'Storm-snapped tree trunk with a splintered break at a home in Kempsville, Virginia Beach, VA' },
  { src: '/images/virginia-beach-tree-rigging-removal.webp', alt: 'Art-is-Tree crew rigging down a large tree section on a Kempsville, Virginia Beach removal' },
  { src: '/images/virginia-beach-crane-rigging-storm.webp', alt: 'Climber rigging a large storm-damaged trunk to a crane in Virginia Beach, VA' },
  { src: '/images/virginia-beach-church-ash-tree.webp', alt: 'A 200-year-old ash tree being climbed for an emerald ash borer removal in Kempsville, Virginia Beach' },
  { src: '/images/virginia-beach-tall-tree-climb.webp', alt: 'Arborist climbing a tall tree beside a home in Virginia Beach, VA' },
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
  { src: '/images/virginia-beach-backyard-pine-removal.webp', alt: 'Art-is-Tree groundman working a backyard pine removal in Kings Grant, Virginia Beach, VA' },
  { src: '/images/virginia-beach-driveway-protection-removal.webp', alt: 'Driveway protected with cones and plywood during a tree removal in Red Mill, Virginia Beach, VA' },
  { src: '/images/virginia-beach-night-storm-response-truck.webp', alt: "Art-is-Tree bucket truck on an after-hours storm response job at Chic's Beach, Virginia Beach, VA" },
  { src: '/images/virginia-beach-branded-tree-service-truck.webp', alt: 'Art-is-Tree LLC branded tree service truck on a job site near the Virginia Beach Municipal Center (Courthouse), VA' },
];

// Before/after job composites. These are wide 2:1 images, so they get their own
// full-width stacked section above the masonry grid rather than fighting the columns.
const BEFORE_AFTER = [
  {
    src: '/images/virginia-beach-before-after-backyard-pine-clearing.webp',
    title: 'Backyard Cleared of Dead and Broken Pines',
    caption: 'Storm-broken spar and crowded hardwoods behind the house — taken down, hauled out, yard left open',
    alt: 'Before and after tree removal in Virginia Beach, VA — a storm-broken pine spar and crowded hardwoods cleared from a backyard beside a house, debris hauled away by Art-is-Tree LLC',
  },
  {
    src: '/images/virginia-beach-before-after-power-line-clearance-pruning.webp',
    title: 'Overgrown Into the Power Lines',
    caption: 'Bradford pear cluster swallowing the primary and service lines — clean clearance restored, structure kept intact',
    alt: 'Before and after utility clearance pruning in Virginia Beach, VA — a Bradford pear cluster overgrown into the primary and service power lines, pruned back to clean clearance by Art-is-Tree LLC to ANSI A300 standards',
  },
  {
    src: '/images/virginia-beach-before-after-deadwood-limb-over-house.webp',
    title: 'Hanging Deadwood Over the House',
    caption: 'Split, decayed oak limb aimed at the roof and gutter — failing limb gone, roofline clear',
    alt: 'Before and after hazardous limb removal in Virginia Beach, VA — a split, decayed oak limb hanging directly over a roofline and gutter, removed by Art-is-Tree LLC leaving the roof clear',
  },
  {
    src: '/images/virginia-beach-before-after-crown-clean-canopy-lift.webp',
    title: 'Crown Clean and Canopy Lift',
    caption: 'Mature elm between the houses — heavy low canopy leaning over the neighboring rooflines, deadwood out and canopy raised',
    alt: 'Before and after tree trimming in Virginia Beach, VA — a mature elm between two houses given a crown clean and canopy lift by Art-is-Tree LLC, deadwood removed and the canopy raised off the neighboring rooflines',
  },
  {
    src: '/images/virginia-beach-before-after-low-limb-over-shed.webp',
    title: 'Low Limb Arching Over the Shed',
    caption: 'Ivy-laden oak scaffold sagging across the shed and fence line — scaffold removed, shed and yard fully clear',
    alt: 'Before and after tree pruning in Virginia Beach, VA — an ivy-laden oak scaffold limb sagging across a shed and fence line, removed by Art-is-Tree LLC to restore clearance over the structure and yard',
  },
];

const GalleryPage = () => {
  return (
    <>
      <LocalSEOMeta
        pageTitle="Tree Service Gallery | Virginia Beach | Art-is-Tree LLC"
        description="Before and after photos of real tree removal, hazardous limb work, utility clearance pruning, canopy lifts and crane work by Art-is-Tree LLC across Virginia Beach, Norfolk, Chesapeake, Portsmouth and Hampton Roads. Licensed, insured crews, BBB A+, free estimates."
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

        <div className="py-16 md:py-20">
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

          {/* INTRO COPY */}
          <div className="container mx-auto px-4 max-w-3xl mb-14 text-center">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold text-[#1B4D3E] mb-4">Real tree work across Virginia Beach &amp; Hampton Roads</h2>
            <p className="text-gray-600 leading-relaxed">
              Every photo below is an actual Art-is-Tree job — no stock images. You’ll see crane-assisted tree removals lifting heavy sections clean over rooftops, technical climbing and spikeless pruning high in the canopy, storm and hurricane cleanup after coastal weather, stump grinding, and full debris hauling. These are the big, hazardous, and tight-access jobs other crews turn down, done across Virginia Beach, Norfolk, Chesapeake, and Portsmouth — licensed, insured, and to ANSI A300 and Z133 standards. Browse the work, then watch the crew in action in the videos above.
            </p>
          </div>

          {/* BEFORE & AFTER — wide 2:1 job composites, full width above the grid */}
          <div className="container mx-auto px-4 max-w-6xl mb-16">
            <div className="text-center mb-8">
              <Eyebrow className="mb-2">Before &amp; After</Eyebrow>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-[#1B4D3E]">
                The same yard, before we showed up and after we left
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mt-3">
                Tree removal, hazardous limb work, utility clearance pruning, and canopy lifts on real
                Virginia Beach and Norfolk properties &mdash; shot from the same spot both days.
              </p>
            </div>
            <div className="space-y-8">
              {BEFORE_AFTER.map((job) => (
                <figure
                  key={job.src}
                  className="overflow-hidden rounded-xl border border-black/5 ring-1 ring-black/5 shadow-[0_10px_24px_-12px_rgba(10,47,36,0.4)] bg-gray-100"
                >
                  <img
                    src={job.src}
                    alt={job.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto block"
                  />
                  <figcaption className="bg-white px-5 py-4 border-t border-gray-100">
                    <h3 className="font-playfair font-bold text-lg text-[#1B4D3E] mb-1">{job.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{job.caption}</p>
                  </figcaption>
                </figure>
              ))}
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
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
