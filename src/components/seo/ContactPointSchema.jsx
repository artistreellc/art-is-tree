
import React from 'react';
import { Helmet } from 'react-helmet-async';
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
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default ContactPointSchema;
