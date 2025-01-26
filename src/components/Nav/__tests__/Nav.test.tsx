import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Nav from "../Nav";
import { navLinks } from "../data/navLinks";

// Mock Next.js hooks and components
vi.mock("next/navigation", () => ({
  usePathname: vi.fn(() => "/"),
}));

vi.mock("next/image", () => ({
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));

// Mock child components to simplify testing
vi.mock("@/components/ui/sheet", () => ({
  Sheet: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SheetContent: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  SheetTrigger: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  SheetTitle: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

vi.mock("../Layout/Container", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe("Nav Component", () => {
  it("renders logo", () => {
    render(<Nav />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders desktop navigation links", () => {
    render(<Nav />);
    navLinks.forEach((link) => {
      const navLink = screen.getByText(link.name);
      expect(navLink).toBeInTheDocument();
    });
  });

  it("renders mobile menu trigger", () => {
    render(<Nav />);
    const mobileMenuTrigger = screen.getByRole("button");
    expect(mobileMenuTrigger).toBeInTheDocument();
  });

  it("contains correct number of navigation links", () => {
    render(<Nav />);
    const links = screen
      .getAllByRole("button")
      .filter(
        (el) =>
          el.textContent &&
          navLinks.some((navLink) => navLink.name === el.textContent)
      );
    expect(links.length).toBe(navLinks.length);
  });
});
