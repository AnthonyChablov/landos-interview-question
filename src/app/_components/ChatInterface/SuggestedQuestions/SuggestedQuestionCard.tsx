import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import HeaderText from "@/components/Text/HeaderText";
import ParagraphText from "@/components/Text/ParagraphText";

// Define the type for the props
interface SuggestionQuestionCardProps {
  id: string;
  suggestion: string;
  author: string;
  location: string;
  avatar: StaticImageData;
  onClick: () => void;
}

/**
 * SuggestedQuestionCard Component
 *
 * @description
 * - Displays a suggestion question card with the suggestion text, author, and location details
 * - Includes the author's avatar as a circular image
 * - Supports hover interactions with scaling and background change
 * - The `onClick` prop handles click events for the card
 *
 * @param id Unique identifier for the card
 * @param suggestion The suggestion text displayed in quotes
 * @param author The name of the person who suggested the question
 * @param location The location of the author
 * @param avatar The avatar image of the author, passed as StaticImageData
 * @param onClick A function to handle the card click event
 *
 * @returns JSX for the suggested question card
 *
 * @example
 * <SuggestedQuestionCard
 *   id="1"
 *   suggestion="How to pair wine with cheese?"
 *   author="Jane Doe"
 *   location="Paris, France"
 *   avatar={avatarImage}
 *   onClick={handleCardClick}
 * />
 */
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
      className="flex flex-col space-y-4 border-gray-300 h-48 justify-between 
        border-[1px] p-6 rounded-xl hover:cursor-pointer hover:bg-gray-50/90 shadow-sm 
        transform transition-transform duration-300 ease-in-out hover:scale-105"
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
          placeholder="blur"
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
