import React from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

export default function MessageCard({ content }) {
  return (
    <div className="w-[420px] relative p-5 odd:ms-auto! text-sm odd:from-teal-600 odd:to-teal-500! odd:rounded-br-3xl! odd:rounded-bl-3xl bg-gradient-to-t from-blue-600 to-blue-500 rounded-3xl rounded-br-sm! text-white">
      {content}

      <div className="text-xs text-white opacity-80 select-none flex items-center gap-1 absolute left-4 bottom-2">
        <IoCheckmarkDoneOutline />
        <span>خوانده شده</span>
      </div>
    </div>
  );
}
