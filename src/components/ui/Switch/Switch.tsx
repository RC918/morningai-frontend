'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const switchVariants = cva(
  'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'data-[state=checked]:bg-primary-500 data-[state=unchecked]:bg-border',
        success: 'data-[state=checked]:bg-success data-[state=unchecked]:bg-border',
        warning: 'data-[state=checked]:bg-warning data-[state=unchecked]:bg-border',
        error: 'data-[state=checked]:bg-error data-[state=unchecked]:bg-border',
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
  'pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform',
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
  description?: string
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ 
    className, 
    variant, 
    size,
    label,
    description,
    checked,
    disabled,
    id,
    onChange,
    ...props 
  }, ref) => {
    const generatedId = React.useId()
    const switchId = id || generatedId
    
    return (
      <div className="flex items-start space-x-3">
        <div className="relative">
          <input
            type="checkbox"
            id={switchId}
            ref={ref}
            className="sr-only"
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            {...props}
          />
          
          <label
            htmlFor={switchId}
            className={cn(
              switchVariants({ variant, size, className })
            )}
            data-state={checked ? 'checked' : 'unchecked'}
          >
            <span
              className={cn(
                switchThumbVariants({ size })
              )}
              data-state={checked ? 'checked' : 'unchecked'}
            />
          </label>
        </div>
        
        {(label || description) && (
          <div className="flex-1">
            {label && (
              <label 
                htmlFor={switchId}
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

Switch.displayName = 'Switch'

export { Switch, switchVariants }

