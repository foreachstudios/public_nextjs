import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/demo', '/profile'];

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token');
  const { pathname } = req.nextUrl;

  // Allow access to auth-related paths
  if (pathname.startsWith('/login') || pathname.startsWith('/register')) {
    return NextResponse.next();
  }

  // Handle protected routes
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  // Add token to headers for API requests
  if (pathname.startsWith('/api/')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('Authorization', `Bearer ${token.value}`);
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  return NextResponse.next();
};

export const config = {
    matcher: [
        '/demo/:path*',
    ]
}; 