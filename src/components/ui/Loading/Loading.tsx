import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface LoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'dots' | 'pulse' | 'bars';
  color?: 'primary' | 'secondary' | 'white' | 'gray';
  text?: string;
  className?: string;
  fullScreen?: boolean;
}

const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  variant = 'spinner',
  color = 'primary',
  text,
  className,
  fullScreen = false,
}) => {
  // Size variants
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12',
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  // Color variants
  const colorClasses = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    white: 'text-white',
    gray: 'text-gray-400',
  };

  // Container classes
  const containerClasses = cn(
    'flex flex-col items-center justify-center',
    {
      'fixed inset-0 z-50 bg-white bg-opacity-80': fullScreen,
      'space-y-2': text,
    },
    className
  );

  // Spinner component
  const SpinnerLoader = () => (
    <Loader2 
      className={cn(
        'animate-spin',
        sizeClasses[size],
        colorClasses[color]
      )} 
    />
  );

  // Dots component
  const DotsLoader = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            'rounded-full animate-pulse',
            sizeClasses[size],
            colorClasses[color].replace('text-', 'bg-')
          )}
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: '1s',
          }}
        />
      ))}
    </div>
  );

  // Pulse component
  const PulseLoader = () => (
    <div
      className={cn(
        'rounded-full animate-pulse',
        sizeClasses[size],
        colorClasses[color].replace('text-', 'bg-')
      )}
      style={{
        animationDuration: '1.5s',
      }}
    />
  );

  // Bars component
  const BarsLoader = () => (
    <div className="flex items-end space-x-1">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className={cn(
            'w-1 animate-pulse',
            colorClasses[color].replace('text-', 'bg-'),
            {
              'h-2': size === 'sm',
              'h-3': size === 'md',
              'h-4': size === 'lg',
              'h-6': size === 'xl',
            }
          )}
          style={{
            animationDelay: `${i * 0.1}s`,
            animationDuration: '0.8s',
          }}
        />
      ))}
    </div>
  );

  // Render appropriate loader
  const renderLoader = () => {
    switch (variant) {
      case 'dots':
        return <DotsLoader />;
      case 'pulse':
        return <PulseLoader />;
      case 'bars':
        return <BarsLoader />;
      case 'spinner':
      default:
        return <SpinnerLoader />;
    }
  };

  return (
    <div className={containerClasses} role="status" aria-label="Loading">
      {renderLoader()}
      {text && (
        <span 
          className={cn(
            'font-medium',
            textSizeClasses[size],
            colorClasses[color]
          )}
        >
          {text}
        </span>
      )}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

// Loading overlay component for wrapping content
export interface LoadingOverlayProps {
  isLoading: boolean;
  children: React.ReactNode;
  loadingProps?: Omit<LoadingProps, 'fullScreen'>;
  className?: string;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isLoading,
  children,
  loadingProps,
  className,
}) => {
  return (
    <div className={cn('relative', className)}>
      {children}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
          <Loading {...loadingProps} />
        </div>
      )}
    </div>
  );
};

// Loading button component
export interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingText?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline';
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading = false,
  loadingText = 'Loading...',
  size = 'md',
  variant = 'primary',
  children,
  disabled,
  className,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-400',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-400',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:bg-gray-100',
  };

  const buttonClasses = cn(
    'inline-flex items-center justify-center rounded-md font-medium',
    'transition-colors duration-150 ease-in-out',
    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
    'disabled:cursor-not-allowed',
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      )}
      {isLoading ? loadingText : children}
    </button>
  );
};

export default Loading;

