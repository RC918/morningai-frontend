'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const loadingVariants = cva(
  'animate-spin',
  {
    variants: {
      variant: {
        spinner: 'rounded-full border-2 border-current border-t-transparent',
        dots: 'flex space-x-1',
        pulse: 'rounded-full bg-current',
        bars: 'flex space-x-1',
      },
      size: {
        sm: 'h-4 w-4',
        md: 'h-6 w-6',
        lg: 'h-8 w-8',
        xl: 'h-12 w-12',
      },
      color: {
        primary: 'text-primary-500',
        secondary: 'text-secondary-500',
        white: 'text-white',
        current: 'text-current',
      },
    },
    defaultVariants: {
      variant: 'spinner',
      size: 'md',
      color: 'primary',
    },
  }
)

export interface LoadingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loadingVariants> {
  text?: string
  overlay?: boolean
}

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ 
    className, 
    variant, 
    size, 
    color,
    text,
    overlay,
    ...props 
  }, ref) => {
    const renderSpinner = () => {
      switch (variant) {
        case 'dots':
          return (
            <div className={cn('flex space-x-1', className)}>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={cn(
                    'rounded-full bg-current animate-pulse',
                    size === 'sm' ? 'h-1 w-1' : 
                    size === 'lg' ? 'h-2 w-2' : 
                    size === 'xl' ? 'h-3 w-3' : 'h-1.5 w-1.5'
                  )}
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '1.4s',
                  }}
                />
              ))}
            </div>
          )
        
        case 'pulse':
          return (
            <div
              className={cn(
                loadingVariants({ variant: 'pulse', size, color }),
                'animate-pulse',
                className
              )}
            />
          )
        
        case 'bars':
          return (
            <div className={cn('flex space-x-1', className)}>
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={cn(
                    'bg-current animate-pulse',
                    size === 'sm' ? 'h-3 w-0.5' : 
                    size === 'lg' ? 'h-6 w-1' : 
                    size === 'xl' ? 'h-8 w-1.5' : 'h-4 w-0.5'
                  )}
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '1.2s',
                  }}
                />
              ))}
            </div>
          )
        
        default: // spinner
          return (
            <div
              className={cn(
                loadingVariants({ variant: 'spinner', size, color }),
                className
              )}
            />
          )
      }
    }

    const loadingContent = (
      <div 
        ref={ref}
        className={cn(
          'flex items-center justify-center',
          text ? 'space-x-2' : ''
        )}
        {...props}
      >
        {renderSpinner()}
        {text && (
          <span className={cn(
            'text-sm font-medium',
            color === 'white' ? 'text-white' : 
            color === 'current' ? 'text-current' :
            color === 'secondary' ? 'text-secondary-500' : 'text-primary-500'
          )}>
            {text}
          </span>
        )}
      </div>
    )

    if (overlay) {
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            {loadingContent}
          </div>
        </div>
      )
    }

    return loadingContent
  }
)

Loading.displayName = 'Loading'

// Loading Button Component
export interface LoadingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  loadingText?: string
  children: React.ReactNode
}

const LoadingButton = React.forwardRef<HTMLButtonElement, LoadingButtonProps>(
  ({ loading, loadingText, children, disabled, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-lg bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      >
        {loading && (
          <Loading variant="spinner" size="sm" color="white" />
        )}
        {loading ? loadingText || 'Loading...' : children}
      </button>
    )
  }
)

LoadingButton.displayName = 'LoadingButton'

export { Loading, LoadingButton, loadingVariants }

