import React, { useEffect } from 'react';

const SEOValidation = () => {
  useEffect(() => {
    // Only run validation in development or if explicitly enabled
    if (import.meta.env.DEV) {
      setTimeout(() => {
        try {
          const scripts = document.querySelectorAll('script[type="application/ld+json"]');
          let hasLocalBusiness = false;
          let hasServiceAreas = false;

          console.group('🔍 SEO Schema Validation');
          console.log(`Found ${scripts.length} JSON-LD scripts.`);

          scripts.forEach((script, index) => {
            try {
              const data = JSON.parse(script.innerHTML);
              console.log(`Schema ${index + 1}:`, data);

              // Check for LocalBusiness
              if (data['@type'] === 'LocalBusiness' || (data['@graph'] && data['@graph'].some(item => item['@type'] === 'LocalBusiness'))) {
                hasLocalBusiness = true;
              }

              // Check for areas
              const stringified = JSON.stringify(data).toLowerCase();
              if (stringified.includes('virginia beach') && stringified.includes('norfolk') && stringified.includes('chesapeake')) {
                hasServiceAreas = true;
              }

            } catch (e) {
              console.error(`Invalid JSON in script ${index + 1}:`, e);
            }
          });

          if (hasLocalBusiness) {
            console.log('✅ LocalBusiness schema found.');
          } else {
            console.warn('❌ LocalBusiness schema missing.');
          }

          if (hasServiceAreas) {
            console.log('✅ Service areas (Virginia Beach, Norfolk, Chesapeake) found in schemas.');
          } else {
            console.warn('❌ Service areas missing from schemas.');
          }

          console.groupEnd();
        } catch (error) {
          console.error('Error during SEO validation:', error);
        }
      }, 2000); // Wait for React Helmet to inject tags
    }
  }, []);

  return null;
};

export default SEOValidation;