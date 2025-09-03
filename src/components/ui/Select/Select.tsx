import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      options,
      value,
      defaultValue,
      placeholder = 'Select an option',
      disabled = false,
      error = false,
      size = 'md',
      className,
      onChange,
      onBlur,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value || defaultValue || '');
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);

    const selectedOption = options.find(option => option.value === selectedValue);

    // Size variants
    const sizeClasses = {
      sm: 'h-8 px-2 text-sm',
      md: 'h-10 px-3 text-sm',
      lg: 'h-12 px-4 text-base'
    };

    // Base button classes
    const buttonClasses = cn(
      'relative w-full flex items-center justify-between',
      'border border-gray-300 rounded-md bg-white',
      'text-left text-gray-900 placeholder-gray-500',
      'transition-all duration-150 ease-in-out',
      'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
      sizeClasses[size],
      {
        'border-red-500 focus:ring-red-500 focus:border-red-500': error,
        'bg-gray-50 text-gray-500 cursor-not-allowed': disabled,
        'hover:border-gray-400': !disabled && !error,
        'ring-2 ring-blue-500 border-blue-500': isOpen && !error,
      },
      className
    );

    // Dropdown classes
    const dropdownClasses = cn(
      'absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg',
      'max-h-60 overflow-auto',
      'animate-in fade-in-0 zoom-in-95 duration-150'
    );

    // Option classes
    const getOptionClasses = (option: SelectOption, index: number) => cn(
      'relative cursor-pointer select-none py-2 pl-3 pr-9',
      'text-gray-900 hover:bg-gray-100',
      {
        'bg-blue-50 text-blue-900': selectedValue === option.value,
        'bg-gray-100': focusedIndex === index,
        'text-gray-400 cursor-not-allowed': option.disabled,
      }
    );

    // Handle value changes
    useEffect(() => {
      if (value !== undefined) {
        setSelectedValue(value);
      }
    }, [value]);

    // Handle click outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
          setFocusedIndex(-1);
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }
    }, [isOpen]);

    // Handle keyboard navigation
    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (disabled) return;

      switch (event.key) {
        case 'Enter':
        case ' ':
          event.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
            setFocusedIndex(0);
          } else if (focusedIndex >= 0) {
            const option = options[focusedIndex];
            if (!option.disabled) {
              handleSelect(option.value);
            }
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setFocusedIndex(-1);
          break;
        case 'ArrowDown':
          event.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
            setFocusedIndex(0);
          } else {
            const nextIndex = Math.min(focusedIndex + 1, options.length - 1);
            setFocusedIndex(nextIndex);
          }
          break;
        case 'ArrowUp':
          event.preventDefault();
          if (isOpen) {
            const prevIndex = Math.max(focusedIndex - 1, 0);
            setFocusedIndex(prevIndex);
          }
          break;
        case 'Tab':
          setIsOpen(false);
          setFocusedIndex(-1);
          break;
      }
    };

    const handleSelect = (optionValue: string) => {
      setSelectedValue(optionValue);
      setIsOpen(false);
      setFocusedIndex(-1);
      onChange?.(optionValue);
    };

    const handleBlur = () => {
      onBlur?.();
    };

    return (
      <div ref={containerRef} className="relative">
        <button
          ref={ref}
          type="button"
          className={buttonClasses}
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedBy}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          {...props}
        >
          <span className={cn('block truncate', !selectedOption && 'text-gray-500')}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown
            className={cn(
              'h-4 w-4 text-gray-400 transition-transform duration-150',
              isOpen && 'rotate-180'
            )}
          />
        </button>

        {isOpen && (
          <ul
            ref={listRef}
            className={dropdownClasses}
            role="listbox"
            aria-label="Options"
          >
            {options.map((option, index) => (
              <li
                key={option.value}
                className={getOptionClasses(option, index)}
                role="option"
                aria-selected={selectedValue === option.value}
                onClick={() => !option.disabled && handleSelect(option.value)}
                onMouseEnter={() => setFocusedIndex(index)}
              >
                <span className="block truncate">{option.label}</span>
                {selectedValue === option.value && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <Check className="h-4 w-4 text-blue-600" />
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;

