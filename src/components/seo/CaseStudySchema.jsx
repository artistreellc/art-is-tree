
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { generateCanonicalUrl } from '@/utils/seoHelpers';

const CaseStudySchema = ({ 
  title, 
  description, 
  imageUrl, 
  url,
  datePublished = "2023-01-01",
  dateModified = new Date().toISOString().split('T')[0]
}) => {
  const location = useLocation();
  const currentUrl = url ? `https://artistreevabeach.com${url}` : generateCanonicalUrl(location.pathname);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": currentUrl
    },
    "headline": title,
    "description": description,
    "image": imageUrl ? [imageUrl] : [],
    "datePublished": datePublished,
    "dateModified": dateModified,
    "url": currentUrl,
    "author": {
      "@type": "Organization",
      "name": "Art-is-Tree LLC",
      "url": "https://artistreevabeach.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Art-is-Tree LLC",
      "logo": {
        "@type": "ImageObject",
        "url": "https://artistreevabeach.com/logo.png"
      }
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

export default CaseStudySchema;
