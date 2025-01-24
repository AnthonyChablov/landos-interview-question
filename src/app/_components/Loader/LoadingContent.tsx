import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Separator from "@/components/Layout/Separator";
import Container from "@/components/Layout/Container";

/**
 * Loader component for displaying skeleton loading placeholders
 * during data fetch or content loading
 *
 * @description
 * - Renders multiple skeleton placeholders for text and layout
 * - Includes spacing and separators for visual structure
 * - Uses Tailwind CSS for styling and Skeleton UI component for placeholders
 *
 * @example
 * <LoadingContent />
 */
const LoadingContent = () => {
  return (
    <Container>
      <Separator size="large" />
      {/* Skeleton placeholder for a large heading with a pulse animation */}
      <Skeleton className="h-10 w-3/4 mb-4 text-black font-medium animate-pulse" />
      <Separator size="extraSmall" />

      {/* Skeleton placeholders for a list of text lines */}
      <div className="space-y-4">
        <Skeleton className="h-5 w-full text-gray-700 animate-pulse" />
        <Skeleton className="h-5 w-full text-gray-700 animate-pulse" />
        <Skeleton className="h-5 w-3/4 text-gray-700 animate-pulse " />
      </div>

      <Separator size="extraSmall" />
      <div className="space-y-4">
        <Skeleton className="h-5 w-full text-gray-700 animate-pulse" />
        <Skeleton className="h-5 w-full text-gray-700 animate-pulse" />
        <Skeleton className="h-5 w-3/4 text-gray-700 animate-pulse" />
      </div>

      <Separator size="medium" />
      {/* Skeleton placeholder for medium text with fade-in animation */}
      <Skeleton className="h-6 w-1/2 mb-4 text-gray-700 font-medium animate-pulse" />
      <Separator size="extraSmall" />

      {/* Skeleton placeholder for a large button or input field with a transform effect */}
      <Skeleton className="h-12 w-full rounded-lg animate-pulse" />

      <Separator size="large" />
    </Container>
  );
};

export default LoadingContent;
