
import { type NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/middleware';
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {
  const { supabase, response } = createClient(request);
  const { pathname } = request.nextUrl;

  // --- Admin Auth ---
  const { data: { session: adminSession } } = await supabase.auth.getSession();
  const isAdminRoute = pathname.startsWith('/saasnextdbadmin') && !pathname.startsWith('/saasnextdbadmin/login');

  if (!adminSession && isAdminRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/saasnextdbadmin/login';
    return NextResponse.redirect(redirectUrl);
  }

  if (adminSession && pathname === '/saasnextdbadmin/login') {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/saasnextdbadmin';
    return NextResponse.redirect(redirectUrl);
  }

  // --- Client Auth ---
  const isClientRoute = pathname.startsWith('/client-dashboard');
  const clientSessionCookie = request.cookies.get('client_session');
  let clientSessionValid = false;

  if (clientSessionCookie) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      await jwtVerify(clientSessionCookie.value, secret);
      clientSessionValid = true;
    } catch (error) {
      // Token is invalid or expired
      clientSessionValid = false;
    }
  }

  // If trying to access a client route without a valid session, redirect to client login
  if (isClientRoute && !clientSessionValid) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/login';
    return NextResponse.redirect(redirectUrl);
  }

  // If has a valid client session and tries to access login page, redirect to dashboard
  if (clientSessionValid && pathname === '/login') {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = '/client-dashboard';
      return NextResponse.redirect(redirectUrl);
  }

  // If there is an admin session, and user tries to access client login page, redirect to admin dashboard
  if (adminSession && pathname === '/login') {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/saasnextdbadmin';
    return NextResponse.redirect(redirectUrl);
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
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
