import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import LocalSEOMeta from '@/components/LocalSEOMeta';

const caseStudiesData = [
  {
    title: "Where Your Tree Goes After We Take It Down",
    description: "What really happens to your tree after removal — chips burned for biomass power and turned into mulch, logs sent to the West Point and Franklin paper mills as pulpwood, the big chunks split for firewood, and why your yard tree isn't the lumber gold mine people think it is. Plus the one thing that can't be recycled.",
    link: "/case-studies/where-your-tree-goes",
  },
  {
    title: "How to Choose a Tree Service in Virginia Beach",
    description: "An honest guide from the owner on hiring the right tree service — how to read recent reviews, why you should get a written quote from every company, what to verify (licensed, insured, BBB A+), and the real reason a good company welcomes you shopping around.",
    link: "/case-studies/how-to-choose-a-tree-service",
  },
  {
    title: "Spikeless Pruning & Bucket Truck Methods",
    description: "Discover why spikeless pruning and bucket truck methods are the professional standard for tree health and how we protect your trees.",
    link: "/case-studies/spikeless-pruning",
  },
  {
    title: "Emerald Ash Borer: The 200-Year-Old Church Ash",
    description: "A first-person account of removing a massive, emerald ash borer–killed ash tree over a church altar and day-school play area in Kempsville — a rotten, cabled union that needed a crane.",
    link: "/case-studies/emerald-ash-borer",
  },
  {
    title: "OSHA Case Study",
    description: "Learn about workplace safety compliance and how proper tree care practices meet OSHA standards to protect workers and property.",
    link: "/case-studies/osha-compliance",
  },
  {
    title: "Property Value Case Study",
    description: "Discover how professional tree care and landscape management directly impact property values and curb appeal.",
    link: "/case-studies/property-value",
  },
  {
    title: "Virginia Tree Law: The Tree on the Property Line",
    description: "A first-person case study on Virginia tree and timber law — the self-help rule from Fancher v. Fagella, treble-damages liability for cutting a tree that isn't yours, and how to handle a neighbor dispute the right way.",
    link: "/case-studies/virginia-tree-law",
  },
  {
    title: "Chesapeake Bay Case Study",
    description: "See how environmental stewardship and proper tree management contribute to protecting the Chesapeake Bay ecosystem.",
    link: "/case-studies/chesapeake-bay-preservation-act",
  },
  {
    title: "Crane-Assisted Tree Removal Case Study",
    description: "Discover how crane-assisted tree removal ensures the safe and efficient extraction of massive or hazardous trees in tight urban spaces with zero impact to surrounding structures.",
    link: "/case-studies/crane-safety",
  },
  {
    title: "After the Storm: Hurricane & Tornado Damage",
    description: "A first-person account of storm-damaged tree work in Virginia Beach — what to look for before a hurricane, why storm cleanup is so dangerous, and two real jobs: a root-failed tree rigged by hand with no crane access, and tornado-snapped pines at Broad Bay Island.",
    link: "/case-studies/storm-damage-mitigation",
  },
  {
    title: "The Hampton Roads Guide to Affordable Tree Work",
    description: "Straight talk from the owner on making tree work affordable — not cheap: phasing projects, keeping chips and wood on site, skipping the stump, military/first responder/senior discounts, what a bid really pays for, and why a 3–5 year pruning cycle is the cheapest tree care there is.",
    link: "/case-studies/affordable-tree-work",
  }
];

const CaseStudiesIndexPage = () => {
  return (
    <>
      <LocalSEOMeta 
        pageTitle="Tree Service Case Studies | Virginia Beach VA" 
        description="Real-world tree care success stories from Virginia Beach. Detailed case studies showcasing crane removals, safety protocols, and environmental stewardship." 
      />

      <div className="min-h-screen bg-gray-50 pt-0">
        <div className="bg-[#1B4D3E] py-16 md:py-24 border-b border-[#12362b] text-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
             <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4 block">Proven Expertise</span>
             <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
               ART-icles
             </h1>
             <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed">
               Welcome to our deep dive into some of the most challenging and rewarding projects we've completed at Art-is-Tree LLC. By reviewing these case studies, you'll gain a deeper understanding of our rigorous safety standards, technical proficiency, and our unwavering commitment to protecting property value and the natural landscape across Virginia Beach.
             </p>
          </div>
        </div>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudiesData.map((caseStudy, index) => (
                <div
                  key={index}
                 
                 
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group h-full"
                >
                  <Link to={caseStudy.link} className="p-8 flex flex-col flex-grow h-full focus:outline-none focus:ring-2 focus:ring-[#1B4D3E] focus:ring-offset-2 rounded-2xl">
                    <div className="flex items-center gap-2 text-[#1B4D3E] mb-6">
                      <BookOpen className="w-6 h-6 text-[#D4AF37]" />
                      <span className="text-sm font-bold uppercase tracking-wider">Project Review</span>
                    </div>
                    <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4 group-hover:text-[#1B4D3E] transition-colors">
                      {caseStudy.title}
                    </h2>
                    <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                      {caseStudy.description}
                    </p>
                    <div className="inline-flex items-center text-[#1B4D3E] font-bold group/link mt-auto pt-4 border-t border-gray-100">
                      Read Full Case Study
                      <ArrowRight className="w-5 h-5 ml-2 transform group-hover:-translate-x-[-4px] transition-transform text-[#D4AF37]" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FROM THE FIELD — real job-site photos as visual proof between the written case studies */}
        <section className="pb-16 md:pb-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-8">
              <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2 block">From the Field</span>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900">Real Art-is-Tree job sites across Virginia Beach</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
              {[
                { src: '/images/virginia-beach-branded-tree-service-truck.webp', alt: 'Art-is-Tree LLC branded tree service truck on a job site near the Virginia Beach Municipal Center (Courthouse), VA' },
                { src: '/images/virginia-beach-backyard-pine-removal.webp', alt: 'Art-is-Tree groundman working a backyard pine removal in Kings Grant, Virginia Beach, VA' },
                { src: '/images/virginia-beach-driveway-protection-removal.webp', alt: 'Driveway protected with cones and plywood during a tree removal in Red Mill, Virginia Beach, VA' },
                { src: '/images/virginia-beach-stump-grinding-cleanup.webp', alt: 'Stump grinding and site cleanup after a tree removal in Virginia Beach, VA 23462' },
                { src: '/images/virginia-beach-night-storm-response-truck.webp', alt: "Art-is-Tree bucket truck on an after-hours storm response job at Chic's Beach, Virginia Beach, VA" },
              ].map((photo) => (
                <figure key={photo.src} className="overflow-hidden rounded-xl border border-black/5 ring-1 ring-black/5 shadow-[0_10px_24px_-12px_rgba(10,47,36,0.4)] bg-gray-100 group">
                  <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" className="w-full h-full object-cover aspect-[3/4] transition-transform duration-500 group-hover:scale-[1.04]" />
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