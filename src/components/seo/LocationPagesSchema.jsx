import React from 'react';
import { Head } from 'vite-react-ssg';
import { useLocation } from 'react-router-dom';
import { generateCanonicalUrl } from '@/utils/seoHelpers';

const LocationPagesSchema = ({ cityName, description }) => {
  const location = useLocation();
  const currentUrl = generateCanonicalUrl(location.pathname);

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Art-is-Tree LLC - ${cityName}`,
    "url": currentUrl,
    "description": description,
    "areaServed": {
      "@type": "City",
      "name": cityName
    },
    "provider": {
      "@type": "Organization",
      "name": "Art-is-Tree LLC"
    }
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Head>
  );
};

export default LocationPagesSchema;