import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { generateCanonicalUrl } from '@/utils/seoHelpers';

const OrganizationSchema = () => {
  const location = useLocation();
  const currentUrl = generateCanonicalUrl(location.pathname);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Art-is-Tree LLC",
    "description": "Professional, fully licensed, and insured tree care experts serving Virginia Beach, Norfolk, and Chesapeake. We bring safety, precision, and artistry to every job.",
    "slogan": "Safety, precision, and artistry in every tree job.",
    "url": currentUrl,
    "@id": `${currentUrl}/#organization`,
    "telephone": "(757) 319-5131",
    "email": "artistreeofvirginia@gmail.com",
    "logo": "https://artistreevabeach.com/logo.png",
    "foundingDate": "2021",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": 10
    },
    "knowsAbout": [
      "Tree Removal",
      "Tree Trimming",
      "Tree Pruning",
      "Stump Grinding",
      "Emergency Tree Service",
      "Hazard Tree Assessment",
      "Arboriculture",
      "Crane Assisted Tree Projects"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "BBB Accredited Business A+ Rating",
        "name": "Better Business Bureau Accreditation"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "TCIA Member",
        "name": "Tree Care Industry Association Member"
      }
    ],
    "priceRange": "$$",
    "paymentAccepted": "Cash, Check, Credit Card",
    "currenciesAccepted": "USD",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2597 Nestlebrook Trl",
      "addressLocality": "Virginia Beach",
      "addressRegion": "VA",
      "postalCode": "23456",
      "addressCountry": "US"
    },
    "areaServed": [
      { 
        "@type": "City", 
        "name": "Virginia Beach",
        "sameAs": "https://en.wikipedia.org/wiki/Virginia_Beach,_Virginia"
      },
      { 
        "@type": "City", 
        "name": "Norfolk",
        "sameAs": "https://en.wikipedia.org/wiki/Norfolk,_Virginia"
      },
      { 
        "@type": "City", 
        "name": "Chesapeake",
        "sameAs": "https://en.wikipedia.org/wiki/Chesapeake,_Virginia"
      },
      { 
        "@type": "City", 
        "name": "Portsmouth",
        "sameAs": "https://en.wikipedia.org/wiki/Portsmouth,_Virginia"
      },
      { 
        "@type": "City", 
        "name": "Suffolk",
        "sameAs": "https://en.wikipedia.org/wiki/Suffolk,_Virginia"
      },
      { 
        "@type": "City", 
        "name": "Hampton",
        "sameAs": "https://en.wikipedia.org/wiki/Hampton,_Virginia"
      },
      { 
        "@type": "City", 
        "name": "Newport News",
        "sameAs": "https://en.wikipedia.org/wiki/Newport_News,_Virginia"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/artistreeva",
      "https://www.instagram.com/artistreeva",
      "https://www.linkedin.com/company/artistreevabeach"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "(757) 319-5131",
      "email": "artistreeofvirginia@gmail.com",
      "contactType": "customer service",
      "availableLanguage": "en"
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

export default OrganizationSchema;