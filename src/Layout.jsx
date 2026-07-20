import React, { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';

// Core UI Components
import Navigation from '@/components/Navigation';
import SubNavigation from '@/components/SubNavigation';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import LoadingFallback from '@/components/LoadingFallback';
import WwwRedirect from '@/components/WwwRedirect';
import ErrorBoundary from '@/components/ErrorBoundary';
import ScrollToTop from '@/components/ScrollToTop';

// Tag management (GA4 + Google Ads run through GTM container GTM-K9JBRQBJ)
import GoogleTagManager from '@/components/GoogleTagManager.jsx';
import MobileCTABar from '@/components/MobileCTABar.jsx';
import ChatWidget from '@/components/ChatWidget.jsx';

// Providers
import { AuthProvider } from '@/contexts/SupabaseAuthContext';
import { CookieConsentProvider } from '@/contexts/CookieConsentContext';

// SEO Components (Direct import)
import GeoSchema from '@/components/seo/GeoSchema.jsx';
import CookieConsentBanner from '@/components/CookieConsentBanner.jsx';
import { SpeedInsights } from '@vercel/speed-insights/react';

// SEO Components (Lazy loaded)
const OrganizationSchema = lazy(() => import('@/components/seo/OrganizationSchema.jsx'));
const SEOValidation = lazy(() => import('@/components/seo/SEOValidation.jsx'));
const BreadcrumbListSchema = lazy(() => import('@/components/seo/BreadcrumbListSchema.jsx'));

/**
 * Root layout for every route. Rendered once and kept mounted while the
 * active page renders into <Outlet />. Providers, chrome (nav/footer),
 * global schema, and trackers live here.
 */
function Layout() {
  return (
    <>
      <WwwRedirect />

      <AuthProvider>
        <CookieConsentProvider>
          <GoogleTagManager />

          <ScrollToTop />
          <GeoSchema />

          <ErrorBoundary>
            <Suspense fallback={null}>
              <BreadcrumbListSchema />
              <OrganizationSchema />
              <SEOValidation />
            </Suspense>

            <div className="min-h-screen flex flex-col relative pb-16 lg:pb-0">
              <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-[#1B4D3E] focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg focus:ring-2 focus:ring-[#D4AF37]">
                Skip to main content
              </a>
              <Navigation />
              <SubNavigation />

              <main id="main" tabIndex={-1} className="flex-grow contain-content bg-gray-50 focus:outline-none">
                <Suspense fallback={<LoadingFallback />}>
                  <Outlet />
                </Suspense>
              </main>

              <Footer />
              <Toaster />
              <MobileCTABar />
              <ChatWidget />
              <CookieConsentBanner />
              <SpeedInsights />
            </div>
          </ErrorBoundary>
        </CookieConsentProvider>
      </AuthProvider>
    </>
  );
}

export default Layout;
