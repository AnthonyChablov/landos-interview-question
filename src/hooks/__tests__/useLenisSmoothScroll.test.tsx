import { renderHook } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import useLenisSmoothScroll from "./../useLenisSmoothScroll";
import Lenis from "lenis";

// More accurate Lenis mock
vi.mock("lenis", () => {
  return {
    default: vi.fn().mockImplementation(() => ({
      raf: vi.fn(),
      update: vi.fn(),
      destroy: vi.fn(),
    })),
  };
});

describe("useLenisSmoothScroll Hook", () => {
  it("initializes Lenis with correct configuration", () => {
    renderHook(() => useLenisSmoothScroll());

    expect(Lenis).toHaveBeenCalledWith({
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });
  });

  it("destroys Lenis instance on unmount", () => {
    const { unmount } = renderHook(() => useLenisSmoothScroll());

    const lenis = (Lenis as any).mock.results[0].value;

    unmount();
    expect(lenis.destroy).toHaveBeenCalled();
  });
});
