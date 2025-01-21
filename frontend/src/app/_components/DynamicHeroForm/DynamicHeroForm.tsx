"use client";
import React, { useState } from "react";
import HeaderText from "@/components/Text/HeaderText";
import ParagraphText from "@/components/Text/ParagraphText";
import QueryInputForm from "./QueryInputForm";
import Separator from "@/components/Layout/Separator";
import Container from "@/components/Layout/Container";
import { fetcher } from "@/lib/utils";

interface DynamicHeroFormProps {}

const DynamicHeroForm = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [questionHistory, setQuestionHistory] = useState<string[]>([]);

  const handleQuerySubmit = async ({ query }: { query: string }) => {
    setLoading(true);
    setResponse(null);

    try {
      const data = await fetcher<{ response: string }>("/api/chatgpt", {
        method: "POST", // Assuming a POST request for querying the LLM
        body: JSON.stringify({ query }),
      });

      setResponse(data.response); // Assuming the response contains a field named "response"
      setQuestionHistory([...questionHistory, query]);
    } catch (error) {
      setResponse("Sorry, there was an issue with your query.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        className="flex items-center justify-center
      flex-col h-screen bg-customGray text-center"
      >
        <Container>
          <HeaderText
            className=""
            headerLevel="h1"
            header="Everything about wine"
          />
          <Separator className="" size="extraSmall" />
          <ParagraphText
            size="2xl"
            className="text-gray-500"
            text="What would you like to know?"
          />
          <Separator className="" size="small" />

          {/* Display Loading Spinner when loading is true */}
          {loading ? (
            <div className="flex justify-center items-center my-4">
              <div className="w-16 h-16 border-4 border-t-4 border-gray-300 rounded-full animate-spin"></div>
            </div>
          ) : (
            <QueryInputForm onSubmit={handleQuerySubmit} />
          )}

          {/* Display response after query submission */}
          {response && (
            <div className="mt-6 text-xl text-gray-700">
              <p>{response}</p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default DynamicHeroForm;
