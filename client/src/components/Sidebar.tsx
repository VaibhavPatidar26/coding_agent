import React from "react";

interface SidebarProps {
  onNewChat: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onNewChat }) => {
  return (
    <aside className="w-64 bg-[#171717] p-4 flex flex-col h-full border-r border-gray-800">
      <h1 className="text-xl font-semibold mb-8 text-white">CodePilot</h1>

      <button
        onClick={onNewChat}
        className="border border-gray-600 rounded-lg p-3 text-left hover:bg-[#303030] transition text-white text-sm font-medium cursor-pointer"
      >
        + New Chat
      </button>

      <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mt-8 mb-3">
        Recent Chats
      </p>

      <div className="space-y-2 flex-1 overflow-y-auto">
        {/* Placeholder for future chat session list */}
      </div>
    </aside>
  );
};
