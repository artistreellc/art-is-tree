
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

export default {
  BASE_URL,
  BASE_DOMAIN,
  stripWww,
  normalizeUrl,
  generateCanonicalUrl,
  generateOgImageUrl
};
