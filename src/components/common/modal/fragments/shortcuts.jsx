import React from "react";

export default function Shortcuts({ onSubmit, onClose }) {
  return (
    <div className="text-sm text-[#666D80] select-none flex items-center gap-2">
      <button onClick={onClose} className="flex items-center gap-1 cursor-pointer bg-white px-4 py-2 rounded-lg border primary-border-color">

        <span> انصراف </span>
      </button>
      <button
        onClick={onSubmit}
        className="flex cursor-pointer px-4 py-2 rounded-ld primary-bg rounded-lg text-white"
      >
     
        <span> تائید </span>
      </button>
    </div>
  );
}
