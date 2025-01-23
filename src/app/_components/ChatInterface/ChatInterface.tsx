"use client";
import React, { useState } from "react";
import useChatGPT from "@/hooks/useChatGPT";
import HeaderText from "@/components/Text/HeaderText";
import ParagraphText from "@/components/Text/ParagraphText";
import QuestionInputForm from "./Form/QuestionInput";
import Separator from "@/components/Layout/Separator";
import Container from "@/components/Layout/Container";
import Loader from "@/app/_components/Loader/Loader";
import SuggestedQuestions from "./SuggestedQuestions/SuggestedQuestions";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { capitalizeFirstLetter } from "@/lib/utils";

// Types
interface ChatInterfaceProps {
  // Add any props if needed
}

// Constant content
const WINE_TITLE = "Everything about wine";
const SUBTITLE = "What would you like to know?";

const ChatInterface = ({}: ChatInterfaceProps) => {
  // State and hooks
  const { loading, response, error, handleSubmit, history } = useChatGPT();
  const [currentQuestion, setCurrentQuestion] = useState<string>("");
  const { scrollToTop } = useScrollToTop();

  // Event Handlers
  const handleSuggestionClick = (suggestion: string): void => {
    setCurrentQuestion(suggestion);
    handleSubmit({ question: currentQuestion });
    scrollToTop();
  };

  // Render Methods
  const renderErrorMessage = () => {
    return error ? (
      <>
        <Separator size="extraSmall" />
        <ParagraphText
          className="text-red-500"
          text={`An Error Has Occurred: ${error}`}
          size="sm"
        />
      </>
    ) : null;
  };

  const renderHeader = () => (
    <section className="flex items-center justify-center h-fit bg-customGray">
      <Container className="text-center">
        <Separator size="small" />
        <HeaderText headerLevel="h1" header={WINE_TITLE} className="h-fit" />
        <Separator size="extraSmall" />
        <ParagraphText size="2xl" className="text-gray-500" text={SUBTITLE} />
        <Separator size="small" />
      </Container>
    </section>
  );

  // Conditional Renders
  if (loading) {
    return (
      <>
        {renderHeader()}
        <Loader />
      </>
    );
  }

  // Initial Response Render
  if (!response) {
    return (
      <>
        <section className="flex items-center justify-center h-screen bg-customGray text-center">
          <Container>
            <HeaderText headerLevel="h1" header={WINE_TITLE} />
            <Separator size="extraSmall" />
            <ParagraphText
              size="2xl"
              className="text-gray-500"
              text={SUBTITLE}
            />
            <Separator size="small" />
            <QuestionInputForm onSubmit={handleSubmit} />
            {renderErrorMessage()}
          </Container>
        </section>
        <SuggestedQuestions onSuggestionClick={handleSuggestionClick} />
      </>
    );
  }

  // Main Response Render
  return (
    <>
      {renderHeader()}
      <Container>
        {history.map((prompt, index) => {
          return (
            <React.Fragment key={`${prompt}-${index}`}>
              <Separator size="small" />
              <ParagraphText
                size="2xl"
                className="text-black font-medium"
                text={`${capitalizeFirstLetter(prompt.question)}?`}
              />
              <Separator size="extraSmall" />
              <ParagraphText
                size="lg"
                className="text-gray-700"
                text={prompt.response}
              />
              <Separator size="extraSmall" />
            </React.Fragment>
          );
        })}
        <Separator size="small" />
        <ParagraphText
          size="lg"
          className="text-gray-700"
          text={"What would you like to know:"}
        />
        <Separator size="extraExtraSmall" />
        <QuestionInputForm onSubmit={handleSubmit} variant="alternate" />
        <Separator size="medium" />
      </Container>
    </>
  );
};

export default ChatInterface;
