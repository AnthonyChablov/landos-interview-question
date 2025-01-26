import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ButtonLink } from "./../ButtonLink";

// Mock Next.js Link component
vi.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...props} data-testid="mock-link">
      {children}
    </a>
  ),
}));

// Mock Button component to add testid
vi.mock("@/components/ui/button", () => ({
  Button: ({ children, ...props }: { children: React.ReactNode }) => (
    <div data-testid="mock-button" {...props}>
      {children}
    </div>
  ),
}));

describe("ButtonLink Component", () => {
  it("renders children correctly", () => {
    render(
      <ButtonLink href="/test">
        <span data-testid="child-content">Click me</span>
      </ButtonLink>
    );

    const childContent = screen.getByTestId("child-content");
    expect(childContent).toBeInTheDocument();
  });

  it("applies custom className to link", () => {
    render(
      <ButtonLink href="/test" className="custom-test-class">
        Test Link
      </ButtonLink>
    );

    const link = screen.getByTestId("mock-link");
    expect(link).toHaveClass("custom-test-class");
  });

  it("handles onClick event", () => {
    const mockOnClick = vi.fn();

    render(
      <ButtonLink href="/test" onClick={mockOnClick}>
        Test Link
      </ButtonLink>
    );

    const button = screen.getByTestId("mock-button");
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("renders with correct href", () => {
    render(<ButtonLink href="/about-page">About</ButtonLink>);

    const link = screen.getByTestId("mock-link");
    expect(link).toHaveAttribute("href", "/about-page");
  });
});
