import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react';

export const CookieConsentContext = createContext();

export const CookieConsentProvider = ({ children }) => {
  const [preferences, setPreferences] = useState({
    essential: true, // Essential cookies cannot be disabled
    analytics: false,
    marketing: false,
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
        // If DNT is enabled and no preferences exist, default to reject non-essential
        const defaultPrefs = { essential: true, analytics: false, marketing: false };
        setPreferences(defaultPrefs);
        setHasConsented(true);
        localStorage.setItem('cookie-consent', JSON.stringify(defaultPrefs));
      }
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