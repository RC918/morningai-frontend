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
  return [{ locale: 'zh-TW' }, { locale: 'zh-CN' }, { locale: 'en' }];
}

export const metadata: Metadata = { 
  title: 'Morning AI Design System' 
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // ✅ 一定要最先呼叫，建立正確的 locale context 給下游使用
  setRequestLocale(locale);

  // ✅ 之後再讀取 messages（會使用上面設好的 locale）
  const messages = await getMessages();
  
  // 調試日誌
  console.log('SSG locale:', locale);
  console.log('messages sample=', messages.home?.title);

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

