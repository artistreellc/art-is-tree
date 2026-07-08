
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { generateCanonicalUrl } from '@/utils/seoHelpers';

const SpeakableSchema = () => {
  const location = useLocation();
  const currentUrl = generateCanonicalUrl(location.pathname);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": currentUrl,
    "name": "Art-is-Tree LLC",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".speakable", "h1", "h2"]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SpeakableSchema;
