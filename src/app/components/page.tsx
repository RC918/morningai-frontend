import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { ThemeSwitcher } from '@/components/theme/theme-switcher'
import { cn } from '@/lib/utils'

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-surface sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-h4 font-bold text-primary-600">
            Morning AI
          </Link>
          <ThemeSwitcher />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-h1 text-primary-700">元件庫展示</h1>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              Morning AI Design System 核心元件庫，包含 Button、Input、Navigation 等 16+ 響應式元件。
            </p>
          </div>

          {/* Button Components */}
          <section className="space-y-6">
            <h2 className="text-h2 font-semibold">Button 元件</h2>
            
            {/* Button Variants */}
            <div className="space-y-4">
              <h3 className="text-h4 font-medium">按鈕變體</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="error">Error</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            {/* Button Sizes */}
            <div className="space-y-4">
              <h3 className="text-h4 font-medium">按鈕尺寸</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button size="xl">Extra Large</Button>
              </div>
            </div>

            {/* Button States */}
            <div className="space-y-4">
              <h3 className="text-h4 font-medium">按鈕狀態</h3>
              <div className="flex flex-wrap gap-4">
                <Button>Normal</Button>
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
                <Button 
                  leftIcon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  }
                >
                  With Left Icon
                </Button>
                <Button 
                  rightIcon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  }
                >
                  With Right Icon
                </Button>
              </div>
            </div>

            {/* Full Width Button */}
            <div className="space-y-4">
              <h3 className="text-h4 font-medium">全寬按鈕</h3>
              <Button fullWidth>Full Width Button</Button>
            </div>
          </section>

          {/* Input Components */}
          <section className="space-y-6">
            <h2 className="text-h2 font-semibold">Input 元件</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Input */}
              <div className="space-y-4">
                <h3 className="text-h4 font-medium">基本輸入框</h3>
                <Input 
                  label="姓名"
                  placeholder="請輸入您的姓名"
                  helperText="這是說明文字"
                />
              </div>

              {/* Input with Icons */}
              <div className="space-y-4">
                <h3 className="text-h4 font-medium">帶圖示輸入框</h3>
                <Input 
                  label="Email"
                  type="email"
                  placeholder="example@email.com"
                  leftIcon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  }
                />
              </div>

              {/* Input Sizes */}
              <div className="space-y-4">
                <h3 className="text-h4 font-medium">輸入框尺寸</h3>
                <div className="space-y-3">
                  <Input size="sm" placeholder="Small input" />
                  <Input size="md" placeholder="Medium input" />
                  <Input size="lg" placeholder="Large input" />
                </div>
              </div>

              {/* Input States */}
              <div className="space-y-4">
                <h3 className="text-h4 font-medium">輸入框狀態</h3>
                <div className="space-y-3">
                  <Input 
                    placeholder="Normal state"
                    helperText="正常狀態"
                  />
                  <Input 
                    variant="success"
                    placeholder="Success state"
                    helperText="成功狀態"
                  />
                  <Input 
                    variant="error"
                    placeholder="Error state"
                    errorMessage="這是錯誤訊息"
                  />
                  <Input 
                    placeholder="Loading state"
                    loading
                    helperText="載入中狀態"
                  />
                  <Input 
                    placeholder="Disabled state"
                    disabled
                    helperText="停用狀態"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Component Status */}
          <section className="space-y-6">
            <h2 className="text-h2 font-semibold">元件開發狀態</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Button', status: 'completed', states: 8 },
                { name: 'Input', status: 'completed', states: 8 },
                { name: 'TopNavigation', status: 'completed', states: 6 },
                { name: 'Select', status: 'planned', states: 0 },
                { name: 'Textarea', status: 'planned', states: 0 },
                { name: 'Checkbox', status: 'planned', states: 0 },
                { name: 'Radio', status: 'planned', states: 0 },
                { name: 'Switch', status: 'planned', states: 0 },
                { name: 'Modal', status: 'planned', states: 0 },
                { name: 'Toast', status: 'planned', states: 0 },
                { name: 'Loading', status: 'planned', states: 0 },
                { name: 'Tooltip', status: 'planned', states: 0 },
              ].map((component) => (
                <div key={component.name} className="bg-surface p-4 rounded-lg border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{component.name}</h4>
                    <span className={cn(
                      'px-2 py-1 text-xs rounded-full',
                      {
                        'bg-success/10 text-success': component.status === 'completed',
                        'bg-warning/10 text-warning': component.status === 'in-progress',
                        'bg-secondary-100 text-secondary-600 dark:bg-secondary-800 dark:text-secondary-400': component.status === 'planned',
                      }
                    )}>
                      {component.status === 'completed' && '✅ 完成'}
                      {component.status === 'in-progress' && '🚧 進行中'}
                      {component.status === 'planned' && '📋 規劃中'}
                    </span>
                  </div>
                  <p className="text-sm text-text-muted">
                    狀態數: {component.states}/8
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

