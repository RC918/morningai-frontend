'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const radioVariants = cva(
  'aspect-square h-4 w-4 rounded-full border border-border bg-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'data-[state=checked]:border-primary-500 data-[state=checked]:bg-primary-500',
        error: 'border-error data-[state=checked]:border-error data-[state=checked]:bg-error',
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

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof radioVariants> {
  label?: string
  helperText?: string
  error?: boolean
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ 
    className, 
    variant, 
    size, 
    label, 
    helperText, 
    error, 
    checked,
    disabled, 
    ...props 
  }, ref) => {
    const radioVariant = error ? 'error' : variant

    return (
      <div className="flex items-start space-x-2">
        <div className="relative flex items-center">
          <input
            type="radio"
            className={cn(
              radioVariants({ variant: radioVariant, size }),
              'absolute opacity-0',
              className
            )}
            ref={ref}
            disabled={disabled}
            checked={checked}
            data-state={checked ? 'checked' : 'unchecked'}
            {...props}
          />
          <div 
            className={cn(
              radioVariants({ variant: radioVariant, size }),
              'flex items-center justify-center',
              disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            )}
            data-state={checked ? 'checked' : 'unchecked'}
          >
            {checked && (
              <div className={cn(
                'rounded-full bg-white',
                size === 'sm' ? 'h-1 w-1' : size === 'lg' ? 'h-2 w-2' : 'h-1.5 w-1.5'
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

Radio.displayName = 'Radio'

// Radio Group Component
export interface RadioGroupProps {
  value?: string
  onValueChange?: (value: string) => void
  name?: string
  disabled?: boolean
  error?: boolean
  children: React.ReactNode
  className?: string
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ value, onValueChange, name, disabled, error, children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('space-y-2', className)}
        role="radiogroup"
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === Radio) {
            return React.cloneElement(child as React.ReactElement<RadioProps>, {
              name,
              disabled: disabled || child.props.disabled,
              error: error || child.props.error,
              checked: value === child.props.value,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                if (onValueChange && e.target.checked) {
                  onValueChange(child.props.value || '')
                }
                child.props.onChange?.(e)
              },
            })
          }
          return child
        })}
      </div>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'

export { Radio, RadioGroup, radioVariants }

