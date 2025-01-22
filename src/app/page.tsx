"use client";
import { useState } from "react";
import ChatInterface from "./_components/ChatInterface/ChatInterface";
import SuggestedQuestions from "./_components/SuggestedQuestions/SuggestedQuestions";
import { fetcher } from "@/lib/utils";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [history, setHistory] = useState<
    { question: string; response: string }[]
  >([]);

  const [currentQuestion, setCurrentQuestion] = useState<string>("");

  const handleQuestionSubmit = async ({ question }: { question: string }) => {
    setLoading(true);
    setResponse(null);
    setError(null);
    setCurrentQuestion(question);

    try {
      const data = await fetcher<{ response: string }>("/api/ask", {
        method: "POST",
        body: JSON.stringify({ question }),
      });
      setResponse(data.response);
      setHistory((prev) => [...prev, { question, response: data.response }]);
    } catch (error) {
      setError("Sorry, there was an issue with your query.");
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleQuestionSubmit({ question: suggestion });
  };

  return (
    <>
      <ChatInterface
        onSubmit={handleQuestionSubmit}
        loading={loading}
        response={response}
        error={error} // Pass error to ChatInterface
        currentQuestion={currentQuestion} // Pass currentQuestion to ChatInterface
        history={history} // Pass history to ChatInterface
      />
      <SuggestedQuestions onSuggestionClick={handleSuggestionClick} />
    </>
  );
}
