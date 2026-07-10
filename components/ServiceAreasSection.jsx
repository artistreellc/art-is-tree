import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * @param {Object} props
 * @param {string} [props.title]
 */
const ServiceAreasSection = ({ title = "Areas We Serve" }) => {
  const areas = [
    "Virginia Beach",
    "Norfolk",
    "Chesapeake",
    "Portsmouth",
    "Suffolk",
    "Kempsville"
  ];

  return (
    <section className="py-16 bg-[#1B4D3E]/5 border-y border-[#1B4D3E]/10" id="service-areas">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="font-playfair text-3xl font-bold text-[#1B4D3E] mb-4">{title}</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">Proudly providing top-tier tree care services across the Hampton Roads region.</p>
        <div className="flex flex-wrap justify-center gap-4">
          {areas.map((area, index) => (
            <div 
              key={index}
             
             
              className="bg-white border border-gray-200 px-6 py-3 rounded-full flex items-center gap-2 shadow-sm hover:border-[#D4AF37] hover:shadow-md transition-all"
            >
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-medium text-gray-800">{area}</span>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/service-areas" className="text-[#1B4D3E] font-bold hover:underline underline-offset-4 decoration-[#D4AF37]">
            View full service area map & details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;