import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonIconProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

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
