import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react';

export const CookieConsentContext = createContext();

export const CookieConsentProvider = ({ children }) => {
  // Opt-out model (US / Virginia VCDPA is opt-out, not opt-in): analytics and
  // marketing default to ON so conversions are counted for every visitor. The
  // banner still shows so a visitor can opt out ("Essential only"), and Do Not
  // Track is still honored as an explicit opt-out.
  const [preferences, setPreferences] = useState({
    essential: true, // Essential cookies cannot be disabled
    analytics: true,
    marketing: true,
  });
  const [hasConsented, setHasConsented] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Check for "Do Not Track" setting
    const dnt = navigator.doNotTrack === "1" || window.doNotTrack === "1" || navigator.doNotTrack === "yes";

    try {
      const stored = localStorage.getItem('cookie-consent');
      if (stored) {
        setPreferences(JSON.parse(stored));
        setHasConsented(true);
      } else if (dnt) {
        // DNT is an explicit opt-out: turn analytics/marketing off and treat the
        // choice as made (no banner) even under the opt-out default.
        const defaultPrefs = { essential: true, analytics: false, marketing: false };
        setPreferences(defaultPrefs);
        setHasConsented(true);
        localStorage.setItem('cookie-consent', JSON.stringify(defaultPrefs));
      }
      // Otherwise keep the opt-out default (analytics + marketing ON). The
      // banner shows because hasConsented is false, giving the visitor the
      // chance to opt out, while tracking is already active.
    } catch (e) {
      console.warn("Could not read cookie consent from localStorage", e);
    }
  }, []);

  const savePreferences = useCallback((newPrefs) => {
    const updatedPrefs = { ...newPrefs, essential: true };
    setPreferences(updatedPrefs);
    setHasConsented(true);
    try {
      localStorage.setItem('cookie-consent', JSON.stringify(updatedPrefs));
    } catch (e) {
      console.warn("Could not save cookie consent to localStorage", e);
    }
  }, []);

  const acceptAll = useCallback(() => {
    savePreferences({ essential: true, analytics: true, marketing: true });
  }, [savePreferences]);

  const rejectAll = useCallback(() => {
    savePreferences({ essential: true, analytics: false, marketing: false });
  }, [savePreferences]);

  const value = useMemo(() => ({
    preferences,
    hasConsented,
    isModalOpen,
    setIsModalOpen,
    savePreferences,
    acceptAll,
    rejectAll
  }), [preferences, hasConsented, isModalOpen, savePreferences, acceptAll, rejectAll]);

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
};