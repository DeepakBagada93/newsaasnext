
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth, type EmailPasswordForm } from "@/contexts/auth-context";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";


const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
  password: z.string().min(1, 'Password is required.'),
});

export default function AdminLoginPage() {
  const { signInWithEmailAndPassword, profile, loading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<EmailPasswordForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  useEffect(() => {
    // This effect handles the case where a user who is already logged in
    // navigates to the login page.
    if (!loading && profile && profile.role === 'admin') {
      router.push('/saasnextdbadmin');
    }
  }, [profile, loading, router]);
  
  const onSubmit = async (data: EmailPasswordForm) => {
    setIsSubmitting(true);
    const result = await signInWithEmailAndPassword(data);
    if (result.success) {
      toast({
        title: "Login Successful",
        description: "Redirecting to your dashboard...",
      });
      // Directly redirect on success instead of waiting for the effect
      router.push('/saasnextdbadmin');
    } else {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: result.error || "An unknown error occurred. Please try again.",
      });
      setIsSubmitting(false);
    }
    // No need to setIsSubmitting(false) on success because the page will redirect.
  };

  // If user is already an admin, show a loading state while redirecting
  if (loading || (profile && profile.role === 'admin')) {
     return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="ml-4">Redirecting to dashboard...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md mx-4">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Admin Portal</CardTitle>
          <CardDescription>Sign in to access the admin dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="admin@example.com" {...field} disabled={isSubmitting} />
                      </FormControl>
                       <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} disabled={isSubmitting} />
                      </FormControl>
                       <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                   {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing In...
                      </>
                    ) : (
                      <>
                        <LogIn className="mr-2 h-4 w-4" />
                        Sign In
                      </>
                    )}
                </Button>
              </form>
            </Form>
        </CardContent>
         <CardFooter className="flex justify-center text-xs">
            <Link href="/" className="text-muted-foreground hover:text-primary">
                Back to Homepage
            </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
