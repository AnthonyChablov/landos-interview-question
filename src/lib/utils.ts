import compromise from "compromise";

/**
 * Randomly bolds nouns in a given text
 * @param text - Input paragraph
 * @param boldPercentage - Percentage of nouns to bold (default: 50)
 * @returns Text with randomly bolded nouns
 */
function randomlyBoldNouns(text: string, boldPercentage: number = 50): string {
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
