import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

// Force Node.js runtime to avoid Edge compatibility issues
export const runtime = 'nodejs';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed'
});

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(en|zh-TW|zh-CN)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};

