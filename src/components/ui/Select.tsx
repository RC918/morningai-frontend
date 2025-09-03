'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const selectVariants = cva(
  'flex w-full rounded-lg border bg-background px-3 py-2 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-border hover:border-border focus:border-primary-500',
        error: 'border-error focus:border-error focus-visible:ring-error',
        success: 'border-success focus:border-success focus-visible:ring-success',
      },
      size: {
        sm: 'h-8 px-2 text-xs',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
    VariantProps<typeof selectVariants> {
  label?: string
  helperText?: string
  errorMessage?: string
  options: SelectOption[]
  placeholder?: string
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ 
    className, 
    variant, 
    size,
    label,
    helperText,
    errorMessage,
    options,
    placeholder,
    disabled,
    id,
    ...props 
  }, ref) => {
    const generatedId = React.useId()
    const selectId = id || generatedId
    const isError = variant === 'error' || !!errorMessage
    
    return (
      <div className="w-full space-y-2">
        {label && (
          <label 
            htmlFor={selectId}
            className="text-sm font-medium text-text-primary"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          <select
            id={selectId}
            className={cn(
              selectVariants({ 
                variant: isError ? 'error' : variant, 
                size, 
                className 
              }),
              'appearance-none pr-10 cursor-pointer'
            )}
            ref={ref}
            disabled={disabled}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option 
                key={option.value} 
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          
          {/* Dropdown arrow */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              className="h-4 w-4 text-text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        
        {(helperText || errorMessage) && (
          <p className={cn(
            'text-xs',
            isError ? 'text-error' : 'text-text-muted'
          )}>
            {errorMessage || helperText}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

export { Select, selectVariants }

