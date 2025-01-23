// hooks/useChatGPT.ts
import { useState } from "react";

interface ChatHistory {
  question: string;
  response: string;
}

export interface UseChatGPT {
  loading: boolean;
  response: string | null;
  error: string | null;
  history: ChatHistory[];
  handleSubmit: (params: { question: string }) => Promise<void>;
}

const useChatGPT = (): UseChatGPT => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<ChatHistory[]>([]);

  const handleSubmit = async ({ question }: { question: string }) => {
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
