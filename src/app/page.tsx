import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ThemeSwitcher } from '@/components/theme/theme-switcher'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-surface">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-h4 font-bold text-primary-600">Morning AI</h1>
          <ThemeSwitcher />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Hero Section */}
          <div className="space-y-4">
            <h1 className="text-h1 text-primary-700">
              Morning AI Design System
            </h1>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              企業級 React 元件庫，支援完整 RWD + A11y + 設計系統整合。
              包含 Button、Input、Navigation 等 16+ 響應式元件。
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/components">
              <Button size="lg" className="w-full sm:w-auto">
                查看元件庫
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              查看文檔
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-surface p-6 rounded-lg border border-border">
              <div className="w-12 h-12 bg-primary-500 rounded-lg mx-auto mb-4" />
              <h3 className="text-h5 font-semibold mb-2">響應式設計</h3>
              <p className="text-caption text-text-muted">
                支援 375px/768px/1280px 斷點，完美適配所有裝置
              </p>
            </div>
            
            <div className="bg-surface p-6 rounded-lg border border-border">
              <div className="w-12 h-12 bg-success rounded-lg mx-auto mb-4" />
              <h3 className="text-h5 font-semibold mb-2">無障礙設計</h3>
              <p className="text-caption text-text-muted">
                符合 WCAG 2.1 AA 標準，支援鍵盤導航和螢幕閱讀器
              </p>
            </div>
            
            <div className="bg-surface p-6 rounded-lg border border-border">
              <div className="w-12 h-12 bg-warning rounded-lg mx-auto mb-4" />
              <h3 className="text-h5 font-semibold mb-2">主題系統</h3>
              <p className="text-caption text-text-muted">
                內建 Light/Dark 主題，支援系統偏好設定自動切換
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-h2 font-bold text-primary-600">16+</div>
              <div className="text-caption text-text-muted">核心元件</div>
            </div>
            <div className="text-center">
              <div className="text-h2 font-bold text-primary-600">8</div>
              <div className="text-caption text-text-muted">元件狀態</div>
            </div>
            <div className="text-center">
              <div className="text-h2 font-bold text-primary-600">3</div>
              <div className="text-caption text-text-muted">響應式斷點</div>
            </div>
            <div className="text-center">
              <div className="text-h2 font-bold text-primary-600">100%</div>
              <div className="text-caption text-text-muted">TypeScript</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-surface mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-caption text-text-muted">
            © 2025 Morning AI. Built with Next.js 15 + Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

