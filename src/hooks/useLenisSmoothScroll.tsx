"use client";
import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Custom hook for implementing smooth scrolling behavior using Lenis
 *
 * @description
 * - Initializes and manages the Lenis smooth scroll instance.
 * - Uses `requestAnimationFrame` to continuously update the scroll behavior.
 * - Cleans up the instance when the component is unmounted.
 *
 * @returns void
 *
 * @example
 * const App = () => {
 *   useLenisSmoothScroll();
 *   return <div>Your content here</div>;
 * };
 */
const useLenisSmoothScroll = (): void => {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      wheelMultiplier: 1, // Controls the speed of scroll for the wheel
      touchMultiplier: 1, // Controls the speed of scroll for touch devices
    });

    /**
     * Request Animation Frame loop for smooth scroll updates
     *
     * @param time - The timestamp for the current animation frame
     */
    function raf(time: number) {
      lenis.raf(time); // Update the Lenis scroll instance
      requestAnimationFrame(raf); // Keep updating the scroll behavior
    }

    // Start the RAF loop
    requestAnimationFrame(raf);

    // Cleanup function to destroy the Lenis instance when the component unmounts
    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useLenisSmoothScroll;
