
import React from 'react';
import { Head } from 'vite-react-ssg';
import { useLocation } from 'react-router-dom';
import { generateCanonicalUrl, BASE_URL } from '@/utils/seoHelpers';

const SocialMediaPostingSchema = () => {
  const location = useLocation();
  const currentUrl = generateCanonicalUrl(location.pathname);

  // Reference the single canonical Organization entity by @id instead of
  // emitting a competing, anonymous "Art-is-Tree LLC" node. This keeps the
  // business represented by one entity graph-wide, so the rated node stays
  // unambiguous and can never accrue a second aggregate rating.
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    "name": "Art-is-Tree LLC",
    "url": currentUrl,
    "sameAs": [
      "https://www.facebook.com/artistreeva",
      "https://www.instagram.com/artistreeva",
      "https://www.linkedin.com/company/artistreevabeach"
    ]
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Head>
  );
};

export default SocialMediaPostingSchema;
