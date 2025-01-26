import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Textarea } from "./../textarea"; // Adjust according to the actual file path

// Mock the cn utility for className handling if necessary
vi.mock("@/lib/utils", () => ({
  cn: vi.fn((...args: any[]) => args.join(" ")),
}));

describe("Textarea Component", () => {
  it("should render the Textarea component with placeholder", () => {
    render(<Textarea placeholder="Enter text" />);

    const textarea = screen.getByPlaceholderText("Enter text");
    expect(textarea).toBeInTheDocument();
  });

  it("should apply custom className correctly", () => {
    render(<Textarea className="custom-class" />);

    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveClass("custom-class");
  });

  it("should apply default classes", () => {
    render(<Textarea placeholder="Default Class Textarea" />);

    const textarea = screen.getByPlaceholderText("Default Class Textarea");
    expect(textarea).toHaveClass("flex");
    expect(textarea).toHaveClass("min-h-[60px]");
    expect(textarea).toHaveClass("border-input");
    expect(textarea).toHaveClass("bg-transparent");
  });

  it("should merge custom className with default classes", () => {
    render(
      <Textarea
        className="additional-class"
        placeholder="Merged Class Textarea"
      />
    );

    const textarea = screen.getByPlaceholderText("Merged Class Textarea");
    expect(textarea).toHaveClass("flex");
    expect(textarea).toHaveClass("min-h-[60px]");
    expect(textarea).toHaveClass("additional-class");
  });

  it("should handle disabled state correctly", () => {
    render(<Textarea disabled placeholder="Disabled Textarea" />);

    const textarea = screen.getByPlaceholderText("Disabled Textarea");
    expect(textarea).toBeDisabled();
    expect(textarea).toHaveClass("disabled:cursor-not-allowed");
    expect(textarea).toHaveClass("disabled:opacity-50");
  });

  it("should trigger onChange event correctly", () => {
    const handleChange = vi.fn();
    render(<Textarea onChange={handleChange} placeholder="Text Area Change" />);

    const textarea = screen.getByPlaceholderText("Text Area Change");
    fireEvent.change(textarea, { target: { value: "New value" } });

    // Instead of expecting the exact structure, focus on the target value
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: "New value", // Verify the value of the textarea
        }),
      })
    );
  });

  it("should focus correctly and apply focus-visible classes", () => {
    render(<Textarea placeholder="Focus Test" />);

    const textarea = screen.getByPlaceholderText("Focus Test");
    fireEvent.focus(textarea);

    expect(textarea).toHaveClass("focus-visible:outline-none");
    expect(textarea).toHaveClass("focus-visible:ring-1");
  });
});
