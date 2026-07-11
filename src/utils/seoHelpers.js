
export const BASE_URL = 'https://artistreevabeach.com';
export const BASE_DOMAIN = 'artistreevabeach.com';

/**
 * Strip www from URL to normalize to non-www format
 */
export const stripWww = (url) => {
  if (!url) return url;
  return url.replace(/^https?:\/\/www\./, 'https://');
};

/**
 * Normalize URL to non-www format
 */
export const normalizeUrl = (url) => {
  if (!url) return BASE_URL;
  
  if (url.startsWith('/')) {
    return `${BASE_URL}${url}`;
  }
  
  return stripWww(url);
};

/**
 * Generate canonical URL for a given path dynamically based on route.
 * Always returns non-www URL referencing the exact current page.
 */
export const generateCanonicalUrl = (pathname) => {
  if (!pathname) return `${BASE_URL}/`;

  // Ensure pathname starts with /
  const safePathname = pathname.startsWith('/') ? pathname : `/${pathname}`;

  // Root keeps its trailing slash (matches sitemap: https://.../ );
  // every other path drops any trailing slash.
  const cleanPath = safePathname === '/' ? '/' : safePathname.replace(/\/$/, '');

  const canonical = `${BASE_URL}${cleanPath}`;
  
  return stripWww(canonical);
};

/**
 * Generate Open Graph image URL
 * Always returns non-www URL
 */
export const generateOgImageUrl = (imagePath) => {
  if (!imagePath) return `${BASE_URL}/og-image.jpg`;
  
  if (imagePath.startsWith('http')) {
    return stripWww(imagePath);
  }
  
  return `${BASE_URL}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}`;
};

/**
 * Check if current URL is www and should redirect
 */
export const shouldRedirectFromWww = () => {
  if (typeof window === 'undefined') return false;
  const hostname = window.location.hostname.toLowerCase();
  return hostname.startsWith('www.');
};

/**
 * Get redirect URL from www to non-www
 */
export const getNonWwwRedirectUrl = () => {
  if (typeof window === 'undefined') return null;
  const url = new URL(window.location.href);
  url.hostname = url.hostname.replace(/^www\./, '');
  return url.toString();
};

export const generateFAQSchema = (faqItems) => {
  if (!faqItems || !Array.isArray(faqItems) || faqItems.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
};

export const generateServiceSchema = (serviceData) => {
  const { name, description, serviceType, url } = serviceData;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "serviceType": serviceType,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Art-is-Tree LLC",
      "url": BASE_URL,
      "telephone": "+17573195131",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2597 Nestlebrook Trl",
        "addressLocality": "Virginia Beach",
        "addressRegion": "VA",
        "postalCode": "23456",
        "addressCountry": "US"
      }
    },
    "url": url ? generateCanonicalUrl(url) : BASE_URL,
    "areaServed": {
      "@type": "State",
      "name": "Virginia"
    }
  };
};

export const generateBreadcrumbSchema = (breadcrumbs) => {
  if (!breadcrumbs || !Array.isArray(breadcrumbs) || breadcrumbs.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url ? generateCanonicalUrl(crumb.url) : BASE_URL
    }))
  };
};

export default {
  BASE_URL,
  BASE_DOMAIN,
  stripWww,
  normalizeUrl,
  generateCanonicalUrl,
  generateOgImageUrl,
  shouldRedirectFromWww,
  getNonWwwRedirectUrl,
  generateFAQSchema,
  generateServiceSchema,
  generateBreadcrumbSchema
};
