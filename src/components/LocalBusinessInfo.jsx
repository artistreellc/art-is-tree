
import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';

/**
 * @param {Object} props
 */
const LocalBusinessInfo = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col md:flex-row gap-8 justify-between items-center">
          
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-playfair text-2xl font-bold text-[#1B4D3E] mb-2">Art-is-Tree LLC</h3>
            <p className="text-gray-600 mb-4">Professional Tree Care & Removal Services</p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Virginia Beach, VA 23456</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>(757) 319-5131</span>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white p-6 rounded-xl border border-gray-100 w-full max-w-sm">
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <Clock className="w-5 h-5 text-[#1B4D3E]" />
              <h4 className="font-bold text-gray-900">Business Hours</h4>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex justify-between border-b border-gray-50 pb-1">
                <span>Available</span>
                <span className="font-medium text-gray-900">Open 24/7</span>
              </li>
              <li className="flex justify-between">
                <span>Services</span>
                <span className="font-medium text-gray-900">Round-the-clock Care</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocalBusinessInfo;
