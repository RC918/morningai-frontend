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
    url: "https://morningai.me",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
