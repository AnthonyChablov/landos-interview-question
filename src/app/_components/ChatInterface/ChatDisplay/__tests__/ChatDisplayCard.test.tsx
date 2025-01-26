import { render, screen } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import ChatDisplayCard from "../ChatDisplayCard";

// Mocking the utility functions
vi.mock("@/lib/utils", () => ({
  capitalizeFirstLetter: vi.fn(
    (str) => str.charAt(0).toUpperCase() + str.slice(1)
  ),
  randomlyBoldNouns: vi.fn((str) => str.replace("noun", "<b>noun</b>")),
  cn: vi.fn(),
}));

describe("ChatDisplayCard", () => {
  const prompt = {
    question: "What is your name",
    response: "My",
  };

  it("should render in dom", () => {
    render(<ChatDisplayCard prompt={prompt} index={0} />);

    // Check if the response is rendered correctly with bold tags
    const card = screen.getByRole("card");
    expect(card).toBeInTheDocument();
  });

  it("should render the response with correct text and HTML", () => {
    render(<ChatDisplayCard prompt={prompt} index={0} />);

    // Check if the response is rendered correctly with bold tags
    const questionText = screen.getByText(`${prompt.question}?`);
    const responseText = screen.getByText(`My`);

    expect(questionText).toBeInTheDocument();
    expect(responseText).toBeInTheDocument();
  });
});
