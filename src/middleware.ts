import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// All routes are public by default.
// See https://clerk.com/docs/references/nextjs/clerk-middleware
// for more information about configuring your middleware
const isPublicRoute = createRouteMatcher(['/(.*)']);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
