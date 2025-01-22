import React from "react";
import HeaderText from "@/components/Text/HeaderText";
import ParagraphText from "@/components/Text/ParagraphText";
import QuestionInputForm from "./QuestionInputForm";
import Separator from "@/components/Layout/Separator";
import Container from "@/components/Layout/Container";
import Loader from "@/components/Layout/Loader";

interface DynamicHeroProps {
  onSubmit: (data: { question: string }) => Promise<void>; // Expecting data object with question property
  loading: boolean;
  response: string | null;
  error: string | null;
  currentQuestion: string;
  history: { question: string; response: string }[];
}

const DynamicHero: React.FC<DynamicHeroProps> = ({
  onSubmit,
  loading,
  response,
  error,
  currentQuestion,
  history,
}) => {
  return (
    <section className="flex items-center justify-center flex-col h-screen bg-customGray text-center">
      <Container>
        <HeaderText headerLevel="h1" header="Everything about wine" />
        <Separator size="extraSmall" />
        <ParagraphText
          size="2xl"
          className="text-gray-500"
          text="What would you like to know?"
        />
        <Separator size="small" />

        {/* Display Loading Spinner when loading is true */}
        {loading ? <Loader /> : <QuestionInputForm onSubmit={onSubmit} />}

        {/* Display Error Message */}
        {error && (
          <>
            <Separator size="extraExtraSmall" />
            <ParagraphText className="text-red-500" text={error} size="sm" />
          </>
        )}

        {/* Display Response after query submission */}
        {response && (
          <>
            <Separator size="extraExtraSmall" />
            <ParagraphText
              className="text-green-500"
              text={response}
              size="sm"
            />
          </>
        )}

        {/* Display History of Questions and Responses */}
        {history.length > 0 && (
          <>
            <Separator size="extraSmall" />
            <HeaderText headerLevel="h2" header="History" />
            <ul>
              {history.map((entry, index) => (
                <li key={index}>
                  <ParagraphText text={`Q: ${entry.question}`} size="sm" />
                  <ParagraphText text={`A: ${entry.response}`} size="sm" />
                </li>
              ))}
            </ul>
          </>
        )}
      </Container>
    </section>
  );
};

export default DynamicHero;
