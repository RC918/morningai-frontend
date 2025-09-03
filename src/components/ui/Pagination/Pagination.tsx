'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  current: number;
  total: number;
  pageSize?: number;
  showSizeChanger?: boolean;
  showQuickJumper?: boolean;
  showTotal?: boolean | ((total: number, range: [number, number]) => React.ReactNode);
  onChange?: (page: number, pageSize?: number) => void;
  onShowSizeChange?: (current: number, size: number) => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export function Pagination({
  current,
  total,
  pageSize = 10,
  showSizeChanger = false,
  showQuickJumper = false,
  showTotal = false,
  onChange,
  onShowSizeChange,
  className,
  size = 'md',
  disabled = false
}: PaginationProps) {
  const totalPages = Math.ceil(total / pageSize);
  const startItem = (current - 1) * pageSize + 1;
  const endItem = Math.min(current * pageSize, total);

  const handlePageChange = (page: number) => {
    if (page !== current && page >= 1 && page <= totalPages && !disabled) {
      onChange?.(page, pageSize);
    }
  };

  const handleSizeChange = (newSize: number) => {
    if (!disabled) {
      const newPage = Math.min(current, Math.ceil(total / newSize));
      onShowSizeChange?.(newPage, newSize);
    }
  };

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, current - delta); i <= Math.min(totalPages - 1, current + delta); i++) {
      range.push(i);
    }

    if (current - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (current + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-2',
    lg: 'text-base px-4 py-3'
  };

  const buttonClass = cn(
    "inline-flex items-center justify-center border border-border bg-background hover:bg-accent hover:text-accent-foreground",
    "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    "transition-colors duration-200",
    sizeClasses[size],
    disabled && "opacity-50 cursor-not-allowed"
  );

  const activeButtonClass = cn(
    buttonClass,
    "bg-primary text-primary-foreground hover:bg-primary/90"
  );

  if (totalPages <= 1) return null;

  return (
    <div className={cn("flex items-center justify-between gap-4", className)}>
      {/* Total Info */}
      {showTotal && (
        <div className="text-sm text-muted-foreground">
          {typeof showTotal === 'function' 
            ? showTotal(total, [startItem, endItem])
            : `Showing ${startItem}-${endItem} of ${total} items`
          }
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex items-center gap-1">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(current - 1)}
          disabled={current <= 1 || disabled}
          className={cn(
            buttonClass,
            "rounded-l-md",
            (current <= 1 || disabled) && "opacity-50 cursor-not-allowed"
          )}
          aria-label="Previous page"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Page Numbers */}
        {getVisiblePages().map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`ellipsis-${index}`}
                className={cn(
                  "inline-flex items-center justify-center border-t border-b border-border",
                  sizeClasses[size]
                )}
              >
                ...
              </span>
            );
          }

          const pageNumber = page as number;
          const isActive = pageNumber === current;

          return (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              disabled={disabled}
              className={cn(
                isActive ? activeButtonClass : buttonClass,
                "border-t border-b border-r border-border"
              )}
              aria-label={`Page ${pageNumber}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {pageNumber}
            </button>
          );
        })}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(current + 1)}
          disabled={current >= totalPages || disabled}
          className={cn(
            buttonClass,
            "rounded-r-md border-r",
            (current >= totalPages || disabled) && "opacity-50 cursor-not-allowed"
          )}
          aria-label="Next page"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Page Size Changer */}
      {showSizeChanger && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Show</span>
          <select
            value={pageSize}
            onChange={(e) => handleSizeChange(Number(e.target.value))}
            disabled={disabled}
            className={cn(
              "border border-border bg-background rounded-md",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              sizeClasses[size],
              disabled && "opacity-50 cursor-not-allowed"
            )}
          >
            {[10, 20, 50, 100].map(size => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <span className="text-sm text-muted-foreground">per page</span>
        </div>
      )}

      {/* Quick Jumper */}
      {showQuickJumper && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Go to</span>
          <input
            type="number"
            min={1}
            max={totalPages}
            disabled={disabled}
            className={cn(
              "w-16 border border-border bg-background rounded-md text-center",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              sizeClasses[size],
              disabled && "opacity-50 cursor-not-allowed"
            )}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const value = parseInt((e.target as HTMLInputElement).value);
                if (value >= 1 && value <= totalPages) {
                  handlePageChange(value);
                  (e.target as HTMLInputElement).value = '';
                }
              }
            }}
          />
        </div>
      )}
    </div>
  );
}

