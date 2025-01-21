import React from "react";
import HeaderText from "@/components/Text/HeaderText";
import ParagraphText from "@/components/Text/ParagraphText";
import Separator from "@/components/Layout/Separator";

const SuggestionDisplay = () => {
  return (
    <section>
      <Separator size="large" />
      <HeaderText header="Suggestions" headerLevel="h2" />
      <Separator size="extraSmall" />
      <ParagraphText text="Get an Immediate Answer" />
      <Separator size="large" />
    </section>
  );
};

export default SuggestionDisplay;
