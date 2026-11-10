import React from "react";
import { ChatMessage } from "../types/chat";

interface MessageListProps {
  messages: ChatMessage[];
  loading: boolean;
}

export const MessageList: React.FC<MessageListProps> = ({ messages, loading }) => {
  if (messages.length === 0) {
    return (
      <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-semibold mb-3 text-white">
          How can I help you today?
        </h1>
        <p className="text-gray-400">
          Ask anything or start building something.
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col">
      <div className="max-w-3xl w-full mx-auto space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`rounded-2xl px-4 py-2.5 max-w-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-[#303030] text-gray-100 border border-gray-600"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-[#303030] text-gray-400 border border-gray-600 rounded-2xl px-4 py-2 text-sm italic animate-pulse">
              Thinking...
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
