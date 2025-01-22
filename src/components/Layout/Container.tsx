import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      role="container"
      className={cn(`container max-w-[73rem] mx-auto px-4  ${className}`)}
    >
      {children && children}
    </div>
  );
};

export default Container;
