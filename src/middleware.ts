import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define routes that should be public (not require authentication)
const isPublicRoute = createRouteMatcher([
  '/',
  '/about',
  '/services',
  '/pricing',
  '/recommendation',
  '/contact',
  '/privacy-policy',
  '/terms-conditions',
  '/api/(.*)', 
  '/custom-services'
]);

// Define routes that should be protected (require authentication)
const isProtectedRoute = createRouteMatcher([
    '/client-dashboard(.*)',
    '/saasnextdbadmin(.*)'
]);

export default clerkMiddleware((auth, request) => {
  if (isProtectedRoute(request)) {
    auth().protect(); // Protect the route if it's in the protected list
  }
});


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
