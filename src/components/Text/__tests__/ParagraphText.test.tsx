import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ParagraphText from "./../ParagraphText";

describe("ParagraphText Component", () => {
  const defaultProps = {
    text: "Test Paragraph",
  };

  it("renders plain text correctly", () => {
    render(<ParagraphText {...defaultProps} />);

    const textElement = screen.getByText("Test Paragraph");
    expect(textElement).toBeInTheDocument();
  });

  it("renders with default lg size", () => {
    render(<ParagraphText {...defaultProps} />);

    const textElement = screen.getByText("Test Paragraph");
    expect(textElement).toHaveClass("text-lg");
  });

  it("applies custom className", () => {
    render(<ParagraphText {...defaultProps} className="custom-test-class" />);

    const containerSpan = screen.getByRole("paragraph-text");
    expect(containerSpan).toHaveClass("custom-test-class");
  });

  it("renders with specified size", () => {
    const sizes = [
      "xxs",
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      "2xl",
      "3xl",
      "4xl",
      "5xl",
      "6xl",
      "7xl",
      "8xl",
    ] as const;

    sizes.forEach((size) => {
      const { unmount } = render(
        <ParagraphText {...defaultProps} size={size} />
      );

      const textElement = screen.getByText("Test Paragraph");

      switch (size) {
        case "2xl":
          expect(textElement).toHaveClass("text-xl");
          expect(textElement).toHaveClass("lg:text-2xl");
          break;
        default:
          expect(textElement).toHaveClass(`text-${size}`);
      }

      unmount();
    });
  });

  it("renders children alongside text", () => {
    render(
      <ParagraphText {...defaultProps}>
        <span data-testid="child-element">Additional Content</span>
      </ParagraphText>
    );

    const textElement = screen.getByText("Test Paragraph");
    const childElement = screen.getByTestId("child-element");

    expect(textElement).toBeInTheDocument();
    expect(childElement).toBeInTheDocument();
  });

  it("renders dangerouslySetInnerHTML when provided", () => {
    render(
      <ParagraphText
        dangerouslySetInnerHTML={{ __html: "<strong>HTML Content</strong>" }}
      />
    );

    const htmlElement = screen.getByText("HTML Content");
    expect(htmlElement.tagName).toBe("STRONG");
  });
});
