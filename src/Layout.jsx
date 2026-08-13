import React, { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Core UI Components
import Navigation from '@/components/Navigation';
import SubNavigation from '@/components/SubNavigation';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import LoadingFallback from '@/components/LoadingFallback';
import WwwRedirect from '@/components/WwwRedirect';
import ErrorBoundary from '@/components/ErrorBoundary';
import ScrollToTop from '@/components/ScrollToTop';

// GA4 via gtag.js loaded directly (no GTM). Owns Consent Mode, the shared
// gtag_report_lead / gtag_report_phone_click helpers, and SPA page_view.
import GoogleTagManager from '@/components/GoogleTagManager.jsx';
import MobileCTABar from '@/components/MobileCTABar.jsx';
import ChatWidget from '@/components/ChatWidget.jsx';

// Providers
import { AuthProvider } from '@/contexts/SupabaseAuthContext';
import { CookieConsentProvider } from '@/contexts/CookieConsentContext';

// SEO Components — imported directly (NOT lazy). These emit JSON-LD into the
// prerendered HTML, so they must render on the client's first pass too;
// lazy-loading them makes the initial client tree (Suspense fallback) differ
// from the server HTML and breaks hydration for the whole page.
import GeoSchema from '@/components/seo/GeoSchema.jsx';
import OrganizationSchema from '@/components/seo/OrganizationSchema.jsx';
import BreadcrumbListSchema from '@/components/seo/BreadcrumbListSchema.jsx';
import SEOValidation from '@/components/seo/SEOValidation.jsx';
import CookieConsentBanner from '@/components/CookieConsentBanner.jsx';
import { SpeedInsights } from '@vercel/speed-insights/react';

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
            <BreadcrumbListSchema />
            <OrganizationSchema />
            <SEOValidation />

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

              {/* Gold ART-icles button on every page, in the strip between the
                  page content and the footer. Lives here rather than in each
                  page so it cannot drift out of sync. */}
              <div className="bg-gray-50 border-t border-gray-200 py-8 px-4 text-center">
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#e5c14f] text-[#1B4D3E] font-bold px-6 py-3 rounded-lg shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4D3E] focus-visible:ring-offset-2"
                >
                  ART-icles
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>

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
