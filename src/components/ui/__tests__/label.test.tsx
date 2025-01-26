import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Label } from "./../label"; // Adjust according to the actual file path

// Mock the cn utility for className handling if necessary
vi.mock("@/lib/utils", () => ({
  cn: vi.fn((...args: string[]) => args.join(" ")),
}));

describe("Label Component", () => {
  it("should render the Label with correct text", () => {
    render(<Label htmlFor="test-input">Test Label</Label>);

    // Ensure the label renders with the correct text
    const label = screen.getByText("Test Label");
    expect(label).toBeInTheDocument();
  });

  it("should apply custom className correctly", () => {
    render(
      <Label className="custom-class" htmlFor="test-input">
        Custom Class
      </Label>
    );

    const label = screen.getByText("Custom Class");
    expect(label).toHaveClass("custom-class");
  });

  it("should apply default cva classes correctly", () => {
    render(<Label htmlFor="test-input">Default Classes</Label>);

    const label = screen.getByText("Default Classes");
    expect(label).toHaveClass("text-sm font-medium leading-none");
    expect(label).toHaveClass("peer-disabled:cursor-not-allowed");
    expect(label).toHaveClass("peer-disabled:opacity-70");
  });

  it("should merge custom className with cva classes", () => {
    render(
      <Label className="additional-class" htmlFor="test-input">
        Merged Classes
      </Label>
    );

    const label = screen.getByText("Merged Classes");
    expect(label).toHaveClass("text-sm font-medium leading-none");
    expect(label).toHaveClass("peer-disabled:cursor-not-allowed");
    expect(label).toHaveClass("peer-disabled:opacity-70");
    expect(label).toHaveClass("additional-class");
  });

  it("should handle forwarded ref", () => {
    const ref = vi.fn();
    render(
      <Label ref={ref} htmlFor="test-input">
        Ref Test
      </Label>
    );

    // Ensure that the ref is forwarded correctly
    expect(ref).toHaveBeenCalled();
  });

  it("should pass htmlFor prop correctly", () => {
    render(<Label htmlFor="test-input">Test Label for Input</Label>);

    const label = screen.getByText("Test Label for Input");
    expect(label).toHaveAttribute("for", "test-input");
  });
});
