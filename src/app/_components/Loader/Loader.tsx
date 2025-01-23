import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Separator from "@/components/Layout/Separator";
import Container from "@/components/Layout/Container";

const Loader = () => {
  return (
    <Container>
      <Separator size="small" />
      <Skeleton className="h-10 w-3/4 mb-4 text-black font-medium" />
      <Separator size="extraSmall" />
      <div className="space-y-4">
        <Skeleton className="h-5 w-full text-gray-700" />
        <Skeleton className="h-5 w-full text-gray-700" />
        <Skeleton className="h-5 w-3/4 text-gray-700" />
      </div>
      <Separator size="extraSmall" />
      <div className="space-y-4">
        <Skeleton className="h-5 w-full text-gray-700" />
        <Skeleton className="h-5 w-full text-gray-700" />
        <Skeleton className="h-5 w-3/4 text-gray-700" />
      </div>
      <Separator size="medium" />
      <Skeleton className="h-6 w-1/2 mb-4 text-gray-700 font-medium" />
      <Separator size="extraSmall" />
      <Skeleton className="h-12 w-full rounded-lg" />
      <Separator size="large" />
    </Container>
  );
};

export default Loader;
