import React from "react";
import ParagraphText from "../Text/ParagraphText";
import Separator from "./Separator";

/**
 * Props for the ErrorMessage component
 * Used to display error messages in a consistent manner
 */
interface ErrorMessageProps {
  /**
   * The error message to be displayed
   * This text will be shown to inform users of any issues or failures
   */
  error: string;
}

/**
 * ErrorMessage Component
 *
 * @description
 * - Displays a red-colored error message to the user
 * - Includes a separator for visual spacing above the message
 * - The error message text is passed in through the `error` prop
 *
 * @example
 * <ErrorMessage error="Something went wrong!" />
 */
const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <>
      <Separator size="extraSmall" />
      <ParagraphText
        className="text-red-500"
        text={`An Error Has Occurred: ${error}`}
        size="sm"
      />
    </>
  );
};

export default ErrorMessage;
