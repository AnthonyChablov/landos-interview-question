import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Props for the Container component
 * Provides a flexible layout container with responsive design
 */
interface ContainerProps {
  /**
   * Children elements to be rendered inside the container
   */
  children?: ReactNode;

  /**
   * Additional CSS classes to apply to the container
   * @default ""
   */
  className?: string;
}

/**
 * Responsive Container Component
 *
 * @description
 * - Creates a centralized, responsive container for content
 * - Supports custom styling with additional class names
 * - Uses Tailwind CSS for layout and spacing
 *
 * @example
 * <Container className="bg-gray-100">
 *   <p>Hello, World!</p>
 * </Container>
 */
const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      role="container"
      className={cn(`container max-w-[73rem] mx-auto px-4 ${className}`)}
    >
      {children && children}
    </div>
  );
};

export default Container;
