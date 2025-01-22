// SuggestionDisplay.tsx
import React from "react";
import SuggestedQuestionCard from "./SuggestedQuestionCard";
import Separator from "@/components/Layout/Separator";
import HeaderText from "@/components/Text/HeaderText";
import ParagraphText from "@/components/Text/ParagraphText";
import avatar from "../../../../public/avatar.png";
import Container from "@/components/Layout/Container";

interface SuggestedQuestionsProps {
  onSuggestionClick: (suggestion: string) => void;
}

const SuggestedQuestions = ({ onSuggestionClick }: SuggestedQuestionsProps) => {
  return (
    <section>
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
          <SuggestedQuestionCard
            id="1"
            suggestion="Implement dark mode in the app."
            author="John Doe"
            location="Toronto, Canada"
            avatar={avatar}
            onClick={() => onSuggestionClick("Implement dark mode in the app.")}
          />
          {/* Add more SuggestionCard components here */}
        </div>
        <Separator size="large" />
      </Container>
    </section>
  );
};

export default SuggestedQuestions;
