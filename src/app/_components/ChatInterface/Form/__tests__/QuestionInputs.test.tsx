import { render, screen } from "@testing-library/react";
import { vi, describe, expect, it } from "vitest";
import QuestionInput from "../QuestionInput";

describe("QuestionInput Component", () => {
  const mockOnSubmit = vi.fn();

  it("render the component with default variant", () => {
    render(<QuestionInput onSubmit={mockOnSubmit} variant="default" />);

    // Check if the input field is rendered
    const QuestionInputForm = screen.getByRole("form");
    // Check if the search icon is rendered (only in "default" variant)
    expect(QuestionInputForm).toBeInTheDocument();
  });
});
