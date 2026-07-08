
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PropertyValueCaseStudy from '@/components/PropertyValueCaseStudy';
import LocalSEOMeta from '@/components/LocalSEOMeta';
import Breadcrumbs from '@/components/Breadcrumbs';

const PropertyValueCaseStudyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <LocalSEOMeta 
        pageTitle="Property Value | Tree Service Case Study | Art-is-Tree LLC" 
        description="How professional tree care increases property values in Virginia Beach. Real ROI data from strategic tree trimming and maintenance. Licensed and insured." 
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
          { label: 'Property Value', path: '/case-studies/property-value' },
        ]} />
      </div>

      <PropertyValueCaseStudy onNextCaseStudy={() => window.location.href = '/case-studies/chesapeake-bay'} />
    </>
  );
};

export default PropertyValueCaseStudyPage;
