import React from "react";
import HeaderText from "@/components/Text/HeaderText";
import ParagraphText from "@/components/Text/ParagraphText";
import QueryInputForm from "./QueryInputForm";
import Separator from "@/components/Layout/Separator";
import Container from "@/components/Layout/Container";

interface DynamicHeroProps {}

const DynamicHero = () => {
  return (
    <section
      className="flex items-center  justify-center 
      flex-col h-screen bg-customGray text-center"
    >
      <Container>
        <HeaderText
          className=""
          headerLevel="h1"
          header="Everything about wine"
        />
        <Separator className="" size="extraSmall" />
        <ParagraphText
          size="2xl"
          className=" text-gray-500 text-"
          text="What would you like to know?"
        />
        <Separator className="" size="small" />
        <QueryInputForm />
      </Container>
    </section>
  );
};

export default DynamicHero;
