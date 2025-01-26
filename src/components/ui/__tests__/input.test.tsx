import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Input } from "./../input"; // Adjust according to the actual file path

// Mock the cn utility for className handling if necessary
vi.mock("@/lib/utils", () => ({
  cn: vi.fn((...args: string[]) => args.join(" ")),
}));

describe("Input Component", () => {
  it("should render the Input component correctly", () => {
    render(<Input placeholder="Test Input" />);

    // Ensure the input is rendered with the correct placeholder
    const input = screen.getByPlaceholderText("Test Input");
    expect(input).toBeInTheDocument();
  });

  it("should apply custom className correctly", () => {
    render(<Input className="custom-class" placeholder="Styled Input" />);

    const input = screen.getByPlaceholderText("Styled Input");
    expect(input).toHaveClass("custom-class");
  });

  it("should render with correct type", () => {
    render(<Input type="password" placeholder="Password" />);

    const input = screen.getByPlaceholderText("Password");
    expect(input).toHaveAttribute("type", "password");
  });

  it("should handle change events", () => {
    render(<Input placeholder="Enter text" />);

    const input = screen.getByPlaceholderText("Enter text");
    fireEvent.change(input, { target: { value: "Hello, world!" } });

    // Ensure the input value changes accordingly
    expect(input).toHaveValue("Hello, world!");
  });

  it("should disable the input field when disabled prop is passed", () => {
    render(<Input disabled placeholder="Disabled Input" />);

    const input = screen.getByPlaceholderText("Disabled Input");
    expect(input).toBeDisabled();
  });
});
