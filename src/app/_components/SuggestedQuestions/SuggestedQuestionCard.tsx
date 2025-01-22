import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import HeaderText from "@/components/Text/HeaderText";
import ParagraphText from "@/components/Text/ParagraphText";
import Link from "next/link";

// Define the type for the props
interface SuggestionQuestionCardProps {
  id: string;
  suggestion: string;
  author: string;
  location: string;
  avatar: StaticImageData;
  onClick: () => void;
}

const SuggestedQuestionCard = ({
  id,
  suggestion,
  author,
  location,
  avatar,
  onClick,
}: SuggestionQuestionCardProps) => {
  return (
    <div
      key={id}
      className="flex flex-col space-y-4 border-gray-300 border-[1px] p-6 rounded-xl"
      onClick={onClick}
    >
      <HeaderText
        headerLevel="h3"
        className="text-sm font-semibold text-gray-800"
        header={`"${suggestion}"`}
      ></HeaderText>

      {/* User Picture */}
      <div className="flex space-x-4">
        <Image
          src={avatar}
          alt={`${author}'s picture`}
          width={64}
          height={64}
          className="rounded-full object-cover"
        />
        {/* Content Section */}
        <div className="flex-grow">
          <ParagraphText
            size="md"
            className=" text-gray-700 mt-2"
            text={author}
          ></ParagraphText>
          <ParagraphText
            size="md"
            className=" text-gray-400"
            text={location}
          ></ParagraphText>
        </div>
      </div>
    </div>
  );
};

export default SuggestedQuestionCard;
