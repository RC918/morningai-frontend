import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Basic Auth for staging environment
  if (process.env.NODE_ENV === 'staging' || process.env.VERCEL_ENV === 'preview') {
    const basicAuth = request.headers.get('authorization');
    const url = request.nextUrl;

    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      const [user, pwd] = atob(authValue).split(':');

      if (user === 'morningai' && pwd === 'staging2025!') {
        return NextResponse.next();
      }
    }

    url.pathname = '/api/auth';
    return NextResponse.rewrite(url);
  }

  // SEO protection for non-production environments
  const response = NextResponse.next();
  
  if (process.env.NEXT_PUBLIC_ROBOTS_INDEX === 'false') {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
