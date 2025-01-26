import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Providers from "../Providers";
import useLenisSmoothScroll from "@/hooks/useLenisSmoothScroll";

// Mock the useLenisSmoothScroll hook
vi.mock("@/hooks/useLenisSmoothScroll", () => ({
  default: vi.fn(),
}));

describe("Providers Component", () => {
  it("renders children correctly", () => {
    render(
      <Providers>
        <div data-testid="child">Test Child</div>
      </Providers>
    );

    // Check if the child is rendered
    const child = screen.getByTestId("child");
    expect(child).toBeInTheDocument();
    expect(child.textContent).toBe("Test Child");
  });

  it("calls the useLenisSmoothScroll hook", () => {
    render(
      <Providers>
        <div>Another Test Child</div>
      </Providers>
    );

    // Assert that the useLenisSmoothScroll hook was called
    expect(useLenisSmoothScroll).toHaveBeenCalled();
  });
});
