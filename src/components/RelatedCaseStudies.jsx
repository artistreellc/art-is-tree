import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
const CASE_STUDIES = [
  { title: "Crane-Assisted Removal", path: "/case-studies/crane-safety", category: "Hazard Mitigation" },
  { title: "Waterfront Property Management", path: "/case-studies/chesapeake-bay-preservation-act", category: "Environmental Care" },
  { title: "Emerald Ash Borer Removal", path: "/case-studies/emerald-ash-borer", category: "Tree Health" },
  { title: "OSHA Compliance & Safety Standards", path: "/case-studies/osha-compliance", category: "Safety" },
  { title: "Property Value Enhancement", path: "/case-studies/property-value", category: "Real Estate" },
  { title: "Virginia Tree Law", path: "/case-studies/virginia-tree-law", category: "Consumer Protection" },
  { title: "Advanced Spikeless Pruning", path: "/case-studies/spikeless-pruning", category: "Technique" },
  { title: "Storm & Hurricane Damage", path: "/case-studies/storm-damage-mitigation", category: "Storm Response" },
  { title: "Affordable Tree Work Guide", path: "/case-studies/affordable-tree-work", category: "Cost & Value" }
];

/**
 * Related Case Studies grid.
 * @param {string}   currentPath - path of the current page, excluded from the list.
 * @param {string[]} preferred   - topically relevant case-study paths to surface first.
 * @param {number}   count       - how many to show (default 3).
 */
const RelatedCaseStudies = ({ currentPath, preferred = [], count = 3 }) => {
  const pool = CASE_STUDIES.filter(cs => cs.path !== currentPath);
  const ordered = [
    ...preferred.map(p => pool.find(cs => cs.path === p)).filter(Boolean),
    ...pool.filter(cs => !preferred.includes(cs.path))
  ];
  const seen = new Set();
  const related = ordered.filter(cs => {
    if (seen.has(cs.path)) return false;
    seen.add(cs.path);
    return true;
  }).slice(0, count);

  if (related.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-playfair text-3xl font-bold text-[#1B4D3E] mb-2">Related Case Studies</h2>
            <p className="text-gray-600 font-inter">Explore more of our professional tree care projects across Hampton Roads.</p>
          </div>
          <Link to="/case-studies" className="hidden md:flex items-center text-[#1B4D3E] hover:text-[#D4AF37] font-bold transition-colors">
            View All Projects <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {related.map((study, index) => (
            <div
              key={study.path}
             
             
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group p-6 border border-gray-100"
            >
              <div className="mb-4">
                <span className="inline-block bg-[#1B4D3E] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {study.category}
                </span>
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#1B4D3E] mb-3 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                <Link to={study.path}>{study.title}</Link>
              </h3>
              <Link to={study.path} className="inline-flex items-center text-[#D4AF37] font-semibold hover:text-[#b08d2b] transition-colors mt-2">
                Read Case Study <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link to="/case-studies" className="inline-flex items-center text-[#1B4D3E] hover:text-[#D4AF37] font-bold transition-colors">
            View All Projects <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedCaseStudies;
