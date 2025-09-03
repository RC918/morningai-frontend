'use client';

import React, { forwardRef } from 'react';
import { Check, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: boolean;
  size?: 'sm' | 'md' | 'lg';
  indeterminate?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      label,
      helperText,
      error = false,
      size = 'md',
      indeterminate = false,
      disabled,
      checked,
      id,
      ...props
    },
    ref
  ) => {
    // Size variants
    const sizeClasses = {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6'
    };

    const iconSizeClasses = {
      sm: 'h-3 w-3',
      md: 'h-3.5 w-3.5',
      lg: 'h-4 w-4'
    };

    const labelSizeClasses = {
      sm: 'text-sm',
      md: 'text-sm',
      lg: 'text-base'
    };

    // Base checkbox classes
    const checkboxClasses = cn(
      'peer relative cursor-pointer rounded border-2 border-gray-300',
      'bg-white transition-all duration-150 ease-in-out',
      'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
      'checked:bg-blue-600 checked:border-blue-600',
      'hover:border-gray-400',
      sizeClasses[size],
      {
        'border-red-500 focus:ring-red-500': error,
        'cursor-not-allowed bg-gray-50 border-gray-200': disabled,
        'checked:bg-gray-400 checked:border-gray-400': disabled && checked,
      },
      className
    );

    // Label classes
    const labelClasses = cn(
      'cursor-pointer font-medium text-gray-900',
      labelSizeClasses[size],
      {
        'text-red-700': error,
        'text-gray-500 cursor-not-allowed': disabled,
      }
    );

    // Helper text classes
    const helperTextClasses = cn(
      'text-xs mt-1',
      {
        'text-red-600': error,
        'text-gray-500': !error,
      }
    );

    // Icon classes
    const iconClasses = cn(
      'absolute inset-0 flex items-center justify-center text-white',
      'opacity-0 peer-checked:opacity-100 transition-opacity duration-150',
      iconSizeClasses[size]
    );

    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="flex flex-col">
        <div className="flex items-start space-x-3">
          <div className="relative flex items-center">
            <input
              ref={ref}
              type="checkbox"
              id={checkboxId}
              className={checkboxClasses}
              disabled={disabled}
              checked={checked}
              aria-invalid={error}
              aria-describedby={helperText ? `${checkboxId}-description` : undefined}
              {...props}
            />
            <div className={iconClasses}>
              {indeterminate ? (
                <Minus className="h-full w-full" />
              ) : (
                <Check className="h-full w-full" />
              )}
            </div>
          </div>
          
          {label && (
            <label htmlFor={checkboxId} className={labelClasses}>
              {label}
              {props.required && <span className="text-red-500 ml-1">*</span>}
            </label>
          )}
        </div>

        {helperText && (
          <div
            id={`${checkboxId}-description`}
            className={helperTextClasses}
            style={{ marginLeft: label ? '2rem' : '0' }}
          >
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;

