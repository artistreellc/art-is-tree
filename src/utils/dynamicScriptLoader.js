/**
 * Dynamic Script Loader Utility
 * Handles asynchronous loading of external scripts with caching and error handling
 * Prevents duplicate script loads and optimizes third-party script initialization
 */

class DynamicScriptLoader {
  constructor() {
    this.loadedScripts = new Map();
    this.pendingScripts = new Map();
  }

  /**
   * Load an external script dynamically
   * @param {string} src - Script URL
   * @param {Object} options - Loading options
   * @returns {Promise} Promise that resolves when script is loaded
   */
  async loadScript(src, options = {}) {
    const {
      id = null,
      async = true,
      defer = false,
      attributes = {},
      onLoad = null,
      onError = null
    } = options;

    // Check if script is already loaded
    if (this.loadedScripts.has(src)) {
      console.log(`[ScriptLoader] ✅ Script already loaded: ${src}`);
      return Promise.resolve(this.loadedScripts.get(src));
    }

    // Check if script is currently loading
    if (this.pendingScripts.has(src)) {
      console.log(`[ScriptLoader] ⏳ Script loading in progress: ${src}`);
      return this.pendingScripts.get(src);
    }

    // Create new script loading promise
    const scriptPromise = new Promise((resolve, reject) => {
      console.log(`[ScriptLoader] 📥 Loading script: ${src}`);

      const script = document.createElement('script');
      script.src = src;
      script.async = async;
      script.defer = defer;

      if (id) script.id = id;

      // Add custom attributes
      Object.keys(attributes).forEach(attr => {
        script.setAttribute(attr, attributes[attr]);
      });

      script.onload = () => {
        console.log(`[ScriptLoader] ✅ Script loaded successfully: ${src}`);
        this.loadedScripts.set(src, script);
        this.pendingScripts.delete(src);
        if (onLoad) onLoad(script);
        resolve(script);
      };

      script.onerror = (error) => {
        console.error(`[ScriptLoader] ❌ Failed to load script: ${src}`, error);
        this.pendingScripts.delete(src);
        if (onError) onError(error);
        reject(new Error(`Failed to load script: ${src}`));
      };

      document.head.appendChild(script);
    });

    this.pendingScripts.set(src, scriptPromise);
    return scriptPromise;
  }

  /**
   * Load multiple scripts in sequence
   * @param {Array} scripts - Array of script configurations
   * @returns {Promise} Promise that resolves when all scripts are loaded
   */
  async loadScripts(scripts) {
    const promises = scripts.map(script => 
      typeof script === 'string' 
        ? this.loadScript(script) 
        : this.loadScript(script.src, script.options)
    );
    return Promise.all(promises);
  }

  /**
   * Check if a script is loaded
   * @param {string} src - Script URL
   * @returns {boolean} True if script is loaded
   */
  isLoaded(src) {
    return this.loadedScripts.has(src);
  }

  /**
   * Remove a loaded script
   * @param {string} src - Script URL
   */
  removeScript(src) {
    const script = this.loadedScripts.get(src);
    if (script && script.parentNode) {
      script.parentNode.removeChild(script);
      this.loadedScripts.delete(src);
      console.log(`[ScriptLoader] 🗑️ Removed script: ${src}`);
    }
  }

  /**
   * Load Google Analytics asynchronously
   * @param {string} measurementId - GA4 Measurement ID
   * @returns {Promise} Promise that resolves when GA is loaded
   */
  async loadGoogleAnalytics(measurementId) {
    const gtagSrc = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    
    try {
      await this.loadScript(gtagSrc, {
        id: 'google-analytics',
        async: true,
        attributes: {
          'data-consent': 'granted'
        }
      });

      // Initialize dataLayer if not exists
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() { window.dataLayer.push(arguments); };
      
      return true;
    } catch (error) {
      console.error('[ScriptLoader] Failed to load Google Analytics:', error);
      return false;
    }
  }

  /**
   * Load Google Maps API asynchronously
   * @param {string} apiKey - Google Maps API key
   * @param {Array} libraries - Google Maps libraries to load
   * @returns {Promise} Promise that resolves when Maps API is loaded
   */
  async loadGoogleMaps(apiKey, libraries = ['places', 'geometry']) {
    if (window.google && window.google.maps) {
      console.log('[ScriptLoader] ✅ Google Maps already loaded');
      return Promise.resolve(window.google.maps);
    }

    const librariesParam = libraries.join(',');
    const mapsSrc = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=${librariesParam}&callback=initGoogleMaps`;

    return new Promise((resolve, reject) => {
      // Define global callback
      window.initGoogleMaps = () => {
        console.log('[ScriptLoader] ✅ Google Maps initialized');
        delete window.initGoogleMaps;
        resolve(window.google.maps);
      };

      this.loadScript(mapsSrc, {
        id: 'google-maps',
        async: true,
        defer: true,
        onError: () => {
          delete window.initGoogleMaps;
          reject(new Error('Failed to load Google Maps'));
        }
      });
    });
  }
}

// Export singleton instance
export const scriptLoader = new DynamicScriptLoader();
export default scriptLoader;