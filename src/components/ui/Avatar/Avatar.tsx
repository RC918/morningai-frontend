'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'circle' | 'square';
  className?: string;
}

export function Avatar({
  src,
  alt,
  fallback,
  size = 'md',
  shape = 'circle',
  className
}: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl'
  };

  const shapeClasses = {
    circle: 'rounded-full',
    square: 'rounded-md'
  };

  const generateFallback = () => {
    if (fallback) return fallback;
    if (alt) {
      return alt
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    }
    return '?';
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden bg-muted",
        sizeClasses[size],
        shapeClasses[shape],
        className
      )}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={alt || 'Avatar'}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      ) : (
        <span className="font-medium text-muted-foreground select-none">
          {generateFallback()}
        </span>
      )}
    </div>
  );
}

