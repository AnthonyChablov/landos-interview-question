import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Props for the ButtonIcon component
 * Provides an icon-styled button with customizable behavior and styling
 */
interface ButtonIconProps {
  /**
   * Children elements to be rendered inside the button, typically an icon or text
   */
  children?: ReactNode;

  /**
   * Additional CSS classes to apply to the button
   * @default ""
   */
  className?: string;

  /**
   * Callback function triggered when the button is clicked
   */
  onClick?: () => void;
}

/**
 * ButtonIcon Component
 *
 * @description
 * - Renders a button styled for icons with optional additional customization
 * - Supports custom styling with additional class names
 * - Includes a click handler for interaction
 * - Uses Tailwind CSS for styling and a `variant` and `size` of "icon"
 *
 * @example
 * <ButtonIcon className="text-red-500" onClick={() => alert('Button clicked!')}>
 *   <Icon name="star" />
 * </ButtonIcon>
 */
export function ButtonIcon({ children, className, onClick }: ButtonIconProps) {
  return (
    <Button
      className={cn(`${className}`)}
      variant="outline"
      size="icon"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
