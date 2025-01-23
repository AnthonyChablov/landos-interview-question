import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Separator from "@/components/Layout/Separator";

const Loader = () => {
  return (
    <>
      <Separator size="large" />
      {/* Header Skeleton */}
      <Skeleton className="h-10 w-3/4 mx-auto mb-4" />

      {/* Subheader Skeleton */}
      <Skeleton className="h-6 w-1/2 mx-auto mb-6" />

      {/* Main Content Skeletons */}
      <div className="space-y-4">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-3/4" />
      </div>

      <Separator size="medium" />

      {/* Prompt Skeleton */}
      <Skeleton className="h-6 w-1/2 mx-auto mb-4" />

      {/* Input Skeleton */}
      <Skeleton className="h-12 w-full rounded-lg" />

      <Separator size="large" />
    </>
  );
};

export default Loader;
