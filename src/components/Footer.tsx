'use client';
import React, { useEffect, useState } from 'react';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], display: "swap" });
import Link from 'next/link';

export default function Footer() {
  const [versionInfo, setVersionInfo] = useState<{
    commit?: string;
    buildTime?: string;
    buildId?: string;
  }>({});

  useEffect(() => {
    // Fetch version info from API
    fetch('/api/health')
      .then(res => res.json())
      .then(data => {
        setVersionInfo({
          commit: data.commit?.substring(0, 7),
          buildTime: data.buildTime,
          buildId: data.buildId
        });
      })
      .catch(() => {
        // Fallback to environment variables if API fails
        setVersionInfo({
          commit: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.substring(0, 7) || 'unknown',
          buildTime: new Date().toISOString(),
          buildId: process.env.NEXT_PUBLIC_VERCEL_DEPLOYMENT_ID || 'local'
        });
      });
  }, []);

  return (
    <footer className={`${inter.className} bg-gray-900 text-white`}>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Morning AI
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Morning AI 是台灣領先的設計系統平台，致力於為全球企業提供智能化的設計解決方案。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">GitHub</span>
                🐙
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">產品</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  設計系統
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  UI 組件庫
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  AI 設計助手
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  開發工具
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">公司</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  關於我們
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  職涯機會
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  新聞中心
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  聯繫我們
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
              <p className="text-gray-400 text-sm">
                © 2025 Morning AI. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  隱私政策
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  服務條款
                </Link>
              </div>
            </div>
            
            {/* Version Info */}
            <div className="mt-4 lg:mt-0">
              <div className="text-xs text-gray-500 space-y-1">
                {versionInfo.commit && (
                  <div className="flex items-center space-x-2">
                    <span>Version:</span>
                    <code className="bg-gray-800 px-2 py-1 rounded text-green-400">
                      {versionInfo.commit}
                    </code>
                  </div>
                )}
                {versionInfo.buildTime && (
                  <div className="text-center lg:text-right">
                    Build: {new Date(versionInfo.buildTime).toLocaleString('zh-TW')}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

