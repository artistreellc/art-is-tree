import React from 'react';
import { Head } from 'vite-react-ssg';
import { useLocation } from 'react-router-dom';
import { generateCanonicalUrl } from '@/utils/seoHelpers';

const AggregateRatingSchema = ({ ratingValue = "5.0", reviewCount = "134" }) => {
  const location = useLocation();
  const currentUrl = generateCanonicalUrl(location.pathname);

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Art-is-Tree LLC",
    "image": "https://artistreevabeach.com/logo.png",
    "@id": `${currentUrl}/#localbusiness`,
    "url": currentUrl,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": String(ratingValue),
      "reviewCount": String(reviewCount),
      "bestRating": "5",
      "worstRating": "1",
      "description": "Average rating from verified customers."
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

export default AggregateRatingSchema;
