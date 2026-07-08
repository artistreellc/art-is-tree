import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Core UI Components
import Navigation from '@/components/Navigation';
import SubNavigation from '@/components/SubNavigation';
import Footer from '@/components/Footer';
import ProtectedRoute from '@/components/ProtectedRoute';
import { Toaster } from '@/components/ui/toaster';
import LoadingFallback from '@/components/LoadingFallback';
import WwwRedirect from '@/components/WwwRedirect';
import ErrorBoundary from '@/components/ErrorBoundary';
import ScrollToTop from '@/components/ScrollToTop';

// Disabled/Mocked Trackers
import GoogleAdsConversion from '@/components/GoogleAdsConversion.jsx';
import MobileCTABar from '@/components/MobileCTABar.jsx';
import GoogleAnalyticsInitializer from '@/components/GoogleAnalyticsInitializer.jsx';

// Providers
import { AuthProvider } from '@/contexts/SupabaseAuthContext';
import { CookieConsentProvider } from '@/contexts/CookieConsentContext';

// Performance Utilities
import { withRouteCSS } from '@/utils/routeBasedCSSLoader';
import { SpeedInsights } from '@vercel/speed-insights/react';

// SEO Components (Direct import)
import GeoSchema from '@/components/seo/GeoSchema.jsx';
import CookieConsentBanner from '@/components/CookieConsentBanner.jsx';

// SEO Components (Lazy loaded)
const LocationPagesSchema = lazy(() => import('@/components/seo/LocationPagesSchema.jsx'));
const SocialMediaPostingSchema = lazy(() => import('@/components/seo/SocialMediaPostingSchema.jsx'));
const SEOValidation = lazy(() => import('@/components/seo/SEOValidation.jsx'));
const BreadcrumbListSchema = lazy(() => import('@/components/seo/BreadcrumbListSchema.jsx'));

