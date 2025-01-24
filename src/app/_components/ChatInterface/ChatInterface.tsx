"use client";
import React, { ReactNode } from "react";
import useChatGPT from "@/hooks/useChatGPT";
import Hero from "./Hero/Hero";
import Container from "@/components/Layout/Container";
import QuestionInputForm from "./Form/QuestionInput";
import SuggestedQuestions from "./SuggestedQuestions/SuggestedQuestions";
import Separator from "@/components/Layout/Separator";
import ErrorMessage from "@/components/Layout/ErrorMessage";
import ParagraphText from "@/components/Text/ParagraphText";
import { capitalizeFirstLetter, randomlyBoldNouns } from "@/lib/utils";
import LoadingContent from "../Loader/LoadingContent";
import LoadingInput from "../Loader/LoadingInput";

const ChatInterface = () => {
  const { loading, response, error, handleSubmit, history } = useChatGPT();

  const renderErrorMessage = (): ReactNode | null =>
    error ? <ErrorMessage error={error} /> : null;

  const handleSuggestionClick = (suggestion: string): Promise<void> =>
    handleSubmit({ question: suggestion });

  if (loading) {
    return (
      <>
        <Hero>
          <LoadingInput />
        </Hero>
        <LoadingContent />
      </>
    );
  }

  return (
    <>
      <Hero hasResponse={response ? true : null}>
        {
          <>
            <QuestionInputForm onSubmit={handleSubmit} />
            {error && <ErrorMessage error={error} />}
          </>
        }
      </Hero>

      {!response && (
        <SuggestedQuestions onSuggestionClick={handleSuggestionClick} />
      )}
      {response && (
        <Container>
          {history.map((prompt, index) => (
            <React.Fragment key={`${prompt}-${index}`}>
              <Separator size="large" />
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
              />
              <Separator size="extraSmall" />
            </React.Fragment>
          ))}
          <Separator size="small" />
          <ParagraphText
            size="lg"
            className="text-gray-700"
            text="What would you like to know:"
          />
          <Separator size="extraExtraSmall" />
          <QuestionInputForm onSubmit={handleSubmit} variant="alternate" />
          <Separator size="medium" />
        </Container>
      )}
    </>
  );
};

export default ChatInterface;
