"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link"; // Assuming you're using Next.js
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from "@/components/ui/sheet"; // Shadcn Sheet Component
import Container from "../Layout/Container";
import FigmaIcon from "../../../public/Figma.png";
import ParagraphText from "../Text/ParagraphText";
import { usePathname } from "next/navigation";
import { ButtonIcon } from "../Buttons/ButtonIcons";
import { ButtonLink } from "../Buttons/ButtonLink";
import { navLinks } from "./navLinks";

const Nav = () => {
  const pathname = usePathname();
  return (
    <Container className="flex items-center justify-between py-6 space-x-14">
      {/* Logo */}
      <div className="text-xl font-bold">
        <Link href="/" className="w-fit">
          <Image src={FigmaIcon} width={27} alt="logo"></Image>
        </Link>
      </div>

      {/* Desktop Links */}
      <nav className="hidden lg:flex w-fit space-x-4 justify-between items-center">
        {navLinks.map((link) => (
          <ButtonLink
            key={link.id}
            href={link.href}
            className={` px-5 ${
              pathname === link.href
                ? "bg-gray-100 hover:bg-gray-100/90 shadow-none text-black"
                : " bg-transparent hover:bg-transparent shadow-none "
            }`}
          >
            <ParagraphText className="text-black" size="sm" text={link.name} />
          </ButtonLink>
        ))}
      </nav>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          {/* Custom SVG Menu Icon */}
          <ButtonIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </ButtonIcon>
        </SheetTrigger>
        <SheetContent side="right" className="w-full md:w-96">
          <SheetHeader></SheetHeader>
          <nav className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <ButtonLink
                key={link.id}
                href={link.href}
                className={`px-5 ${
                  pathname === link.href
                    ? "bg-gray-100 hover:bg-gray-100/90 shadow-none "
                    : " bg-transparent hover:bg-transparent shadow-none "
                }`}
              >
                <ParagraphText
                  className="text-black"
                  size="lg"
                  text={link.name}
                />
              </ButtonLink>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </Container>
  );
};

export default Nav;
