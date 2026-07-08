
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { generateCanonicalUrl } from '@/utils/seoHelpers';

const ServiceSchema = ({ name, description, serviceAreas = [] }) => {
  const location = useLocation();
  const currentUrl = generateCanonicalUrl(location.pathname);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": currentUrl,
    "@id": `${currentUrl}/#service`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Art-is-Tree LLC"
    },
    "areaServed": serviceAreas.map(area => ({
      "@type": "City",
      "name": area
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default ServiceSchema;
