
import { type NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/middleware';

export async function middleware(request: NextRequest) {
  const { supabase, response } = createClient(request);

  // Refresh session if expired - required for Server Components
  const { data: { session } } = await supabase.auth.getSession();

  const { pathname } = request.nextUrl;

  // Define protected routes
  const isClientRoute = pathname.startsWith('/client-dashboard');
  const isAdminRoute = pathname.startsWith('/saasnextdbadmin') && !pathname.startsWith('/saasnextdbadmin/login');

  // If no session, redirect to login page
  if (!session && (isClientRoute || isAdminRoute)) {
    const redirectUrl = request.nextUrl.clone();
    if(isClientRoute) {
        redirectUrl.pathname = '/login';
    } else if (isAdminRoute) {
        redirectUrl.pathname = '/saasnextdbadmin/login';
    }
    return NextResponse.redirect(redirectUrl);
  }
  
  // If there is a session, and user tries to access login page, redirect to dashboard
  if (session) {
    if (pathname === '/login') {
        const redirectUrl = request.nextUrl.clone();
        redirectUrl.pathname = '/client-dashboard';
        return NextResponse.redirect(redirectUrl);
    }
     if (pathname === '/saasnextdbadmin/login') {
        const redirectUrl = request.nextUrl.clone();
        redirectUrl.pathname = '/saasnextdbadmin';
        return NextResponse.redirect(redirectUrl);
    }
  }


  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
