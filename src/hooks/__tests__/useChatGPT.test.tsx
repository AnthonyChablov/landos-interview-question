import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import useChatGPT from "./../useChatGPT";

describe("useChatGPT Hook", () => {
  // Mock fetch globally
  const mockFetch = vi.fn();
  global.fetch = mockFetch;

  beforeEach(() => {
    // Reset mocks before each test
    mockFetch.mockClear();
  });

  it("initializes with correct default state variables", () => {
    const { result } = renderHook(() => useChatGPT());

    expect(result.current.loading).toBe(false);
    expect(result.current.response).toBeNull();
    expect(result.current.error).toBeNull();
    expect(result.current.history).toEqual([]);
  });

  it("handles successful API request", async () => {
    // Mock a successful API response
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve({
          response: "Test response",
        }),
    });

    const { result } = renderHook(() => useChatGPT());

    // Use act to wrap state updates
    await act(async () => {
      await result.current.handleSubmit({ question: "Test question" });
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.response).toBe("Test response");
    expect(result.current.error).toBeNull();
    expect(result.current.history).toEqual([
      {
        question: "Test question",
        response: "Test response",
      },
    ]);
  });

  it("handles API request error", async () => {
    // Mock a failed API response
    mockFetch.mockResolvedValueOnce({
      ok: false,
    });

    const { result } = renderHook(() => useChatGPT());

    await act(async () => {
      await result.current.handleSubmit({ question: "Error test" });
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.response).toBeNull();
    expect(result.current.error).toBe("API request failed");
    expect(result.current.history).toEqual([]);
  });

  it("ignores empty questions", async () => {
    const { result } = renderHook(() => useChatGPT());

    await act(async () => {
      await result.current.handleSubmit({ question: "   " });
    });

    expect(result.current.loading).toBe(false);
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it("handles API response with error message", async () => {
    // Mock an API response with an error
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve({
          error: "Specific error message",
        }),
    });

    const { result } = renderHook(() => useChatGPT());

    await act(async () => {
      await result.current.handleSubmit({ question: "Error test" });
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.response).toBeNull();
    expect(result.current.error).toBe("Specific error message");
    expect(result.current.history).toEqual([]);
  });
});
