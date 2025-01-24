import React from "react";
import Container from "@/components/Layout/Container";
import HeaderText from "@/components/Text/HeaderText";
import Separator from "@/components/Layout/Separator";
import ParagraphText from "@/components/Text/ParagraphText";

// Constant content
const TITLE = "Recursos";
const SUBTITLE = "Explore the tools and resources available to you."; // Relevant to resources and tools

const page = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-customGray">
      <Container className="text-center">
        <Separator size="small" />
        <HeaderText headerLevel="h1" header={TITLE} className="h-fit" />
        <Separator size="extraSmall" />
        <ParagraphText size="2xl" className="text-gray-500" text={SUBTITLE} />
        <Separator size="small" />
      </Container>
    </section>
  );
};

export default page;
