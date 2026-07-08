
import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { generateCanonicalUrl, stripWww } from '@/utils/seoHelpers';

const LocalSEOMeta = ({ 
  pageTitle,
  description, 
  keywords, 
  ogImage,
  structuredData,
  noindex = false
}) => {
  const location = useLocation();
  
  // Enforce pure dynamic canonical URLs based on the active path instead of hardcoded overrides
  const canonicalUrl = useMemo(() => {
    return generateCanonicalUrl(location.pathname);
  }, [location.pathname]);
  
  const ogUrl = useMemo(() => canonicalUrl, [canonicalUrl]);
  
  const ogImageUrl = useMemo(() => {
    const defaultOgImage = 'https://horizons-cdn.hostinger.com/1ec5599f-e2e5-4afa-b25c-06e1360f6589/d020f44d77156debf187e715175abef2.png';
    return stripWww(ogImage || defaultOgImage);
  }, [ogImage]);

  const structuredDataString = useMemo(() => {
    return structuredData ? JSON.stringify(structuredData) : null;
  }, [structuredData]);

  // Combine default local SEO keywords with explicit ones
  const localKeywords = "tree service Virginia Beach, tree removal Norfolk VA, tree trimming Chesapeake, emergency tree service Hampton Roads, licensed tree company near me";
  const finalKeywords = keywords ? `${keywords}, ${localKeywords}` : localKeywords;

  return (
    <Helmet>
      {pageTitle && <title>{pageTitle}</title>}
      {description && <meta name="description" content={description} />}
      <meta name="keywords" content={finalKeywords} />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      <link rel="canonical" href={canonicalUrl} />
      
      {pageTitle && <meta property="og:title" content={pageTitle} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:type" content="website" />
      
      {pageTitle && <meta name="twitter:title" content={pageTitle} />}
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImageUrl} />
      
      {structuredDataString && (
        <script type="application/ld+json">
          {structuredDataString}
        </script>
      )}
    </Helmet>
  );
};

export default LocalSEOMeta;
