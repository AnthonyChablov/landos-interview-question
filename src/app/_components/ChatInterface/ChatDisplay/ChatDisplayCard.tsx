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
      <div>
        <ParagraphText
          size="2xl"
          className="text-black font-medium"
          text={`${capitalizeFirstLetter(prompt.question)}?`}
        />
      </div>
      <Separator size="extraSmall" />
      <div>
        <ParagraphText
          size="lg"
          className="text-gray-700"
          dangerouslySetInnerHTML={{
            __html: randomlyBoldNouns(prompt.response), // This is the text you want to animate
          }}
        />
      </div>
      <Separator size="small" />
    </React.Fragment>
  );
};

export default ChatDisplayCard;
