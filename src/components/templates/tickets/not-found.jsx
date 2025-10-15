import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="size-full flex-col h-[60vh] space-y-5 flex-center text-3xl text-zinc-700 font-bold">
      <p>تیکت مورد نظر شما یافت نشد !</p>
      <Link to="/tickets" className="primary-bg px-4  text-sm! py-2 pt-2.5">
    بازگشت
      </Link>
    </div>
  );
}
