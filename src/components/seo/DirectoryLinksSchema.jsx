
import React from 'react';
import { Head } from 'vite-react-ssg';
import { useLocation } from 'react-router-dom';
import { ldJson, generateCanonicalUrl } from '@/utils/seoHelpers';

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
        { "@type": "ListItem", "position": 1, "url": "https://www.yelp.com/biz/art-is-tree-virginia-beach-3" },
        { "@type": "ListItem", "position": 2, "url": "https://www.angi.com/companylist/us/va/virginia-beach/art-is-tree-llc-reviews-10302177.htm" },
        { "@type": "ListItem", "position": 3, "url": "https://www.homeadvisor.com/rated.ArtistreeOfVirginia.118108285.html" },
        { "@type": "ListItem", "position": 4, "url": "https://www.bbb.org/us/va/virginia-beach/profile/tree-service/art-is-tree-llc-0583-90336149" }
      ]
    }
  };

  return (
    <Head>
      <script type="application/ld+json">
        {ldJson(schema)}
      </script>
    </Head>
  );
};

export default DirectoryLinksSchema;
