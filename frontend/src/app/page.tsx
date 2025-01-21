"use client";

import { useState } from "react";
import Container from "@/components/Layout/Container";
import DynamicHero from "./_components/DynamicHero/DynamicHero";
import SuggestionDisplay from "./_components/SuggestionDisplay/SuggestionsDisplay";
import { fetcher } from "@/lib/utils";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [questionHistory, setQuestionHistory] = useState<string[]>([]);

  // Adjusted to accept an object with a "query" property
  const handleQuerySubmit = async ({ query }: { query: string }) => {
    setLoading(true);
    setResponse(null);

    try {
      const data = await fetcher<{ response: string }>("/api/chatgpt", {
        method: "POST",
        body: JSON.stringify({ query }),
      });

      setResponse(data.response);
      setQuestionHistory((prev) => [...prev, query]);
    } catch (error) {
      setResponse("Sorry, there was an issue with your query.");
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleQuerySubmit({ query: suggestion });
  };

  return (
    <>
      <DynamicHero
        onSubmit={handleQuerySubmit}
        loading={loading}
        response={response}
      />
      <SuggestionDisplay onSuggestionClick={handleSuggestionClick} />
    </>
  );
}
