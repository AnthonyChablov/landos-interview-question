import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP); // Register the hook

const LoadingInput = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // GSAP animation for the spinner
      gsap.to(".spinner", {
        rotation: 360,
        scale: 1.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="md:w-6/12 mx-auto  flex items-center justify-center"
    >
      <Skeleton
        className=" w-full py-7 px-6   rounded-full flex justify-end items-end"
        role="skeleton"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn("animate-spin")}
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      </Skeleton>
    </div>
  );
};

export default LoadingInput;
