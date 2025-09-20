
import { type NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/middleware';
import { jwtVerify } from 'jose';

// Helper function to verify JWT
async function verifyJWT(token: string) {
  if (!token) return false;
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    await jwtVerify(token, secret);
    return true;
  } catch (error) {
    console.error('JWT Verification failed:', error);
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const { response } = createClient(request);
  const { pathname } = request.nextUrl;

  const adminSessionCookie = request.cookies.get('admin_session');
  const clientSessionCookie = request.cookies.get('client_session');

  const isAdminSessionValid = await verifyJWT(adminSessionCookie?.value || '');
  const isClientSessionValid = await verifyJWT(clientSessionCookie?.value || '');

  const isAdminRoute = pathname.startsWith('/saasnextdbadmin') && !pathname.startsWith('/saasnextdbadmin/login');
  const isClientRoute = pathname.startsWith('/client-dashboard');
  
  const isAdminLoginPage = pathname === '/saasnextdbadmin/login';
  const isClientLoginPage = pathname === '/login';

  // --- Admin Route Protection ---
  if (isAdminRoute && !isAdminSessionValid) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/saasnextdbadmin/login';
    return NextResponse.redirect(redirectUrl);
  }
  
  // If admin is logged in, redirect away from admin login page
  if (isAdminLoginPage && isAdminSessionValid) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/saasnextdbadmin';
    return NextResponse.redirect(redirectUrl);
  }

  // --- Client Route Protection ---
  if (isClientRoute && !isClientSessionValid) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/login';
    return NextResponse.redirect(redirectUrl);
  }
  
  // If client is logged in, redirect away from client login page
  if (isClientLoginPage && isClientSessionValid) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/client-dashboard';
    return NextResponse.redirect(redirectUrl);
  }

  // --- Prevent Cross-Login Access ---
  // If admin is logged in, don't let them access the client login page
  if (isClientLoginPage && isAdminSessionValid) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/saasnextdbadmin';
    return NextResponse.redirect(redirectUrl);
  }
  
  // If client is logged in, don't let them access the admin login page
  if (isAdminLoginPage && isClientSessionValid) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/client-dashboard';
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
