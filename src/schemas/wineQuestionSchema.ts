import { z } from "zod";

// Wine Question Validation Schema
export const wineQuestionSchema = z.object({
  question: z
    .string()
    .trim()
    .min(5, { message: "Question must be at least 5 characters." })
    .max(500, { message: "Question must be at most 500 characters." })
    // Optional: Add more specific validation
    .refine(
      (question) => {
        // Prevent overly generic or inappropriate questions
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

// Type inference for TypeScript
export type WineQuestionType = z.infer<typeof wineQuestionSchema>;

// Optional: Additional validation utility functions
export const validateWineQuestion = (question: string) => {
  return wineQuestionSchema.safeParse({ question });
};
