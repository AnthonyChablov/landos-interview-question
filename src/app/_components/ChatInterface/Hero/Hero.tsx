"use client";
import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Container from "@/components/Layout/Container";
import Separator from "@/components/Layout/Separator";
import HeaderText from "@/components/Text/HeaderText";
import ParagraphText from "@/components/Text/ParagraphText";

const WINE_TITLE = "Everything about wine";
const SUBTITLE = "What would you like to know?";

interface HeroComponentProps {
  hasResponse?: boolean | null;
  children?: ReactNode;
}

const Hero = ({ hasResponse = null, children }: HeroComponentProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (heroRef.current && contentRef.current && childrenRef.current) {
        const tl = gsap.timeline();

        if (hasResponse) {
          tl.to(childrenRef.current, {
            opacity: 0,
            height: 0,
            duration: 0.5,
            ease: "power2.inOut",
          });
          tl.to(heroRef.current, {
            height: "auto",
            duration: 0.5,
            ease: "power3.inOut",
          });
        }
      }
    },
    {
      scope: heroRef,
      dependencies: [hasResponse],
    }
  );

  return (
    <section
      ref={heroRef}
      className="flex items-center justify-center h-screen bg-customGray text-center overflow-hidden"
    >
      <Container>
        <div ref={contentRef}>
          <Separator size="extraSmall" />
          <HeaderText headerLevel="h1" header={WINE_TITLE} />
          <Separator size="extraSmall" />
          <ParagraphText size="2xl" className="text-gray-500" text={SUBTITLE} />
          <Separator size="extraSmall" />
          <div ref={childrenRef} className="">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
