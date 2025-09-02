import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['zh-TW', 'zh-CN', 'en'],
  defaultLocale: 'zh-TW',
  localePrefix: 'always'
});

export const config = {
  matcher: [
    '/((?!_next|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)).*)'
  ]
};

// Force sync with Vercel - Tue Sep  2 11:32:31 EDT 2025
