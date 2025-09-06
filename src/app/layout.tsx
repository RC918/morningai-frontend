import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme/theme-provider'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Morning AI - Design System',
  description: 'Morning AI SaaS MVP Phase 2 Frontend - Design System & Component Library',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Caveat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

