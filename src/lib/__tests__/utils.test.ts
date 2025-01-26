import { describe, it, expect, vi } from "vitest";
import {
  cn,
  fetcher,
  capitalizeFirstLetter,
  randomlyBoldNouns,
} from "./../utils";

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

  describe("fetcher function", () => {
    it("should fetch data successfully", async () => {
      const mockData = { name: "Test" };
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      });

      const result = await fetcher("/api/test", { method: "GET" });
      expect(result).toEqual(mockData);
    });

    it("should throw an error for failed responses", async () => {
      fetch.mockResolvedValueOnce({ ok: false, status: 404 });

      await expect(fetcher("/api/test", { method: "GET" })).rejects.toThrow(
        "HTTP error! status: 404"
      );
    });

    it("should log and rethrow errors", async () => {
      const error = new Error("Network Error");
      fetch.mockRejectedValueOnce(error);

      await expect(fetcher("/api/test", { method: "GET" })).rejects.toThrow(
        "Network Error"
      );
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
      expect(capitalizeFirstLetter(null)).toBe(null);
      expect(capitalizeFirstLetter(undefined)).toBe(undefined);
    });
  });

  describe("randomlyBoldNouns function", () => {
    it("should return text with some nouns bolded", () => {
      const text = "The quick brown fox jumps over the lazy dog.";
      const result = randomlyBoldNouns(text, 100); // Ensure all nouns are bolded
      expect(result).toMatch(/<b>quick<\/b>/);
      expect(result).toMatch(/<b>fox<\/b>/);
      expect(result).toMatch(/<b>dog<\/b>/);
    });

    it("should return the original text if no nouns are detected", () => {
      const text = "No nouns here!";
      const result = randomlyBoldNouns(text, 100);
      expect(result).toBe(text);
    });

    it("should return the original text if boldPercentage is 0", () => {
      const text = "The quick brown fox jumps over the lazy dog.";
      const result = randomlyBoldNouns(text, 0);
      expect(result).toBe(text);
    });

    it("should handle empty or null text inputs", () => {
      expect(randomlyBoldNouns("")).toBe("");
      expect(randomlyBoldNouns(null)).toBe(null);
    });
  });
});
