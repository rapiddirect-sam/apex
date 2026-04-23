"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { User } from "firebase/auth";
import { isFirebaseConfigured } from "@/lib/firebaseConfig";
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
    if (!isFirebaseConfigured) {
      setLoading(false);
      return;
    }

    let cancelled = false;
    const unsubscribers: Array<() => void> = [];

    (async () => {
      const [{ auth }, firebaseAuth] = await Promise.all([
        import("@/lib/firebaseClient"),
        import("firebase/auth"),
      ]);

      if (cancelled || !auth) {
        setLoading(false);
        return;
      }

      const { onIdTokenChanged, onAuthStateChanged } = firebaseAuth;

      unsubscribers.push(
        onIdTokenChanged(auth, async (u) => {
          if (u) {
            try {
              const token = await u.getIdToken();
              setAuthSessionCookie(token);
            } catch {
              setAuthSessionCookie(null);
            }
          } else {
            setAuthSessionCookie(null);
          }
        })
      );

      unsubscribers.push(
        onAuthStateChanged(auth, async (u) => {
          setUser(u);

          if (u?.email) {
            await syncUserFromAuth(u.email, u.displayName);
            const adminStatus = await isUserAdmin(u.email);
            setIsAdmin(adminStatus);
          } else {
            setIsAdmin(false);
          }

          setLoading(false);
        })
      );
    })();

    return () => {
      cancelled = true;
      unsubscribers.forEach((u) => u());
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    const { auth } = await import("@/lib/firebaseClient");
    const { signInWithEmailAndPassword } = await import("firebase/auth");
    if (!auth) throw new Error("Firebase not configured");
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signUp = async (email: string, password: string) => {
    const { auth } = await import("@/lib/firebaseClient");
    const { createUserWithEmailAndPassword } = await import("firebase/auth");
    if (!auth) throw new Error("Firebase not configured");
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = async () => {
    const { auth } = await import("@/lib/firebaseClient");
    const { GoogleAuthProvider, signInWithPopup } = await import("firebase/auth");
    if (!auth) throw new Error("Firebase not configured");
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const signOut = async () => {
    const { auth } = await import("@/lib/firebaseClient");
    const { signOut: firebaseSignOut } = await import("firebase/auth");
    if (!auth) throw new Error("Firebase not configured");
    setAuthSessionCookie(null);
    setIsAdmin(false);
    await firebaseSignOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAdmin,
        loading,
        signIn,
        signUp,
        signInWithGoogle,
        signOut,
        isConfigured: isFirebaseConfigured,
        checkAdminStatus,
      }}
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
