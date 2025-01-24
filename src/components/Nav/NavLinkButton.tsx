import React from "react";
import { ButtonLink } from "../Buttons/ButtonLink";
import ParagraphText from "../Text/ParagraphText";
import { cn } from "@/lib/utils";
import { NavLink } from "./navLinks";

// Define types for the nav link button props object
interface NavLinkButtonProps {
  link: NavLink;
  pathname: string;
  onClick?: () => void; // Add an optional onClick prop
}

const NavLinkButton = ({ link, pathname, onClick }: NavLinkButtonProps) => {
  return (
    <ButtonLink
      key={link.id}
      href={link.href}
      className={cn(
        `px-3 py-1 rounded-xl shadow-none w-full
            ${
              link.type === "regular" && pathname === link.href
                ? "hover:bg-gray-200/90 bg-gray-200"
                : "bg-transparent hover:bg-none hover:bg-gray-200/90"
            } 
            ${link.type === "gray" && " gray bg-gray-200 hover:bg-gray-300 text-black border-[1px] border-gray-500"} 
            ${link.type === "black" && "black bg-black hover:bg-black/90 text-white"} 
        `
      )}
      onClick={onClick} // Attach the onClick handler
    >
      <ParagraphText
        size="md"
        className={`
            ${link.type === "regular" && "text-gray-800"}
            ${link.type === "gray" && "text-gray-800 "}
            ${link.type === "black" && "text-white "}
        `}
        text={link.name}
      />
    </ButtonLink>
  );
};

export default NavLinkButton;
