import React from "react";
import ChatInterface from "./_components/ChatInterface/ChatInterface";
import useLenisSmoothScroll from "@/hooks/useLenisSmoothScroll";

/**
 * Page Component
 * Renders the main page with a chat interface
 */
const page = () => {
  useLenisSmoothScroll();
  return (
    <>
      <ChatInterface />
    </>
  );
};

export default page;
