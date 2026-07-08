import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { useToast } from '@/components/ui/use-toast';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const { toast } = useToast();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check localStorage for admin_id on mount to restore admin session
  useEffect(() => {
    const adminId = localStorage.getItem('admin_id');
    if (adminId) {
      setUser({ id: adminId, role: 'admin' });
    }
    setLoading(false);
  }, []);

  const loginWithAdminId = useCallback((id) => {
    localStorage.setItem('admin_id', id);
    setUser({ id, role: 'admin' });
  }, []);

  // Provide a logout function that clears localStorage and resets auth state
  const signOut = useCallback(async () => {
    localStorage.removeItem('admin_id');
    setUser(null);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    return { error: null };
  }, [toast]);

  // Keep stubbed signIn/signUp methods to prevent breaking components that destructure them
  const signIn = async () => {
    return { error: new Error("Please use the custom admin login flow.") };
  };
  const signUp = async () => {
    return { error: new Error("Sign ups are restricted.") };
  };

  const value = useMemo(() => ({
    user,
    loading,
    loginWithAdminId,
    signIn,
    signUp,
    signOut,
  }), [user, loading, loginWithAdminId, signIn, signUp, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};