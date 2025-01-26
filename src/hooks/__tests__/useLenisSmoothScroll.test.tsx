import { renderHook } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import useLenisSmoothScroll from "./../useLenisSmoothScroll";
import Lenis from "lenis";

// More accurate Lenis mock
vi.mock("lenis", () => ({
  default: vi.fn().mockImplementation(() => ({
    raf: vi.fn(),
    update: vi.fn(),
    destroy: vi.fn(),
  })),
}));

describe("useLenisSmoothScroll Hook", () => {
  it("initializes Lenis with correct configuration", () => {
    renderHook(() => useLenisSmoothScroll());

    expect(Lenis).toHaveBeenCalledWith({
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });
  });
});
