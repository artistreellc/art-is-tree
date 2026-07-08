
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { generateCanonicalUrl } from '@/utils/seoHelpers';

const DirectoryLinksSchema = () => {
  const location = useLocation();
  const currentUrl = generateCanonicalUrl(location.pathname);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": currentUrl,
    "mainEntity": {
      "@type": "ItemList",
      "name": "Art-is-Tree LLC Business Directories",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "url": "https://www.yelp.com/biz/art-is-tree-virginia-beach-5" },
        { "@type": "ListItem", "position": 2, "url": "https://www.angi.com/companylist/us/va/virginia-beach/art-is-tree-llc.htm" },
        { "@type": "ListItem", "position": 3, "url": "https://www.homeadvisor.com/rated.ArtisTreeLLC.html" },
        { "@type": "ListItem", "position": 4, "url": "https://www.bbb.org/us/va/virginia-beach/profile/tree-service/art-is-tree-llc" }
      ]
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

export default DirectoryLinksSchema;
