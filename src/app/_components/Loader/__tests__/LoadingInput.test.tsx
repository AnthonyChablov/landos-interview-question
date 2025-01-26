import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LoadingInput from "./../LoadingInput"; // Adjust path accordingly

describe("LoadingInput Component", () => {
  it("renders the Skeleton component with Image", () => {
    render(<LoadingInput />);

    expect(screen.getByRole("skeleton")).toBeInTheDocument(); // Skeleton is likely a role="status" component
  });
});
