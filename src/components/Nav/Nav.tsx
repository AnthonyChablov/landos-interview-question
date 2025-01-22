"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import Container from "../Layout/Container";
import FigmaIcon from "../../../public/Figma.png";
import { navLinks } from "./navLinks";
import { ButtonIcon } from "../Buttons/ButtonIcons";
import NavLinkButton from "./NavLinkButton";
import Separator from "../Layout/Separator";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false); // state to track the sheet visibility
  const pathname = usePathname(); // extract path name from URL

  const handleCloseSheet = () => {
    setIsSheetOpen(false); // Close the sheet
  };

  return (
    <div className="sticky top-0 left-0 right-0 z-10 bg-white py-6 shadow-sm">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/" className="w-fit">
            <Image src={FigmaIcon} width={27} alt="logo" />
          </Link>
        </div>

        {/* Desktop Links */}
        <nav className="hidden lg:flex w-fit space-x-3 justify-between items-center">
          {navLinks.map((link) => (
            <NavLinkButton key={link.id} link={link} pathname={pathname} />
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <ButtonIcon>
              {/* Custom SVG Menu Icon */}
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
            <SheetTitle>
              <Separator size="extraExtraSmall" />
              <Image src={FigmaIcon} width={27} alt="logo" />
              <Separator size="extraExtraSmall" />
            </SheetTitle>
            <nav className="flex flex-col space-y-4 p-4">
              {navLinks.map((link) => (
                <NavLinkButton
                  key={link.id}
                  link={link}
                  pathname={pathname}
                  onClick={handleCloseSheet} // Close sheet on link click
                />
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </div>
  );
};

export default Nav;
