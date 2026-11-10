import React from "react";

interface ChatInputProps {
  value: string;
  loading: boolean;
  onChange: (val: string) => void;
  onSubmit: () => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  value,
  loading,
  onChange,
  onSubmit,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto flex items-center gap-3 bg-[#303030] rounded-2xl p-3 border border-gray-600 focus-within:border-gray-400 transition">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask CodePilot anything..."
          className="flex-1 bg-transparent outline-none px-2 text-white placeholder-gray-400"
          disabled={loading}
        />

        <button
          onClick={onSubmit}
          disabled={loading || !value.trim()}
          className="bg-white text-black rounded-xl px-4 py-2 font-medium hover:bg-gray-200 disabled:opacity-50 transition cursor-pointer disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>

      <p className="text-center text-xs text-gray-500 mt-3">
        CodePilot can make mistakes. Verify important information.
      </p>
    </div>
  );
};
