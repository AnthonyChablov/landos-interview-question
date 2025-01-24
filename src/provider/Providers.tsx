"use client";
import React, { ReactNode } from "react";
import useLenisSmoothScroll from "@/hooks/useLenisSmoothScroll";

/**
 * Props interface for the `Providers` component
 * Contains the children prop to render wrapped components with smooth scrolling
 */
interface ProvidersProps {
  /**
   * The components or content to be wrapped by the provider
   */
  children: ReactNode;
}

/**
 * Custom `Providers` component that enables smooth scrolling
 * using the `useLenisSmoothScroll` hook and wraps its children components
 *
 * @description
 * - Integrates the `useLenisSmoothScroll` hook to apply smooth scroll functionality to its children.
 * - The children prop allows wrapping any other components or content inside this provider, ensuring smooth scrolling behavior across the application.
 *
 * @param children - The components or content to be rendered with smooth scrolling applied
 *
 * @returns A JSX element that wraps the provided children with smooth scrolling enabled
 *
 * @example
 * const App = () => {
 *   return (
 *     <Providers>
 *       <div>Your content here</div>
 *     </Providers>
 *   );
 * };
 */
const Providers = ({ children }: ProvidersProps) => {
  useLenisSmoothScroll(); // Enable smooth scrolling for wrapped content

  return <>{children}</>;
};

export default Providers;
