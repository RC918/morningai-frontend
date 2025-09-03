import React, { forwardRef, useState } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  helperText?: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  showCharCount?: boolean;
  maxLength?: number;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      error = false,
      helperText,
      label,
      size = 'md',
      resize = 'vertical',
      showCharCount = false,
      maxLength,
      disabled,
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const [charCount, setCharCount] = useState(
      (value?.toString().length || defaultValue?.toString().length || 0)
    );

    // Size variants
    const sizeClasses = {
      sm: 'min-h-[80px] px-2 py-1.5 text-sm',
      md: 'min-h-[100px] px-3 py-2 text-sm',
      lg: 'min-h-[120px] px-4 py-3 text-base'
    };

    // Resize variants
    const resizeClasses = {
      none: 'resize-none',
      vertical: 'resize-y',
      horizontal: 'resize-x',
      both: 'resize'
    };

    // Base textarea classes
    const textareaClasses = cn(
      'flex w-full rounded-md border border-gray-300 bg-white',
      'text-gray-900 placeholder-gray-500',
      'transition-all duration-150 ease-in-out',
      'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
      'disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500',
      sizeClasses[size],
      resizeClasses[resize],
      {
        'border-red-500 focus:ring-red-500 focus:border-red-500': error,
        'hover:border-gray-400': !disabled && !error,
      },
      className
    );

    // Label classes
    const labelClasses = cn(
      'block text-sm font-medium text-gray-700 mb-1',
      {
        'text-red-700': error,
        'text-gray-500': disabled,
      }
    );

    // Helper text classes
    const helperTextClasses = cn(
      'mt-1 text-xs',
      {
        'text-red-600': error,
        'text-gray-500': !error,
      }
    );

    // Character count classes
    const charCountClasses = cn(
      'text-xs text-gray-500',
      {
        'text-red-600': maxLength && charCount > maxLength,
      }
    );

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = event.target.value;
      setCharCount(newValue.length);
      onChange?.(event);
    };

    return (
      <div className="w-full">
        {label && (
          <label className={labelClasses}>
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          <textarea
            ref={ref}
            className={textareaClasses}
            disabled={disabled}
            value={value}
            defaultValue={defaultValue}
            maxLength={maxLength}
            onChange={handleChange}
            aria-invalid={error}
            aria-describedby={
              helperText || showCharCount
                ? `${props.id || 'textarea'}-description`
                : undefined
            }
            {...props}
          />
        </div>

        {(helperText || showCharCount) && (
          <div
            id={`${props.id || 'textarea'}-description`}
            className="mt-1 flex justify-between items-center"
          >
            {helperText && (
              <span className={helperTextClasses}>{helperText}</span>
            )}
            {showCharCount && (
              <span className={charCountClasses}>
                {charCount}
                {maxLength && `/${maxLength}`}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;

