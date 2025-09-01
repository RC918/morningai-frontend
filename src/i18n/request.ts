import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './config';

export default getRequestConfig(async ({ locale }) => {
  // 調試信息
  console.log('request.ts - incoming locale:', locale);
  console.log('request.ts - locales array:', locales);
  console.log('request.ts - defaultLocale:', defaultLocale);
  
  // Validate that the incoming `locale` parameter is valid
  const validLocale: string = locale && locales.includes(locale as any) ? locale : defaultLocale;
  
  console.log('request.ts - validLocale:', validLocale);
  console.log('request.ts - loading messages from:', `./messages/${validLocale}.json`);

  return {
    locale: validLocale,
    messages: (await import(`./messages/${validLocale}.json`)).default
  };
});

