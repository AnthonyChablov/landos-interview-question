import { render, screen, fireEvent } from "@testing-library/react";
import NavLinkButton from "@/components/Nav/NavLinkButton"; // Adjust the path as necessary
import { describe, it, expect, vi } from "vitest";
import { NavLink } from "../data/navLinks";

describe("NavLinkButton Component", () => {
  const mockLink: NavLink = {
    id: "Initio",
    name: "Initio",
    href: "/",
    type: "regular",
  };

  it("renders the button with the correct text", () => {
    render(<NavLinkButton link={mockLink} pathname="/" />);
    const buttonText = screen.getByText("Initio");
    expect(buttonText).toBeInTheDocument();
  });

  it("applies the active style when the pathname matches the link's href", () => {
    render(<NavLinkButton link={mockLink} pathname="/" />);
    const button = screen.getByRole("link", { name: "Initio" });
    expect(button).toHaveClass("hover:bg-gray-200/90 bg-gray-200");
  });

  it("applies the default style when the pathname does not match the link's href", () => {
    render(<NavLinkButton link={mockLink} pathname="/servicos" />);
    const button = screen.getByRole("link", { name: "Initio" });
    expect(button).toHaveClass(
      "bg-transparent hover:bg-none hover:bg-gray-200/90"
    );
  });

  it("calls the onClick handler when the button is clicked", () => {
    const handleClick = vi.fn();
    render(
      <NavLinkButton link={mockLink} pathname="/" onClick={handleClick} />
    );
    const button = screen.getByRole("link", { name: "Initio" });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders the correct styles for a 'gray' type link", () => {
    const grayLink: NavLink = {
      id: "Sign in",
      name: "Sign In",
      href: "/signin",
      type: "gray",
    };
    render(<NavLinkButton link={grayLink} pathname="/servicos" />);
    const button = screen.getByRole("link", { name: "Sign In" });
    expect(button).toHaveClass("gray");
  });

  it("renders the correct styles for a 'black' type link", () => {
    const blackLink: NavLink = {
      id: "Registrar",
      name: "Registrar",
      href: "/registrar",
      type: "black",
    };
    render(<NavLinkButton link={blackLink} pathname="/servicos" />);
    const button = screen.getByRole("link", { name: "Registrar" });
    expect(button).toHaveClass("black");
  });

  it("handles all navigation links correctly", () => {
    const navLinks: NavLink[] = [
      { id: "Initio", name: "Initio", href: "/", type: "regular" },
      { id: "Serviços", name: "Serviços", href: "/servicos", type: "regular" },
      {
        id: "Communidade",
        name: "Communidade",
        href: "/communidade",
        type: "regular",
      },
      { id: "Recursos", name: "Recursos", href: "/recursos", type: "regular" },
      { id: "Preços", name: "Preços", href: "/precos", type: "regular" },
      { id: "Contacto", name: "Contacto", href: "/contacto", type: "regular" },
      { id: "Sign in", name: "Sign In", href: "/signin", type: "gray" },
      { id: "Registrar", name: "Registrar", href: "/registrar", type: "black" },
    ];

    navLinks.forEach((link) => {
      render(<NavLinkButton link={link} pathname={link.href} />);
      const button = screen.getByRole("link", { name: link.name });
      expect(button).toBeInTheDocument();
      if (link.type === "regular" && link.href === "/") {
        expect(button).toHaveClass("hover:bg-gray-200/90 bg-gray-200");
      }
    });
  });
});
