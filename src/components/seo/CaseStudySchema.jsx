
import React from 'react';
import { Head } from 'vite-react-ssg';
import { useLocation } from 'react-router-dom';
import { generateCanonicalUrl, BASE_URL } from '@/utils/seoHelpers';

// Reuse the Organization node emitted globally by OrganizationSchema instead of
// re-declaring the whole block. Both @ids must match this string exactly.
const ORG_ID = `${BASE_URL}/#organization`;

const CaseStudySchema = ({
  title,
  description,
  imageUrl,
  url,
  // The current repo history only goes back to the 2026-07-07 bulk migration,
  // so honest per-study dates are passed in by each page. These are safe
  // fallbacks, not the wrong "2023-01-01" placeholder they replaced.
  datePublished = "2026-07-07",
  dateModified = "2026-07-15"
}) => {
  const location = useLocation();
  const currentUrl = url ? `${BASE_URL}${url}` : generateCanonicalUrl(location.pathname);

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
        "@id": ORG_ID
      }
    },
    "publisher": {
      "@id": ORG_ID
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
