import React from 'react';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function Features() {
  return (
    <section className={`${inter.className} py-24 bg-white`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="mb-4 inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium bg-blue-50 border-blue-200 text-blue-700">
            <span className="mr-2">🎨</span>
            POWERFUL FEATURES
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl mb-6">
            強大功能，<span className="text-blue-600">無限可能</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            探索 Morning AI 的完整功能套件，從智能設計系統到企業級解決方案，我們提供您成功所需的一切工具。
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Feature 1: AI 智能設計 */}
          <div className="feature-card group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-100 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="feature-icon mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                🤖
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI 智能設計</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                運用最先進的人工智能技術，自動化您的設計工作流程，提升創作效率。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2 text-blue-600">✓</span>
                  智能佈局建議
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-600">✓</span>
                  自動色彩配對
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-600">✓</span>
                  設計趨勢分析
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 2: 元件庫系統 */}
          <div className="feature-card group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-50 to-pink-100 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="feature-icon mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                📦
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">元件庫系統</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                完整的 UI 元件庫，為您提供精心設計的組件，支援響應式佈局。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2 text-purple-600">✓</span>
                  500+ 精美組件
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-purple-600">✓</span>
                  響應式設計
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-purple-600">✓</span>
                  TypeScript 支援
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3: 開發流程 */}
          <div className="feature-card group relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-50 to-blue-100 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="feature-icon mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">開發流程</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                優化的開發工作流程，從設計到部署的一站式解決方案。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2 text-indigo-600">✓</span>
                  自動化部署
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-indigo-600">✓</span>
                  版本控制
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-indigo-600">✓</span>
                  團隊協作
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

