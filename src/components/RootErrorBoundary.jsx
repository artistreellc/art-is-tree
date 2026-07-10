import React, { useEffect } from 'react';
import { useRouteError } from 'react-router-dom';

/**
 * Route-level error boundary. If any route errors while rendering or loading
 * (for example a stale asset/data file after a deploy that fetches a "page not
 * found" response and can't parse it), React Router would otherwise show its
 * raw "Unexpected Application Error" screen — which a crawler could index.
 *
 * Instead we: (1) try a one-time reload to pick up fresh assets, and
 * (2) render an on-brand fallback with the phone number so the page is never a
 * dead end. The data-error-fallback marker lets the post-build prerender guard
 * detect if this ever renders during SSG (it never should).
 */
const RootErrorBoundary = () => {
  const error = useRouteError();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Log for debugging but never rethrow.
    // eslint-disable-next-line no-console
    console.error('[RootErrorBoundary]', error);
    try {
      const KEY = 'root-error-reloaded-at';
      const last = Number(sessionStorage.getItem(KEY) || 0);
      if (Date.now() - last > 15000) {
        sessionStorage.setItem(KEY, String(Date.now()));
        window.location.reload();
      }
    } catch (e) {
      /* sessionStorage unavailable; skip auto-reload */
    }
  }, [error]);

  return (
    <div
      data-error-fallback="true"
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <div>
        <h1 style={{ color: '#1B4D3E', fontSize: '1.5rem', marginBottom: '0.75rem' }}>
          Art-is-Tree LLC
        </h1>
        <p style={{ color: '#374151', marginBottom: '1.25rem', maxWidth: '28rem' }}>
          We&apos;re refreshing this page. If it doesn&apos;t load in a moment, give us a call and
          we&apos;ll help right away.
        </p>
        <a
          href="tel:7573195131"
          style={{
            display: 'inline-block',
            background: '#1B4D3E',
            color: '#fff',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          Call (757) 319-5131
        </a>
      </div>
    </div>
  );
};

export default RootErrorBoundary;
