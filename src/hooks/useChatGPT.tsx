// hooks/useChatGPT.ts
import { useState } from "react";

interface ChatHistory {
  question: string;
  response: string;
}

interface UseChatGPT {
  loading: boolean;
  response: string | null;
  error: string | null;
  history: ChatHistory[];
  handleSubmit: ({ question }: { question: string }) => Promise<void>;
}

const useChatGPT = (): UseChatGPT => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<ChatHistory[]>([]);

  const handleSubmit = async ({ question }: { question: string }) => {
    setLoading(true);
    setError(null);

    try {
      const apiResponse = await fetch("/api/chatgpt", {
        method: "POST",
        body: JSON.stringify({ question }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await apiResponse.json();

      if (data.error) {
        setError(data.error);
      } else {
        setResponse(data.response);
        setHistory((prev) => [...prev, { question, response: data.response }]);
      }
    } catch (err) {
      setError("An error occurred while fetching the response");
    } finally {
      setLoading(false);
    }
  };

  return { loading, response, error, history, handleSubmit };
};

export default useChatGPT;
