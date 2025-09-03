import React from 'react';
import {NextIntlClientProvider} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import {loadMessages, supportedLocales} from '../../lib/i18n/loadMessages';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Navigation } from '@/components/ui/Navigation';
import { SEOHead } from '@/components/seo/SEOHead';
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider';
import '@/styles/globals.css';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({locale}));
}

export const metadata: Metadata = {
  title: 'MorningAI',
  description: 'Morning AI Design System'
};

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const {children, params} = props;
  const locale = params?.locale ?? 'en';
  unstable_setRequestLocale(locale);

  // SSG/SSR 階段就把訊息合併好，避免任何缺鍵露出 key 字串
  const messages = await loadMessages(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <AnalyticsProvider>
              <SEOHead />
              <Navigation />
              {children}
            </AnalyticsProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

