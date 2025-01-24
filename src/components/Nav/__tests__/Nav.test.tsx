import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { vi } from "vitest";
import Nav from "@/components/Nav/Nav"; // Adjust the import path as needed

describe("Nav.tsx", () => {
  it("renders the logo", () => {
    render(<Nav />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders desktop navigation links", () => {
    render(<Nav />);
    const aboutLink = screen.getByText("About");
    const servicesLink = screen.getByText("Services");

    expect(aboutLink).toBeInTheDocument();
    expect(servicesLink).toBeInTheDocument();
  });

  it("renders the mobile menu trigger button", () => {
    render(<Nav />);
    const menuButton = screen.getByRole("button");
    expect(menuButton).toBeInTheDocument();
  });

  it("opens and closes the mobile menu", () => {
    render(<Nav />);
    const menuButton = screen.getByRole("button");

    // Click to open menu
    fireEvent.click(menuButton);
    const menuContent = screen.getByText("About");
    expect(menuContent).toBeInTheDocument();

    // Click a link to close menu
    fireEvent.click(menuContent);
    expect(menuContent).not.toBeInTheDocument();
  });

  it("highlights the active link based on pathname", () => {
    render(<Nav />);
    const aboutLink = screen.getByText("About");
    expect(aboutLink).toHaveClass("active"); // Adjust the class name based on your implementation
  });
});
