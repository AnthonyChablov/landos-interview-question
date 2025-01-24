"use client";
import React, { ReactNode } from "react";
import useLenisSmoothScroll from "@/hooks/useLenisSmoothScroll";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  useLenisSmoothScroll();

  return <>{children}</>;
};

export default Providers;
