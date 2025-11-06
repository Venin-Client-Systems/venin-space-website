'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useMobileDetection, getTouchTargetClasses, getResponsiveCardClasses } from '@/lib/responsive';
import { ChevronRight, MoreVertical } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResponsiveCardProps {
  title: string;
  description?: string;
  content?: React.ReactNode;
  actions?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'interactive' | 'compact';
  status?: {
    label: string;
    variant: 'default' | 'secondary' | 'destructive' | 'outline';
  };
  metadata?: Array<{
    label: string;
    value: string | React.ReactNode;
    important?: boolean;
  }>;
}

export function ResponsiveCard({
  title,
  description,
  content,
  actions,
  href,
  onClick,
  className,
  variant = 'default',
  status,
  metadata,
}: ResponsiveCardProps) {
  const { isMobile } = useMobileDetection();
  const isInteractive = variant === 'interactive' || href || onClick;

  const cardContent = (
    <Card
      className={cn(
        getResponsiveCardClasses(),
        isInteractive && 'cursor-pointer hover:bg-accent/50',
        variant === 'compact' && 'p-4 space-y-2',
        className
      )}
      suppressHydrationWarning
    >
      {variant !== 'compact' ? (
        <>
          <CardHeader className={cn(
            'pb-3',
            isMobile && 'px-4 pt-4',
            actions && 'flex-row items-start justify-between space-y-0'
          )}>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <CardTitle className={cn(
                  'truncate',
                  isMobile ? 'text-base' : 'text-lg'
                )}>
                  {title}
                </CardTitle>
                {status && (
                  <Badge variant={status.variant} className="flex-shrink-0">
                    {status.label}
                  </Badge>
                )}
              </div>
              {description && (
                <CardDescription className={cn(
                  'line-clamp-2',
                  isMobile && 'text-sm'
                )}>
                  {description}
                </CardDescription>
              )}
            </div>

            {actions && (
              <div className="flex items-center gap-2 ml-4">
                {isMobile ? (
                  <Button variant="ghost" size="sm" className={getTouchTargetClasses()}>
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                ) : (
                  actions
                )}
              </div>
            )}

            {isInteractive && !actions && (
              <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-2" />
            )}
          </CardHeader>

          {(content || metadata) && (
            <CardContent className={cn('pt-0', isMobile && 'px-4 pb-4')}>
              {metadata && (
                <div className={cn(
                  'grid gap-3 mb-4',
                  isMobile ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-3'
                )}>
                  {metadata.map((item, index) => (
                    <div key={index} className="space-y-1">
                      <p className="text-sm text-muted-foreground font-medium">
                        {item.label}
                      </p>
                      <p className={cn(
                        'font-medium',
                        item.important && 'text-lg font-bold',
                        isMobile && 'text-sm'
                      )}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {content}
            </CardContent>
          )}
        </>
      ) : (
        // Compact variant
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-medium truncate">{title}</h3>
                {status && (
                  <Badge variant={status.variant} className="text-xs">
                    {status.label}
                  </Badge>
                )}
              </div>
              {description && (
                <p className="text-sm text-muted-foreground truncate">
                  {description}
                </p>
              )}
            </div>

            {actions || (isInteractive && (
              <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0 ml-2" />
            ))}
          </div>

          {metadata && (
            <div className="mt-3 flex flex-wrap gap-4">
              {metadata.slice(0, isMobile ? 2 : 3).map((item, index) => (
                <div key={index} className="text-sm">
                  <span className="text-muted-foreground">{item.label}: </span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          )}

          {content && <div className="mt-3">{content}</div>}
        </div>
      )}
    </Card>
  );

  if (href || onClick) {
    return (
      <div
        className={cn(
          getTouchTargetClasses(),
          'transition-transform active:scale-98'
        )}
        onClick={() => {
          if (href) window.location.href = href;
          if (onClick) onClick();
        }}
        suppressHydrationWarning
      >
        {cardContent}
      </div>
    );
  }

  return cardContent;
}

/**
 * Mobile-optimized list card for displaying items in a list
 */
interface ResponsiveListCardProps {
  items: Array<{
    id: string;
    title: string;
    subtitle?: string;
    value?: string | React.ReactNode;
    status?: {
      label: string;
      variant: 'default' | 'secondary' | 'destructive' | 'outline';
    };
    metadata?: string;
    actions?: React.ReactNode;
    onClick?: () => void;
  }>;
  title?: string;
  emptyMessage?: string;
  className?: string;
}

export function ResponsiveListCard({
  items,
  title,
  emptyMessage = 'No items found',
  className,
}: ResponsiveListCardProps) {
  const { isMobile } = useMobileDetection();

  if (items.length === 0) {
    return (
      <Card className={cn(getResponsiveCardClasses(), className)}>
        <CardContent className="flex items-center justify-center py-8">
          <p className="text-muted-foreground">{emptyMessage}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn(getResponsiveCardClasses(), className)}>
      {title && (
        <CardHeader className={cn(isMobile && 'px-4 pt-4 pb-2')}>
          <CardTitle className={cn(isMobile ? 'text-base' : 'text-lg')}>
            {title}
          </CardTitle>
        </CardHeader>
      )}

      <CardContent className={cn('space-y-0', isMobile && 'px-0 pb-0')}>
        {items.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              'flex items-center justify-between p-4 transition-colors',
              item.onClick && 'cursor-pointer hover:bg-accent/50 active:bg-accent',
              index < items.length - 1 && 'border-b border-border',
              getTouchTargetClasses()
            )}
            onClick={item.onClick}
          >
            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex items-center gap-2">
                <h4 className="font-medium truncate">{item.title}</h4>
                {item.status && (
                  <Badge variant={item.status.variant} className="text-xs">
                    {item.status.label}
                  </Badge>
                )}
              </div>

              {item.subtitle && (
                <p className="text-sm text-muted-foreground truncate">
                  {item.subtitle}
                </p>
              )}

              {item.metadata && (
                <p className="text-xs text-muted-foreground">
                  {item.metadata}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2 ml-4">
              {item.value && (
                <div className="text-right">
                  <div className="font-medium">{item.value}</div>
                </div>
              )}

              {item.actions || (item.onClick && (
                <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

/**
 * Mobile-optimized stat card
 */
interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: {
    value: string;
    direction: 'up' | 'down' | 'neutral';
  };
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

export function StatCard({
  title,
  value,
  subtitle,
  trend,
  icon: Icon,
  className,
}: StatCardProps) {
  const { isMobile } = useMobileDetection();

  return (
    <Card className={cn(getResponsiveCardClasses(), className)}>
      <CardContent className={cn('p-6', isMobile && 'p-4')}>
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-muted-foreground truncate">
              {title}
            </p>
            <div className="flex items-baseline gap-2 mt-1">
              <p className={cn(
                'font-bold tracking-tight',
                isMobile ? 'text-xl' : 'text-2xl'
              )}>
                {value}
              </p>
              {trend && (
                <span className={cn(
                  'text-sm font-medium',
                  trend.direction === 'up' && 'text-green-600',
                  trend.direction === 'down' && 'text-red-600',
                  trend.direction === 'neutral' && 'text-muted-foreground'
                )}>
                  {trend.value}
                </span>
              )}
            </div>
            {subtitle && (
              <p className="text-xs text-muted-foreground mt-1">
                {subtitle}
              </p>
            )}
          </div>

          {Icon && (
            <Icon className={cn(
              'text-muted-foreground flex-shrink-0',
              isMobile ? 'h-8 w-8' : 'h-10 w-10'
            )} />
          )}
        </div>
      </CardContent>
    </Card>
  );
}