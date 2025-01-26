import { z } from "zod";

/**
 * Zod Schema for Wine Question Validation
 *
 * @description
 * Comprehensive validation schema for wine-related questions
 * - Ensures question quality and relevance
 * - Prevents generic, inappropriate, or low-effort inputs
 * - Provides detailed error messages
 *
 * @key Validation Criteria
 * - Minimum length: 5 characters
 * - Maximum length: 500 characters
 * - Prevents generic greetings, fillers, and non-specific inputs
 * - Blocks repetitive or meaningless character patterns
 *
 * @example
 * // Valid input
 * const validQuestion = "What are the best food pairings for Cabernet Sauvignon?"
 *
 * // Invalid inputs
 * const shortQuestion = "hi"
 * const repetitiveQuestion = "blah blah"
 */
export const wineQuestionSchema = z.object({
  question: z
    .string()
    .trim()
    .min(5, { message: "Question must be at least 5 characters." })
    .max(500, { message: "Question must be at most 500 characters." })
    .refine(
      (question) => {
        // Comprehensive list of forbidden input patterns
        const forbiddenPatterns = [
          // Greetings and basic interactions
          /^\s*hi+\s*$/i,
          /^\s*hello+\s*$/i,
          /^\s*hey+\s*$/i,
          /^\s*hey there\s*$/i,
          /^\s*sup+\s*$/i,
          /^\s*howdy+\s*$/i,

          // Filler or non-specific phrases
          /^\s*test+\s*$/i,
          /^\s*testing+\s*$/i,
          /^\s*sample+\s*$/i,
          /^\s*example+\s*$/i,
          /^\s*placeholder+\s*$/i,

          // One-word or meaningless inputs
          /^\s*what+\s*$/i,
          /^\s*why+\s*$/i,
          /^\s*how+\s*$/i,
          /^\s*ok+\s*$/i,
          /^\s*okay+\s*$/i,

          // Emoji and symbol-only inputs
          /^[\s*]+$/,
          /^[.,:;!?]+$/,
          /^[👋🍷]+$/,

          // Repetitive characters
          /^(.)\1+$/,

          // Random or nonsensical inputs
          /^\s*blah+\s*$/i,
          /^\s*meh+\s*$/i,
          /^\s*umm+\s*$/i,
          /^\s*hmm+\s*$/i,

          // Dismissive or non-engaging phrases
          /^\s*whatever+\s*$/i,
          /^\s*idk+\s*$/i,
          /^\s*dunno+\s*$/i,

          // Very short, potentially meaningless inputs
          /^[a-z]{1,2}$/i,
        ];

        return !forbiddenPatterns.some((pattern) => pattern.test(question));
      },
      { message: "Please ask a specific question about wine." }
    ),
});

/**
 * TypeScript type inference from Zod schema
 * Automatically generates a type based on the schema
 */
export type WineQuestionType = z.infer<typeof wineQuestionSchema>;

/**
 * Utility Function that Validates a wine question input.
 *
 * @param question - Input to validate as a wine question.
 * @returns A Zod safeParse result, with success status and either parsed data or error details.
 */
export const validateWineQuestion = (question: unknown) => {
  if (typeof question !== "string") {
    throw new TypeError("The provided input must be a string.");
  }

  // Validate the string against the schema
  return wineQuestionSchema.safeParse({ question });
};
