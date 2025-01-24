"use client";
import { useEffect } from "react";
import Lenis from "lenis";

const useLenisSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useLenisSmoothScroll;
