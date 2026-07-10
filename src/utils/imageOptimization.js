/**
 * Image optimization utilities for handling responsive sizes, 
 * WebP support, and lazy loading configurations.
 */

// Generate srcSet for standard CDN URLs
export const generateSrcSet = (src, widths = [320, 640, 768, 1024, 1200, 1600]) => {
  if (!src) return '';
  
  if (src.includes('googleusercontent.com')) {
    const baseUrl = src.split('=')[0];
    return widths.map(w => `${baseUrl}=w${w} ${w}w`).join(', ');
  }
  
  if (src.includes('images.unsplash.com')) {
    try {
      const urlObj = new URL(src);
      urlObj.searchParams.delete('w');
      return widths.map(w => {
        urlObj.searchParams.set('w', w.toString());
        urlObj.searchParams.set('auto', 'format');
        return `${urlObj.toString()} ${w}w`;
      }).join(', ');
    } catch(e) {
      return '';
    }
  }

  if (src.startsWith('http')) {
    try {
      const urlObj = new URL(src);
      return widths.map(w => {
        const cloned = new URL(urlObj.toString());
        cloned.searchParams.set('w', w.toString());
        return `${cloned.toString()} ${w}w`;
      }).join(', ');
    } catch (e) {
      return '';
    }
  }

  return '';
};

// Generate WebP optimized srcSet
export const generateWebPSrcSet = (src, widths = [320, 640, 768, 1024, 1200, 1600]) => {
  if (!src) return '';
  
  if (src.includes('googleusercontent.com')) {
    const baseUrl = src.split('=')[0];
    return widths.map(w => `${baseUrl}=w${w}-rw ${w}w`).join(', ');
  }
  
  if (src.includes('images.unsplash.com')) {
    try {
      const urlObj = new URL(src);
      urlObj.searchParams.delete('w');
      return widths.map(w => {
        urlObj.searchParams.set('w', w.toString());
        urlObj.searchParams.set('fm', 'webp');
        urlObj.searchParams.set('auto', 'format');
        return `${urlObj.toString()} ${w}w`;
      }).join(', ');
    } catch(e) {
      return '';
    }
  }

  return generateSrcSet(src, widths);
};

export const supportsWebP = () => {
  if (typeof document === 'undefined') return false;
  const canvas = document.createElement('canvas');
  if (!!(canvas.getContext && canvas.getContext('2d'))) {
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
};

export const createLazyImageConfig = (priority = false) => {
  if (priority) {
    return {
      loading: 'eager',
      fetchPriority: 'high',
      decoding: 'sync'
    };
  }
  return {
    loading: 'lazy',
    fetchPriority: 'low',
    decoding: 'async'
  };
};