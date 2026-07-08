
import React, { useEffect } from 'react';
import CraneCaseStudy from '@/components/CraneCaseStudy';
import LocalSEOMeta from '@/components/LocalSEOMeta';

const CaseStudyPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <LocalSEOMeta
        pageTitle="Crane Tree Removal Virginia Beach VA | Art-is-Tree LLC"
        description="Crane-assisted tree removal case study in Virginia Beach. See how we safely extract large, hazardous pines near sensitive nesting sites using 100-ton cranes."
      />
      <CraneCaseStudy />
    </>
  );
};

export default CaseStudyPage;
