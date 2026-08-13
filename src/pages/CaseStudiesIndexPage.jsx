import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import LocalSEOMeta from '@/components/LocalSEOMeta';

// Each ART-icle carries its own hero photo, category and read time so the index
// reads as an editorial page rather than twelve identical cards. `image` is the
// hero already used on that article's own page — same file, no new assets.
const caseStudiesData = [
  {
    title: "The Bid We Lost on Price and Won on Paper",
    kicker: "A $2,240 difference, paid on purpose",
    category: "Insurance",
    read: "12 min",
    image: "/images/virginia-beach-crane-pine-tree-removal.webp",
    description: "A landscaping company underbid us by $2,240 on a Chicks Beach rental property in Virginia Beach — multiple large pines and a massive oak. The owner paid the difference on purpose after reading both certificates of insurance. The 30-foot height ceiling on landscaper coverage, the 15-foot power-line exclusion, NCCI class code 0106, and how Virginia enforces tree work safety under 16VAC25-73 and ANSI Z133.",
    link: "/case-studies/tree-service-insurance",
    feature: true,
  },
  {
    title: "Where Your Tree Goes After We Take It Down",
    kicker: "Biomass, pulpwood and the lumber myth",
    category: "Wood & Recycling",
    read: "9 min",
    image: "/images/virginia-beach-grapple-truck-street.webp",
    description: "What really happens to your tree after removal — chips burned for biomass power and turned into mulch, logs sent to the West Point and Franklin paper mills as pulpwood, the big chunks split for firewood, and why your yard tree isn't the lumber gold mine people think it is. Plus the one thing that can't be recycled.",
    link: "/case-studies/where-your-tree-goes",
  },
  {
    title: "How to Choose a Tree Service in Virginia Beach",
    kicker: "Why a good company wants you to shop around",
    category: "Hiring a Pro",
    read: "10 min",
    image: "/images/virginia-beach-arborist-hardwood-removal.webp",
    description: "An honest guide from the owner on hiring the right tree service — how to read recent reviews, why you should get a written quote from every company, what to verify (licensed, insured, BBB A+), and the real reason a good company welcomes you shopping around.",
    link: "/case-studies/how-to-choose-a-tree-service",
  },
  {
    title: "After the Storm: Hurricane & Tornado Damage",
    kicker: "Two real jobs, one with no crane access",
    category: "Storm Response",
    read: "11 min",
    image: "/images/virginia-beach-storm-pine-on-house.webp",
    description: "Hurricane and tornado storm damage tree work in Virginia Beach — what to look for before a storm, why storm cleanup is so dangerous, and two real jobs: a root-failed tree rigged by hand with no crane access, and tornado-snapped pines at Broad Bay Island.",
    link: "/case-studies/storm-damage-mitigation",
  },
  {
    title: "Virginia Tree Law: The Tree on the Property Line",
    kicker: "Fancher v. Fagella and treble damages",
    category: "Consumer Protection",
    read: "10 min",
    image: "/images/virginia-beach-crane-operation-oak.webp",
    description: "Virginia tree and timber law — the self-help rule from Fancher v. Fagella, treble-damages liability for cutting a tree that isn't yours, and how to handle a neighbor dispute in Kempsville, Virginia Beach the right way.",
    link: "/case-studies/virginia-tree-law",
  },
  {
    title: "Emerald Ash Borer: The 200-Year-Old Church Ash",
    kicker: "Over an altar and a day-school play area",
    category: "Tree Health",
    read: "8 min",
    image: "/images/virginia-beach-church-ash-tree.webp",
    description: "Emerald ash borer tree removal in Kempsville, Virginia Beach — a 200-year-old ash over a church altar and day-school play area, with a rotten, cabled co-dominant union that needed a crane.",
    link: "/case-studies/emerald-ash-borer",
  },
  {
    title: "The Hampton Roads Guide to Affordable Tree Work",
    kicker: "Affordable, not cheap",
    category: "Cost & Value",
    read: "12 min",
    image: "/images/virginia-beach-pine-log-cross-section.webp",
    description: "Straight talk from the owner on making tree work affordable — not cheap: phasing projects, keeping chips and wood on site, cut-and-leave options, military/first responder/senior discounts, what a bid really pays for, and why a 3–5 year pruning cycle is the cheapest tree care there is.",
    link: "/case-studies/affordable-tree-work",
  },
  {
    title: "Crane-Assisted Tree Removal",
    kicker: "Massive pines out of a tight space",
    category: "Hazard Mitigation",
    read: "9 min",
    image: "/images/virginia-beach-crane-removal-over-house.webp",
    description: "Crane-assisted tree removal in Virginia Beach — how we safely extract massive, hazardous pines from tight spaces near sensitive nesting sites, with zero impact to surrounding structures.",
    link: "/case-studies/crane-safety",
  },
  {
    title: "OSHA Compliance & Safety Standards",
    kicker: "What an uninsured crew actually risks",
    category: "Safety",
    read: "9 min",
    image: "/images/virginia-beach-tall-tree-climb.webp",
    description: "OSHA-compliant, ANSI Z133 tree work in Virginia Beach — minimum approach distances to power lines, fall protection, PPE and rigging, and what hiring an uninsured crew actually puts at risk.",
    link: "/case-studies/osha-compliance",
  },
  {
    title: "Spikeless Pruning & Bucket Truck Methods",
    kicker: "Every spike is a wound that never fully heals",
    category: "Technique",
    read: "8 min",
    image: "/images/virginia-beach-oak-crane-climb.webp",
    description: "Spikeless pruning in Virginia Beach — why rope-and-saddle climbing and bucket truck work are the professional standard, how climbing spikes wound a living tree, and what the ANSI A300 pruning standard actually requires.",
    link: "/case-studies/spikeless-pruning",
  },
  {
    title: "Chesapeake Bay: Waterfront & RPA Buffers",
    kicker: "What the CBPA actually allows",
    category: "Environmental Care",
    read: "10 min",
    image: "/images/virginia-beach-large-tree-over-house.webp",
    description: "CBPA permits and RPA buffer zones on waterfront property in Virginia Beach and Norfolk — what the Chesapeake Bay Preservation Act actually allows on private land, cited to Virginia DEQ.",
    link: "/case-studies/chesapeake-bay-preservation-act",
  },
  {
    title: "Property Value & Professional Tree Care",
    kicker: "What neglected trees quietly cost you",
    category: "Real Estate",
    read: "8 min",
    // Not the same hero as the Chesapeake Bay article, which also uses
    // large-tree-over-house. A before/after canopy lift is the better match for
    // a piece about trimming ROI and curb appeal, and keeps every card distinct.
    image: "/images/virginia-beach-before-after-crown-clean-canopy-lift.webp",
    description: "How professional tree care raises property values in Virginia Beach and Hampton Roads — real ROI data from strategic trimming and maintenance, and what neglected trees quietly cost you in curb appeal.",
    link: "/case-studies/property-value",
  },
];

