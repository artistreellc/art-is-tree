
import React, { useEffect } from 'react';
import PropertyValueCaseStudy, { PROPERTY_VALUE_DESCRIPTION } from '@/components/PropertyValueCaseStudy';
import LocalSEOMeta from '@/components/LocalSEOMeta';

const PropertyValueCaseStudyPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <LocalSEOMeta
        pageTitle="Property Value Tree Care Virginia Beach VA | Art-is-Tree LLC"
        description={PROPERTY_VALUE_DESCRIPTION}
      />
      <PropertyValueCaseStudy onNextCaseStudy={() => window.location.href = '/case-studies/chesapeake-bay-preservation-act'} />
    </>
  );
};

export default PropertyValueCaseStudyPage;
