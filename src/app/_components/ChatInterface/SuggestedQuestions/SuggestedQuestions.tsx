import React from "react";
import SuggestedQuestionCard from "./SuggestedQuestionCard";
import Separator from "@/components/Layout/Separator";
import HeaderText from "@/components/Text/HeaderText";
import ParagraphText from "@/components/Text/ParagraphText";
import avatar from "@/assets/avatar.png";
import Container from "@/components/Layout/Container";
import { suggestions } from "./data/suggestions";

/**
 * Props for the SuggestedQuestions component
 * Handles the display of a list of suggested questions
 */
interface SuggestedQuestionsProps {
  /**
   * Callback function to handle the click event on a suggestion
   * @param suggestion The suggestion text clicked by the user
   */
  onSuggestionClick: (suggestion: string) => void;
}

/**
 * SuggestedQuestions Component
 *
 * @description
 * - Displays a list of suggested questions in a grid layout
 * - Each suggestion is rendered as a clickable `SuggestedQuestionCard` component
 * - Includes headers and a description for context
 * - Utilizes separators for spacing and organization
 *
 * @param onSuggestionClick Callback function triggered when a suggestion is clicked
 *
 * @returns JSX for rendering the suggested questions section
 *
 * @example
 * <SuggestedQuestions onSuggestionClick={handleSuggestionClick} />
 */
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
          size="2xl"
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
