import React, { useState } from "react";
import axios from "axios";
import { Sidebar } from "../components/Sidebar";
import { ChatHeader } from "../components/ChatHeader";
import { MessageList } from "../components/MessageList";
import { ChatInput } from "../components/ChatInput";
import { ChatMessage } from "../types/chat";

export const Home: React.FC = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    const trimmed = message.trim();
    if (!trimmed || loading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: trimmed,
    };

    setMessage("");
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await axios.post("/api/chat", {
        prompt: trimmed,
      });

      console.log(response.data);

      const replyText = response.data?.reply || "No reply from server";
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: replyText,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("API error:", error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: "Error: Failed to reach the server. Make sure the backend is running.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setMessage("");
  };

  return (
    <div className="flex h-screen bg-[#212121] text-white overflow-hidden">
      <Sidebar onNewChat={handleNewChat} />

      <main className="flex-1 flex flex-col h-full">
        <ChatHeader title="New Chat" />
        <MessageList messages={messages} loading={loading} />
        <ChatInput
          value={message}
          loading={loading}
          onChange={setMessage}
          onSubmit={handleSendMessage}
        />
      </main>
    </div>
  );
};

export default Home;
