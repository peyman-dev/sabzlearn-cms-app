import React from "react";
import { BsX } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Sender({ userName, title }) {
  return (
    <div className="flex items-center justify-between h-24 px-6 rounded-md bg-white shadow">
      <div className="flex items-center gap-3">
        <div className="size-14 rounded-full bg-conic-120 from-green-500 to-blue-500"></div>
        <div className="space-y-1">
          <p>
            <strong>{userName}</strong>
          </p>
          <p className="text-zinc-500 text-xs">{title}</p>
          <div className="text-blue-500 flex items-center gap-1 text-xs  mt-2!">
            <div className="size-1.5 bg-blue-500 mb-1 rounded-full"></div>
            <span>آنلاین</span>
          </div>
        </div>
      </div>

      <Link className=" size-8 rounded-full border primary-border-color flex-center text-sm duration-150 hover:bg-zinc-100 text-zinc-600" to={"/tickets"}>
        <BsX className="text-xl"/>
      </Link>
    </div>
  );
}
