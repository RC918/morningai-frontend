'use client';

import { useTranslations } from 'next-intl';
import { CTAButton } from '@/components/ui/CTAButton';
import Footer from '@/components/Footer';

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
                  className="group bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
                  ctaText="hero_lets_talk"
                >
                  <span>LET&apos;S TALK</span>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full border-2 border-white"></div>
                  </div>
                </CTAButton>
                
                {/* Handwritten Style Note */}
                <div className="relative">
                  <div className="text-gray-600 font-handwriting text-lg transform rotate-2">
                    We get booked fast! 🔥
                  </div>
                  <svg className="absolute -bottom-2 left-4 w-16 h-4 text-gray-400" viewBox="0 0 64 16" fill="none">
                    <path d="M2 14C20 8 44 8 62 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              
              {/* Secondary CTA */}
              <div className="pt-4">
                <CTAButton
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                  ctaText="hero_view_demo"
                >
                  {t('cta.viewDemo')}
                </CTAButton>
              </div>
            </div>
            
            {/* Right Column - Description */}
            <div className="space-y-6 lg:pl-8">
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Morning AI is a leading design system platform based in Taiwan. We help startups & Fortune 500 companies delight humans on the other side of the screen.
              </p>
              
              {/* Stats or Features */}
              <div className="grid grid-cols-2 gap-6 pt-8">
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
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced with Animations */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              POWERFUL FEATURES
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              強大功能，<span className="text-blue-500">無限可能</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              探索 Morning AI 的完整功能套件，從智能設計系統到企業級解決方案，我們提供您成功所需的一切工具。
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* AI Design Feature - Enhanced */}
            <div className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon Container */}
              <div className="relative w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <div className="text-4xl">🤖</div>
                {/* Floating particles */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                AI 智能設計
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                運用最先進的人工智能技術，自動化您的設計工作流程，提升創作效率。
              </p>
              
              {/* Feature List */}
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  智能佈局建議
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  自動色彩配對
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  設計趨勢分析
                </li>
              </ul>
              
              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            {/* Component Library Feature - Enhanced */}
            <div className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-green-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon Container */}
              <div className="relative w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <div className="text-4xl">📦</div>
                {/* Floating particles */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                元件庫系統
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                完整的 UI 元件庫，為您提供精心設計的設計，支援響應式佈局。
              </p>
              
              {/* Feature List */}
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  500+ 精美組件
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  響應式設計
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  TypeScript 支援
                </li>
              </ul>
              
              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            {/* Workflow Feature - Enhanced */}
            <div className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-purple-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon Container */}
              <div className="relative w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <div className="text-4xl">⚡</div>
                {/* Floating particles */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                開發流程
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                優化的開發工作流程，從設計到部署的一站式解決方案。
              </p>
              
              {/* Feature List */}
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  自動化部署
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  版本控制
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  團隊協作
                </li>
              </ul>
              
              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <CTAButton
              variant="outline"
              size="lg"
              className="group border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 relative overflow-hidden"
              ctaText="features_view_all"
            >
              <span className="relative z-10">查看所有功能</span>
              <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Pricing Section - Enhanced with Interactive Effects */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              FLEXIBLE PRICING
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              選擇適合您的<span className="text-green-500">方案</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              從個人開發者到大型企業，我們提供靈活的定價方案，滿足不同規模的需求。
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="group relative bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Plan Header */}
              <div className="relative text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">入門版</h3>
                <p className="text-gray-600 mb-6">適合個人開發者和小型專案</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-gray-900">$29</span>
                  <span className="text-gray-600">/月</span>
                </div>
              </div>
              
              {/* Features List */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">50+ UI 組件</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">基礎設計系統</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">社群支援</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">月度更新</span>
                </li>
              </ul>
              
              {/* CTA Button with Ripple Effect */}
              <CTAButton
                variant="outline"
                size="lg"
                className="group/btn relative w-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-3 text-lg font-semibold rounded-xl transition-all duration-300 overflow-hidden"
                ctaText="pricing_starter_select"
              >
                <span className="relative z-10">選擇入門版</span>
                <div className="absolute inset-0 bg-blue-500 transform scale-0 group-hover/btn:scale-100 transition-transform duration-300 rounded-xl"></div>
              </CTAButton>
            </div>
            
            {/* Professional Plan - Featured */}
            <div className="group relative bg-white rounded-3xl p-8 border-2 border-green-400 hover:border-green-500 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden transform scale-105">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  最受歡迎
                </div>
              </div>
              
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Plan Header */}
              <div className="relative text-center mb-8 pt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">專業版</h3>
                <p className="text-gray-600 mb-6">適合成長中的團隊和企業</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-gray-900">$99</span>
                  <span className="text-gray-600">/月</span>
                </div>
              </div>
              
              {/* Features List */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">500+ UI 組件</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">完整設計系統</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">AI 設計助手</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">優先技術支援</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">週度更新</span>
                </li>
              </ul>
              
              {/* CTA Button with Enhanced Ripple */}
              <CTAButton
                variant="primary"
                size="lg"
                className="group/btn relative w-full bg-green-500 hover:bg-green-600 text-white py-3 text-lg font-semibold rounded-xl transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl"
                ctaText="pricing_professional_select"
              >
                <span className="relative z-10">選擇專業版</span>
                <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover/btn:scale-100 transition-transform duration-300 rounded-xl"></div>
              </CTAButton>
            </div>
            
            {/* Enterprise Plan */}
            <div className="group relative bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-purple-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Plan Header */}
              <div className="relative text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">企業版</h3>
                <p className="text-gray-600 mb-6">適合大型企業和組織</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-gray-900">$299</span>
                  <span className="text-gray-600">/月</span>
                </div>
              </div>
              
              {/* Features List */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">無限制組件</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">客製化設計系統</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">專屬 AI 訓練</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">24/7 專屬支援</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">即時更新</span>
                </li>
              </ul>
              
              {/* CTA Button with Ripple Effect */}
              <CTAButton
                variant="outline"
                size="lg"
                className="group/btn relative w-full border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white py-3 text-lg font-semibold rounded-xl transition-all duration-300 overflow-hidden"
                ctaText="pricing_enterprise_select"
              >
                <span className="relative z-10">選擇企業版</span>
                <div className="absolute inset-0 bg-purple-500 transform scale-0 group-hover/btn:scale-100 transition-transform duration-300 rounded-xl"></div>
              </CTAButton>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-8">
              所有方案都包含 14 天免費試用，無需信用卡
            </p>
            <CTAButton
              variant="outline"
              size="lg"
              className="border-2 border-gray-400 text-gray-600 hover:border-blue-500 hover:text-blue-500 px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300"
              ctaText="pricing_compare_plans"
            >
              比較所有方案
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('cta.readyToStart.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            {t('cta.readyToStart.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              variant="primary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              ctaText="final_get_started"
            >
              {t('cta.getStarted')}
            </CTAButton>
            
            <CTAButton
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              ctaText="final_contact_us"
            >
              {t('cta.contactUs')}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

