import React from "react";

export default function PageHeader({ title, children }) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-black">{title}</h1>

      <div className="flex items-center gap-4">
        {children}
      </div>
    </div>
  );
}
