import React from "react";

export default function RemoveProduct({ product }) {
  return (
    <div className="flex-center text-sm">
      <p>
        آیا از حذف محصول{" "}
        <strong className="font-extrabold! text-teal-600 px-0.5">
          {" "}
          {product.title}{" "}
        </strong>{" "}
        اطمینان دارید؟
      </p>
    </div>
  );
}
