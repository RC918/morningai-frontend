'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface Column<T = any> {
  key: string;
  title: string;
  dataIndex?: string;
  render?: (value: any, record: T, index: number) => React.ReactNode;
  sortable?: boolean;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
}

interface TableProps<T = any> {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  emptyText?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  bordered?: boolean;
  hoverable?: boolean;
  striped?: boolean;
  onSort?: (key: string, direction: 'asc' | 'desc' | null) => void;
}

type SortState = {
  key: string | null;
  direction: 'asc' | 'desc' | null;
};

export function Table<T = any>({
  columns,
  data,
  loading = false,
  emptyText = "No data available",
  className,
  size = 'md',
  bordered = false,
  hoverable = true,
  striped = false,
  onSort
}: TableProps<T>) {
  const [sortState, setSortState] = useState<SortState>({ key: null, direction: null });

  const handleSort = (column: Column<T>) => {
    if (!column.sortable) return;

    let newDirection: 'asc' | 'desc' | null = 'asc';
    
    if (sortState.key === column.key) {
      if (sortState.direction === 'asc') {
        newDirection = 'desc';
      } else if (sortState.direction === 'desc') {
        newDirection = null;
      }
    }

    const newSortState = { key: newDirection ? column.key : null, direction: newDirection };
    setSortState(newSortState);
    onSort?.(column.key, newDirection);
  };

  const getSortIcon = (column: Column<T>) => {
    if (!column.sortable) return null;

    const isActive = sortState.key === column.key;
    const direction = isActive ? sortState.direction : null;

    return (
      <span className="ml-2 inline-flex flex-col">
        <svg
          className={cn(
            "w-3 h-3 -mb-1",
            direction === 'asc' ? "text-primary" : "text-muted-foreground"
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" />
        </svg>
        <svg
          className={cn(
            "w-3 h-3",
            direction === 'desc' ? "text-primary" : "text-muted-foreground"
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </span>
    );
  };

  const getCellValue = (record: T, column: Column<T>) => {
    if (column.render) {
      const index = data.indexOf(record);
      const value = column.dataIndex ? (record as any)[column.dataIndex] : record;
      return column.render(value, record, index);
    }
    
    return column.dataIndex ? (record as any)[column.dataIndex] : '';
  };

  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const paddingClasses = {
    sm: 'px-2 py-1',
    md: 'px-3 py-2',
    lg: 'px-4 py-3'
  };

  if (loading) {
    return (
      <div className={cn("w-full", className)}>
        <div className="animate-pulse">
          <div className="h-10 bg-muted rounded mb-2" />
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-8 bg-muted/50 rounded mb-1" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full overflow-auto", className)}>
      <table className="w-full border-collapse">
        {/* Header */}
        <thead>
          <tr className={cn(
            "border-b border-border",
            bordered && "border border-border"
          )}>
            {columns.map((column) => (
              <th
                key={column.key}
                className={cn(
                  "bg-muted/50 font-medium text-muted-foreground",
                  paddingClasses[size],
                  sizeClasses[size],
                  column.align === 'center' && "text-center",
                  column.align === 'right' && "text-right",
                  column.sortable && "cursor-pointer hover:bg-muted/70 select-none",
                  bordered && "border-r border-border last:border-r-0"
                )}
                style={{ width: column.width }}
                onClick={() => handleSort(column)}
              >
                <div className="flex items-center justify-between">
                  <span>{column.title}</span>
                  {getSortIcon(column)}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className={cn(
                  "text-center text-muted-foreground py-8",
                  paddingClasses[size],
                  sizeClasses[size],
                  bordered && "border-b border-border"
                )}
              >
                {emptyText}
              </td>
            </tr>
          ) : (
            data.map((record, rowIndex) => (
              <tr
                key={rowIndex}
                className={cn(
                  "border-b border-border last:border-b-0",
                  hoverable && "hover:bg-muted/50",
                  striped && rowIndex % 2 === 1 && "bg-muted/25",
                  bordered && "border border-border"
                )}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={cn(
                      paddingClasses[size],
                      sizeClasses[size],
                      column.align === 'center' && "text-center",
                      column.align === 'right' && "text-right",
                      bordered && "border-r border-border last:border-r-0"
                    )}
                  >
                    {getCellValue(record, column)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

