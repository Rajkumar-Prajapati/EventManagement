
import { clerkMiddleware } from "@clerk/nextjs/server";

// Middleware without direct `publicRoutes` or `ignoredRoutes` options
const combinedMiddleware = clerkMiddleware();

export default combinedMiddleware;

export const config = {
  matcher: [
    // Public routes that do not require Clerk middleware
    '/',
    '/events/:id',
    '/api/webhook/stripe',
    '/api/uploadthing',

    // Apply Clerk middleware for all other routes, except for static assets
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
