import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import compromise from "compromise";

/**
 * Combines Tailwind CSS classes with conditional class names
 *
 * @description
 * - Merges multiple class names, including conditional classes
 * - Handles dynamic class application using clsx
 * - Resolves potential class name conflicts
 *
 * @example
 * cn('px-2', 'py-1', isActive && 'bg-blue-500')
 *
 * @param inputs - Variable number of class value inputs
 * @returns Merged class name string
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Performs type-safe, error-handled HTTP fetch operations
 *
 * @description
 * - Executes fetch requests with generic type support
 * - Handles HTTP error responses
 * - Provides comprehensive error logging
 *
 * @template T - Response data type
 * @param url - Target URL for fetch request
 * @param options - Fetch request configuration options
 * @returns Parsed JSON response of specified type
 * @throws {Error} For network or parsing errors
 *
 * @example
 * const userData = await fetcher<User>('/api/user', { method: 'GET' })
 */
export async function fetcher<T>(
  url: string,
  options: RequestInit
): Promise<T> {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetcher error:", error);
    throw error;
  }
}

/**
 * Capitalizes the first letter of a given string
 *
 * @description
 * - Transforms first character to uppercase
 * - Handles empty or null string inputs safely
 *
 * @param str - Input string to capitalize
 * @returns Capitalized string or original input
 *
 * @example
 * capitalizeFirstLetter('hello') // Returns 'Hello'
 * capitalizeFirstLetter('') // Returns ''
 */
export function capitalizeFirstLetter(str: string): string {
  if (!str) {
    return str; // Handle empty or null strings
  }
  return str[0].toUpperCase() + str.slice(1);
}

/**
 * Randomly bolds nouns in a given text
 *
 * @description
 * - Uses NLP (compromise) to identify nouns
 * - Supports configurable percentage of noun bolding
 * - Generates HTML with <strong> tags
 *
 * @param text - Input paragraph text
 * @param boldPercentage - Percentage of nouns to bold (default: 50)
 * @returns Text with randomly bolded nouns
 *
 * @example
 * randomlyBoldNouns('The quick brown fox jumps over the lazy dog')
 * // Might return 'The <strong>quick</strong> brown <strong>fox</strong> jumps over the lazy dog'
 */
export function randomlyBoldNouns(
  text: string,
  boldPercentage: number = 50
): string {
  // Use compromise NLP library to identify nouns
  const doc = compromise(text);
  const nouns: string[] = doc.nouns().out("array") as string[];

  // Randomly select nouns to bold
  const nounsToBold = nouns
    .filter(() => Math.random() * 100 < boldPercentage)
    .map((noun) => noun.trim());

  // Create a regex to replace nouns with bolded versions
  const boldedText = nounsToBold.reduce((acc, noun) => {
    const regex = new RegExp(`\\b${noun}\\b`, "gi");
    return acc.replace(regex, (match) => `<strong>${match}</strong>`);
  }, text);

  return boldedText;
}

export default randomlyBoldNouns;
