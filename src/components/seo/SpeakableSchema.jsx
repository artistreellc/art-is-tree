
import React from 'react';
import { Head } from 'vite-react-ssg';
import { useLocation } from 'react-router-dom';
import { ldJson, generateCanonicalUrl } from '@/utils/seoHelpers';

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
    <Head>
      <script type="application/ld+json">
        {ldJson(schema)}
      </script>
    </Head>
  );
};

export default SpeakableSchema;
