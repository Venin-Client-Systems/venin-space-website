'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { FlaskConical, Loader2, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  color?: 'primary' | 'muted' | 'amber';
}

export function LoadingSpinner({ size = 'md', className, color = 'primary' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12',
  };

  const colorClasses = {
    primary: 'text-primary',
    muted: 'text-muted-foreground',
    amber: 'text-amber-600',
  };

  return (
    <Loader2
      className={cn(
        'animate-spin',
        sizeClasses[size],
        colorClasses[color],
        className
      )}
    />
  );
}

interface SkeletonProps {
  className?: string;
  variant?: 'default' | 'text' | 'rounded' | 'circle';
}

export function Skeleton({ className, variant = 'default' }: SkeletonProps) {
  const variantClasses = {
    default: 'rounded-md',
    text: 'rounded-sm',
    rounded: 'rounded-lg',
    circle: 'rounded-full',
  };

  return (
    <div
      className={cn(
        'animate-pulse bg-muted',
        variantClasses[variant],
        className
      )}
    />
  );
}

interface PageLoadingProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export function PageLoading({
  title = 'Loading...',
  description = 'Please wait while we load your data',
  icon
}: PageLoadingProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-amber-50/20 flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          {icon || <FlaskConical className="h-12 w-12 text-amber-600 animate-pulse" />}
        </div>
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <LoadingSpinner size="lg" color="amber" />
      </div>
    </div>
  );
}

interface CardSkeletonProps {
  showHeader?: boolean;
  headerLines?: number;
  contentLines?: number;
  className?: string;
}

export function CardSkeleton({
  showHeader = true,
  headerLines = 2,
  contentLines = 3,
  className
}: CardSkeletonProps) {
  return (
    <Card className={className}>
      {showHeader && (
        <CardHeader>
          <div className="space-y-2">
            {Array.from({ length: headerLines }).map((_, i) => (
              <Skeleton
                key={i}
                className={`h-4 ${i === 0 ? 'w-3/4' : 'w-1/2'}`}
                variant="text"
              />
            ))}
          </div>
        </CardHeader>
      )}
      <CardContent>
        <div className="space-y-2">
          {Array.from({ length: contentLines }).map((_, i) => (
            <Skeleton
              key={i}
              className={`h-4 ${i === contentLines - 1 ? 'w-2/3' : 'w-full'}`}
              variant="text"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

interface TableSkeletonProps {
  rows?: number;
  columns?: number;
  showHeader?: boolean;
  className?: string;
}

export function TableSkeleton({
  rows = 5,
  columns = 4,
  showHeader = true,
  className
}: TableSkeletonProps) {
  return (
    <div className={cn('space-y-4', className)}>
      {showHeader && (
        <div className="flex space-x-4">
          {Array.from({ length: columns }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-24" variant="text" />
          ))}
        </div>
      )}
      <div className="space-y-2">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex space-x-4">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <Skeleton
                key={colIndex}
                className="h-4 w-24"
                variant="text"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

interface LoadingCardProps {
  title: string;
  description?: string;
  progress?: number;
  className?: string;
}

export function LoadingCard({ title, description, progress, className }: LoadingCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <LoadingSpinner size="sm" />
          {title}
        </CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      {progress !== undefined && (
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
}

interface InlineLoadingProps {
  text?: string;
  size?: 'sm' | 'md';
  className?: string;
}

export function InlineLoading({ text = 'Loading...', size = 'sm', className }: InlineLoadingProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <LoadingSpinner size={size} />
      <span className="text-sm text-muted-foreground">{text}</span>
    </div>
  );
}

interface ListSkeletonProps {
  items?: number;
  showAvatar?: boolean;
  className?: string;
}

export function ListSkeleton({ items = 5, showAvatar = false, className }: ListSkeletonProps) {
  return (
    <div className={cn('space-y-3', className)}>
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className="flex items-center space-x-3">
          {showAvatar && (
            <Skeleton className="h-10 w-10" variant="circle" />
          )}
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-3/4" variant="text" />
            <Skeleton className="h-3 w-1/2" variant="text" />
          </div>
        </div>
      ))}
    </div>
  );
}

interface RefreshButtonProps {
  onRefresh: () => void;
  isLoading: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function RefreshButton({
  onRefresh,
  isLoading,
  disabled = false,
  className,
  children = 'Refresh'
}: RefreshButtonProps) {
  return (
    <button
      onClick={onRefresh}
      disabled={disabled || isLoading}
      className={cn(
        'inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md',
        'bg-background border hover:bg-accent hover:text-accent-foreground',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'transition-colors',
        className
      )}
    >
      <RefreshCw className={cn('h-4 w-4', isLoading && 'animate-spin')} />
      {children}
    </button>
  );
}

// Hook for managing loading states
export function useLoadingState(initialState = false) {
  const [isLoading, setIsLoading] = React.useState(initialState);
  const [error, setError] = React.useState<Error | null>(null);

  const startLoading = () => {
    setIsLoading(true);
    setError(null);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  const setLoadingError = (error: Error) => {
    setIsLoading(false);
    setError(error);
  };

  const withLoading = async <T,>(operation: () => Promise<T>): Promise<T> => {
    try {
      startLoading();
      const result = await operation();
      stopLoading();
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error');
      setLoadingError(error);
      throw error;
    }
  };

  return {
    isLoading,
    error,
    startLoading,
    stopLoading,
    setLoadingError,
    withLoading,
  };
}