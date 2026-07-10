import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SERVICES = [
  { name: 'Tree Removal', path: '/services/tree-removal' },
  { name: 'Tree Trimming & Pruning', path: '/services/tree-trimming' },
  { name: 'Stump Grinding', path: '/services/stump-grinding' },
  { name: 'Emergency Tree Service', path: '/services/emergency-tree-service' },
  { name: 'Crane Tree Removal', path: '/services/crane-removal' },
  { name: 'Land Clearing', path: '/services/land-clearing' },
];

const ServiceLinks = ({ cityName = 'Hampton Roads' }) => (
  <section className="py-12 bg-gray-50 border-t border-gray-100">
    <div className="container mx-auto px-4 max-w-5xl text-center">
      <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B4D3E] mb-3">
        Our Tree Services in {cityName}
      </h2>
      <p className="text-gray-600 mb-6">Full-service tree care, licensed and insured:</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {SERVICES.map(s => (
          <Link key={s.path} to={s.path}
            className="flex items-center justify-between gap-2 bg-white hover:bg-[#1B4D3E] hover:text-white text-[#1B4D3E] font-semibold px-4 py-3 rounded-lg border border-gray-200 transition-colors text-left">
            <span>{s.name}</span> <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceLinks;
