import { describe, it, expect, vi } from "vitest";
import {
  cn,
  capitalizeFirstLetter,
  /*   randomlyBoldNouns,
  fetcher, */
} from "./../utils";

// TODO fetcher and randomlyBoldNouns

// Mock global fetch for the fetcher tests
global.fetch = vi.fn();

describe("Utility Functions", () => {
  describe("cn function", () => {
    it("should combine multiple class names", () => {
      expect(cn("px-4", "py-2", "bg-red-500")).toBe("px-4 py-2 bg-red-500");
    });

    it("should handle conditional class names", () => {
      const isActive = true;
      expect(cn("px-4", isActive && "bg-blue-500")).toBe("px-4 bg-blue-500");
    });

    it("should remove conflicting class names", () => {
      expect(cn("px-4", "px-2")).toBe("px-2");
    });
  });

  describe("capitalizeFirstLetter function", () => {
    it("should capitalize the first letter of a string", () => {
      expect(capitalizeFirstLetter("hello")).toBe("Hello");
    });

    it("should return an empty string if input is empty", () => {
      expect(capitalizeFirstLetter("")).toBe("");
    });

    it("should handle null or undefined inputs", () => {
      expect(capitalizeFirstLetter(null)).toBe(
        "Error: Input is not a string. Please insert a valid string."
      );
      expect(capitalizeFirstLetter(undefined)).toBe(
        "Error: Input is not a string. Please insert a valid string."
      );
    });
  });
});
