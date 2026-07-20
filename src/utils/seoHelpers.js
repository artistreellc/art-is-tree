
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
 * Serialize a JSON-LD object for embedding in a <script type="application/ld+json">.
 *
 * The SSG (vite-react-ssg) injects the rendered app into the HTML template with
 * String.prototype.replace(placeholder, appHtml). In that call appHtml is the
 * *replacement* argument, so any "$$" (and "$&", "$`", "$'") inside it is
 * interpreted as a replacement pattern and collapsed — e.g. priceRange "$$"
 * silently became "$". Escaping every "$" as its JSON unicode escape ($)
 * removes all literal "$" from the emitted string while JSON.parse still yields
 * the exact original value, so answer engines and crawlers read it correctly.
 */
export const ldJson = (obj) => JSON.stringify(obj).replace(/\$/g, '\\u0024');

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
  generateOgImageUrl,
  ldJson
};
