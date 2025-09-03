import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: boolean;
  size?: 'sm' | 'md' | 'lg';
  labelPosition?: 'left' | 'right';
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      className,
      label,
      helperText,
      error = false,
      size = 'md',
      labelPosition = 'right',
      disabled,
      checked,
      id,
      ...props
    },
    ref
  ) => {
    // Size variants
    const sizeClasses = {
      sm: {
        track: 'h-5 w-9',
        thumb: 'h-4 w-4',
        translate: 'translate-x-4',
      },
      md: {
        track: 'h-6 w-11',
        thumb: 'h-5 w-5',
        translate: 'translate-x-5',
      },
      lg: {
        track: 'h-7 w-13',
        thumb: 'h-6 w-6',
        translate: 'translate-x-6',
      }
    };

    const labelSizeClasses = {
      sm: 'text-sm',
      md: 'text-sm',
      lg: 'text-base'
    };

    // Track classes
    const trackClasses = cn(
      'peer relative inline-flex cursor-pointer items-center rounded-full',
      'border-2 border-transparent bg-gray-200 transition-colors duration-200',
      'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
      'peer-checked:bg-blue-600',
      sizeClasses[size].track,
      {
        'bg-red-200 peer-checked:bg-red-600': error,
        'cursor-not-allowed bg-gray-100': disabled,
        'peer-checked:bg-gray-400': disabled && checked,
      }
    );

    // Thumb classes
    const thumbClasses = cn(
      'pointer-events-none inline-block rounded-full bg-white shadow-lg',
      'transform ring-0 transition duration-200 ease-in-out',
      'peer-checked:' + sizeClasses[size].translate,
      sizeClasses[size].thumb,
      {
        'bg-gray-300': disabled,
      }
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

    const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;

    const switchElement = (
      <label htmlFor={switchId} className={trackClasses}>
        <input
          ref={ref}
          type="checkbox"
          id={switchId}
          className="sr-only peer"
          disabled={disabled}
          checked={checked}
          aria-invalid={error}
          aria-describedby={helperText ? `${switchId}-description` : undefined}
          {...props}
        />
        <span className={thumbClasses} />
      </label>
    );

    const labelElement = label && (
      <label htmlFor={switchId} className={labelClasses}>
        {label}
        {props.required && <span className="text-red-500 ml-1">*</span>}
      </label>
    );

    return (
      <div className={cn('flex flex-col', className)}>
        <div className="flex items-center space-x-3">
          {labelPosition === 'left' && labelElement}
          {switchElement}
          {labelPosition === 'right' && labelElement}
        </div>

        {helperText && (
          <div
            id={`${switchId}-description`}
            className={helperTextClasses}
            style={{ 
              marginLeft: labelPosition === 'left' && label ? 
                `calc(${sizeClasses[size].track.split(' ')[1].replace('w-', '')} * 0.25rem + 0.75rem)` : 
                '0' 
            }}
          >
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';

export default Switch;

