import React from 'react';
import GoogleAnalytics from '@/components/GoogleAnalytics';

/**
 * Mounts the consent-gated GA4 component. GA only loads after the user
 * accepts analytics cookies (handled inside GoogleAnalytics).
 */
const GoogleAnalyticsInitializer = () => {
  return <GoogleAnalytics />;
};

export default GoogleAnalyticsInitializer;
