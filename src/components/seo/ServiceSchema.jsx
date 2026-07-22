
import React from 'react';
import { Head } from 'vite-react-ssg';
import { useLocation } from 'react-router-dom';
import { ldJson, generateCanonicalUrl, BASE_URL } from '@/utils/seoHelpers';

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
    // Reference the fully-defined Organization node (emitted globally in the
    // layout) instead of re-declaring an incomplete LocalBusiness inline —
    // this clears Semrush's structured-data markup error and keeps a single,
    // clean business entity for search engines and AI to resolve.
    "provider": {
      "@id": `${BASE_URL}/#organization`
    },
    "areaServed": serviceAreas.map(area => ({
      "@type": "City",
      "name": area
    }))
  };

  return (
    <Head>
      <script type="application/ld+json">
        {ldJson(schema)}
      </script>
    </Head>
  );
};

export default ServiceSchema;
