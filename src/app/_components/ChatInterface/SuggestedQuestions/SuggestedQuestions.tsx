// SuggestionDisplay.tsx
import React from "react";
import SuggestedQuestionCard from "./SuggestedQuestionCard";
import Separator from "@/components/Layout/Separator";
import HeaderText from "@/components/Text/HeaderText";
import ParagraphText from "@/components/Text/ParagraphText";
import avatar from "@/assets/avatar.png";
import Container from "@/components/Layout/Container";
import { suggestions } from "./suggestions";

interface SuggestedQuestionsProps {
  onSuggestionClick: (suggestion: string) => void;
}

const SuggestedQuestions = ({ onSuggestionClick }: SuggestedQuestionsProps) => {
  return (
    <>
      <Container>
        <Separator size="large" />
        <HeaderText header="Suggestions" headerLevel="h2" />
        <Separator size="extraExtraSmall" />
        <ParagraphText
          className="text-gray-500"
          text="Get an immediate answer"
        />
        <Separator size="medium" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {suggestions.map(({ id, suggestion, author, location }) => (
            <SuggestedQuestionCard
              key={id}
              id={id}
              suggestion={suggestion}
              author={author}
              location={location}
              avatar={avatar}
              onClick={() => onSuggestionClick(suggestion)}
            />
          ))}
        </div>
        <Separator size="large" />
      </Container>
    </>
  );
};

export default SuggestedQuestions;
