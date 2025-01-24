import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ErrorMessage from "../ErrorMessage";

describe("ErrorMessage.tsx", () => {
  it("renders error message with correct text", () => {
    const testError = "Test error message";
    render(<ErrorMessage error={testError} />);

    const errorText = screen.getByText(`An Error Has Occurred: ${testError}`);
    expect(errorText).toBeInTheDocument();
  });

  it("applies red text color", () => {
    const testError = "Test error message";
    render(<ErrorMessage error={testError} />);

    const errorText = screen.getByRole(`paragraph-text`);
    expect(errorText).toHaveClass("text-red-500");
  });

  it("renders a separator", () => {
    const testError = "Test error message";
    render(<ErrorMessage error={testError} />);

    // Assuming Separator component has a specific role or test id
    const separator = screen.getByRole("separator");
    expect(separator).toBeInTheDocument();
  });
});
