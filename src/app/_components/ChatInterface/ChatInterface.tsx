"use client";
import React, { ReactNode } from "react";
import useChatGPT from "@/hooks/useChatGPT";
import HeaderText from "@/components/Text/HeaderText";
import ParagraphText from "@/components/Text/ParagraphText";
import QuestionInputForm from "./Form/QuestionInput";
import Separator from "@/components/Layout/Separator";
import Container from "@/components/Layout/Container";
import Loader from "@/app/_components/Loader/Loader";
import SuggestedQuestions from "./SuggestedQuestions/SuggestedQuestions";
import { capitalizeFirstLetter } from "@/lib/utils";
import { randomlyBoldNouns } from "@/lib/utils";
import { RenderHeader } from "./Render/RenderHeader";
import ErrorMessage from "@/components/Layout/ErrorMessage";

/**
 * ChatInterface Component
 *
 * @description
 * - Manages the user interaction with the chat interface, integrating with OpenAI via a custom hook (`useChatGPT`)
 * - Displays a dynamic response to the user's query, maintains conversation history, and allows for retrying queries
 * - Handles errors and loading states gracefully
 * - Allows users to interact with suggested questions to generate responses quickly
 *
 * @example
 * <ChatInterface />
 */
const ChatInterface = () => {
  /**
   * Constants for static text content
   * These define the main header and subtitle used in the interface
   */
  const WINE_TITLE = "Everything about wine";
  const SUBTITLE = "What would you like to know?";

  // State and hooks for handling chat logic
  const { loading, response, error, handleSubmit, history } = useChatGPT();

  // Event Handlers
  /**
   * Handles click on suggested questions, submitting the suggestion as a question to the API
   *
   * @param suggestion The text of the suggested question
   */
  const handleSuggestionClick = async (suggestion: string): Promise<void> => {
    handleSubmit({ question: suggestion });
  };

  // Render Methods
  /**
   * Renders an error message if an error exists
   *
   * @returns JSX for error message display
   */
  const renderErrorMessage = (): ReactNode | null => {
    return error ? <ErrorMessage error={error} /> : null;
  };

  // Conditional Renders
  // Loading state rendering
  if (loading) {
    return (
      <>
        <RenderHeader />
        <Loader />
      </>
    );
  }

  // Initial response render when no response exists yet
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

  // Main response render displaying the history and current response
  return (
    <>
      <RenderHeader />
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
                dangerouslySetInnerHTML={{
                  __html: randomlyBoldNouns(prompt.response),
                }}
              ></ParagraphText>
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
