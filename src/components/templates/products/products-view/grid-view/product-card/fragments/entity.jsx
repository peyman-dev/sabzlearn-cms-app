import React from "react";
import { BiShoppingBag } from "react-icons/bi";

export default function Entity({ entityCount }) {
  return (
    <div className="text-xs text-zinc-600 inline-flex gap-1 items-center">
      <BiShoppingBag className="size-4" />
      <span>تعداد موجودی:</span>
      <span>{entityCount}</span>
    </div>
  );
}
