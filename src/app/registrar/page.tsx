import React from "react";
import Container from "@/components/Layout/Container";
import HeaderText from "@/components/Text/HeaderText";
import Separator from "@/components/Layout/Separator";
import ParagraphText from "@/components/Text/ParagraphText";

// Constant content
const TITLE = "Registrar";
const SUBTITLE = "Sign up to get started and join the community."; // Relevant to registration

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
