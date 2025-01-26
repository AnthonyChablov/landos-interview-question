import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Hero from "./../Hero";

//TODO GSAP animations testing trigger

describe("Hero Component", () => {
  it("renders Hero component with default content", () => {
    render(<Hero />);

    expect(screen.getByText("Everything about wine")).toBeInTheDocument();
    expect(
      screen.getByText("What would you like to know?")
    ).toBeInTheDocument();
  });

  it("renders Hero component with children", () => {
    render(
      <Hero>
        <div>Some child content</div>
      </Hero>
    );

    expect(screen.getByText("Some child content")).toBeInTheDocument();
  });

  it("handles dynamic children rendering", () => {
    const { rerender } = render(
      <Hero hasResponse={true}>
        <div>Initial child content</div>
      </Hero>
    );

    expect(screen.getByText("Initial child content")).toBeInTheDocument();

    // Update the component with new children
    rerender(
      <Hero hasResponse={false}>
        <div>Updated child content</div>
      </Hero>
    );

    expect(screen.getByText("Updated child content")).toBeInTheDocument();
  });
});
