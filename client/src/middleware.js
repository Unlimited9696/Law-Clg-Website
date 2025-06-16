import { NextResponse } from 'next/server';

export function middleware(request) {
  // Get the pathname from the URL
  const { pathname } = request.nextUrl;

  // Check if the path starts with /admin but is not /admin/login
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    // Check if the user has a token in cookies
    const token = request.cookies.get('adminToken')?.value;

    // If no token is found, redirect to the login page
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Continue with the request if authorized or not an admin route
  return NextResponse.next();
}

// Configure the middleware to run only on admin routes
export const config = {
  matcher: '/admin/:path*',
}; 