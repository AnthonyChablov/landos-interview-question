import React from "react";
import ParagraphText from "@/components/Text/ParagraphText";
import Separator from "@/components/Layout/Separator";
import { capitalizeFirstLetter, randomlyBoldNouns } from "@/lib/utils";

interface ChatDisplayProps {
  prompt: {
    question: string;
    response: string;
  };
  index: number;
}

const ChatDisplayCard = ({ prompt, index }: ChatDisplayProps) => {
  return (
    <React.Fragment key={`${prompt.question}-${index}`}>
      <ParagraphText
        size="2xl"
        className="text-black font-medium"
        text={`${capitalizeFirstLetter(prompt.question)}?`}
      />
      <Separator size="extraSmall" />
      <ParagraphText
        size="lg"
        className="text-gray-700"
        dangerouslySetInnerHTML={{
          __html: randomlyBoldNouns(prompt.response),
        }}
      />
      <Separator size="small" />
    </React.Fragment>
  );
};

export default ChatDisplayCard;
