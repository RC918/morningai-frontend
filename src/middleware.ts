import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['zh-TW', 'zh-CN', 'en'],
  defaultLocale: 'zh-TW',
  localePrefix: 'always'
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)']
};

