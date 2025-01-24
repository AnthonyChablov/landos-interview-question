"use client";
import React from "react";
import useChatGPT from "@/hooks/useChatGPT";
import Hero from "./Hero/Hero";
import Container from "@/components/Layout/Container";
import QuestionInputForm from "./Form/QuestionInput";
import SuggestedQuestions from "./SuggestedQuestions/SuggestedQuestions";
import Separator from "@/components/Layout/Separator";
import ErrorMessage from "@/components/Layout/ErrorMessage";
import LoadingContent from "../Loader/LoadingContent";
import LoadingInput from "../Loader/LoadingInput";
import ChatDisplayCard from "./ChatDisplay/ChatDisplayCard";
import ParagraphText from "@/components/Text/ParagraphText";

const ChatInterface = () => {
  const { loading, response, error, handleSubmit, history } = useChatGPT();

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
        <>
          <QuestionInputForm onSubmit={handleSubmit} />
          {error && <ErrorMessage error={error} />}
        </>
      </Hero>

      {!response && (
        <SuggestedQuestions onSuggestionClick={handleSuggestionClick} />
      )}
      {response && (
        <Container>
          <Separator size="medium" />
          {history.map((prompt, index) => (
            <ChatDisplayCard
              key={`${prompt.question}-${index}`}
              prompt={prompt}
              index={index}
            />
          ))}
          <Separator size="small" />
          <ParagraphText
            size="xl"
            className=""
            text="What would you like to know:"
          />
          <Separator size="extraExtraSmall" />
          <QuestionInputForm onSubmit={handleSubmit} variant="alternate" />
          <Separator size="large" />
        </Container>
      )}
    </>
  );
};

export default ChatInterface;
