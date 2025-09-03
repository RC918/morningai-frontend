'use client'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

export default function Hero() {
  const t = useTranslations('home.hero')

  // Avoid rendering i18n key name when missing; always fallback to English copy.
  const F = (key: string, fallback: string) => {
    const value = t.optional(key) as unknown as string | undefined
    if (!value || value === key) return fallback
    return value
  }

  // mark hydration-ready for E2E
  const [ready, setReady] = useState(false)
  useEffect(() => setReady(true), [])

  const label = F('label', 'AI-POWERED DESIGN 🚀')
  const title = F('title', 'We make smart design, & AI tools')
  const desc = F(
    'description',
    'Morning AI is a design system platform based in Taiwan. We help startups & Fortune 500 companies delight humans on the other side of the screen.'
  )

  return (
    <section
      id="hero"
      data-e2e-ready={ready ? '1' : '0'}
      className="relative min-h-screen bg-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-md animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              {label}
            </div>
            
            {/* Main Title - Fixed to prevent hydration mismatch */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 leading-tight" suppressHydrationWarning>
                {title}
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
              {desc}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 max-w-md">
              <div className="text-center p-4 bg-white/50 rounded-xl border border-gray-100">
                <div className="text-3xl font-bold text-blue-500">500+</div>
                <div className="text-gray-600">Components</div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-xl border border-gray-100">
                <div className="text-3xl font-bold text-green-500">99%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Additional Content */}
          <div className="space-y-6 lg:pl-8">
            {/* Optional decorative curve kept as non-interactive */}
            <div aria-hidden="true" className="hero-curve">
              {/* svg / canvas can live here if needed */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

