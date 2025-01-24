import React from "react";
import ChatInterface from "./_components/ChatInterface/ChatInterface";
import Providers from "@/provider/Providers";

/**
 * Page Component
 * Renders the main page with a chat interface
 */
const page = () => {
  return (
    <Providers>
      <ChatInterface />
    </Providers>
  );
};

export default page;
