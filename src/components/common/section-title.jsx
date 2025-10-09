import React from "react";

export default function SectionTitle({ title, Buttons }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-IRANSansX font-bold">{title}</h2>
      </div>
      <div className="flex items-center gap-3">{Buttons}</div>
    </div>
  );
}
