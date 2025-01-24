import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Container from "../Container";

describe("Container.tsx", () => {
  it("renders children correctly", () => {
    render(
      <Container>
        <div data-testid="child-element">Test Content</div>
      </Container>
    );

    const childElement = screen.getByTestId("child-element");
    expect(childElement).toBeInTheDocument();
  });

  it("applies default container role", () => {
    render(<Container />);

    const containerElement = screen.getByRole("container");
    expect(containerElement).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Container className="custom-test-class" />);

    const containerElement = screen.getByRole("container");
    expect(containerElement).toHaveClass("custom-test-class");
  });

  it("renders without children", () => {
    render(<Container />);

    const containerElement = screen.getByRole("container");
    expect(containerElement).toBeEmptyDOMElement();
  });
});
