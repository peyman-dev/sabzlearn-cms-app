import React from "react";
import MessageCard from "./message-card";

export default function Messages({ messages }) {
  return (
    <div className="space-y-4 p-6 rounded-md bg-white shadow">
      {messages.map((msg) => (
        <MessageCard content={msg} />
      ))}
    </div>
  );
}
