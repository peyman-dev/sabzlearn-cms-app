import React from "react";
import { Link } from "react-router-dom";

export default function OpenInPage({ itemsLength, navigateTo }) {
  return (
    <div className="pt-4  flex items-center justify-between border-t mt-10 primary-border-color">
      <p className="text-neutral-500 text-sm">{itemsLength} رکورد یافت شد.</p>

      <Link
        to={navigateTo || "/"}
        className="text-sm px-3 py-1.5 rounded-md primary-bg text-white"
      >
        نمایش کامل لیست
      </Link>
    </div>
  );
}
