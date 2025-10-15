import clsx from "clsx";
import React from "react";

export default function ChangeVisibility({ product }) {
  const { isPublished } = product;
  return (
    <div className="flex-center text-sm text-neutral-700">
      <p className="inline-flex gap-1">
        آیا قصد
        <strong
          className={clsx(
            "badge",
            isPublished ? "danger-badge" : "success-badge"
          )}
        >
          {isPublished ? "خصوصی کردن" : "منتشر کردن"}
        </strong>{" "}
        محصول
        <span className="font-bold text-neutral-900!">{product.title}</span>
        را دارید؟
      </p>
    </div>
  );
}
