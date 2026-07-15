import React from 'react';
import { Head } from 'vite-react-ssg';
import { useLocation } from 'react-router-dom';
import { generateCanonicalUrl, BASE_URL } from '@/utils/seoHelpers';
import { COMPANY_INFO } from '@/constants/seoMetadata';

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
    "@id": `${BASE_URL}/#organization`,
    "telephone": "(757) 319-5131",
    "email": "artistreeofvirginia@gmail.com",
    "logo": COMPANY_INFO.logo,
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
      }
    ],
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
      }
    ],
    "sameAs": COMPANY_INFO.sameAs,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "(757) 319-5131",
      "email": "artistreeofvirginia@gmail.com",
      "contactType": "customer service",
      "availableLanguage": "en"
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

export default OrganizationSchema;
