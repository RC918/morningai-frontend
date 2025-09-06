'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

const selectVariants = cva(
  'inline-flex w-full items-center justify-between rounded-lg border bg-background px-3 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-border text-text-primary hover:border-primary-300',
        error: 'border-error text-error focus-visible:ring-error',
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

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectVariants> {
  label?: string
  helperText?: string
  error?: boolean
  options: Array<{ value: string; label: string; disabled?: boolean }>
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ 
    className, 
    variant, 
    size, 
    label, 
    helperText, 
    error, 
    options, 
    disabled, 
    ...props 
  }, ref) => {
    const selectVariant = error ? 'error' : variant

    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-text-primary">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            className={cn(
              selectVariants({ variant: selectVariant, size }),
              'appearance-none pr-8',
              className
            )}
            ref={ref}
            disabled={disabled}
            {...props}
          >
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
          <ChevronDown 
            className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-text-secondary pointer-events-none" 
          />
        </div>
        {helperText && (
          <p className={cn(
            'mt-1 text-xs',
            error ? 'text-error' : 'text-text-secondary'
          )}>
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

export { Select, selectVariants }

