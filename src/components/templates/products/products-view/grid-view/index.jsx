import React from "react";
import ProductCard from "./product-card";

export default function ProductsGridView({ products }) {
  return (
    <div className="grid md:grid-cols-3 mb-20 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:grid-cols-5 ">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
