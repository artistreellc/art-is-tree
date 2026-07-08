import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const AREAS = [
  { name: 'Virginia Beach', path: '/service-areas/virginia-beach' },
  { name: 'Norfolk', path: '/service-areas/norfolk' },
  { name: 'Chesapeake', path: '/service-areas/chesapeake' },
  { name: 'Portsmouth', path: '/service-areas/portsmouth' },
  { name: 'Suffolk', path: '/service-areas/suffolk' },
];

const ServiceAreaLinks = ({ serviceName = 'Tree Service' }) => (
  <section className="py-12 bg-white border-t border-gray-100">
    <div className="container mx-auto px-4 max-w-5xl text-center">
      <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B4D3E] mb-3">
        {serviceName} Across Hampton Roads
      </h2>
      <p className="text-gray-600 mb-6">Licensed, insured service for homeowners and businesses throughout the region:</p>
      <div className="flex flex-wrap justify-center gap-3">
        {AREAS.map(a => (
          <Link key={a.path} to={a.path}
            className="inline-flex items-center gap-2 bg-gray-50 hover:bg-[#1B4D3E] hover:text-white text-[#1B4D3E] font-semibold px-5 py-2.5 rounded-full border border-gray-200 transition-colors">
            <MapPin className="w-4 h-4" /> {a.name}
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceAreaLinks;
