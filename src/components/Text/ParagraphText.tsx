import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Props for the ParagraphText component
 * Supports flexible text rendering with size variations and optional HTML injection
 */
interface ParagraphTextProps {
  /**
   * Additional CSS classes to apply to the container
   * @default ""
   */
  className?: string;

  /**
   * Plain text content to display
   * @default ""
   */
  text?: string;

  /**
   * Text size, with responsive breakpoints
   * @default "lg"
   */
  size?:
    | "xxs"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl";

  /**
   * Optional child components to render alongside text
   */
  children?: ReactNode;

  /**
   * Allows rendering of HTML content directly (use with caution)
   * Bypasses standard text rendering
   */
  dangerouslySetInnerHTML?: { __html: string };
}

/**
 * Flexible Paragraph Text Component
 *
 * @description
 * - Supports multiple text sizes
 * - Can render plain text, children, or raw HTML
 * - Uses Tailwind CSS for sizing
 * - Applies conditional class merging
 *
 * @example
 * <ParagraphText
 *   text="Hello World"
 *   size="lg"
 *   className="text-gray-700"
 * />
 *
 * <ParagraphText
 *   dangerouslySetInnerHTML={{ __html: "<strong>Bold Text</strong>" }}
 * />
 */
const ParagraphText = ({
  className = "",
  text = "",
  size = "lg",
  children,
  dangerouslySetInnerHTML,
}: ParagraphTextProps) => {
  /**
   * Mapping of size props to Tailwind CSS classes
   * Includes responsive design considerations
   */
  const paragraphSizes = {
    xxs: "text-xxs",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-xl lg:text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
  };

  // Determine size class based on input prop
  const sizeClass = paragraphSizes[size];

  return (
    <span role="paragraph-text" className={cn(className)}>
      {dangerouslySetInnerHTML ? (
        <p
          className={sizeClass}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        />
      ) : (
        <>
          <p className={sizeClass}>{text}</p>
          {children && <div className="text-2xl">{children}</div>}
        </>
      )}
    </span>
  );
};

export default ParagraphText;
