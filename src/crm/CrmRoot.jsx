import React from 'react';
import { AuthProvider } from '@/contexts/SupabaseAuthContext';
import { Toaster } from '@/components/ui/toaster';
import ProtectedRoute from '@/components/ProtectedRoute';
import CrmLayout from '@/crm/CrmLayout';

// Standalone root for the CRM "app". It brings its own providers (auth +
// toasts) so it runs independently of the marketing site's Layout — no public
// navigation, footer, chat widget, or analytics chrome. Everything under here
// is gated behind the admin login. CrmLayout renders the matched child page
// into its own <Outlet />.
const CrmRoot = () => (
  <AuthProvider>
    <ProtectedRoute>
      <CrmLayout />
    </ProtectedRoute>
    <Toaster />
  </AuthProvider>
);

export default CrmRoot;
