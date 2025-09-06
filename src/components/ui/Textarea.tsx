'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const textareaVariants = cva(
  'flex min-h-[80px] w-full rounded-lg border bg-background px-3 py-2 text-sm font-medium transition-all duration-200 placeholder:text-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-vertical',
  {
    variants: {
      variant: {
        default: 'border-border text-text-primary hover:border-primary-300',
        error: 'border-error text-error focus-visible:ring-error',
      },
      size: {
        sm: 'min-h-[60px] px-2 py-1 text-xs',
        md: 'min-h-[80px] px-3 py-2 text-sm',
        lg: 'min-h-[100px] px-4 py-3 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label?: string
  helperText?: string
  error?: boolean
  showCharCount?: boolean
  maxLength?: number
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className, 
    variant, 
    size, 
    label, 
    helperText, 
    error, 
    showCharCount,
    maxLength,
    value,
    disabled, 
    ...props 
  }, ref) => {
    const textareaVariant = error ? 'error' : variant
    const currentLength = typeof value === 'string' ? value.length : 0

    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-text-primary">
            {label}
          </label>
        )}
        <textarea
          className={cn(
            textareaVariants({ variant: textareaVariant, size }),
            className
          )}
          ref={ref}
          disabled={disabled}
          maxLength={maxLength}
          value={value}
          {...props}
        />
        <div className="mt-1 flex justify-between">
          <div>
            {helperText && (
              <p className={cn(
                'text-xs',
                error ? 'text-error' : 'text-text-secondary'
              )}>
                {helperText}
              </p>
            )}
          </div>
          {showCharCount && maxLength && (
            <p className={cn(
              'text-xs',
              currentLength > maxLength * 0.9 ? 'text-warning' : 'text-text-secondary',
              currentLength >= maxLength ? 'text-error' : ''
            )}>
              {currentLength}/{maxLength}
            </p>
          )}
        </div>
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea, textareaVariants }

