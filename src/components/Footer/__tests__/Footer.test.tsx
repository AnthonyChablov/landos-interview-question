import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./../Footer";

describe("Footer.tsx", () => {
  it("should render in the DOM", () => {
    render(<Footer />);

    // Check if footer is present
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });

  it("renders logo", () => {
    render(<Footer />);

    // Check if logo is present
    const logoImage = screen.getByAltText("Logo");
    expect(logoImage).toBeInTheDocument();
  });

  it("renders social media links", () => {
    render(<Footer />);

    // Check for specific social media platforms
    const socialLinks = [
      screen.getByText("Twitter", { selector: "span.sr-only" }),
      screen.getByText("Instagram", { selector: "span.sr-only" }),
      screen.getByText("YouTube", { selector: "span.sr-only" }),
      screen.getByText("LinkedIn", { selector: "span.sr-only" }),
    ];

    socialLinks.forEach((link) => {
      expect(link).toBeInTheDocument();
    });
  });

  it("renders footer sections with correct titles", () => {
    render(<Footer />);

    const sectionTitles = ["Use cases", "Explore", "Resources"];

    sectionTitles.forEach((title) => {
      const sectionTitle = screen.getByText(title, { selector: "p" });
      expect(sectionTitle).toBeInTheDocument();
    });
  });
});
