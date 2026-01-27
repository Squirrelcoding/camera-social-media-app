import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextType {
  session: any;
  user: any | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Bypass authentication - immediately set a dummy session
    const dummySession = { authenticated: true };
    const dummyUser = { id: 'temp-user', email: 'user@example.com' };
    setSession(dummySession);
    setUser(dummyUser);
    setLoading(false);
  }, []);

  const signOut = async () => {
    setLoading(true);
    try {
      setSession(null);
      setUser(null);
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        loading,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
