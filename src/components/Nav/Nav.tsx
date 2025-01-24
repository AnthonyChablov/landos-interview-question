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
import logo from "@/assets/Figma.png";
import { navLinks } from "./navLinks";
import { ButtonIcon } from "../Buttons/ButtonIcons";
import NavLinkButton from "./NavLinkButton";
import Separator from "../Layout/Separator";
import { usePathname } from "next/navigation";

/**
 * Navigation Component
 *
 * @description
 * - Responsive navigation bar with desktop and mobile views
 * - Uses sheet component for mobile menu
 * - Dynamically renders navigation links
 * - Sticky positioning with shadow
 *
 * @key Features
 * - Logo linking to home page
 * - Responsive design (hidden on mobile, full menu on desktop)
 * - Mobile menu with slide-out sheet
 * - Active link highlighting based on current pathname
 *
 * @example
 * <Nav /> // Renders in app layout
 */
const Nav = () => {
  /**
   * Tracks mobile sheet (menu) visibility state
   */
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  /**
   * Current page pathname for active link detection
   */
  const pathname = usePathname();

  /**
   * Closes the mobile navigation sheet
   * Used when a link is clicked to dismiss the menu
   */
  const handleCloseSheet = () => {
    setIsSheetOpen(false);
  };

  return (
    <div className="sticky  top-0 left-0 right-0 z-30 bg-white py-6 shadow-sm">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/" className="w-fit">
            <Image src={logo} width={27} alt="logo" />
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
              {/* Hamburger Menu Icon */}
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

          <SheetContent
            side="right"
            className="w-full md:w-96 h-full overflow-auto"
          >
            <Container className="flex items-start justify-start flex-col">
              <SheetTitle>
                <Separator size="extraExtraSmall" />
                <Image src={logo} width={27} alt="logo" className=" " />
                <Separator size="extraExtraSmall" />
              </SheetTitle>

              <nav className="flex flex-col space-y-6 py-10">
                {navLinks.map((link) => (
                  <NavLinkButton
                    key={link.id}
                    link={link}
                    pathname={pathname}
                    onClick={handleCloseSheet} // Close sheet on link click
                  />
                ))}
              </nav>
            </Container>
          </SheetContent>
        </Sheet>
      </Container>
    </div>
  );
};

export default Nav;
