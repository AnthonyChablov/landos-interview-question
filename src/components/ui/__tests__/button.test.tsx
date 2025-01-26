import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "../button"; // Adjust the import according to the actual file path

describe("Button Component", () => {
  it("should render with default variant and size", () => {
    render(<Button>Default Button</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-primary text-primary-foreground"); // check default variant styles
    expect(button).toHaveClass("h-9 px-4 py-2"); // check default size styles
    expect(button).toHaveTextContent("Default Button");
  });

  it("should render with destructive variant", () => {
    render(<Button variant="destructive">Destructive Button</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-destructive text-destructive-foreground");
    expect(button).toHaveTextContent("Destructive Button");
  });

  it("should render with outline variant", () => {
    render(<Button variant="outline">Outline Button</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("border border-input bg-background");
    expect(button).toHaveTextContent("Outline Button");
  });

  it("should render with icon size", () => {
    render(<Button size="icon">Icon Button</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("h-9 w-9");
    expect(button).toHaveTextContent("Icon Button");
  });

  it("should render as a custom component when `asChild` is true", () => {
    render(
      <Button asChild>
        <span>As Child Button</span>
      </Button>
    );

    const button = screen.getByText("As Child Button");
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe("SPAN"); // it should render as <span> instead of <button>
  });

  it("should fire click event", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should apply additional class names", () => {
    render(<Button className="extra-class">Button with extra class</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("extra-class");
  });

  it("should render with the link variant", () => {
    render(<Button variant="link">Link Button</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveClass(
      "text-primary underline-offset-4 hover:underline"
    );
    expect(button).toHaveTextContent("Link Button");
  });
});
