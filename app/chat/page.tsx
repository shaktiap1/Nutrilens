"use client";

import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input.trim()) return;
    setMessages([...messages, input]);
    setInput("");
  }

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Cooking Assistant
      </h2>

      <div className="border h-64 p-2 overflow-y-auto">
        {messages.map((msg, i) => (
          <div key={i} className="mb-2">
            {msg}
          </div>
        ))}
      </div>

      <input
        className="border w-full p-2 mt-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={sendMessage}
        className="mt-2 bg-green-600 text-white px-4 py-2 rounded"
      >
        Ask
      </button>
    </div>
  );
}
