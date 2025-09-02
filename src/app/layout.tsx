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
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

