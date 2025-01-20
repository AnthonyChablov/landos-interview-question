"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from "@/components/ui/sheet";
import Container from "../Layout/Container";
import FigmaIcon from "../../../public/Figma.png";
import { navLinks } from "./navLinks";
import { ButtonIcon } from "../Buttons/ButtonIcons";
import NavLinkButton from "./NavLinkButton";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <Container className="flex items-center justify-between py-6 space-x-14">
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
      <Sheet>
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
          <SheetHeader></SheetHeader>
          <nav className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <NavLinkButton key={link.id} link={link} pathname={pathname} />
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </Container>
  );
};

export default Nav;
