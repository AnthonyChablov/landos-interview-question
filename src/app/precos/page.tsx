import React from "react";
import Container from "@/components/Layout/Container";
import HeaderText from "@/components/Text/HeaderText";
import Separator from "@/components/Layout/Separator";
import ParagraphText from "@/components/Text/ParagraphText";

// Constant content
const TITLE = "Preco";
const SUBTITLE = "Find the best prices for your needs."; // Relevant to pricing or costs

const page = () => {
  return (
    <div>
      <Container className="text-center">
        <Separator size="small" />
        <HeaderText headerLevel="h1" header={TITLE} className="h-fit" />
        <Separator size="extraSmall" />
        <ParagraphText size="2xl" className="text-gray-500" text={SUBTITLE} />
        <Separator size="small" />
      </Container>
    </div>
  );
};

export default page;
