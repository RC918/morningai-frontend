import React from 'react';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function Pricing() {
  return (
    <section className={`${inter.className} py-24 bg-gradient-to-br from-gray-50 to-blue-50`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="mb-4 inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium bg-white border-gray-200 text-gray-700">
            <span className="mr-2">💰</span>
            FLEXIBLE PRICING
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl mb-6">
            選擇適合您的<span className="text-blue-600">方案</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            從個人開發者到大型企業，我們提供靈活的定價方案，滿足不同規模的需求。
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* 入門版 */}
          <div className="pricing-card relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">入門版</h3>
              <p className="text-gray-600 mb-6">適合個人開發者和小型專案</p>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">$29</span>
                <span className="text-gray-600 ml-2">/月</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="mr-3 text-green-600">✓</span>
                <span className="text-gray-600">50+ UI 組件</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-600">✓</span>
                <span className="text-gray-600">基礎設計系統</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-600">✓</span>
                <span className="text-gray-600">社群支援</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-600">✓</span>
                <span className="text-gray-600">月度更新</span>
              </li>
            </ul>
            
            <button className="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              選擇入門版
            </button>
          </div>

          {/* 專業版 - 最受歡迎 */}
          <div className="pricing-card popular relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-8 shadow-2xl transform scale-105 border-2 border-blue-500">
            <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
              最受歡迎
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">專業版</h3>
              <p className="text-blue-100 mb-6">適合成長中的團隊和企業</p>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-white">$99</span>
                <span className="text-blue-100 ml-2">/月</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="mr-3 text-green-400">✓</span>
                <span className="text-white">500+ UI 組件</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-400">✓</span>
                <span className="text-white">完整設計系統</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-400">✓</span>
                <span className="text-white">優先支援</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-400">✓</span>
                <span className="text-white">AI 設計助手</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-400">✓</span>
                <span className="text-white">團隊協作工具</span>
              </li>
            </ul>
            
            <button className="w-full bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              選擇專業版
            </button>
          </div>

          {/* 企業版 */}
          <div className="pricing-card relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">企業版</h3>
              <p className="text-gray-600 mb-6">適合大型企業和組織</p>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">客製化</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="mr-3 text-green-600">✓</span>
                <span className="text-gray-600">無限制組件</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-600">✓</span>
                <span className="text-gray-600">客製化設計系統</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-600">✓</span>
                <span className="text-gray-600">專屬客戶經理</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-600">✓</span>
                <span className="text-gray-600">SLA 保證</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-600">✓</span>
                <span className="text-gray-600">私有部署</span>
              </li>
            </ul>
            
            <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              聯繫我們
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            準備開始您的設計之旅？
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            加入數千名設計師和開發者的行列，體驗 Morning AI 帶來的設計革命。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              免費試用
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg border border-gray-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              聯繫我們
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

