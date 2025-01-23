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

// Types
interface ChatInterfaceProps {
  // Add any props if needed
}

// Constant content
const WINE_TITLE = "Everything about wine";
const SUBTITLE = "What would you like to know?";

const ChatInterface = ({}: ChatInterfaceProps) => {
  // State and hooks
  const { loading, response, error, handleSubmit } = useChatGPT();
  const [currentQuestion, setCurrentQuestion] = useState<string>("");

  // Event Handlers
  const handleSuggestionClick = (suggestion: string): void => {
    setCurrentQuestion(suggestion);
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
        <Separator size="large" />
        <ParagraphText
          size="2xl"
          className="text-black font-medium"
          text="What makes good wine?"
        />
        <Separator size="extraSmall" />
        <ParagraphText
          size="lg"
          className="text-gray-700"
          text="A good wine is defined by its balance, where key elements like acidity, tannins, alcohol, and sweetness are in harmony. Acidity gives freshness and structure, tannins provide texture (especially in reds), alcohol should complement the other elements, and sweetness must be subtle and well-integrated. When these components align, the wine feels smooth, complex, and enjoyable. Balance ensures that no one element dominates, creating a wine that feels seamless on the palate."
        />
        <Separator size="extraSmall" />
        <ParagraphText
          size="lg"
          className="text-gray-700"
          text="Finally, typicity plays a role in identifying a 'good' wine. A quality wine should be true to its grape variety and region, reflecting the characteristics expected of that style. While personal preference is the ultimate judge of whether a wine is good, these elements—balance, complexity, finish, and typicity—serve as the foundation for evaluating its overall quality. Ultimately, a good wine is one that is pleasurable and resonates with your individual tastes."
        />
        <Separator size="medium" />
        <ParagraphText
          size="lg"
          className="text-gray-700 font-medium"
          text="What would you like to know:"
        />
        <Separator size="extraSmall" />
        <QuestionInputForm onSubmit={handleSubmit} variant="alternate" />
        <Separator size="large" />
      </Container>
    </>
  );
};

export default ChatInterface;
