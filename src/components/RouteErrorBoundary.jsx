import { useEffect } from 'react';
import { useRouteError } from 'react-router-dom';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Route-level error element for the data router.
 *
 * React error boundaries (like ErrorBoundary.jsx) do NOT catch errors thrown in
 * react-router loaders, so a failed loader falls through to the router's default
 * "Unexpected Application Error" screen — a blank white page. This renders a
 * branded fallback instead and, in production, attempts a single throttled
 * reload: most such errors come from a stale deploy (old HTML referencing data
 * or assets a newer build replaced), which reloading fresh HTML resolves. The
 * throttle prevents a reload loop when the error is not stale-related.
 */
export default function RouteErrorBoundary() {
  const error = useRouteError();

  useEffect(() => {
    if (!import.meta.env.PROD) return;
    try {
      const KEY = 'route-error-reload-at';
      const last = Number(sessionStorage.getItem(KEY) || 0);
      // Already reloaded recently — the error survived, so stop and show the
      // fallback rather than looping.
      if (Date.now() - last < 10000) return;
      sessionStorage.setItem(KEY, String(Date.now()));
      window.location.reload();
    } catch (e) {
      /* sessionStorage unavailable — skip auto-reload; manual button remains */
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0e6d2] p-4 text-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-red-100">
        <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-red-600" />
        </div>
        <h1 className="font-playfair text-2xl font-bold text-[#1B4D3E] mb-4">
          Reloading…
        </h1>
        <p className="font-inter text-gray-600 mb-6">
          We hit a hiccup loading this page. Refreshing to get the latest version.
        </p>

        {import.meta.env.DEV && error && (
          <div className="mb-6 p-3 bg-gray-100 rounded text-left overflow-auto max-h-32 text-xs font-mono text-red-800 break-all">
            <p className="font-bold mb-1">Route error:</p>
            {String(error?.message || error)}
          </div>
        )}

        <Button
          onClick={() => window.location.reload()}
          className="bg-[#1B4D3E] hover:bg-[#153e32] text-white w-full py-6 rounded-lg font-bold text-lg"
        >
          <RefreshCw className="mr-2 w-5 h-5" /> Reload Page
        </Button>
      </div>
    </div>
  );
}
