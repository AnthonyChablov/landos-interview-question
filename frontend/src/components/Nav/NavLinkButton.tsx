import React from "react";
import { ButtonLink } from "../Buttons/ButtonLink";
import ParagraphText from "../Text/ParagraphText";
import { cn } from "@/lib/utils";
import { NavLink } from "./navLinks";

// Define types for the nav link button props object
interface NavLinkButtonProps {
  link: NavLink;
  pathname: string;
}

const NavLinkButton = ({ link, pathname }: NavLinkButtonProps) => {
  return (
    <ButtonLink
      key={link.id}
      href={link.href}
      className={cn(
        `px-5 py-2 rounded-xl shadow-none w-fit
            ${
              link.type === "regular" && pathname === link.href
                ? "hover:bg-gray-200/90 bg-gray-200"
                : "bg-transparent hover:bg-none"
            } 
            ${link.type === "gray" && "bg-gray-200 hover:bg-gray-300 text-black border-[1px] border-gray-500"} 
            ${link.type === "black" && "bg-black hover:bg-black/90 text-white"} 
        `
      )}
    >
      <ParagraphText
        size="md"
        className={`
            ${link.type === "regular" && "text-black"}
            ${link.type === "gray" && "text-black"}
            ${link.type === "black" && "text-white"}
        `}
        text={link.name}
      />
    </ButtonLink>
  );
};

export default NavLinkButton;
