import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], display: "swap" });
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations();
  
  // Avoid rendering i18n key name when missing; always fallback to English copy.
  const F = (key: string, fallback: string) => {
    try {
      const value = t(key)
      if (!value || value === key) return fallback
      return value
    } catch {
      return fallback
    }
  }

  return (
    <section className={`${inter.className} relative z-0 min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden`} data-e2e-ready="true">
      {/* Background decorative elements */}
      <div aria-hidden className="hero-curve">
        {/* Blue curve */}
        <svg
          className="absolute bottom-0 left-0 w-full h-64 text-blue-400"
          viewBox="0 0 1200 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="currentColor"
            fillOpacity="0.3"
          />
        </svg>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-indigo-200 rounded-full opacity-25 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex select-none items-center rounded-full border px-4 py-2 text-sm font-medium bg-white/80 backdrop-blur-sm border-blue-200 text-blue-700 shadow-lg">
            <span className="mr-2">🚀</span>
            {F('home.hero.label', 'AI-POWERED DESIGN')}
          </div>
          
          {/* Main heading */}
          <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight md:text-7xl text-gray-900 mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent" suppressHydrationWarning>
            We make<br />
            smart design,<br className="hidden md:block" />
            <span className="text-blue-600">&amp; AI tools</span>
          </h1>
          
          {/* Subtitle */}
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 md:text-xl leading-relaxed">
            Morning AI is a design system platform based in Taiwan. We help startups &amp; Fortune 500 companies delight humans on the other side of the screen.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 mb-12">
            <button className="cta-button bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              LET&apos;S TALK
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg border border-gray-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              View Demo
            </button>
          </div>
          
          {/* Booking notice */}
          <div className="text-sm text-gray-600 mb-12 flex items-center justify-center gap-2">
            <span className="animate-pulse">🔥</span>
            <span>We get booked fast!</span>
            <span className="animate-pulse">🔥</span>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 max-w-3xl mx-auto">
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600 font-medium">Components</div>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
              <div className="text-4xl font-bold text-purple-600 mb-2">99%</div>
              <div className="text-sm text-gray-600 font-medium">Satisfaction</div>
            </div>
            <div className="hidden md:block text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
              <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600 font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

