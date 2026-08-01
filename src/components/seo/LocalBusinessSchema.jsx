
import React from 'react';
import { Head } from 'vite-react-ssg';
import { BASE_URL, ldJson } from '@/utils/seoHelpers';
import { COMPANY_INFO } from '@/constants/seoMetadata';

const LocalBusinessSchema = () => {

  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "name": "Art-is-Tree LLC",
    "alternateName": COMPANY_INFO.alternateName,
    "image": COMPANY_INFO.logo,
    "@id": `${BASE_URL}/#localbusiness`,
    "parentOrganization": { "@id": `${BASE_URL}/#organization` },
    "url": BASE_URL,
    "telephone": "(757) 319-5131",
    "email": "artistreeofvirginia@gmail.com",
    "founder": { "@type": "Person", "name": "Mike Campbell" },
    "priceRange": "$$",
    "paymentAccepted": "Cash, Check, Credit Card",
    "currenciesAccepted": "USD",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": COMPANY_INFO.rating.value,
      "reviewCount": COMPANY_INFO.rating.reviewCount,
      "bestRating": COMPANY_INFO.rating.best,
      "worstRating": COMPANY_INFO.rating.worst
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Virginia Beach",
      "addressRegion": "VA",
      "postalCode": "23456",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": COMPANY_INFO.geo.latitude,
      "longitude": COMPANY_INFO.geo.longitude
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
      { "@type": "City", "name": "Portsmouth"  }
    ],
    "sameAs": COMPANY_INFO.sameAs,
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
    <Head>
      <script type="application/ld+json">
        {ldJson(schema)}
      </script>
    </Head>
  );
};

export default LocalBusinessSchema;
