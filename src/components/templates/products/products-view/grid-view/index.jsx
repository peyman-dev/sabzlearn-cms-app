import React from "react";
import ProductCard from "./product-card";

export default function ProductsGridView({ products }) {
  return (
    <div className="grid grid-cols-5 gap-1.5">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
