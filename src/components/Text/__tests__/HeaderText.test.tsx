import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HeaderText from "./../HeaderText";

describe("HeaderText Component", () => {
  const defaultProps = {
    header: "Test Header",
  };

  it("renders header text correctly", () => {
    render(<HeaderText {...defaultProps} />);

    const headerElement = screen.getByText("Test Header");
    expect(headerElement).toBeInTheDocument();
  });

  it("renders with default h1 tag", () => {
    render(<HeaderText {...defaultProps} />);

    const headerElement = screen.getByRole("heading", { level: 1 });
    expect(headerElement).toBeInTheDocument();
  });

  it("renders with specified header level", () => {
    render(<HeaderText {...defaultProps} headerLevel="h3" />);

    const headerElement = screen.getByRole("heading", { level: 3 });
    expect(headerElement).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<HeaderText {...defaultProps} className="custom-test-class" />);

    const containerDiv = screen.getByText("Test Header").closest("div");
    expect(containerDiv).toHaveClass("custom-test-class");
  });

  it("uses header text as id when no id is provided", () => {
    render(<HeaderText {...defaultProps} />);

    const containerDiv = screen.getByText("Test Header").closest("div");
    expect(containerDiv).toHaveAttribute("id", "Test Header");
  });

  it("uses provided id when specified", () => {
    render(<HeaderText {...defaultProps} id="custom-id" />);

    const containerDiv = screen.getByText("Test Header").closest("div");
    expect(containerDiv).toHaveAttribute("id", "custom-id");
  });

  it("applies correct size classes for different header levels", () => {
    const headerLevels = ["h1", "h2", "h3", "h4", "h5"] as const;

    headerLevels.forEach((level) => {
      const { unmount } = render(
        <HeaderText {...defaultProps} headerLevel={level} />
      );

      const headerElement = screen.getByText("Test Header");

      // Check for size-related classes based on header level
      switch (level) {
        case "h1":
          expect(headerElement).toHaveClass("text-5xl");
          expect(headerElement).toHaveClass("lg:text-[3.7rem]");
          break;
        case "h2":
          expect(headerElement).toHaveClass("text-3xl");
          expect(headerElement).toHaveClass("lg:text-4xl");
          break;
        case "h3":
          expect(headerElement).toHaveClass("text-xl");
          expect(headerElement).toHaveClass("lg:text-2xl");
          break;
        case "h4":
          expect(headerElement).toHaveClass("text-xl");
          break;
        case "h5":
          expect(headerElement).toHaveClass("text-lg");
          break;
      }

      unmount();
    });
  });
});
