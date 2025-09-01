// src/app/[locale]/layout.tsx
import type { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale, getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Navigation } from '@/components/ui/Navigation';
import '@/styles/globals.css';
import type { Metadata } from 'next';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = { 
  title: 'Morning AI Design System' 
};

interface RootLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params
}: RootLayoutProps) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // 關鍵：最外層就設定請求語系
  setRequestLocale(locale);

  // 關鍵：用 getMessages() 取得「該語系」訊息
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <div className="min-h-screen bg-background font-sans antialiased">
              <Navigation />
              <main className="flex-1">
                {children}
              </main>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

