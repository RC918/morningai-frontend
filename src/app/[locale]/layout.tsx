import type { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale, getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Navigation } from '@/components/ui/Navigation';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { MESSAGES } from '@/i18n/messages';

const locales = ['zh-TW', 'zh-CN', 'en'] as const;

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

  // ✅ next-intl v3 使用 setRequestLocale
  setRequestLocale(locale);

  // ✅ 使用明確映射的訊息
  const messages = (MESSAGES as any)[locale];
  
  // 調試日誌 - 煙霧測試
  console.log('SSG locale:', locale, 'messages sample=', messages?.LANG_CHECK);
  
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <div className="relative flex min-h-screen flex-col">
              <Navigation />
              <main className="flex-1">{children}</main>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

