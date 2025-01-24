import React from "react";
import { cn } from "@/lib/utils";

/**
 * Props for the Separator component
 * Provides configurable spacing between elements
 */
export interface SeparatorProps {
  /**
   * Defines the size of the separator
   * Controls vertical padding to create spacing
   * @default "small"
   */
  size?:
    | "extraExtraSmall"
    | "extraSmall"
    | "small"
    | "medium"
    | "large"
    | "extraLarge"
    | "extraExtraLarge";

  /**
   * Additional CSS classes to apply to the separator
   * @default ""
   */
  className?: string;
}

/**
 * Separator Component
 *
 * @description
 * - Creates vertical spacing between elements
 * - Supports customizable sizes with Tailwind CSS padding classes
 * - Allows additional styling via `className` prop
 *
 * @example
 * <Separator size="medium" className="bg-gray-200" />
 */
const Separator = ({ size = "small", className = "" }: SeparatorProps) => {
  /**
   * Mapping of size values to Tailwind CSS padding classes
   */
  const sizeClasses = {
    extraExtraSmall: "py-1",
    extraSmall: "py-2",
    small: "py-3",
    medium: "py-6",
    large: "py-9",
    extraLarge: "py-20",
    extraExtraLarge: "py-36",
  };

  return (
    <div
      role="separator"
      className={cn(sizeClasses[size] + " " + className)}
    ></div>
  );
};

export default Separator;
