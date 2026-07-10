
// Domain redirect safety net
if (window.location.hostname === 'artistreeofva.com' || 
    window.location.hostname === 'www.artistreeofva.com') {
  window.location.replace(
    'https://artistreevabeach.com' + window.location.pathname + window.location.search
  );
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { injectCriticalCSS } from '@/utils/criticalCSSInliner';

if (import.meta.env.DEV) console.log('⚡ Main.jsx: Mounting React app...');

// 1. Inject Critical CSS immediately to prevent FOUC
try {
  injectCriticalCSS();
} catch (e) {
  console.warn("Critical CSS injection skipped/failed:", e);
}

// 2. DISABLED: Service Worker Registration has been temporarily disabled.
// Improperly configured service workers caching chunk files can cause 
// infinite "Failed to fetch dynamically imported module" errors in Vite.
/*
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(error => {
      console.warn('SW registration skipped: ', error);
    });
  });
}
*/

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error('FATAL: Root element #root not found in the HTML document.');
  document.body.innerHTML = `
    <div style="padding: 20px; color: red; font-family: sans-serif;">
      <h2>Critical Error</h2>
      <p>The root element (<code>#root</code>) was not found in index.html.</p>
    </div>
  `;
}
