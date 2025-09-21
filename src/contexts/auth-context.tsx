// src/contexts/auth-context.tsx
'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, User, signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword } from 'firebase/auth';
import { app } from '@/lib/firebase/client-app';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import type { Profile } from '@/lib/types';
import { z } from 'zod';


// Mock function to get user profile/role
// In a real app, this would fetch from your database (e.g., Firestore)
const getMockUserProfile = async (userId: string): Promise<Profile | null> => {
    // This is a mock. Replace with your actual database call.
    const mockAdminId = "user_admin_123"; // A mock admin ID for demo.
    
    // Hard-coding an admin user for demonstration.
    // In a real application, you would query your 'profiles' table/collection.
    if (userId === "JzkqQn1zY3WQU5k7B8r0s6rL3oE2") { // Replace with an actual UID of an admin user in your Firebase project
        return {
            id: userId,
            full_name: "Admin User",
            email: "admin@saasnext.com",
            company: "SaaSnext",
            role: "admin",
        };
    }
    
    // Default to client role for any other user
    return {
        id: userId,
        full_name: "Client User",
        email: "client@example.com",
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
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmailAndPassword: (credentials: EmailPasswordForm) => Promise<{ success: boolean; error?: string }>;
  logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const auth = getAuth(app);

export const AuthProvider = ({ children }: { children: React.Node }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Let the onAuthStateChanged handle the redirect
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const signInWithEmailAndPassword = async (credentials: EmailPasswordForm) => {
    try {
        const userCredential = await firebaseSignInWithEmailAndPassword(auth, credentials.email, credentials.password);
        // onAuthStateChanged will handle the rest
        return { success: true };
    } catch (error: any) {
        console.error("Error signing in with email and password:", error);
        return { success: false, error: error.message };
    }
  };

  const logOut = async () => {
    await signOut(auth);
    // Clearing user and profile state, then redirecting
    setUser(null);
    setProfile(null);
    router.push('/');
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
      if (currentUser) {
        setUser(currentUser);
        const userProfile = await getMockUserProfile(currentUser.uid);
        setProfile(userProfile);
      } else {
        setUser(null);
        setProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin" />
        </div>
    )
  }

  const value = { user, profile, loading, signInWithGoogle, signInWithEmailAndPassword, logOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
