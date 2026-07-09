
import React from 'react';
import { Head } from 'vite-react-ssg';
import { useLocation } from 'react-router-dom';
import { generateCanonicalUrl } from '@/utils/seoHelpers';

const BreadcrumbListSchema = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const itemListElement = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": generateCanonicalUrl('/')
    }
  ];

  pathnames.forEach((name, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
    const formattedName = name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    itemListElement.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": formattedName,
      "item": generateCanonicalUrl(routeTo)
    });
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Head>
  );
};

export default BreadcrumbListSchema;
