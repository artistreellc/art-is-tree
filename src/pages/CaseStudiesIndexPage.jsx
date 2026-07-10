import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import LocalSEOMeta from '@/components/LocalSEOMeta';

const caseStudiesData = [
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
    title: "Unlicensed Contractors Case Study",
    description: "Understand the risks of hiring unlicensed contractors and why licensed, professional tree care is essential for your property.",
    link: "/case-studies/unlicensed-contractors",
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
               Our Case Studies
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
      </div>
    </>
  );
};

export default CaseStudiesIndexPage;