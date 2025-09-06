'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const loadingVariants = cva(
  'animate-spin',
  {
    variants: {
      variant: {
        spinner: '',
        dots: '',
        pulse: '',
        bars: '',
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
        success: 'text-success',
        warning: 'text-warning',
        error: 'text-error',
        muted: 'text-text-muted',
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
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof loadingVariants> {
  text?: string
  overlay?: boolean
}

const SpinnerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
)

const DotsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn('flex space-x-1', className)}>
    <div className="h-2 w-2 bg-current rounded-full animate-bounce [animation-delay:-0.3s]" />
    <div className="h-2 w-2 bg-current rounded-full animate-bounce [animation-delay:-0.15s]" />
    <div className="h-2 w-2 bg-current rounded-full animate-bounce" />
  </div>
)

const PulseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn('bg-current rounded-full animate-pulse', className)} />
)

const BarsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn('flex space-x-1 items-end h-6 w-6', className)}>
    <div className="w-1 bg-current rounded-full animate-pulse [animation-delay:-0.4s] h-3" />
    <div className="w-1 bg-current rounded-full animate-pulse [animation-delay:-0.2s] h-5" />
    <div className="w-1 bg-current rounded-full animate-pulse h-6" />
    <div className="w-1 bg-current rounded-full animate-pulse [animation-delay:-0.2s] h-5" />
    <div className="w-1 bg-current rounded-full animate-pulse [animation-delay:-0.4s] h-3" />
  </div>
)

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ 
    className, 
    variant, 
    size, 
    color,
    text,
    overlay = false,
    ...props 
  }, ref) => {
    const renderIcon = () => {
      const iconClassName = loadingVariants({ variant: 'spinner', size, color })
      
      switch (variant) {
        case 'dots':
          return <DotsIcon className={cn(iconClassName, 'animate-none')} />
        case 'pulse':
          return <PulseIcon className={iconClassName} />
        case 'bars':
          return <BarsIcon className={cn(iconClassName, 'animate-none')} />
        default:
          return <SpinnerIcon className={iconClassName} />
      }
    }

    const content = (
      <div
        ref={ref}
        className={cn(
          'flex flex-col items-center justify-center space-y-2',
          overlay && 'fixed inset-0 bg-background/80 backdrop-blur-sm z-50',
          className
        )}
        {...props}
      >
        {renderIcon()}
        {text && (
          <p className={cn(
            'text-sm',
            color === 'primary' && 'text-primary-500',
            color === 'secondary' && 'text-secondary-500',
            color === 'success' && 'text-success',
            color === 'warning' && 'text-warning',
            color === 'error' && 'text-error',
            color === 'muted' && 'text-text-muted'
          )}>
            {text}
          </p>
        )}
      </div>
    )

    return content
  }
)

Loading.displayName = 'Loading'

export { Loading, loadingVariants }

