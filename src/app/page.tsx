'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">Morning AI</div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
            <Button variant="primary" size="sm">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-md animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                AI-POWERED DESIGN 🚀
              </div>
              
              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  We make
                </h1>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-blue-500">smart design,</span>
                </h1>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  & AI tools
                </h1>
              </div>
              
              {/* Description */}
              <p className="text-xl text-gray-600 max-w-lg">
                Morning AI is a design system platform based in Taiwan. We help startups & Fortune 500 companies delight humans on the other side of the screen.
              </p>
              
              {/* CTA Button */}
              <div className="flex items-center gap-4">
                <Button
                  size="lg"
                  className="group relative bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full border-2 border-white"></div>
                    </div>
                    <span>LET&apos;S TALK</span>
                  </div>
                </Button>
                <Button variant="outline" size="lg">
                  View Demo
                </Button>
              </div>
              
              {/* Handwritten Note */}
              <div className="relative">
                <div className="font-handwriting text-2xl text-gray-600 transform rotate-2 relative">
                  We get booked fast! 🔥
                  <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 200 20" fill="none">
                    <path d="M10 15 Q50 5 100 12 T190 8" stroke="#3B82F6" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              
              {/* Stats */}
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
            
            {/* Right Column */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-8xl">🎨</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              POWERFUL FEATURES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              強大功能，無限可能
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              探索 Morning AI 的完整功能套件，從智能設計系統到企業級解決方案，我們提供您成功所需的一切工具。
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-white p-8 rounded-3xl border border-blue-200 hover:border-blue-400 hover:-translate-y-4 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                AI 智能設計
              </h3>
              <p className="text-gray-600 mb-6">
                運用最先進的人工智能技術，自動化您的設計工作流程，提升創作效率。
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">智能佈局建議</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">自動色彩配對</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600">設計趨勢分析</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white p-8 rounded-3xl border border-green-200 hover:border-green-400 hover:-translate-y-4 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                元件庫系統
              </h3>
              <p className="text-gray-600 mb-6">
                完整的 UI 元件庫，為您提供精心設計的設計，支援響應式佈局。
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">500+ 精美組件</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">響應式設計</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600">TypeScript 支援</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white p-8 rounded-3xl border border-purple-200 hover:border-purple-400 hover:-translate-y-4 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                開發流程
              </h3>
              <p className="text-gray-600 mb-6">
                優化的開發工作流程，從設計到部署的一站式解決方案。
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">自動化部署</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">版本控制</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600">團隊協作</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              FLEXIBLE PRICING
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              選擇適合您的方案
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              從個人開發者到大型企業，我們提供靈活的定價方案，滿足不同規模的需求。
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">入門版</h3>
                <p className="text-gray-600 mb-4">適合個人開發者和小型專案</p>
                <div className="text-4xl font-bold text-gray-900">$29<span className="text-lg text-gray-600">/月</span></div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>50+ UI 組件</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>基礎設計系統</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>社群支援</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>月度更新</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                選擇入門版
              </Button>
            </div>

            {/* Professional Plan */}
            <div className="bg-blue-50 border-2 border-blue-500 rounded-3xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  最受歡迎
                </div>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">專業版</h3>
                <p className="text-gray-600 mb-4">適合成長中的團隊和企業</p>
                <div className="text-4xl font-bold text-gray-900">$99<span className="text-lg text-gray-600">/月</span></div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>500+ UI 組件</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>完整設計系統</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>優先支援</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>AI 設計助手</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>團隊協作工具</span>
                </li>
              </ul>
              <Button className="w-full">
                選擇專業版
              </Button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">企業版</h3>
                <p className="text-gray-600 mb-4">適合大型企業和組織</p>
                <div className="text-4xl font-bold text-gray-900">客製化</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>無限制組件</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>客製化設計系統</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>專屬客戶經理</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>SLA 保證</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>私有部署</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                聯繫我們
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            準備開始您的設計之旅？
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            加入數千名設計師和開發者的行列，體驗 Morning AI 帶來的設計革命。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              免費試用
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              聯繫我們
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">Morning AI</div>
              <p className="text-gray-400 mb-4">
                台灣領先的設計系統平台，為全球企業提供智能設計解決方案。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">產品</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">設計系統</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">UI 組件庫</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">AI 設計工具</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">公司</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">關於我們</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">職涯機會</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">新聞中心</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">支援</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">文檔</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">社群</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">聯繫我們</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Morning AI. Built with Next.js 15 + Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

