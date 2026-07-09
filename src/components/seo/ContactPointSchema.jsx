
import React from 'react';
import { Head } from 'vite-react-ssg';
import { useLocation } from 'react-router-dom';
import { generateCanonicalUrl } from '@/utils/seoHelpers';

const ContactPointSchema = () => {
  const location = useLocation();
  const currentUrl = generateCanonicalUrl(location.pathname);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "telephone": "+1-757-319-5131",
    "contactType": "customer service",
    "email": "artistreeofvirginia@gmail.com",
    "areaServed": "US",
    "availableLanguage": "en",
    "url": currentUrl
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Head>
  );
};

export default ContactPointSchema;
