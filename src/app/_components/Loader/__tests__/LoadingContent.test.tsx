import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LoadingContent from "./../LoadingContent"; // Adjust the path accordingly

describe("LoadingContent Component", () => {
  it("should render in the dom", () => {
    render(<LoadingContent />);

    // Check that the content is wrapped in the Container
    const loadingContent = screen.getByRole("loading-content"); // Assuming role="group" for Container
    expect(loadingContent).toBeInTheDocument();
  });
});
