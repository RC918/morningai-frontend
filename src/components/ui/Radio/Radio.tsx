import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
  helperText?: string;
}

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export interface RadioGroupProps {
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  name: string;
  error?: boolean;
  size?: 'sm' | 'md' | 'lg';
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  onChange?: (value: string) => void;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      label,
      helperText,
      error = false,
      size = 'md',
      disabled,
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

    const labelSizeClasses = {
      sm: 'text-sm',
      md: 'text-sm',
      lg: 'text-base'
    };

    // Base radio classes
    const radioClasses = cn(
      'peer relative cursor-pointer rounded-full border-2 border-gray-300',
      'bg-white transition-all duration-150 ease-in-out',
      'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
      'checked:bg-blue-600 checked:border-blue-600',
      'hover:border-gray-400',
      'before:content-[""] before:absolute before:inset-0 before:rounded-full',
      'before:bg-white before:scale-0 before:transition-transform before:duration-150',
      'checked:before:scale-50',
      sizeClasses[size],
      {
        'border-red-500 focus:ring-red-500': error,
        'cursor-not-allowed bg-gray-50 border-gray-200': disabled,
        'checked:bg-gray-400 checked:border-gray-400': disabled,
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

    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="flex flex-col">
        <div className="flex items-start space-x-3">
          <input
            ref={ref}
            type="radio"
            id={radioId}
            className={radioClasses}
            disabled={disabled}
            aria-invalid={error}
            aria-describedby={helperText ? `${radioId}-description` : undefined}
            {...props}
          />
          
          {label && (
            <label htmlFor={radioId} className={labelClasses}>
              {label}
              {props.required && <span className="text-red-500 ml-1">*</span>}
            </label>
          )}
        </div>

        {helperText && (
          <div
            id={`${radioId}-description`}
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

Radio.displayName = 'Radio';

// RadioGroup component for managing multiple radio buttons
export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  defaultValue,
  name,
  error = false,
  size = 'md',
  orientation = 'vertical',
  className,
  onChange,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
}) => {
  const groupClasses = cn(
    'space-y-3',
    {
      'flex flex-wrap gap-6 space-y-0': orientation === 'horizontal',
    },
    className
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={groupClasses}
    >
      {options.map((option) => (
        <Radio
          key={option.value}
          name={name}
          value={option.value}
          label={option.label}
          helperText={option.helperText}
          error={error}
          size={size}
          disabled={option.disabled}
          checked={value ? value === option.value : defaultValue === option.value}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

export default Radio;

