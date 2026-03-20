"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import {
  User,
  onAuthStateChanged,
  onIdTokenChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, isFirebaseConfigured } from "@/lib/firebase";
import { isUserAdmin } from "@/lib/admin";
import { syncUserFromAuth } from "@/lib/users";
import { setAuthSessionCookie } from "@/lib/authSessionCookie";

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  isConfigured: boolean;
  checkAdminStatus: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAdminStatus = async () => {
    if (user?.email) {
      const adminStatus = await isUserAdmin(user.email);
      setIsAdmin(adminStatus);
    } else {
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    if (!isFirebaseConfigured || !auth) {
      setLoading(false);
      return;
    }

    // Refresh auth-session whenever the ID token rotates (fixes CMS image upload 401 after ~1 hour).
    const unsubToken = onIdTokenChanged(auth, async (user) => {
      if (user) {
        try {
          const token = await user.getIdToken();
          setAuthSessionCookie(token);
        } catch {
          setAuthSessionCookie(null);
        }
      } else {
        setAuthSessionCookie(null);
      }
    });

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);

      if (user?.email) {
        // Sync user to Supabase (creates if not exists, updates last login if exists)
        await syncUserFromAuth(user.email, user.displayName);
        // Check admin status
        const adminStatus = await isUserAdmin(user.email);
        setIsAdmin(adminStatus);
      } else {
        setIsAdmin(false);
      }

      setLoading(false);
    });

    return () => {
      unsubToken();
      unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    if (!auth) throw new Error("Firebase not configured");
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signUp = async (email: string, password: string) => {
    if (!auth) throw new Error("Firebase not configured");
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = async () => {
    if (!auth) throw new Error("Firebase not configured");
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const signOut = async () => {
    if (!auth) throw new Error("Firebase not configured");
    setAuthSessionCookie(null);
    setIsAdmin(false);
    await firebaseSignOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAdmin, loading, signIn, signUp, signInWithGoogle, signOut, isConfigured: isFirebaseConfigured, checkAdminStatus }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
