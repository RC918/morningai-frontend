'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const checkboxVariants = cva(
  'peer h-4 w-4 shrink-0 rounded border border-border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'data-[state=checked]:bg-primary-500 data-[state=checked]:text-white data-[state=checked]:border-primary-500',
        success: 'data-[state=checked]:bg-success data-[state=checked]:text-white data-[state=checked]:border-success',
        warning: 'data-[state=checked]:bg-warning data-[state=checked]:text-white data-[state=checked]:border-warning',
        error: 'data-[state=checked]:bg-error data-[state=checked]:text-white data-[state=checked]:border-error',
      },
      size: {
        sm: 'h-3 w-3',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof checkboxVariants> {
  label?: string
  description?: string
  indeterminate?: boolean
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ 
    className, 
    variant, 
    size,
    label,
    description,
    indeterminate = false,
    checked,
    disabled,
    id,
    ...props 
  }, ref) => {
    const generatedId = React.useId()
    const checkboxId = id || generatedId
    
    const inputRef = React.useRef<HTMLInputElement>(null)
    
    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate
      }
    }, [indeterminate])
    
    React.useImperativeHandle(ref, () => inputRef.current!, [])
    
    return (
      <div className="flex items-start space-x-2">
        <div className="relative flex items-center">
          <input
            type="checkbox"
            id={checkboxId}
            ref={inputRef}
            className={cn(
              checkboxVariants({ variant, size, className }),
              'appearance-none bg-background'
            )}
            checked={checked}
            disabled={disabled}
            data-state={indeterminate ? 'indeterminate' : checked ? 'checked' : 'unchecked'}
            {...props}
          />
          
          {/* Check icon */}
          {(checked || indeterminate) && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {indeterminate ? (
                <svg
                  className="h-2.5 w-2.5 text-current"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg
                  className="h-2.5 w-2.5 text-current"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              )}
            </div>
          )}
        </div>
        
        {(label || description) && (
          <div className="flex-1">
            {label && (
              <label 
                htmlFor={checkboxId}
                className="text-sm font-medium text-text-primary cursor-pointer"
              >
                {label}
              </label>
            )}
            {description && (
              <p className="text-xs text-text-muted mt-1">
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export { Checkbox, checkboxVariants }

