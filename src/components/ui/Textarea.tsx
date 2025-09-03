'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const textareaVariants = cva(
  'flex min-h-[80px] w-full rounded-lg border bg-background px-3 py-2 text-sm transition-all duration-200 placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-vertical',
  {
    variants: {
      variant: {
        default: 'border-border hover:border-border focus:border-primary-500',
        error: 'border-error focus:border-error focus-visible:ring-error',
        success: 'border-success focus:border-success focus-visible:ring-success',
      },
      size: {
        sm: 'min-h-[60px] px-2 py-1 text-xs',
        md: 'min-h-[80px] px-3 py-2 text-sm',
        lg: 'min-h-[120px] px-4 py-3 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    VariantProps<typeof textareaVariants> {
  label?: string
  helperText?: string
  errorMessage?: string
  maxLength?: number
  showCharCount?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className, 
    variant, 
    size,
    label,
    helperText,
    errorMessage,
    maxLength,
    showCharCount = false,
    disabled,
    id,
    value,
    ...props 
  }, ref) => {
    const generatedId = React.useId()
    const textareaId = id || generatedId
    const isError = variant === 'error' || !!errorMessage
    
    const currentLength = typeof value === 'string' ? value.length : 0
    
    return (
      <div className="w-full space-y-2">
        {label && (
          <label 
            htmlFor={textareaId}
            className="text-sm font-medium text-text-primary"
          >
            {label}
          </label>
        )}
        
        <textarea
          id={textareaId}
          className={cn(
            textareaVariants({ 
              variant: isError ? 'error' : variant, 
              size, 
              className 
            })
          )}
          ref={ref}
          disabled={disabled}
          maxLength={maxLength}
          value={value}
          {...props}
        />
        
        <div className="flex justify-between items-start">
          <div className="flex-1">
            {(helperText || errorMessage) && (
              <p className={cn(
                'text-xs',
                isError ? 'text-error' : 'text-text-muted'
              )}>
                {errorMessage || helperText}
              </p>
            )}
          </div>
          
          {(showCharCount || maxLength) && (
            <p className="text-xs text-text-muted ml-2">
              {maxLength ? `${currentLength}/${maxLength}` : currentLength}
            </p>
          )}
        </div>
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea, textareaVariants }

