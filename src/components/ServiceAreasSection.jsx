import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * @param {Object} props
 * @param {string} [props.title]
 */
const ServiceAreasSection = ({ title = "Areas We Serve" }) => {
  // Each city links to its dedicated service-area page, so the homepage (the
  // site's strongest page) passes internal link equity and topical relevance to
  // those pages — helping them rank for "tree service <city>" instead of the
  // homepage cannibalizing the term. Kempsville is a Virginia Beach neighborhood
  // with no standalone page, so it stays a plain label.
  const areas = [
    { name: "Virginia Beach", path: "/service-areas/virginia-beach" },
    { name: "Norfolk", path: "/service-areas/norfolk" },
    { name: "Chesapeake", path: "/service-areas/chesapeake" },
    { name: "Portsmouth", path: "/service-areas/portsmouth" },
    { name: "Kempsville", path: null },
  ];

  const pillBase = "bg-white border border-gray-200 px-6 py-3 rounded-full flex items-center gap-2 shadow-sm hover:border-[#D4AF37] hover:shadow-md transition-all";

  return (
    <section className="py-16 bg-[#1B4D3E]/5 border-y border-[#1B4D3E]/10" id="service-areas">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="font-playfair text-3xl font-bold text-[#1B4D3E] mb-4">{title}</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">Proudly providing top-tier tree care services across the Hampton Roads region. Explore tree service in your city:</p>
        <div className="flex flex-wrap justify-center gap-4">
          {areas.map((area) => (
            area.path ? (
              <Link
                key={area.name}
                to={area.path}
                aria-label={`Tree service in ${area.name}`}
                className={`${pillBase} font-medium text-gray-800 hover:text-[#1B4D3E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2`}
              >
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>{area.name}</span>
              </Link>
            ) : (
              <div key={area.name} className={pillBase}>
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-medium text-gray-800">{area.name}</span>
              </div>
            )
          ))}
        </div>
        <div className="mt-10">
          <Link to="/service-areas" className="text-[#1B4D3E] font-bold hover:underline underline-offset-4 decoration-[#D4AF37]">
            View full service area map &amp; details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
