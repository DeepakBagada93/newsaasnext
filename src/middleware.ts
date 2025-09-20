
import { type NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/middleware';

export async function middleware(request: NextRequest) {
  const { supabase, response } = createClient(request);
  const { pathname } = request.nextUrl;

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const user = session?.user;
  let userRole = null;
  if (user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();
    userRole = profile?.role;
  }

  const isAdminRoute = pathname.startsWith('/saasnextdbadmin');
  const isClientRoute = pathname.startsWith('/client-dashboard');
  const isAdminLoginPage = pathname === '/saasnextdbadmin/login';
  const isClientLoginPage = pathname === '/login';

  // If user is not logged in
  if (!user) {
    if (isAdminRoute && !isAdminLoginPage) {
      return NextResponse.redirect(new URL('/saasnextdbadmin/login', request.url));
    }
    if (isClientRoute) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return response;
  }
  
  // If user is logged in
  if (userRole === 'admin') {
    // If admin tries to access client routes or client login, redirect to admin dashboard
    if (isClientRoute || isClientLoginPage) {
      return NextResponse.redirect(new URL('/saasnextdbadmin', request.url));
    }
    // If admin is on their login page, redirect to their dashboard
    if (isAdminLoginPage) {
        return NextResponse.redirect(new URL('/saasnextdbadmin', request.url));
    }
  } else if (userRole === 'client') {
    // If client tries to access admin routes or admin login, redirect to client dashboard
    if (isAdminRoute || isAdminLoginPage) {
      return NextResponse.redirect(new URL('/client-dashboard', request.url));
    }
    // If client is on their login page, redirect to their dashboard
    if (isClientLoginPage) {
        return NextResponse.redirect(new URL('/client-dashboard', request.url));
    }
  } else {
    // If user is logged in but has no role (or role is not client/admin), sign them out
    // and redirect to the main login page. This can happen if their profile wasn't created properly.
    await supabase.auth.signOut();
    return NextResponse.redirect(new URL('/login?error=Invalid user role. Please contact support.', request.url));
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - auth/callback (Supabase OAuth callback)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|auth/callback|favicon.ico|.*\\..*).*)',
  ],
};
