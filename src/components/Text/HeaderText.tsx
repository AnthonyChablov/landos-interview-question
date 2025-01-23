import React from "react";
import { cn } from "@/lib/utils";

/**
 * Props for the HeaderText component
 * Supports flexible header rendering with multiple levels
 */
interface HeaderTextProps {
  /**
   * Additional CSS classes to apply to the container
   * @default ""
   */
  className?: string;

  /**
   * Text content of the header
   */
  header: string;

  /**
   * Optional ID for the header element
   * Defaults to header text if not provided
   */
  id?: string;

  /**
   * Specifies the HTML header level
   * @default "h1"
   */
  headerLevel?: "h1" | "h2" | "h3" | "h4" | "h5";
}

/**
 * Flexible Header Text Component
 *
 * @description
 * - Renders headers with responsive sizing
 * - Supports multiple header levels (h1-h5)
 * - Uses Tailwind CSS for styling
 * - Applies conditional class merging
 *
 * @example
 * <HeaderText
 *   header="Welcome to My Site"
 *   headerLevel="h1"
 *   className="text-center"
 * />
 */
const HeaderText = ({
  className = "",
  header = "",
  headerLevel = "h1",
  id,
}: HeaderTextProps) => {
  /**
   * Mapping of header levels to Tailwind CSS classes
   * Includes responsive design considerations
   */
  const headerSizes = {
    h1: " text-5xl lg:text-[3.7rem] leading-none ",
    h2: "text-3xl lg:text-5xl",
    h3: "text-xl lg:text-2xl",
    h4: "text-xl",
    h5: "text-lg",
    "h1-alt": "text-5xl",
  };

  // Dynamically create header tag based on headerLevel prop
  const HeaderTag = headerLevel;

  // Determine size class based on header level
  const sizeClass = headerSizes[headerLevel];

  return (
    <div
      id={id || header}
      className={cn(` font-bold text-customBlue ${className}`)}
    >
      <HeaderTag className={`${sizeClass} `}>{header}</HeaderTag>
    </div>
  );
};

export default HeaderText;
