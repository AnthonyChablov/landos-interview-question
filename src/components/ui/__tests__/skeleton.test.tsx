import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Skeleton } from "../skeleton"; // Adjust according to the actual file path

// Mock the cn utility for className handling if necessary
vi.mock("@/lib/utils", () => ({
  cn: vi.fn((...args: string[]) => args.join(" ")),
}));

describe("Skeleton Component", () => {
  it("should render the Skeleton component", () => {
    render(<Skeleton>Skeleton Content</Skeleton>);

    const skeleton = screen.getByText("Skeleton Content");
    expect(skeleton).toBeInTheDocument();
  });

  it("should apply custom className correctly", () => {
    render(<Skeleton className="custom-class">Custom Class Skeleton</Skeleton>);

    const skeleton = screen.getByText("Custom Class Skeleton");
    expect(skeleton).toHaveClass("custom-class");
  });

  it("should apply default animate-pulse and bg-primary/10 classes", () => {
    render(<Skeleton>Default Class Skeleton</Skeleton>);

    const skeleton = screen.getByText("Default Class Skeleton");
    expect(skeleton).toHaveClass("animate-pulse");
    expect(skeleton).toHaveClass("bg-primary/10");
  });

  it("should merge custom className with default classes", () => {
    render(
      <Skeleton className="additional-class">Merged Class Skeleton</Skeleton>
    );

    const skeleton = screen.getByText("Merged Class Skeleton");
    expect(skeleton).toHaveClass("animate-pulse");
    expect(skeleton).toHaveClass("bg-primary/10");
    expect(skeleton).toHaveClass("additional-class");
  });

  it("should accept and apply other props", () => {
    render(<Skeleton className="custom-class" data-testid="skeleton" />);

    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass("custom-class");
  });
});
