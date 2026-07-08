
/**
 * Client-Side Redirect Component
 * Ensures users accessing the site via www are instantly redirected to the naked domain
 * Uses window.location.replace to simulate a 301 redirect and avoid adding to browser history,
 * preventing redirect loops.
 * 
 * Executes synchronously during the render phase to ensure redirect happens
 * before any other page content is rendered or matched by the router.
 */
const WwwRedirect = () => {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname.toLowerCase();
    
    // Ensure www domain redirects to naked domain to prevent duplicate content
    if (hostname.startsWith('www.')) {
      const newHostname = hostname.replace(/^www\./, '');
      const newUrl = `${window.location.protocol}//${newHostname}${window.location.pathname}${window.location.search}${window.location.hash}`;
      
      // Using replace() ensures no infinite loops in browser history
      // Executes immediately to intercept www requests before route matching occurs
      window.location.replace(newUrl);
    }
  }

  // Always return null since this is a logic-only component
  return null;
};

export default WwwRedirect;
