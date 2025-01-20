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

// Data object for navigation links with string ids
const navLinks = [
  { id: "plans", name: "Plans", href: "/#plans" },
  { id: "about", name: "About", href: "/#about" },
  { id: "contact", name: "Contact", href: "/contact" },
  { id: "signin", name: "Sign In", href: "/signin" },
];

const Nav = () => {
  return (
    <nav className=" bg-customGreen">
      <Container className="flex items-center justify-between py-14 space-x-14">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">
            <Image src={FigmaIcon} alt="logo" width={400}></Image>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex w-full justify-between items-between">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="text-xl font-semibold text-customBlue hover:text-customBlue "
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
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
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetHeader></SheetHeader>
            <nav className="flex flex-col space-y-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="text-xl font-bold text-customBlue hover:text-customBlue"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </nav>
  );
};

export default Nav;
