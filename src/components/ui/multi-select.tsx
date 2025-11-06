'use client';

import * as React from 'react';
import { X, Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

export interface MultiSelectOption {
  label: string;
  value: string;
}

interface MultiSelectProps {
  options: MultiSelectOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function MultiSelect({
  options,
  value = [],
  onChange,
  placeholder = "Select items...",
  className,
  disabled,
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string[]>(value);

  React.useEffect(() => {
    setSelected(value);
  }, [value]);

  const handleToggle = (optionValue: string) => {
    const newSelected = selected.includes(optionValue)
      ? selected.filter((v) => v !== optionValue)
      : [...selected, optionValue];

    setSelected(newSelected);
    onChange?.(newSelected);
  };

  const handleRemove = (optionValue: string) => {
    const newSelected = selected.filter((v) => v !== optionValue);
    setSelected(newSelected);
    onChange?.(newSelected);
  };

  const selectedLabels = selected
    .map((v) => options.find((o) => o.value === v)?.label)
    .filter(Boolean);

  return (
    <div className={cn("relative", className)}>
      <Button
        type="button"
        variant="outline"
        disabled={disabled}
        className={cn(
          "w-full justify-between font-normal",
          !selected.length && "text-muted-foreground"
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select items"
        aria-expanded={isOpen}
      >
        <span className="flex flex-wrap gap-1">
          {selected.length === 0 ? (
            placeholder
          ) : (
            <span className="text-sm">
              {selected.length} selected
            </span>
          )}
        </span>
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>

      {selected.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {selectedLabels.map((label, index) => (
            <Badge
              key={selected[index]}
              variant="secondary"
              className="gap-1"
            >
              {label}
              <button
                type="button"
                className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                onClick={() => handleRemove(selected[index])}
                disabled={disabled}
                aria-label={`Remove ${label}`}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-md border bg-popover p-1 shadow-md">
            {options.length === 0 ? (
              <div className="px-2 py-6 text-center text-sm text-muted-foreground">
                No options available
              </div>
            ) : (
              <div className="space-y-1">
                {options.map((option) => {
                  const isSelected = selected.includes(option.value);
                  return (
                    <div
                      key={option.value}
                      className={cn(
                        "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground",
                        isSelected && "bg-accent"
                      )}
                      onClick={() => handleToggle(option.value)}
                      role="option"
                      aria-selected={isSelected}
                    >
                      <Checkbox
                        checked={isSelected}
                        className="mr-2"
                        aria-label={option.label}
                      />
                      <span className="flex-1">{option.label}</span>
                      {isSelected && (
                        <Check className="h-4 w-4" />
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
