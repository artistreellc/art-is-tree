import React from 'react';
import { Head } from 'vite-react-ssg';
import { useLocation } from 'react-router-dom';
import { ldJson, generateCanonicalUrl } from '@/utils/seoHelpers';

const GeoSchema = () => {
  const location = useLocation();
  const currentUrl = generateCanonicalUrl(location.pathname);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Art-is-Tree LLC Headquarters",
    "url": currentUrl,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.7335,
      "longitude": -76.0726
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2597 Nestlebrook Trl",
      "addressLocality": "Virginia Beach",
      "addressRegion": "VA",
      "postalCode": "23456",
      "addressCountry": "US"
    }
  };

  return (
    <Head>
      <script type="application/ld+json">
        {ldJson(schema)}
      </script>
    </Head>
  );
};

export default GeoSchema;