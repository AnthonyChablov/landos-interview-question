import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Skeleton } from "@/components/ui/skeleton";
import searchIcon from "@/assets/search.png";

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
        <Image
          className={` text-gray-900 `}
          src={searchIcon}
          alt="searchIcon"
          width={14}
          height={14}
        />
      </Skeleton>
    </div>
  );
};

export default LoadingInput;
