import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 動態 metadata 基於環境變數
export const metadata: Metadata = {
  title: "Morning AI - 智能AI代理平台",
  description: "Morning AI 提供專業的AI智能助手服務，幫助您建構強大的Bot系統，實現智能化的用戶互動與業務自動化",
  keywords: "Morning AI, 人工智能, AI助手, Bot建構, 智能平台",
  robots: process.env.NODE_ENV === 'production' ? 'index, follow' : 'noindex, nofollow',
  openGraph: {
    title: "Morning AI - 智能AI代理平台",
    description: "專業的AI智能助手服務平台",
    url: process.env.NODE_ENV === 'production' 
      ? 'https://www.morningai.me' 
      : 'https://staging.morningai.me',
    siteName: 'Morning AI',
    locale: 'zh_TW',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <head>
        {/* 環境變數驅動的 robots meta 標籤 */}
        {process.env.NODE_ENV !== 'production' && (
          <meta name="robots" content="noindex, nofollow" />
        )}
        {process.env.NODE_ENV !== 'production' && (
          <meta name="googlebot" content="noindex, nofollow" />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
