'use client';

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  items: TabItem[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  variant?: 'default' | 'pills' | 'underline';
  size?: 'sm' | 'md' | 'lg';
}

export function Tabs({
  items,
  defaultValue,
  value: controlledValue,
  onValueChange,
  className,
  variant = 'default',
  size = 'md'
}: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue || items[0]?.id || '');
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const value = controlledValue ?? internalValue;
  const activeIndex = items.findIndex(item => item.id === value);

  const handleValueChange = (newValue: string) => {
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    let newIndex = index;

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        newIndex = index > 0 ? index - 1 : items.length - 1;
        break;
      case 'ArrowRight':
        event.preventDefault();
        newIndex = index < items.length - 1 ? index + 1 : 0;
        break;
      case 'Home':
        event.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        newIndex = items.length - 1;
        break;
      default:
        return;
    }

    // Skip disabled tabs
    while (items[newIndex]?.disabled && newIndex !== index) {
      if (event.key === 'ArrowLeft' || event.key === 'End') {
        newIndex = newIndex > 0 ? newIndex - 1 : items.length - 1;
      } else {
        newIndex = newIndex < items.length - 1 ? newIndex + 1 : 0;
      }
    }

    if (!items[newIndex]?.disabled) {
      tabRefs.current[newIndex]?.focus();
      handleValueChange(items[newIndex].id);
    }
  };

  const tabVariants = {
    default: {
      list: "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      trigger: cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
      )
    },
    pills: {
      list: "inline-flex items-center justify-center space-x-1",
      trigger: cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium ring-offset-background transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        "hover:bg-accent hover:text-accent-foreground",
        "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
      )
    },
    underline: {
      list: "inline-flex items-center justify-center border-b border-border",
      trigger: cn(
        "inline-flex items-center justify-center whitespace-nowrap px-4 py-2 text-sm font-medium ring-offset-background transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        "hover:text-foreground relative",
        "data-[state=active]:text-foreground data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:h-0.5 data-[state=active]:after:bg-primary"
      )
    }
  };

  const sizeVariants = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-2"
  };

  const activeItem = items.find(item => item.id === value);

  return (
    <div className={cn("w-full", className)}>
      {/* Tab List */}
      <div
        ref={tabsRef}
        className={tabVariants[variant].list}
        role="tablist"
        aria-orientation="horizontal"
      >
        {items.map((item, index) => (
          <button
            key={item.id}
            ref={(el) => {
              if (el) {
                tabRefs.current[index] = el;
              }
            }}
            className={cn(
              tabVariants[variant].trigger,
              sizeVariants[size]
            )}
            role="tab"
            aria-selected={value === item.id}
            aria-controls={`tabpanel-${item.id}`}
            id={`tab-${item.id}`}
            tabIndex={value === item.id ? 0 : -1}
            disabled={item.disabled}
            data-state={value === item.id ? 'active' : 'inactive'}
            onClick={() => !item.disabled && handleValueChange(item.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeItem && (
        <div
          className="mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          role="tabpanel"
          aria-labelledby={`tab-${activeItem.id}`}
          id={`tabpanel-${activeItem.id}`}
          tabIndex={0}
        >
          {activeItem.content}
        </div>
      )}
    </div>
  );
}

