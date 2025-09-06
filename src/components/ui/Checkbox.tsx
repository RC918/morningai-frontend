'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Check, Minus } from 'lucide-react'

const checkboxVariants = cva(
  'peer h-4 w-4 shrink-0 rounded border border-border bg-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'data-[state=checked]:bg-primary-500 data-[state=checked]:border-primary-500 data-[state=indeterminate]:bg-primary-500 data-[state=indeterminate]:border-primary-500',
        error: 'border-error data-[state=checked]:bg-error data-[state=checked]:border-error data-[state=indeterminate]:bg-error data-[state=indeterminate]:border-error',
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
  helperText?: string
  error?: boolean
  indeterminate?: boolean
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ 
    className, 
    variant, 
    size, 
    label, 
    helperText, 
    error, 
    indeterminate,
    checked,
    disabled, 
    ...props 
  }, ref) => {
    const checkboxVariant = error ? 'error' : variant
    const inputRef = React.useRef<HTMLInputElement>(null)

    React.useImperativeHandle(ref, () => inputRef.current!)

    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate || false
      }
    }, [indeterminate])

    const getState = () => {
      if (indeterminate) return 'indeterminate'
      if (checked) return 'checked'
      return 'unchecked'
    }

    return (
      <div className="flex items-start space-x-2">
        <div className="relative flex items-center">
          <input
            type="checkbox"
            className={cn(
              checkboxVariants({ variant: checkboxVariant, size }),
              'absolute opacity-0',
              className
            )}
            ref={inputRef}
            disabled={disabled}
            checked={checked}
            data-state={getState()}
            {...props}
          />
          <div 
            className={cn(
              checkboxVariants({ variant: checkboxVariant, size }),
              'flex items-center justify-center',
              checked || indeterminate ? 'bg-primary-500 border-primary-500' : '',
              error && (checked || indeterminate) ? 'bg-error border-error' : '',
              disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            )}
            data-state={getState()}
          >
            {checked && !indeterminate && (
              <Check className={cn(
                'text-white',
                size === 'sm' ? 'h-2 w-2' : size === 'lg' ? 'h-3 w-3' : 'h-2.5 w-2.5'
              )} />
            )}
            {indeterminate && (
              <Minus className={cn(
                'text-white',
                size === 'sm' ? 'h-2 w-2' : size === 'lg' ? 'h-3 w-3' : 'h-2.5 w-2.5'
              )} />
            )}
          </div>
        </div>
        {(label || helperText) && (
          <div className="flex-1">
            {label && (
              <label className={cn(
                'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer',
                error ? 'text-error' : 'text-text-primary'
              )}>
                {label}
              </label>
            )}
            {helperText && (
              <p className={cn(
                'mt-1 text-xs',
                error ? 'text-error' : 'text-text-secondary'
              )}>
                {helperText}
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

