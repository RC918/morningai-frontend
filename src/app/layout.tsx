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

// 動態robots設定 - 根據環境變數決定是否允許搜尋引擎收錄
const isProduction = process.env.NODE_ENV === 'production' && 
                    process.env.VERCEL_ENV === 'production';

export const metadata: Metadata = {
  title: "Morning AI - 智能AI代理平台",
  description: "Morning AI 官方網站 - 智能AI代理平台，讓每一天都充滿微笑的節奏",
  keywords: ["Morning AI", "AI", "人工智能", "代理平台", "智能助手"],
  authors: [{ name: "Morning AI Team" }],
  creator: "Morning AI",
  publisher: "Morning AI",
  openGraph: {
    title: "Morning AI - 智能AI代理平台",
    description: "Morning AI 官方網站 - 智能AI代理平台，讓每一天都充滿微笑的節奏",
    url: isProduction ? "https://morningai.me" : "https://staging.morningai.me",
    siteName: "Morning AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Morning AI",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Morning AI - 智能AI代理平台",
    description: "Morning AI 官方網站 - 智能AI代理平台，讓每一天都充滿微笑的節奏",
    images: ["/og-image.png"],
  },
  // 🔧 優化：根據環境動態設定robots
  robots: {
    index: isProduction,
    follow: isProduction,
    googleBot: {
      index: isProduction,
      follow: isProduction,
      "max-video-preview": isProduction ? -1 : 0,
      "max-image-preview": isProduction ? "large" : "none",
      "max-snippet": isProduction ? -1 : 0,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
        {/* 🔧 優化：動態meta robots標籤 */}
        {!isProduction && (
          <meta name="robots" content="noindex,nofollow" />
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

