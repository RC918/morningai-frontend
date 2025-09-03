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
    <section className={`${inter.className} relative z-0 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden`} data-e2e-ready="true">
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
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-4 inline-flex select-none items-center rounded-full border px-3 py-1 text-xs font-medium bg-white/80 backdrop-blur-sm border-blue-200 text-blue-700">
            {F('home.hero.label', 'AI-POWERED DESIGN 🚀')}
          </div>
          
          {/* Main heading */}
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl text-gray-900 mb-6" suppressHydrationWarning>
            We make smart design,<br className="hidden md:block" /> &amp; AI tools
          </h1>
          
          {/* Subtitle */}
          <p className="mt-5 max-w-3xl mx-auto text-base text-gray-600 md:text-lg leading-relaxed">
            Morning AI is a design system platform based in Taiwan. We help startups &amp; Fortune 500 companies delight humans on the other side of the screen.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 mb-12">
            <button className="cta-button bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              {F('home.hero.cta', 'LET\'S TALK')}
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-200 transition-all duration-300">
              View Demo
            </button>
          </div>
          
          {/* Booking notice */}
          <div className="text-sm text-gray-600 mb-8">
            We get booked fast! 🔥
          </div>
          
          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-semibold text-gray-900">500+</div>
              <div className="text-sm opacity-70 text-gray-600">Components</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-gray-900">99%</div>
              <div className="text-sm opacity-70 text-gray-600">Satisfaction</div>
            </div>
            <div className="hidden md:block text-center">
              <div className="text-2xl font-semibold text-gray-900">24/7</div>
              <div className="text-sm opacity-70 text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

