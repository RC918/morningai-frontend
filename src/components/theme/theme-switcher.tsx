'use client'

import * as React from 'react'
import { useTheme } from './theme-provider'
import { Button } from '@/components/ui/Button'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center gap-1 p-1 bg-surface rounded-lg border border-border">
      <Button
        variant={theme === 'light' ? 'primary' : 'ghost'}
        size="sm"
        onClick={() => setTheme('light')}
        className="text-xs"
      >
        Light
      </Button>
      <Button
        variant={theme === 'dark' ? 'primary' : 'ghost'}
        size="sm"
        onClick={() => setTheme('dark')}
        className="text-xs"
      >
        Dark
      </Button>
      <Button
        variant={theme === 'system' ? 'primary' : 'ghost'}
        size="sm"
        onClick={() => setTheme('system')}
        className="text-xs"
      >
        System
      </Button>
    </div>
  )
}

