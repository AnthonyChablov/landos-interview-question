"use client";
import React, { useState } from "react";
import DynamicHero from "./DynamicHero/DynamicHero";
import SuggestedQuestions from "./SuggestedQuestions/SuggestedQuestions";

const ChatInterface = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<
    { question: string; response: string }[]
  >([]);
  const [currentQuestion, setCurrentQuestion] = useState("");

  const handleQuerySubmit = async ({ question }: { question: string }) => {
    setLoading(true);
    setError(null);
    setCurrentQuestion(question);

    try {
      // Example request to ChatGPT API
      const apiResponse = await fetch("/api/chatgpt", {
        method: "POST",
        body: JSON.stringify({ question }),
      });
      const data = await apiResponse.json();

      if (data.error) {
        setError(data.error);
      } else {
        setResponse(data.response); // Update response with the successful data
        setHistory((prev) => [...prev, { question, response: data.response }]);
      }
    } catch (err) {
      setError("An error occurred while fetching the response");
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setCurrentQuestion(suggestion);
  };

  return (
    <div className="chat-app">
      <DynamicHero
        onSubmit={handleQuerySubmit} // Now passing an object
        loading={loading}
        response={response}
        error={error}
        currentQuestion={currentQuestion}
        history={history}
      />
      <SuggestedQuestions onSuggestionClick={handleSuggestionClick} />
    </div>
  );
};

export default ChatInterface;
