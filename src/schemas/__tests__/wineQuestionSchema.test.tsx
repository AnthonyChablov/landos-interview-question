import { describe, it, expect } from "vitest";
import { validateWineQuestion } from "./../wineQuestionSchema";

describe("WineQuestionSchema", () => {
  it("validates a proper wine-related question", () => {
    const result = validateWineQuestion(
      "What are the best food pairings for Pinot Noir?"
    );
    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
  });

  it("rejects a question that is too short", () => {
    const result = validateWineQuestion("Hi");
    expect(result.success).toBe(false);
    if (result.error) {
      expect(result?.error.issues[0].message).toBe(
        "Question must be at least 5 characters."
      );
    }
  });

  it("rejects a question that is too long", () => {
    const longQuestion = "A".repeat(501);
    const result = validateWineQuestion(longQuestion);
    expect(result.success).toBe(false);
    if (result.error) {
      expect(result.error.issues[0].message).toBe(
        "Question must be at most 500 characters."
      );
    }
  });

  it("rejects repetitive or meaningless patterns", () => {
    const repetitiveInputs = [".....", "oooooooooo", "1111111", "@@@@@@@@@"];
    repetitiveInputs.forEach((input) => {
      const result = validateWineQuestion(input);
      expect(result.success).toBe(false);
      if (result.error) {
        expect(result.error.issues[0].message).toBe(
          "Please ask a specific question about wine."
        );
      }
    });
  });

  it("rejects inputs that are not strings", () => {
    const repetitiveInputs = [
      0,
      10,
      false,
      [],
      [0, "sd", 122, {}, []],
      {},
      true,
      -200.2,
      -4,
    ];
    repetitiveInputs.forEach((input) => {
      const result = validateWineQuestion(input);
      expect(result.success).toBe(false);
      if (result.error) {
        expect(result.error.issues[0].message).toBe(
          "Input question must be a string."
        );
      }
    });
  });

  it("validates edge cases with valid questions", () => {
    const validEdgeCases = [
      "What is the history of wine in ancient Rome?",
      "Can you explain the differences between white and red wines?",
    ];
    validEdgeCases.forEach((input) => {
      const result = validateWineQuestion(input);
      expect(result.success).toBe(true);
    });
  });
});
