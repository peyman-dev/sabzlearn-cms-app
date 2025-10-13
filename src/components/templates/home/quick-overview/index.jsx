import React from "react";
import SectionTitle from "../../../common/section-title";
import LatestProducts from "./fragments/sections/latest-products";
import LatestUsers from "./fragments/sections/latest-users";

export default function QuickOverview() {
  return (
    <div className="space-y-10 grid grid-cols-5 *:p-5 *:border *:primary-border-color *:bg-white *:rounded-xl gap-5 *:shadow">
      <LatestProducts />
      <LatestUsers />
    </div>
  );
}
