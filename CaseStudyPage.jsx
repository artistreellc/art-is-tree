
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import CraneCaseStudy from '@/components/CraneCaseStudy';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import Breadcrumbs from '@/components/Breadcrumbs';

const CaseStudyPage = () => {
  return (
    <>
      <LocalSEOMeta 
        pageTitle="Crane Tree Removal | Virginia Beach Large Tree Service | Art-is-Tree LLC" 
        description="Crane-assisted tree removal case study in Virginia Beach. See how we safely extract hazardous pines near endangered nesting sites using 100-ton cranes." 
      />

      <div className="pt-24 pb-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-[#1B4D3E] hover:text-[#D4AF37] transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" />
            &larr; Back to Case Studies
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={[
          { label: 'Home', path: '/' },
          { label: 'Case Studies', path: '/case-studies' },
          { label: 'Crane Safety', path: '/case-studies/crane-safety' },
        ]} />
      </div>

      <CraneCaseStudy />
    </>
  );
};

export default CaseStudyPage;
