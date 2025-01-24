import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Props for the ButtonLink component
 * Combines the behavior of a button with the navigation functionality of a link
 */
interface ButtonLinkProps {
  /**
   * The destination URL to navigate to when the button is clicked
   */
  href: string;

  /**
   * Children elements to be rendered inside the button, typically text or icons
   */
  children?: React.ReactNode;

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
 * ButtonLink Component
 *
 * @description
 * - Renders a button-like element that links to the specified `href`
 * - Supports custom styling with additional class names
 * - Can be used for navigation, maintaining button functionality
 * - Uses Tailwind CSS for styling, including hover effects
 *
 * @example
 * <ButtonLink href="/about" className="bg-blue-500" onClick={() => console.log('Clicked!')}>
 *   Go to About Page
 * </ButtonLink>
 */
export function ButtonLink({
  href,
  className,
  children,
  onClick,
}: ButtonLinkProps) {
  return (
    <Button
      asChild
      onClick={onClick}
      className={cn(
        `${className} w-full  text-white 
        transition-all duration-300 ease-in-out
        `
      )}
    >
      <Link className="" href={href}>
        {children}
      </Link>
    </Button>
  );
}
