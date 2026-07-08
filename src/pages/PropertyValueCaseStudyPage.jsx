
import React, { useEffect } from 'react';
import PropertyValueCaseStudy from '@/components/PropertyValueCaseStudy';
import LocalSEOMeta from '@/components/LocalSEOMeta';

const PropertyValueCaseStudyPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <LocalSEOMeta
        pageTitle="Property Value Tree Care Virginia Beach VA | Art-is-Tree LLC"
        description="How professional tree care raises property values in Virginia Beach and Hampton Roads. Real ROI data from strategic trimming and maintenance. Licensed and insured."
      />
      <PropertyValueCaseStudy onNextCaseStudy={() => window.location.href = '/case-studies/chesapeake-bay-preservation-act'} />
    </>
  );
};

export default PropertyValueCaseStudyPage;
