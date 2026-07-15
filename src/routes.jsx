import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '@/Layout';
import ProtectedRoute from '@/components/ProtectedRoute';
import RootErrorBoundary from '@/components/RootErrorBoundary';
import { withRouteCSS } from '@/utils/routeBasedCSSLoader';

// Public pages: react-router `lazy` so vite-react-ssg can await + prerender them.
const page = (loader) => ({
  lazy: async () => {
    const m = await loader();
    return { Component: m.default };
  },
});

// Same as `page`, but keeps the route-based CSS/perf wrapper on core pages.
const wrappedPage = (loader, name) => ({
  lazy: async () => {
    const m = await loader();
    return { Component: withRouteCSS(m.default, name) };
  },
});

// Admin pages stay client-only (excluded from prerender via ssgOptions).
const LoginPage = lazy(() => import('@/pages/admin/LoginPage.jsx'));
const ForgotPasswordPage = lazy(() => import('@/pages/admin/ForgotPasswordPage.jsx'));
const ResetPasswordPage = lazy(() => import('@/pages/admin/ResetPasswordPage.jsx'));
const AdminPanel = lazy(() => import('@/pages/admin/AdminPanel.jsx'));
const AdminReviewsPage = lazy(() => import('@/pages/admin/AdminReviewsPage.jsx'));
const PerformanceMetricsPage = lazy(() => import('@/pages/admin/PerformanceMetricsPage.jsx'));
const DebugNeighborhoodsPage = lazy(() => import('@/pages/admin/DebugNeighborhoodsPage.jsx'));
const DebugGooglePlacesPage = lazy(() => import('@/pages/admin/DebugGooglePlacesPage.jsx'));
const SEOAuditReportPage = lazy(() => import('@/pages/admin/SEOAuditReportPage.jsx'));

const protectedEl = (Component) => (
  <ProtectedRoute>
    <Component />
  </ProtectedRoute>
);

export const routes = [
  {
    path: '/',
    element: <Layout />,
    entry: 'src/Layout.jsx',
    errorElement: <RootErrorBoundary />,
    children: [
      { index: true, ...wrappedPage(() => import('@/pages/HomePage.jsx'), 'HomePage') },
      { path: 'about', ...wrappedPage(() => import('@/pages/AboutPage.jsx'), 'AboutPage') },
      { path: 'services', ...wrappedPage(() => import('@/pages/ServicesPage.jsx'), 'ServicesPage') },
      { path: 'contact', ...wrappedPage(() => import('@/pages/ContactPage.jsx'), 'ContactPage') },
      { path: 'gallery', ...wrappedPage(() => import('@/pages/GalleryPage.jsx'), 'GalleryPage') },
      { path: 'testimonials', ...page(() => import('@/pages/TestimonialsPage.jsx')) },
      { path: 'faq', ...page(() => import('@/pages/FAQPage.jsx')) },
      { path: 'emergency', ...page(() => import('@/pages/EmergencyPage.jsx')) },

      { path: 'services/tree-removal', ...page(() => import('@/pages/services/TreeRemovalPage.jsx')) },
      { path: 'services/tree-trimming', ...page(() => import('@/pages/services/TreeTrimmingPage.jsx')) },
      { path: 'services/stump-grinding', ...page(() => import('@/pages/services/StumpGrindingPage.jsx')) },
      { path: 'services/emergency-tree-service', ...page(() => import('@/pages/services/EmergencyTreeServicePage.jsx')) },
      { path: 'services/crane-removal', ...page(() => import('@/pages/services/CraneTreeRemovalPage.jsx')) },
      { path: 'services/land-clearing', ...page(() => import('@/pages/services/LandClearingPage.jsx')) },
      { path: 'partners', ...page(() => import('@/pages/PartnersPage.jsx')) },

      { path: 'case-studies', ...page(() => import('@/pages/CaseStudiesIndexPage.jsx')) },
      { path: 'case-studies/crane-safety', ...page(() => import('@/pages/CaseStudyPage.jsx')) },
      { path: 'case-studies/chesapeake-bay-waterfront', element: <Navigate to="/case-studies/chesapeake-bay-preservation-act" replace /> },
      { path: 'case-studies/chesapeake-bay-preservation-act', ...page(() => import('@/pages/case-studies/CBPACaseStudy.jsx')) },
      { path: 'case-studies/emerald-ash-borer', ...page(() => import('@/pages/case-studies/EmeraldAshBorerCaseStudy.jsx')) },
      { path: 'case-studies/disease-management', element: <Navigate to="/case-studies/emerald-ash-borer" replace /> },
      { path: 'case-studies/osha-compliance', ...page(() => import('@/pages/OSHACaseStudyPage.jsx')) },
      { path: 'case-studies/property-value', ...page(() => import('@/pages/PropertyValueCaseStudyPage.jsx')) },
      { path: 'case-studies/virginia-tree-law', ...page(() => import('@/pages/case-studies/VirginiaTreeLawCaseStudy.jsx')) },
      { path: 'case-studies/unlicensed-contractors', element: <Navigate to="/case-studies/virginia-tree-law" replace /> },
      { path: 'case-studies/spikeless-pruning', ...page(() => import('@/pages/SpikelessPruningCaseStudy.jsx')) },
      { path: 'case-studies/storm-damage-mitigation', ...page(() => import('@/pages/case-studies/StormDamageMitigationCaseStudy.jsx')) },

      { path: 'terms-and-conditions', ...page(() => import('@/pages/TermsAndConditionsPage.jsx')) },
      { path: 'service-areas', ...page(() => import('@/pages/ServiceAreasPage.jsx')) },
      { path: 'service-areas/virginia-beach', ...page(() => import('@/pages/service-areas/VirginiaBeachPage.jsx')) },
      { path: 'service-areas/norfolk', ...page(() => import('@/pages/service-areas/NorfolkPage.jsx')) },
      { path: 'service-areas/chesapeake', ...page(() => import('@/pages/service-areas/ChesapeakePage.jsx')) },
      { path: 'service-areas/portsmouth', ...page(() => import('@/pages/service-areas/PortsmouthPage.jsx')) },
      { path: 'service-areas/suffolk', ...page(() => import('@/pages/service-areas/SuffolkPage.jsx')) },
      { path: 'privacy-policy', ...page(() => import('@/pages/PrivacyPolicyPage.jsx')) },
      { path: 'cookies', ...page(() => import('@/pages/CookiePolicyPage.jsx')) },
      { path: 'find-us-online', ...page(() => import('@/pages/FindUsOnlinePage.jsx')) },

      // Admin (client-only, not prerendered)
      { path: 'login', element: <Navigate to="/admin/login" replace /> },
      { path: 'admin/login', element: <LoginPage /> },
      { path: 'admin/forgot-password', element: <ForgotPasswordPage /> },
      { path: 'admin/reset-password', element: <ResetPasswordPage /> },
      { path: 'admin', element: protectedEl(AdminPanel) },
      { path: 'admin/dashboard', element: <Navigate to="/admin" replace /> },
      { path: 'admin/seo-audit', element: protectedEl(SEOAuditReportPage) },
      { path: 'admin/reviews', element: protectedEl(AdminReviewsPage) },
      { path: 'admin/performance', element: protectedEl(PerformanceMetricsPage) },
      { path: 'admin/debug-neighborhoods', element: protectedEl(DebugNeighborhoodsPage) },
      { path: 'admin/debug-places', element: protectedEl(DebugGooglePlacesPage) },

      { path: '*', ...page(() => import('@/pages/NotFoundPage.jsx')) },
    ],
  },
];

export default routes;
