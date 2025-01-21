"use client";
import React from "react";
import HeaderText from "@/components/Text/HeaderText";
import ParagraphText from "@/components/Text/ParagraphText";
import QueryInputForm from "./QueryInputForm";
import Separator from "@/components/Layout/Separator";
import Container from "@/components/Layout/Container";
import Loader from "@/components/Layout/Loader";

interface DynamicHeroProps {
  onSubmit: (values: { query: string }) => Promise<void>;
  loading: boolean;
  response: string | null;
}

const DynamicHero: React.FC<DynamicHeroProps> = ({
  onSubmit,
  loading,
  response,
}) => {
  return (
    <section
      className="flex items-center justify-center
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
          className="text-gray-500"
          text="What would you like to know?"
        />
        <Separator className="" size="small" />
        {/* Display Loading Spinner when loading is true */}
        {loading ? <Loader /> : <QueryInputForm onSubmit={onSubmit} />}
        {/* Display response after query submission */}
        {response && (
          <>
            <Separator size="extraExtraSmall" />
            <ParagraphText
              className="text-red-500"
              text={response}
              size="sm"
            ></ParagraphText>
          </>
        )}
      </Container>
    </section>
  );
};

export default DynamicHero;
