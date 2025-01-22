"use client";
import React, { useState } from "react";
import HeaderText from "@/components/Text/HeaderText";
import ParagraphText from "@/components/Text/ParagraphText";
import QuestionInputForm from "./Form/QuestionInput";
import Separator from "@/components/Layout/Separator";
import Container from "@/components/Layout/Container";
import Loader from "@/components/Layout/Loader";
import SuggestedQuestions from "./SuggestedQuestions/SuggestedQuestions";
import useChatGPT from "../../../hooks/useChatGPT";

const ChatInterface = () => {
  const { loading, response, error, history, handleSubmit } = useChatGPT();
  const [currentQuestion, setCurrentQuestion] = useState("");

  const handleSuggestionClick = (suggestion: string) => {
    setCurrentQuestion(suggestion);
  };

  return (
    <>
      {false && (
        <section>
          <div className="flex items-center justify-center flex-col h-screen bg-customGray text-center">
            <Container>
              <HeaderText headerLevel="h1" header="Everything about wine" />
              <Separator size="extraSmall" />
              <ParagraphText
                size="2xl"
                className="text-gray-500"
                text="What would you like to know?"
              />
              <Separator size="small" />
              <QuestionInputForm onSubmit={handleSubmit} />
            </Container>
          </div>
          <SuggestedQuestions onSuggestionClick={handleSuggestionClick} />
        </section>
      )}

      {/* Display Loading Spinner when loading is true */}
      {loading && (
        <section className="flex items-center justify-center flex-col h-screen bg-customGray text-center">
          <Container>
            <Loader />
          </Container>
        </section>
      )}

      {/* Display Error Message */}
      {error && (
        <section className="flex items-center justify-center flex-col h-screen bg-customGray text-center">
          <Container>
            <Separator size="extraExtraSmall" />
            <ParagraphText className="text-red-500" text={error} size="sm" />
          </Container>
        </section>
      )}

      {/* Display Response and Questions after query submission */}
      {true && (
        <section>
          <div className="flex items-center justify-center flex-col h-fit bg-customGray text-center">
            <Container>
              <Separator size="small" />
              <HeaderText
                headerLevel="h1"
                header="Everything about wine"
                className="h-fit"
              />
              <Separator size="extraSmall" />
              <ParagraphText
                size="2xl"
                className="text-gray-500"
                text="What would you like to know?"
              />
              <Separator size="small" />
            </Container>
          </div>
          <Container>
            <Separator size="large" />
            <ParagraphText
              size="2xl"
              className="text-black font-medium"
              text="What makes goodwine?"
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
              text="A good wine is defined by its balance, where key elements like acidity, tannins, alcohol, and sweetness are in harmony. Acidity gives freshness and structure, tannins provide texture (especially in reds), alcohol should complement the other elements, and sweetness must be subtle and well-integrated. When these components align, the wine feels smooth, complex, and enjoyable. Balance ensures that no one element dominates, creating a wine that feels seamless on the palate."
            />
            <Separator size="extraSmall" />
            <ParagraphText
              size="lg"
              className="text-gray-700"
              text='Finally, typicity plays a role in identifying a "good" wine. A quality wine should be true to its grape variety and region, reflecting the characteristics expected of that style. While personal preference is the ultimate judge of whether a wine is good, these elements—balance, complexity, finish, and typicity—serve as the foundation for evaluating its overall quality. Ultimately, a good wine is one that is pleasurable and resonates with your individual tastes.'
            />
            <Separator size="medium" />
            <ParagraphText
              size="lg"
              className="text-gray-700 font-medium"
              text="What would you like to know:"
            />
            <Separator size="extraSmall"></Separator>
            <QuestionInputForm onSubmit={handleSubmit} variant="alternate" />
          </Container>
        </section>
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
    </>
  );
};

export default ChatInterface;
