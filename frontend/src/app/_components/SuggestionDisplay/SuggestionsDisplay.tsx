import React from "react";
import HeaderText from "@/components/Text/HeaderText";
import ParagraphText from "@/components/Text/ParagraphText";
import Separator from "@/components/Layout/Separator";
import SuggestionCard from "./SuggestionCard";
import avatar from "../../../../public/avatar.png";

const SuggestionDisplay = () => {
  return (
    <section>
      <Separator size="large" />
      <HeaderText header="Suggestions" headerLevel="h2" />
      <Separator size="extraSmall" />
      <ParagraphText className="text-gray-500" text="Get an immediate answer" />
      <Separator size="large" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SuggestionCard
          id="1"
          suggestion="Implement dark mode in the app."
          author="John Doe"
          location="Toronto, Canada"
          avatar={avatar}
        />
        <SuggestionCard
          id="1"
          suggestion="Implement dark mode in the app."
          author="John Doe"
          location="Toronto, Canada"
          avatar={avatar}
        />
        <SuggestionCard
          id="1"
          suggestion="Implement dark mode in the app."
          author="John Doe"
          location="Toronto, Canada"
          avatar={avatar}
        />
        <SuggestionCard
          id="1"
          suggestion="Implement dark mode in the app."
          author="John Doe"
          location="Toronto, Canada"
          avatar={avatar}
        />{" "}
        <SuggestionCard
          id="1"
          suggestion="Implement dark mode in the app."
          author="John Doe"
          location="Toronto, Canada"
          avatar={avatar}
        />
        <SuggestionCard
          id="1"
          suggestion="Implement dark mode in the app."
          author="John Doe"
          location="Toronto, Canada"
          avatar={avatar}
        />
      </div>
      <Separator size="large" />
    </section>
  );
};

export default SuggestionDisplay;
