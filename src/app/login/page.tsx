// src/app/login/page.tsx
'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Chrome } from "lucide-react"; // Using Chrome icon for Google
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  const { signInWithGoogle, firebaseUser, firebaseLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!firebaseLoading && firebaseUser) {
      router.push('/client-dashboard');
    }
  }, [firebaseUser, firebaseLoading, router]);

  if (firebaseLoading || firebaseUser) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md mx-4">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Client Portal Login</CardTitle>
          <CardDescription>Sign in with your Google account to access your dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={signInWithGoogle} className="w-full" variant="outline">
            <Chrome className="mr-2 h-4 w-4" />
            Sign in with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
