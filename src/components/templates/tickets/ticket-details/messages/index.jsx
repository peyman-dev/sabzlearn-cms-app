import React from "react";
import MessageCard from "./message-card";

export default function Messages({ messages }) {
  return (
    <div className="space-y-4 p-6 h-[500px] overflow-hidden rounded-md bg-white shadow">
      <div  className="overflow-y-scroll space-y-4 h-full">
        {messages.map((msg) => (
          <>
            {/* Static test  */}
            <MessageCard content={msg} />
            <MessageCard content={msg} />
            <MessageCard content={msg} />
            <MessageCard content={msg} />
            <MessageCard content={msg} />
            <MessageCard content={msg} />
          </>
        ))}
      </div>
    </div>
  );
}
