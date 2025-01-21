import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ParagraphTextProps {
  className?: string;
  text?: string;
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
  children?: ReactNode;
}

const ParagraphText = ({
  className = "",
  text = "",
  size = "lg",
  children,
}: ParagraphTextProps) => {
  const paragraphSizes = {
    xxs: "text-xxs",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
  };

  const sizeClass = paragraphSizes[size];

  return (
    <div className={cn(` ${className}`)}>
      <p className={sizeClass}>{text}</p>
      <div className="text-2xl ">{children}</div>
    </div>
  );
};

export default ParagraphText;
