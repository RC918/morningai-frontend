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

// 🔧 環境變數控制SEO設定
const allowIndex = process.env.NEXT_PUBLIC_ROBOTS_INDEX === "true";

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
    url: allowIndex ? "https://morningai.me" : "https://staging.morningai.me",
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
  // 🔧 環境變數控制robots設定
  robots: {
    index: allowIndex,
    follow: allowIndex,
    googleBot: {
      index: allowIndex,
      follow: allowIndex,
      "max-video-preview": allowIndex ? -1 : 0,
      "max-image-preview": allowIndex ? "large" : "none",
      "max-snippet": allowIndex ? -1 : 0,
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
  const allowIndex = process.env.NEXT_PUBLIC_ROBOTS_INDEX === "true";
  
  return (
    <html lang="zh-TW">
      <head>
        {/* 🔧 動態meta robots標籤 */}
        {!allowIndex && (
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
