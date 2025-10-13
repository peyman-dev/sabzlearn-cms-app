import React from "react";
import Header from "../../components/templates/home/header/index.jsx";
import Summaries from "../../components/templates/home/summaries/index.jsx";

import ProductsTable from "../../components/templates/home/products-table/index.jsx";
import DetailsChart from "../../components/templates/home/details-chart/index.jsx";
import QuickOverview from "../../components/templates/home/quick-overview/index.jsx";

const HomePage = () => {
  return (
    <>
      <Header />
      <Summaries />
      <div className="pb-20 mt-20 space-y-10">
        <DetailsChart />
        <ProductsTable />
        <QuickOverview />
      </div>
    </>
  );
};

export default HomePage;
