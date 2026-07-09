
import React from 'react';
import { Head } from 'vite-react-ssg';
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
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Head>
  );
};

export default ServiceSchema;
