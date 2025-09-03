import type { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Navigation } from '@/components/ui/Navigation';
import { SEOHead } from '@/components/seo/SEOHead';
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider';
import '@/styles/globals.css';
import type { Metadata } from 'next';

// 靜態import map - 避免動態載入失敗
import zhTW from '@/messages/zh-TW.json';
import zhCN from '@/messages/zh-CN.json';
import en from '@/messages/en.json';

const MAP = {
  'zh-TW': zhTW,
  'zh-CN': zhCN,
  'en': en
} as const;

const locales = ['zh-TW', 'zh-CN', 'en'] as const;

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [{ locale: 'zh-TW' }, { locale: 'zh-CN' }, { locale: 'en' }];
}

export const metadata: Metadata = { 
  title: 'Morning AI Design System' 
};

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // 使用靜態import map載入messages
  const messages = MAP[locale as keyof typeof MAP];
  
  // 開發環境調試日誌
  if (process.env.NODE_ENV === 'development') {
    console.log('SSG locale:', locale, 'messages loaded:', !!messages);
  }
  
  // 構建當前路徑 (用於 SEO)
  const pathname = `/${locale}`;
  
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <SEOHead locale={locale} pathname={pathname} />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <AnalyticsProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider>
              <div className="relative flex min-h-screen flex-col">
                <Navigation />
                <main className="flex-1">{children}</main>
              </div>
            </ThemeProvider>
          </NextIntlClientProvider>
        </AnalyticsProvider>
      </body>
    </html>
  );
}

