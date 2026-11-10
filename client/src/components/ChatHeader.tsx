import React from "react";

interface ChatHeaderProps {
  title?: string;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ title = "New Chat" }) => {
  return (
    <header className="h-16 border-b border-gray-700 flex items-center px-6">
      <h2 className="font-medium text-white">{title}</h2>
    </header>
  );
};
