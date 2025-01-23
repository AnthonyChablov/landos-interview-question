import React from "react";
import { cn } from "@/lib/utils";

interface SeparatorProps {
  size?:
    | "extraExtraSmall"
    | "extraSmall"
    | "small"
    | "medium"
    | "large"
    | "extraLarge"
    | "extraExtraLarge"; // Optional size prop
  className?: string;
}

const Separator = ({ size = "small", className = "" }: SeparatorProps) => {
  // Map size to padding classes
  const sizeClasses = {
    extraExtraSmall: "py-1",
    extraSmall: "py-2",
    small: "py-3",
    medium: "py-6",
    large: "py-9",
    extraLarge: "py-20",
    extraExtraLarge: "py-36",
  };

  return <div className={cn(sizeClasses[size] + "" + className)}></div>;
};

export default Separator;
