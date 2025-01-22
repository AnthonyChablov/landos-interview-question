import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

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
        `${className}  w-full md:w-fit text-white  hover:bg-customBrightGreen/70`
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