const FIELD_PHOTOS = [
  { src: '/images/virginia-beach-branded-tree-service-truck.webp', alt: 'Art-is-Tree LLC branded tree service truck on a job site near the Virginia Beach Municipal Center (Courthouse), VA' },
  { src: '/images/virginia-beach-backyard-pine-removal.webp', alt: 'Art-is-Tree groundman working a backyard pine removal in Kings Grant, Virginia Beach, VA' },
  { src: '/images/virginia-beach-driveway-protection-removal.webp', alt: 'Driveway protected with cones and plywood during a tree removal in Red Mill, Virginia Beach, VA' },
  { src: '/images/virginia-beach-stump-grinding-cleanup.webp', alt: 'Stump grinding and site cleanup after a tree removal in Virginia Beach, VA 23462' },
  { src: '/images/virginia-beach-night-storm-response-truck.webp', alt: "Art-is-Tree bucket truck on an after-hours storm response job at Chic's Beach, Virginia Beach, VA" },
];

const CategoryTag = ({ children, light = false }) => (
  <span className={`inline-block text-[11px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full ${
    light ? 'bg-white/15 text-[#D4AF37] border border-[#D4AF37]/40' : 'bg-[#1B4D3E]/8 text-[#1B4D3E] border border-[#1B4D3E]/15'
  }`}>
    {children}
  </span>
);

