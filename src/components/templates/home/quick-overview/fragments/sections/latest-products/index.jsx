import React from "react";
import SectionTitle from "../../../../../../common/section-title";
import ProductCard from "./fragments/product-card";
import { STATIC_PRODUCTS } from "../../../../modules";
import OpenInPage from "../../open-in-page";

export default function LatestProducts() {


  return (
    <div className="col-span-3">
      <SectionTitle title={"آخرین محصولات"} />
      <div className="space-y-3 mt-5">
        {STATIC_PRODUCTS.slice(-3).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <OpenInPage
        itemsLength={STATIC_PRODUCTS.length}
        navigateTo={"/products"}
      />
    </div>
  );
}
