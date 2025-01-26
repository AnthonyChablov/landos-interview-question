import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import LoadingInput from "./../LoadingInput"; // Adjust path accordingly
import gsap from "gsap";

describe("LoadingInput Component", () => {
  it("renders the Skeleton component with Image", () => {
    render(<LoadingInput />);

    expect(screen.getByRole("skeleton")).toBeInTheDocument(); // Skeleton is likely a role="status" component
  });
});
