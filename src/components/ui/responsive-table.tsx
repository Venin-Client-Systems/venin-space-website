'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useMobileDetection, getTouchTargetClasses, getResponsiveTableClasses } from '@/lib/responsive';
import {
  Search,
  Filter,
  SortAsc,
  SortDesc,
  MoreVertical,
  ChevronRight,
  Eye,
  Edit,
  Trash2,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface TableColumn<T = Record<string, unknown>> {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
  className?: string;
  render?: (value: unknown, row: T) => React.ReactNode;
  mobileRender?: (value: unknown, row: T) => React.ReactNode;
  hideOnMobile?: boolean;
}

interface TableAction<T = Record<string, unknown>> {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  onClick: (row: T) => void;
  variant?: 'default' | 'destructive';
  permission?: string;
}

interface ResponsiveTableProps<T = Record<string, unknown>> {
  data: T[];
  columns: TableColumn<T>[];
  title?: string;
  searchable?: boolean;
  searchPlaceholder?: string;
  actions?: TableAction<T>[];
  emptyMessage?: string;
  loading?: boolean;
  className?: string;
  onRowClick?: (row: T) => void;
  sortable?: boolean;
  pagination?: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  };
}

export function ResponsiveTable<T = Record<string, unknown>>({
  data,
  columns,
  title,
  searchable = true,
  searchPlaceholder = 'Search...',
  actions = [],
  emptyMessage = 'No data available',
  loading = false,
  className,
  onRowClick,
  sortable = true,
  pagination,
}: ResponsiveTableProps<T>) {
  const { isMobile } = useMobileDetection();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: 'asc' | 'desc';
  } | null>(null);

  // Filter data based on search
  const filteredData = data.filter(row =>
    Object.values(row).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Sort data
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const handleSort = (columnKey: string) => {
    if (!sortable) return;

    setSortConfig(current => {
      if (current?.key === columnKey) {
        return current.direction === 'asc'
          ? { key: columnKey, direction: 'desc' }
          : null;
      }
      return { key: columnKey, direction: 'asc' };
    });
  };

  const getSortIcon = (columnKey: string) => {
    if (!sortConfig || sortConfig.key !== columnKey) return null;
    return sortConfig.direction === 'asc' ? SortAsc : SortDesc;
  };

  // Mobile card view
  const renderMobileView = () => (
    <div className="space-y-4">
      {sortedData.map((row, index) => (
        <Card
          key={index}
          className={cn(
            'transition-colors',
            onRowClick && 'cursor-pointer hover:bg-accent/50',
            getTouchTargetClasses()
          )}
          onClick={() => onRowClick?.(row)}
        >
          <CardContent className="p-4">
            <div className="space-y-3">
              {columns
                .filter(col => !col.hideOnMobile)
                .map(column => {
                  const value = row[column.key];
                  const renderedValue = column.mobileRender
                    ? column.mobileRender(value, row)
                    : column.render
                    ? column.render(value, row)
                    : value;

                  return (
                    <div key={column.key} className="flex justify-between items-start">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-muted-foreground">
                          {column.label}
                        </p>
                        <div className="mt-1">{renderedValue}</div>
                      </div>
                    </div>
                  );
                })}

              {actions.length > 0 && (
                <div className="flex justify-end gap-2 pt-2 border-t">
                  {actions.slice(0, 2).map((action, actionIndex) => {
                    const Icon = action.icon;
                    return (
                      <Button
                        key={actionIndex}
                        variant={action.variant === 'destructive' ? 'destructive' : 'outline'}
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          action.onClick(row);
                        }}
                        className={getTouchTargetClasses()}
                      >
                        {Icon && <Icon className="h-4 w-4 mr-1" />}
                        {action.label}
                      </Button>
                    );
                  })}
                  {actions.length > 2 && (
                    <Button variant="outline" size="sm" className={getTouchTargetClasses()}>
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              )}

              {onRowClick && !actions.length && (
                <div className="flex justify-end">
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  // Desktop table view
  const renderDesktopView = () => (
    <div className={getResponsiveTableClasses()}>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map(column => {
              const SortIcon = getSortIcon(column.key);
              return (
                <TableHead
                  key={column.key}
                  className={cn(
                    column.className,
                    column.sortable !== false && sortable && 'cursor-pointer select-none hover:bg-accent/50',
                    column.width && `w-${column.width}`
                  )}
                  onClick={() => column.sortable !== false && handleSort(column.key)}
                >
                  <div className="flex items-center gap-2">
                    {column.label}
                    {SortIcon && <SortIcon className="h-4 w-4" />}
                  </div>
                </TableHead>
              );
            })}
            {actions.length > 0 && (
              <TableHead className="w-[100px]">Actions</TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((row, index) => (
            <TableRow
              key={index}
              className={cn(
                onRowClick && 'cursor-pointer hover:bg-accent/50'
              )}
              onClick={() => onRowClick?.(row)}
            >
              {columns.map(column => {
                const value = row[column.key];
                const renderedValue = column.render ? column.render(value, row) : value;

                return (
                  <TableCell key={column.key} className={column.className}>
                    {renderedValue}
                  </TableCell>
                );
              })}
              {actions.length > 0 && (
                <TableCell>
                  <div className="flex items-center gap-1">
                    {actions.slice(0, 3).map((action, actionIndex) => {
                      const Icon = action.icon || MoreVertical;
                      return (
                        <Button
                          key={actionIndex}
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            action.onClick(row);
                          }}
                          className="h-8 w-8 p-0"
                        >
                          <Icon className="h-4 w-4" />
                          <span className="sr-only">{action.label}</span>
                        </Button>
                      );
                    })}
                  </div>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

  return (
    <Card className={className}>
      {(title || searchable) && (
        <CardHeader className="pb-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {title && (
              <CardTitle className={cn(isMobile ? 'text-base' : 'text-lg')}>
                {title}
              </CardTitle>
            )}

            {searchable && (
              <div className="relative max-w-sm">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder={searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
            )}
          </div>
        </CardHeader>
      )}

      <CardContent>
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading...</p>
            </div>
          </div>
        ) : sortedData.length === 0 ? (
          <div className="flex items-center justify-center py-8">
            <p className="text-muted-foreground">{emptyMessage}</p>
          </div>
        ) : isMobile ? (
          renderMobileView()
        ) : (
          renderDesktopView()
        )}

        {pagination && sortedData.length > 0 && (
          <div className="flex items-center justify-between pt-4 border-t">
            <p className="text-sm text-muted-foreground">
              Page {pagination.currentPage} of {pagination.totalPages}
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => pagination.onPageChange(pagination.currentPage - 1)}
                disabled={pagination.currentPage <= 1}
                className={getTouchTargetClasses()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => pagination.onPageChange(pagination.currentPage + 1)}
                disabled={pagination.currentPage >= pagination.totalPages}
                className={getTouchTargetClasses()}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

/**
 * Common table action configurations
 */
export const tableActions = {
  view: <T = Record<string, unknown>>(onClick: (row: T) => void): TableAction<T> => ({
    label: 'View',
    icon: Eye,
    onClick,
  }),

  edit: <T = Record<string, unknown>>(onClick: (row: T) => void): TableAction<T> => ({
    label: 'Edit',
    icon: Edit,
    onClick,
  }),

  delete: <T = Record<string, unknown>>(onClick: (row: T) => void): TableAction<T> => ({
    label: 'Delete',
    icon: Trash2,
    onClick,
    variant: 'destructive',
  }),
};

/**
 * Common column renderers
 */
export const columnRenderers = {
  badge: (variant: 'default' | 'secondary' | 'destructive' | 'outline' = 'default') =>
    (value: string) => (
      <Badge variant={variant}>{value}</Badge>
    ),

  currency: (value: number) => (
    <span className="font-mono">
      £{value.toLocaleString('en-GB', { minimumFractionDigits: 2 })}
    </span>
  ),

  percentage: (value: number) => (
    <span className="font-mono">{value.toFixed(1)}%</span>
  ),

  date: (value: string | Date) => (
    <span className="font-mono">
      {new Date(value).toLocaleDateString('en-GB')}
    </span>
  ),

  dateTime: (value: string | Date) => (
    <span className="font-mono text-sm">
      {new Date(value).toLocaleString('en-GB')}
    </span>
  ),

  truncate: (maxLength: number = 50) => (value: string) => (
    <span title={value}>
      {value.length > maxLength ? `${value.substring(0, maxLength)}...` : value}
    </span>
  ),
};