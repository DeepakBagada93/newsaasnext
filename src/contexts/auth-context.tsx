// src/contexts/auth-context.tsx
'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getAuth, onAuthStateChanged, signInWithRedirect, GoogleAuthProvider, signOut, User as FirebaseUser } from 'firebase/auth';
import { app } from '@/lib/firebase/client-app';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import type { Profile } from '@/lib/types';
import { z } from 'zod';
import { createClient } from '@/lib/supabase/client';
import type { User as SupabaseUser, Session, SupabaseClient } from '@supabase/supabase-js';

// Mock function to get user profile/role
const getMockUserProfile = async (userId: string, isFirebaseUser: boolean): Promise<Profile | null> => {
    // For admins, we just need a static role. Supabase handles the user object.
    if (!isFirebaseUser) {
        return {
            id: userId,
            full_name: "Admin User",
            email: "admin@saasnext.com", // This is illustrative
            company: "SaaSnext",
            role: "admin",
        };
    }
    
    // For clients (Firebase users), default to client role.
    return {
        id: userId,
        full_name: "Client User",
        email: "client@example.com", // This is illustrative
        company: "Client Company",
        role: "client",
    };
};

const emailPasswordSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
export type EmailPasswordForm = z.infer<typeof emailPasswordSchema>;

interface AuthContextType {
  // Firebase state for clients
  firebaseUser: FirebaseUser | null;
  clientProfile: Profile | null;
  firebaseLoading: boolean;
  signInWithGoogle: () => Promise<void>;
  
  // Supabase state for admins
  supabase: SupabaseClient;
  supabaseSession: Session | null;
  adminProfile: Profile | null; // This will hold the static 'admin' role info
  supabaseLoading: boolean;
  
  // Shared actions
  logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const firebaseAuth = getAuth(app);


export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const supabase = createClient();
  // Firebase state
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [clientProfile, setClientProfile] = useState<Profile | null>(null);
  const [firebaseLoading, setFirebaseLoading] = useState(true);

  // Supabase state
  const [supabaseSession, setSupabaseSession] = useState<Session | null>(null);
  const [adminProfile, setAdminProfile] = useState<Profile | null>(null);
  const [supabaseLoading, setSupabaseLoading] = useState(true);

  const router = useRouter();

  // Client (Firebase) sign-in
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(firebaseAuth, provider);
  };

  // Unified sign-out
  const logOut = async () => {
    const { error: supabaseError } = await supabase.auth.signOut();
    await signOut(firebaseAuth);

    if (supabaseError) {
      console.error("Error signing out from Supabase:", supabaseError);
    }
    
    // Clear all state
    setFirebaseUser(null);
    setClientProfile(null);
    setSupabaseSession(null);
    setAdminProfile(null);
    
    router.push('/');
  };

  // Effect for Firebase Auth (Clients)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (currentUser) => {
      if (currentUser) {
        setFirebaseUser(currentUser);
        const userProfile = await getMockUserProfile(currentUser.uid, true);
        setClientProfile(userProfile);
      } else {
        setFirebaseUser(null);
        setClientProfile(null);
      }
      setFirebaseLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Effect for Supabase Auth (Admins)
  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSupabaseSession(session);
      if (session?.user) {
        const userProfile = await getMockUserProfile(session.user.id, false);
        setAdminProfile(userProfile);
      } else {
        setAdminProfile(null);
      }
      setSupabaseLoading(false);
    }
    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSupabaseSession(session);
       if (session?.user) {
        const userProfile = await getMockUserProfile(session.user.id, false);
        setAdminProfile(userProfile);
      } else {
        setAdminProfile(null);
      }
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  const overallLoading = firebaseLoading || supabaseLoading;

  if (overallLoading) {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin" />
        </div>
    )
  }

  const value: AuthContextType = { 
      firebaseUser, 
      clientProfile, 
      firebaseLoading, 
      signInWithGoogle,
      supabase,
      supabaseSession,
      adminProfile,
      supabaseLoading,
      logOut 
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