const CaseStudiesIndexPage = () => {
  const [featured, ...rest] = caseStudiesData;

  return (
    <>
      <LocalSEOMeta
        pageTitle="ART-icles: Tree Service Case Studies | Virginia Beach VA | Art-is-Tree LLC"
        description="Long-form tree care case studies from Art-is-Tree LLC in Virginia Beach and Hampton Roads: crane-assisted removals, ANSI Z133 and OSHA safety, storm damage after a hurricane, Virginia tree law and the property line, Chesapeake Bay Preservation Act RPA buffers, emerald ash borer, spikeless pruning, what a bid really pays for, and where your tree goes after we take it down. Licensed, insured, BBB A+. Free estimates."
      />

      <div className="min-h-screen bg-[#FAF9F6]">
        {/* ── MASTHEAD ─────────────────────────────────────────── */}
        <header className="relative isolate overflow-hidden bg-[#0A2F24] text-white">
          <div className="absolute inset-0 -z-10 opacity-[0.18]">
            <img
              src="/images/virginia-beach-crane-removal-over-house.webp"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0A2F24]/70 via-[#0A2F24]/85 to-[#0A2F24]" />

          <div className="container mx-auto px-4 max-w-4xl py-16 md:py-24 text-center">
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">
              Field notes from the ropes
            </span>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-5">
              ART-icles
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-2xl mx-auto">
              Not brochures. Real jobs from across Virginia Beach and Hampton Roads, written
              out in full — what the tree was doing, what the law or the standard actually
              says, and what it cost. Cited, and honest about the parts that went sideways.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3 text-sm text-gray-300">
              <span className="h-px w-8 bg-[#D4AF37]/60" />
              {caseStudiesData.length} articles
              <span className="h-px w-8 bg-[#D4AF37]/60" />
            </div>
          </div>
        </header>

        {/* ── FEATURED ─────────────────────────────────────────── */}
        <section className="container mx-auto px-4 max-w-6xl -mt-8 md:-mt-12 relative z-10">
          <Link
            to={featured.link}
            className="group block rounded-3xl overflow-hidden bg-white shadow-[0_24px_60px_-24px_rgba(10,47,36,0.45)] border border-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-4"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[16/11] md:aspect-auto md:min-h-[22rem] overflow-hidden bg-gray-100">
                <img
                  src={featured.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute top-4 left-4 bg-[#D4AF37] text-[#1B4D3E] text-[11px] font-black uppercase tracking-[0.14em] px-3 py-1.5 rounded-full shadow">
                  Start here
                </span>
              </div>

              <div className="p-7 md:p-10 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <CategoryTag>{featured.category}</CategoryTag>
                  <span className="text-gray-400 text-xs font-semibold">{featured.read} read</span>
                </div>
                <p className="text-[#A8801A] font-bold text-sm tracking-wide mb-2">{featured.kicker}</p>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-[#1B4D3E] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {featured.description}
                </p>
                <span className="inline-flex items-center gap-2 text-[#1B4D3E] font-bold">
                  Read the article
                  <ArrowRight className="w-5 h-5 text-[#D4AF37] transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </section>

        {/* ── THE REST ─────────────────────────────────────────── */}
        <section className="container mx-auto px-4 max-w-6xl py-14 md:py-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B4D3E] m-0">Everything else</h2>
            <span className="flex-1 h-px bg-[#1B4D3E]/15" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {rest.map((cs) => (
              <Link
                key={cs.link}
                to={cs.link}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-black/5 shadow-[0_10px_30px_-18px_rgba(10,47,36,0.5)] hover:shadow-[0_20px_44px_-20px_rgba(10,47,36,0.55)] hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={cs.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute bottom-3 left-3">
                    <CategoryTag light>{cs.category}</CategoryTag>
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-[#A8801A] font-bold text-xs tracking-wide mb-1.5">{cs.kicker}</p>
                  <h3 className="font-playfair text-xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#1B4D3E] transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 mb-5">
                    {cs.description}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-gray-400 text-xs font-semibold">{cs.read} read</span>
                    <span className="inline-flex items-center gap-1.5 text-[#1B4D3E] font-bold text-sm">
                      Read
                      <ArrowRight className="w-4 h-4 text-[#D4AF37] transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── FROM THE FIELD — job-site photos as visual proof ──── */}
        <section className="bg-[#0A2F24] py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-8">
              <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs mb-2 block">From the Field</span>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white m-0">
                Real Art-is-Tree job sites across Virginia Beach
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
              {FIELD_PHOTOS.map((photo) => (
                <figure key={photo.src} className="m-0 overflow-hidden rounded-xl ring-1 ring-white/10 bg-white/5 group">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover aspect-[3/4] transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesIndexPage;
