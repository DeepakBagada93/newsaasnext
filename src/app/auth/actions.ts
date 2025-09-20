
'use server';

import { z } from 'zod';
import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  // Add other fields you might want to store in user_metadata
  name: z.string().optional(),
  company: z.string().optional(),
});

export async function signup(data: unknown) {
  const cookieStore = cookies();
  const supabase = createClient();
  
  const parsedData = signupSchema.safeParse(data);
  if (!parsedData.success) {
    return { error: 'Invalid data provided.' };
  }
  
  const { email, password, ...user_metadata } = parsedData.data;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        ...user_metadata,
        // You can add default roles or other metadata here
      },
    },
  });

  if (error) {
    // Supabase might return a specific error if user exists, etc.
    if (error.message.includes('User already registered')) {
        return { error: 'This email is already registered.'}
    }
    return { error: `Could not authenticate user: ${error.message}` };
  }

  // A successful signup in Supabase sends a confirmation email by default.
  // You might want to automatically sign them in for this app's flow.
  return { error: null };
}

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export async function login(data: unknown) {
  const cookieStore = cookies();
  const supabase = createClient();
  
  const parsedData = loginSchema.safeParse(data);
   if (!parsedData.success) {
    return { error: 'Invalid data provided.' };
  }

  const { email, password } = parsedData.data;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: `Could not authenticate user: ${error.message}` };
  }
  
  // No need to redirect from here, the client will handle it.
  return { error: null };
}

export async function signOut() {
  const cookieStore = cookies();
  const supabase = createClient();
  await supabase.auth.signOut();
  return redirect('/');
}
