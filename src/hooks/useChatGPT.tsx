import { useState } from "react";

/**
 * Interface for representing a single entry in the chat history
 * Contains the user's question and the corresponding response from the API
 */
interface ChatHistory {
  /**
   * The question asked by the user
   */
  question: string;

  /**
   * The response received from the API for the question
   */
  response: string;
}

/**
 * Interface for the `useChatGPT` hook
 * Provides state and actions related to interacting with the ChatGPT API
 */
export interface UseChatGPT {
  /**
   * Loading state of the API request
   * @default false
   */
  loading: boolean;

  /**
   * Response from the API after submitting a question
   * @default null
   */
  response: string | null;

  /**
   * Error message if the API request fails
   * @default null
   */
  error: string | null;

  /**
   * The history of questions and responses in the current session
   * @default []
   */
  history: ChatHistory[];

  /**
   * Function to handle submitting a question to the ChatGPT API
   *
   * @param params - Contains the question to ask the API
   * @returns A promise that resolves when the API response is received and state is updated
   * @throws Error if the API request fails
   *
   * @example
   * const { handleSubmit } = useChatGPT();
   * await handleSubmit({ question: "What is the weather like today?" });
   */
  handleSubmit: (params: { question: string }) => Promise<void>;
}

/**
 * Custom hook for interacting with the ChatGPT API
 *
 * @description
 * - Manages the loading, response, error, and history states for the ChatGPT interaction
 * - Submits user questions to the ChatGPT API and updates state accordingly
 * - Handles errors and manages an in-memory chat history
 *
 * @returns An object with the loading state, response, error, chat history, and a handleSubmit function
 *
 * @example
 * const { loading, response, error, history, handleSubmit } = useChatGPT();
 * await handleSubmit({ question: "How does a rocket work?" });
 */
const useChatGPT = (): UseChatGPT => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<ChatHistory[]>([]);

  const handleSubmit = async ({ question }: { question: string }) => {
    // ignores an emptty question
    if (!question.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const apiResponse = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (!apiResponse.ok) throw new Error("API request failed");

      const data = await apiResponse.json();
      if (data.error) throw new Error(data.error);

      setResponse(data.response);
      setHistory((prev) => [...prev, { question, response: data.response }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to get response");
    } finally {
      setLoading(false);
    }
  };

  return { loading, response, error, history, handleSubmit };
};

export default useChatGPT;
