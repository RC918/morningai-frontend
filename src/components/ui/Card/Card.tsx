'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

interface CardSubtitleProps {
  children: React.ReactNode;
  className?: string;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({
  children,
  className,
  variant = 'default',
  padding = 'md',
  hoverable = false
}: CardProps) {
  const variantClasses = {
    default: 'bg-card text-card-foreground border border-border',
    outlined: 'bg-transparent border-2 border-border',
    elevated: 'bg-card text-card-foreground shadow-lg border border-border'
  };

  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div
      className={cn(
        "rounded-lg transition-all duration-200",
        variantClasses[variant],
        paddingClasses[padding],
        hoverable && "hover:shadow-md hover:scale-[1.02] cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn("flex flex-col space-y-1.5 pb-4", className)}>
      {children}
    </div>
  );
}

export function CardTitle({ 
  children, 
  className, 
  as: Component = 'h3' 
}: CardTitleProps) {
  return (
    <Component className={cn("text-lg font-semibold leading-none tracking-tight", className)}>
      {children}
    </Component>
  );
}

export function CardSubtitle({ children, className }: CardSubtitleProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  );
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn("text-sm", className)}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn("flex items-center pt-4", className)}>
      {children}
    </div>
  );
}

