import React from "react";
import SectionTitle from "../../../../../../common/section-title";
import ProductCard from "../latest-products/fragments/product-card";
import { STATIC_PRODUCTS } from "../../../../modules";
import UserCard from "./fragments/user-card";
import OpenInPage from "../../open-in-page";

export default function LatestUsers() {
  return (
    <div className="col-span-2 max-h-max">
      <SectionTitle title={"آخرین کاربران"} />
      <div className="space-y-3 mt-5">
        {STATIC_PRODUCTS.slice(-5).map((product) => (
          <UserCard key={product.id} {...product} />
        ))}
      </div>
      <OpenInPage 
        navigateTo={'/users'}
        itemsLength={STATIC_PRODUCTS.length}
      />
    </div>
  );
}
