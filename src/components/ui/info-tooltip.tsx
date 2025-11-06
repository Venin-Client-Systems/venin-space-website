"use client"

import * as React from "react"
import { Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { getGlossaryTerm } from "@/lib/glossary"
import { cn } from "@/lib/utils"

interface InfoTooltipProps {
  /**
   * The term key from the glossary (e.g., "lal", "abv", "excise")
   */
  term: string;

  /**
   * Optional custom definition to override glossary
   */
  customDefinition?: string;

  /**
   * Size of the info icon
   */
  size?: "sm" | "md" | "lg";

  /**
   * Custom className for the trigger button
   */
  className?: string;

  /**
   * Side where the tooltip appears
   */
  side?: "top" | "right" | "bottom" | "left";
}

const sizeClasses = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

/**
 * InfoTooltip - A reusable component that displays an info icon with a tooltip
 * containing the definition of technical terms from the glossary
 *
 * @example
 * <InfoTooltip term="lal" />
 * <InfoTooltip term="excise" size="lg" />
 * <InfoTooltip term="custom" customDefinition="Your custom definition here" />
 */
export function InfoTooltip({
  term,
  customDefinition,
  size = "sm",
  className,
  side = "top"
}: InfoTooltipProps) {
  const glossaryTerm = getGlossaryTerm(term);
  const definition = customDefinition || glossaryTerm?.definition;

  if (!definition) {
    console.warn(`InfoTooltip: No definition found for term "${term}"`);
    return null;
  }

  return (
    <Tooltip delayDuration={200}>
      <TooltipTrigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex items-center justify-center rounded-full text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            className
          )}
          aria-label={`Information about ${glossaryTerm?.term || term}`}
        >
          <Info className={cn(sizeClasses[size], "flex-shrink-0")} />
        </button>
      </TooltipTrigger>
      <TooltipContent
        side={side}
        className="max-w-xs text-sm leading-relaxed"
      >
        {glossaryTerm && (
          <div className="space-y-1">
            <p className="font-semibold text-primary">{glossaryTerm.term}</p>
            <p className="text-muted-foreground">{definition}</p>
          </div>
        )}
        {!glossaryTerm && (
          <p className="text-muted-foreground">{definition}</p>
        )}
      </TooltipContent>
    </Tooltip>
  );
}

/**
 * Inline variant that wraps text with an info icon
 *
 * @example
 * <InfoTooltipInline term="lal">LAL</InfoTooltipInline>
 * <InfoTooltipInline term="excise">Excise Liability</InfoTooltipInline>
 */
export function InfoTooltipInline({
  term,
  children,
  className
}: {
  term: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-1", className)}>
      {children}
      <InfoTooltip term={term} size="sm" />
    </span>
  );
}
