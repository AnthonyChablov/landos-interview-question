import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ButtonIcon } from "./../ButtonIcons";
import { Star } from "lucide-react";

describe("ButtonIcon Component", () => {
  it("renders component and children correctly", () => {
    render(
      <ButtonIcon>
        <Star data-testid="icon" />
      </ButtonIcon>
    );

    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <ButtonIcon className="custom-test-class">
        <Star />
      </ButtonIcon>
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-test-class");
  });

  it("handles onClick event", () => {
    const mockOnClick = vi.fn();

    render(
      <ButtonIcon onClick={mockOnClick}>
        <Star />
      </ButtonIcon>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("renders without children", () => {
    render(<ButtonIcon />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
