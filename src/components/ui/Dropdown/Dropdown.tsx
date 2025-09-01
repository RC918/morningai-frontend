'use client';

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface DropdownItem {
  id: string;
  label: string;
  value?: any;
  disabled?: boolean;
  separator?: boolean;
  icon?: React.ReactNode;
}

interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  onSelect?: (item: DropdownItem) => void;
  className?: string;
  align?: 'start' | 'center' | 'end';
  side?: 'top' | 'bottom';
  disabled?: boolean;
}

export function Dropdown({
  trigger,
  items,
  onSelect,
  className,
  align = 'start',
  side = 'bottom',
  disabled = false
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const validItems = items.filter(item => !item.separator);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleTriggerClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      if (!isOpen) {
        setFocusedIndex(0);
      }
    }
  };

  const handleItemSelect = (item: DropdownItem) => {
    if (!item.disabled) {
      onSelect?.(item);
      setIsOpen(false);
      setFocusedIndex(-1);
      triggerRef.current?.focus();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    switch (event.key) {
      case 'Enter':
      case ' ':
        if (!isOpen) {
          event.preventDefault();
          setIsOpen(true);
          setFocusedIndex(0);
        } else if (focusedIndex >= 0) {
          event.preventDefault();
          const item = validItems[focusedIndex];
          if (item && !item.disabled) {
            handleItemSelect(item);
          }
        }
        break;
      case 'Escape':
        if (isOpen) {
          event.preventDefault();
          setIsOpen(false);
          setFocusedIndex(-1);
          triggerRef.current?.focus();
        }
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        } else {
          const nextIndex = focusedIndex < validItems.length - 1 ? focusedIndex + 1 : 0;
          setFocusedIndex(nextIndex);
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(validItems.length - 1);
        } else {
          const prevIndex = focusedIndex > 0 ? focusedIndex - 1 : validItems.length - 1;
          setFocusedIndex(prevIndex);
        }
        break;
      case 'Home':
        if (isOpen) {
          event.preventDefault();
          setFocusedIndex(0);
        }
        break;
      case 'End':
        if (isOpen) {
          event.preventDefault();
          setFocusedIndex(validItems.length - 1);
        }
        break;
    }
  };

  const alignmentClasses = {
    start: 'left-0',
    center: 'left-1/2 -translate-x-1/2',
    end: 'right-0'
  };

  const sideClasses = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2'
  };

  return (
    <div ref={dropdownRef} className={cn("relative inline-block", className)}>
      {/* Trigger */}
      <button
        ref={triggerRef}
        onClick={handleTriggerClick}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center",
          disabled && "opacity-50 cursor-not-allowed"
        )}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        {trigger}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={cn(
            "absolute z-50 min-w-[8rem] bg-popover border border-border rounded-md shadow-lg",
            alignmentClasses[align],
            sideClasses[side]
          )}
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1">
            {items.map((item, index) => {
              if (item.separator) {
                return (
                  <div
                    key={`separator-${index}`}
                    className="my-1 h-px bg-border"
                    role="separator"
                  />
                );
              }

              const validIndex = validItems.findIndex(validItem => validItem.id === item.id);
              const isFocused = validIndex === focusedIndex;

              return (
                <button
                  key={item.id}
                  ref={(el) => {
                    if (el) {
                      itemRefs.current[validIndex] = el;
                    }
                  }}
                  onClick={() => handleItemSelect(item)}
                  disabled={item.disabled}
                  className={cn(
                    "flex items-center gap-2 w-full px-3 py-2 text-sm text-left",
                    "hover:bg-accent hover:text-accent-foreground",
                    "focus:outline-none focus:bg-accent focus:text-accent-foreground",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    isFocused && "bg-accent text-accent-foreground"
                  )}
                  role="menuitem"
                  tabIndex={-1}
                >
                  {item.icon && (
                    <span className="flex-shrink-0">
                      {item.icon}
                    </span>
                  )}
                  <span className="flex-1">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

