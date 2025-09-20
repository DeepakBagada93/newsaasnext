
import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get('next') ?? '/';

  if (code) {
    const supabase = createClient();
    const { error, data } = await supabase.auth.exchangeCodeForSession(code);
    
    if (!error) {
        // Check user's role from the profiles table
        const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', data.user.id)
            .single();

        if (profileError || !profile) {
             console.error("Error fetching user profile:", profileError);
             return NextResponse.redirect(`${origin}/login?error=Could not find user profile.`);
        }
        
        // Redirect based on role
        if (profile.role === 'admin') {
             return NextResponse.redirect(`${origin}/saasnextdbadmin`);
        } else if (profile.role === 'client') {
            return NextResponse.redirect(`${origin}/client-dashboard`);
        } else {
             return NextResponse.redirect(`${origin}/login?error=Invalid user role.`);
        }
    }
  }

  // return the user to an error page with instructions
  console.error("Authentication error: No code provided or session exchange failed.");
  return NextResponse.redirect(`${origin}/login?error=Could not authenticate user`);
}
