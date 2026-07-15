
import React from 'react';
import { Head } from 'vite-react-ssg';
import { useLocation } from 'react-router-dom';
import { generateCanonicalUrl } from '@/utils/seoHelpers';

const CaseStudySchema = ({ 
  title, 
  description, 
  imageUrl, 
  url,
  datePublished = "2024-01-01",
  dateModified = '2026-07-15'
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
      "@type": "Person",
      "name": "Mike Campbell",
      "jobTitle": "Owner & Lead Climber",
      "worksFor": {
        "@type": "Organization",
        "name": "Art-is-Tree LLC",
        "url": "https://artistreevabeach.com"
      }
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
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Head>
  );
};

export default CaseStudySchema;
