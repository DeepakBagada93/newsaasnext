
'use server';

import { createClient } from '@/lib/supabase/server';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export async function signInWithGoogle() {
  const supabase = createClient();
  
  // Use a reliable origin for the production environment
  const origin = process.env.NODE_ENV === 'development' 
    ? headers().get('origin') 
    : 'https://saasnext-82835.web.app';

  if (!origin) {
    throw new Error('Could not determine redirect origin');
  }

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.error('Error signing in with Google:', error);
    // Potentially redirect to a login page with an error message
    return redirect('/login?error=Could not authenticate user');
  }

  if (data.url) {
    return redirect(data.url);
  }
}

export async function signOut() {
  const supabase = createClient();
  await supabase.auth.signOut();
  return redirect('/');
}