// Route-Based Code Splitting for Pages
const HomePage = lazy(() => import('@/pages/HomePage.jsx'));
const AboutPage = lazy(() => import('@/pages/AboutPage.jsx'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage.jsx'));
const ContactPage = lazy(() => import('@/pages/ContactPage.jsx'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage.jsx'));
const GalleryPage = lazy(() => import('@/pages/GalleryPage.jsx'));
const TestimonialsPage = lazy(() => import('@/pages/TestimonialsPage.jsx'));
const FAQPage = lazy(() => import('@/pages/FAQPage.jsx'));
const EmergencyPage = lazy(() => import('@/pages/EmergencyPage.jsx'));
const PartnersPage = lazy(() => import('@/pages/PartnersPage.jsx'));

const TreeRemovalPage = lazy(() => import('@/pages/services/TreeRemovalPage.jsx'));
const TreeTrimmingPage = lazy(() => import('@/pages/services/TreeTrimmingPage.jsx'));
const StumpGrindingPage = lazy(() => import('@/pages/services/StumpGrindingPage.jsx'));
const EmergencyTreeServicePage = lazy(() => import('@/pages/services/EmergencyTreeServicePage.jsx'));
const CraneTreeRemovalPage = lazy(() => import('@/pages/services/CraneTreeRemovalPage.jsx'));
const LandClearingPage = lazy(() => import('@/pages/services/LandClearingPage.jsx'));

// Case Studies
const CaseStudiesIndexPage = lazy(() => import('@/pages/CaseStudiesIndexPage.jsx'));
const CraneCaseStudy = lazy(() => import('@/pages/CaseStudyPage.jsx'));
const CBPACaseStudy = lazy(() => import('@/pages/case-studies/CBPACaseStudy.jsx'));
const BigLeafMapleWiltCaseStudy = lazy(() => import('@/components/BigLeafMapleWiltCaseStudy.jsx'));
const OSHCaseStudy = lazy(() => import('@/pages/OSHACaseStudyPage.jsx'));
const PropertyValueCaseStudy = lazy(() => import('@/pages/PropertyValueCaseStudyPage.jsx'));
const UnlicensedContractorsCaseStudy = lazy(() => import('@/pages/UnlicensedContractorsCaseStudyPage.jsx'));
const SpikelessPruningCaseStudy = lazy(() => import('@/pages/SpikelessPruningCaseStudy.jsx'));

// Policies & Legal
const TermsAndConditionsPage = lazy(() => import('@/pages/TermsAndConditionsPage.jsx'));
const ServiceAreasPage = lazy(() => import('@/pages/ServiceAreasPage.jsx'));
const VirginiaBeachPage = lazy(() => import('@/pages/service-areas/VirginiaBeachPage.jsx'));
const NorfolkPage = lazy(() => import('@/pages/service-areas/NorfolkPage.jsx'));
const ChesapeakePage = lazy(() => import('@/pages/service-areas/ChesapeakePage.jsx'));
const PortsmouthPage = lazy(() => import('@/pages/service-areas/PortsmouthPage.jsx'));
const SuffolkPage = lazy(() => import('@/pages/service-areas/SuffolkPage.jsx'));
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage.jsx'));
const CookiePolicyPage = lazy(() => import('@/pages/CookiePolicyPage.jsx'));
const FindUsOnlinePage = lazy(() => import('@/pages/FindUsOnlinePage.jsx'));

// Admin Pages
const LoginPage = lazy(() => import('@/pages/admin/LoginPage.jsx'));
const ForgotPasswordPage = lazy(() => import('@/pages/admin/ForgotPasswordPage.jsx'));
const ResetPasswordPage = lazy(() => import('@/pages/admin/ResetPasswordPage.jsx'));
const AdminPanel = lazy(() => import('@/pages/admin/AdminPanel.jsx'));
const AdminReviewsPage = lazy(() => import('@/pages/admin/AdminReviewsPage.jsx'));
const PerformanceMetricsPage = lazy(() => import('@/pages/admin/PerformanceMetricsPage.jsx'));
const DebugNeighborhoodsPage = lazy(() => import('@/pages/admin/DebugNeighborhoodsPage.jsx'));
const DebugGooglePlacesPage = lazy(() => import('@/pages/admin/DebugGooglePlacesPage.jsx'));
const SEOAuditReportPage = lazy(() => import('@/pages/admin/SEOAuditReportPage.jsx'));

// Wrap main pages with Route-Based CSS tracking
const WrappedHomePage = withRouteCSS(HomePage, 'HomePage');
const WrappedAboutPage = withRouteCSS(AboutPage, 'AboutPage');
const WrappedServicesPage = withRouteCSS(ServicesPage, 'ServicesPage');
const WrappedContactPage = withRouteCSS(ContactPage, 'ContactPage');
const WrappedGalleryPage = withRouteCSS(GalleryPage, 'GalleryPage');

function App() {
  return (
    <>
      <WwwRedirect />

      <HelmetProvider>
        <AuthProvider>
          <CookieConsentProvider>
            <GoogleAnalyticsInitializer />
            <GoogleAdsConversion />

            <Router>
              <ScrollToTop />

              <GeoSchema />

              <ErrorBoundary>
                <Suspense fallback={null}>
                  <BreadcrumbListSchema />
                  <LocationPagesSchema />
                  <SocialMediaPostingSchema />
                  <SEOValidation />
                </Suspense>

                <div className="min-h-screen flex flex-col relative pb-16 lg:pb-0">
                  <Navigation />
                  <SubNavigation />

                  <main className="flex-grow contain-content bg-gray-50">
                    <Suspense fallback={<LoadingFallback />}>
                      <Routes>
                        <Route path="/" element={<WrappedHomePage />} />
                        <Route path="/about" element={<WrappedAboutPage />} />
                        <Route path="/services" element={<WrappedServicesPage />} />
                        <Route path="/contact" element={<WrappedContactPage />} />
                        <Route path="/gallery" element={<WrappedGalleryPage />} />
                        <Route path="/testimonials" element={<TestimonialsPage />} />
                        <Route path="/faq" element={<FAQPage />} />
                        <Route path="/emergency" element={<EmergencyPage />} />

                        <Route path="/services/tree-removal" element={<TreeRemovalPage />} />
                        <Route path="/services/tree-trimming" element={<TreeTrimmingPage />} />
                        <Route path="/services/stump-grinding" element={<StumpGrindingPage />} />
                        <Route path="/services/emergency-tree-service" element={<EmergencyTreeServicePage />} />
                        <Route path="/services/crane-removal" element={<CraneTreeRemovalPage />} />
                        <Route path="/services/land-clearing" element={<LandClearingPage />} />
                        <Route path="/partners" element={<PartnersPage />} />

                        <Route path="/case-studies" element={<CaseStudiesIndexPage />} />
                        <Route path="/case-studies/crane-safety" element={<CraneCaseStudy />} />
                        <Route path="/case-studies/chesapeake-bay-waterfront" element={<Navigate to="/case-studies/chesapeake-bay-preservation-act" replace />} />
                        <Route path="/case-studies/chesapeake-bay-preservation-act" element={<CBPACaseStudy />} />
                        <Route path="/case-studies/disease-management" element={<BigLeafMapleWiltCaseStudy />} />
                        <Route path="/case-studies/osha-compliance" element={<OSHCaseStudy />} />
                        <Route path="/case-studies/property-value" element={<PropertyValueCaseStudy />} />
                        <Route path="/case-studies/unlicensed-contractors" element={<UnlicensedContractorsCaseStudy />} />
                        <Route path="/case-studies/spikeless-pruning" element={<SpikelessPruningCaseStudy />} />

                        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
                        <Route path="/service-areas" element={<ServiceAreasPage />} />
                        <Route path="/service-areas/virginia-beach" element={<VirginiaBeachPage />} />
                        <Route path="/service-areas/norfolk" element={<NorfolkPage />} />
                        <Route path="/service-areas/chesapeake" element={<ChesapeakePage />} />
                        <Route path="/service-areas/portsmouth" element={<PortsmouthPage />} />
                        <Route path="/service-areas/suffolk" element={<SuffolkPage />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                        <Route path="/cookies" element={<CookiePolicyPage />} />
                        <Route path="/find-us-online" element={<FindUsOnlinePage />} />

                        <Route path="/login" element={<Navigate to="/admin/login" replace />} />
                        <Route path="/admin/login" element={<LoginPage />} />
                        <Route path="/admin/forgot-password" element={<ForgotPasswordPage />} />
                        <Route path="/admin/reset-password" element={<ResetPasswordPage />} />

                        <Route path="/admin" element={
                          <ProtectedRoute>
                            <AdminPanel />
                          </ProtectedRoute>
                        } />
                        <Route path="/admin/dashboard" element={<Navigate to="/admin" replace />} />
                        <Route path="/admin/seo-audit" element={
                          <ProtectedRoute>
                            <SEOAuditReportPage />
                          </ProtectedRoute>
                        } />
                        <Route path="/admin/reviews" element={
                          <ProtectedRoute>
                            <AdminReviewsPage />
                          </ProtectedRoute>
                        } />
                        <Route path="/admin/performance" element={
                          <ProtectedRoute>
                            <PerformanceMetricsPage />
                          </ProtectedRoute>
                        } />
                        <Route path="/admin/debug-neighborhoods" element={
                          <ProtectedRoute>
                            <DebugNeighborhoodsPage />
                          </ProtectedRoute>
                        } />
                        <Route path="/admin/debug-places" element={
                          <ProtectedRoute>
                            <DebugGooglePlacesPage />
                          </ProtectedRoute>
                        } />

                        <Route path="*" element={<NotFoundPage />} />
                      </Routes>
                    </Suspense>
                  </main>

                  <Footer />
                  <Toaster />
                  <MobileCTABar />
                  <CookieConsentBanner />
                  <SpeedInsights />
                </div>
              </ErrorBoundary>
            </Router>
          </CookieConsentProvider>
        </AuthProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
