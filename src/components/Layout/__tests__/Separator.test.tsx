import { render } from "@testing-library/react";
import Separator from "@/components/Layout/Separator"; // Adjust the import path as needed
import { describe, it, expect } from "vitest";
import { SeparatorProps } from "@/components/Layout/Separator";

describe("Separator Component", () => {
  it("renders with the default size (small)", () => {
    const { container } = render(<Separator />);
    const separator = container.firstChild;

    expect(separator).toBeInTheDocument();
    expect(separator).toHaveClass("py-3"); // Default class for "small"
  });

  it("renders with a specified size", () => {
    const { container } = render(<Separator size="large" />);
    const separator = container.firstChild;

    expect(separator).toBeInTheDocument();
    expect(separator).toHaveClass("py-9"); // Class for "large"
  });

  it("applies additional class names", () => {
    const { container } = render(
      <Separator size="medium" className="bg-gray-200" />
    );
    const separator = container.firstChild;

    expect(separator).toBeInTheDocument();
    expect(separator).toHaveClass("py-6"); // Class for "medium"
    expect(separator).toHaveClass("bg-gray-200"); // Additional class
  });

  it("renders correctly for all size options", () => {
    const sizes: Array<{ size: SeparatorProps["size"]; className: string }> = [
      { size: "extraExtraSmall", className: "py-1" },
      { size: "extraSmall", className: "py-2" },
      { size: "small", className: "py-3" },
      { size: "medium", className: "py-6" },
      { size: "large", className: "py-9" },
      { size: "extraLarge", className: "py-20" },
      { size: "extraExtraLarge", className: "py-36" },
    ];

    sizes.forEach(({ size, className }) => {
      const { container } = render(<Separator size={size} />);
      const separator = container.firstChild;

      expect(separator).toBeInTheDocument();
      expect(separator).toHaveClass(className);
    });
  });

  it("renders an empty div if no class is provided", () => {
    const { container } = render(<Separator size="small" className="" />);
    const separator = container.firstChild;

    expect(separator).toBeInTheDocument();
    expect(separator).toHaveClass("py-3");
    expect(separator).not.toHaveClass("undefined");
  });
});
