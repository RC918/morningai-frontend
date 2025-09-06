'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const switchVariants = cva(
  'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'data-[state=checked]:bg-primary-500 data-[state=unchecked]:bg-gray-200',
        error: 'data-[state=checked]:bg-error data-[state=unchecked]:bg-gray-200',
      },
      size: {
        sm: 'h-4 w-7',
        md: 'h-5 w-9',
        lg: 'h-6 w-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

const switchThumbVariants = cva(
  'pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform',
  {
    variants: {
      size: {
        sm: 'h-3 w-3 data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0',
        md: 'h-4 w-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
        lg: 'h-5 w-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof switchVariants> {
  label?: string
  helperText?: string
  error?: boolean
  labelPosition?: 'left' | 'right'
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ 
    className, 
    variant, 
    size, 
    label, 
    helperText, 
    error, 
    labelPosition = 'right',
    checked,
    disabled, 
    ...props 
  }, ref) => {
    const switchVariant = error ? 'error' : variant

    const switchElement = (
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          ref={ref}
          disabled={disabled}
          checked={checked}
          data-state={checked ? 'checked' : 'unchecked'}
          {...props}
        />
        <div 
          className={cn(
            switchVariants({ variant: switchVariant, size }),
            className
          )}
          data-state={checked ? 'checked' : 'unchecked'}
        >
          <div
            className={cn(
              switchThumbVariants({ size })
            )}
            data-state={checked ? 'checked' : 'unchecked'}
          />
        </div>
      </div>
    )

    if (!label && !helperText) {
      return switchElement
    }

    return (
      <div className={cn(
        'flex items-start',
        labelPosition === 'left' ? 'flex-row-reverse justify-end' : 'flex-row',
        labelPosition === 'left' ? 'space-x-reverse space-x-2' : 'space-x-2'
      )}>
        {switchElement}
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

Switch.displayName = 'Switch'

export { Switch, switchVariants }

