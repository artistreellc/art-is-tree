
import React from 'react';
import { Head } from 'vite-react-ssg';
import { useLocation } from 'react-router-dom';
import { generateCanonicalUrl } from '@/utils/seoHelpers';

const SocialMediaPostingSchema = () => {
  const location = useLocation();
  const currentUrl = generateCanonicalUrl(location.pathname);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
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
