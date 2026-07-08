export const injectCriticalCSS = () => {
  try {
    if (typeof document === 'undefined') return;
    if (document.getElementById('critical-css')) return;

    const style = document.createElement('style');
    style.id = 'critical-css';
    // Inline minimal CSS for the shell, navigation, and hero section to prevent FOUC and improve LCP
    style.innerHTML = `
      body { margin: 0; padding: 0; background-color: #f9fafb; font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; }
      #root { display: flex; flex-direction: column; min-height: 100vh; }
      .contain-content { contain: layout paint style; }
      .skeleton-nav { height: 56px; background: #1B4D3E; width: 100%; }
      .skeleton-hero { height: 60vh; background: #1B4D3E; width: 100%; }
      @media (min-width: 768px) {
        .skeleton-nav { height: 72px; }
      }
    `;
    document.head.appendChild(style);
    if (import.meta.env.DEV) console.log('⚡ [criticalCSSInliner] Critical CSS injected successfully.');
  } catch (error) {
    console.error('⚠️ [criticalCSSInliner] Failed to inject critical CSS:', error);
  }
};