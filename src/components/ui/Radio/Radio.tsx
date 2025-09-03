'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const radioVariants = cva(
  'peer h-4 w-4 shrink-0 rounded-full border border-border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'data-[state=checked]:border-primary-500',
        success: 'data-[state=checked]:border-success',
        warning: 'data-[state=checked]:border-warning',
        error: 'data-[state=checked]:border-error',
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

export interface RadioOption {
  value: string
  label: string
  description?: string
  disabled?: boolean
}

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof radioVariants> {
  label?: string
  description?: string
}

export interface RadioGroupProps {
  options: RadioOption[]
  value?: string
  onChange?: (value: string) => void
  name: string
  variant?: RadioProps['variant']
  size?: RadioProps['size']
  disabled?: boolean
  className?: string
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ 
    className, 
    variant, 
    size,
    label,
    description,
    checked,
    disabled,
    id,
    ...props 
  }, ref) => {
    const generatedId = React.useId()
    const radioId = id || generatedId
    
    return (
      <div className="flex items-start space-x-2">
        <div className="relative flex items-center">
          <input
            type="radio"
            id={radioId}
            ref={ref}
            className={cn(
              radioVariants({ variant, size, className }),
              'appearance-none bg-background'
            )}
            checked={checked}
            disabled={disabled}
            data-state={checked ? 'checked' : 'unchecked'}
            {...props}
          />
          
          {/* Radio dot */}
          {checked && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className={cn(
                'rounded-full',
                size === 'sm' && 'h-1.5 w-1.5',
                size === 'md' && 'h-2 w-2',
                size === 'lg' && 'h-2.5 w-2.5',
                variant === 'default' && 'bg-primary-500',
                variant === 'success' && 'bg-success',
                variant === 'warning' && 'bg-warning',
                variant === 'error' && 'bg-error'
              )} />
            </div>
          )}
        </div>
        
        {(label || description) && (
          <div className="flex-1">
            {label && (
              <label 
                htmlFor={radioId}
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

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
  name,
  variant = 'default',
  size = 'md',
  disabled = false,
  className
}) => {
  return (
    <div className={cn('space-y-3', className)}>
      {options.map((option) => (
        <Radio
          key={option.value}
          name={name}
          value={option.value}
          checked={value === option.value}
          onChange={() => onChange?.(option.value)}
          label={option.label}
          description={option.description}
          disabled={disabled || option.disabled}
          variant={variant}
          size={size}
        />
      ))}
    </div>
  )
}

Radio.displayName = 'Radio'
RadioGroup.displayName = 'RadioGroup'

export { Radio, RadioGroup, radioVariants }

