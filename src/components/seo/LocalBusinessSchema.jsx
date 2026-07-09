import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { generateCanonicalUrl } from '@/utils/seoHelpers';

const LocalBusinessSchema = () => {
  const location = useLocation();
  const currentUrl = generateCanonicalUrl(location.pathname);

  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "name": "Art-is-Tree LLC",
    "image": "https://artistreevabeach.com/logo.png",
    "@id": `${currentUrl}/#localbusiness`,
    "url": currentUrl,
    "telephone": "(757) 319-5131",
    "email": "artistreeofvirginia@gmail.com",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "134",
      "bestRating": "5",
      "worstRating": "1"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2597 Nestlebrook Trl",
      "addressLocality": "Virginia Beach",
      "addressRegion": "VA",
      "postalCode": "23456",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.7335,
      "longitude": -76.0726
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Virginia Beach" },
      { "@type": "City", "name": "Norfolk" },
      { "@type": "City", "name": "Chesapeake" },
      { "@type": "City", "name": "Portsmouth" },
      { "@type": "City", "name": "Suffolk" },
      { "@type": "City", "name": "Hampton" },
      { "@type": "City", "name": "Newport News" }
    ],
    "sameAs": [
      "https://www.yelp.com/biz/art-is-tree-virginia-beach-5",
      "https://www.angi.com/companylist/us/va/virginia-beach/art-is-tree-llc.htm",
      "https://www.homeadvisor.com/rated.ArtisTreeLLC.html",
      "https://www.bbb.org/us/va/virginia-beach/profile/tree-service/art-is-tree-llc",
      "https://www.facebook.com/artistreevabeach"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tree Care Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tree Removal" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tree Trimming" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tree Pruning" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stump Grinding" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Tree Service" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Crane Tree Removal" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Land Clearing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tree Care Services" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lot Clearing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hazardous Tree Removal" } }
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

export default LocalBusinessSchema;
