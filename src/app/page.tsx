'use client';

import { useTranslations } from 'next-intl';
import { CTAButton } from '@/components/ui/CTAButton';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen">
      {/* Hero Section - Inspired by Orizon.co */}
      <section className="relative min-h-screen bg-white overflow-hidden">
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
                AI-POWERED DESIGN 🚀
              </div>
              
              {/* Main Title - Orizon Style */}
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 leading-tight">
                  We make
                </h1>
                <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                  <span className="text-blue-500">smart design,</span>
                </h1>
                <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 leading-tight">
                  & AI tools
                </h1>
              </div>
              
              {/* CTA Button with Team Avatars - Orizon Style */}
              <div className="flex items-center gap-4">
                <CTAButton
                  variant="primary"
                  size="lg"
                  className="group relative bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  <div className="flex items-center gap-3">
                    {/* Team Avatar Circles */}
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full border-2 border-white"></div>
                    </div>
                    <span>LET&apos;S TALK</span>
                  </div>
                </CTAButton>
              </div>
              
              {/* Handwritten Note */}
              <div className="relative">
                <div className="font-handwriting text-2xl text-gray-600 transform rotate-2 relative">
                  We get booked fast! 🔥
                  {/* Hand-drawn underline */}
                  <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 200 20" fill="none">
                    <path d="M10 15 Q50 5 100 12 T190 8" stroke="#3B82F6" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              
              {/* Stats Cards */}
              <div className="flex gap-6 pt-8">
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-gray-600">Components</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-gray-900">99%</div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Visual Element */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center">
                <div className="text-6xl">🎨</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

