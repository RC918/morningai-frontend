import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if this is a staging/preview environment
  const isStaging = process.env.NODE_ENV === 'staging' || 
                   process.env.VERCEL_ENV === 'preview'
  
  if (isStaging) {
    const basicAuth = request.headers.get('authorization')
    
    if (!basicAuth) {
      return new Response('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Staging Environment"',
        },
      })
    }
    
    const authValue = basicAuth.split(' ')[1]
    if (!authValue) {
      return new Response('Invalid authorization header', { status: 401 })
    }
    
    try {
      const [user, pwd] = atob(authValue).split(':')
      
      if (user !== (process.env.PREVIEW_USER || 'morningai') || 
          pwd !== (process.env.PREVIEW_PASS || 'staging2025!')) {
        return new Response('Invalid credentials', { status: 401 })
      }
    } catch (error) {
      return new Response('Invalid authorization format', { status: 401 })
    }
  }
  
  const response = NextResponse.next()
  
  // Add security headers for staging
  if (isStaging) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  }
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
