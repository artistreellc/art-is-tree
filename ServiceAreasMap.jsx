import React from 'react';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const ServiceAreasMap = ({ className }) => {
  return (
    <div 
     
     
      className={cn("w-full max-w-6xl mx-auto", className)}
    >
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-playfair font-bold text-[#1B4D3E] flex items-center gap-2 mt-0">
              <MapPin className="w-6 h-6 text-[#D4AF37]" />
              Our Coverage Map
            </h2>
            <p className="text-gray-600 font-inter text-sm md:text-base mt-1">
              Serving residential and commercial properties across Hampton Roads
            </p>
          </div>
        </div>
        <div className={cn("w-full rounded-xl overflow-hidden shadow-lg border border-gray-200", className)}>
          <iframe
            title="Art-is-Tree LLC Service Area — Virginia Beach"
            src="https://www.google.com/maps?q=2597+Nestlebrook+Trl,+Virginia+Beach,+VA+23456&output=embed"
            className="w-full h-[400px] md:h-[500px] border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(ServiceAreasMap);