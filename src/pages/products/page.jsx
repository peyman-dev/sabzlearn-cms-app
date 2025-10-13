import React, { useState } from "react";
import ProductsPageHeader from "../../components/templates/products/header";
import {
  TABLE_VIEW,
  GRID_VIEW,
  getInitialGridLayout,
} from "../../components/templates/products/settings/grid-layout";
import ProductsGridView from "../../components/templates/products/products-view/grid-view";
import ProductsTableView from "../../components/templates/products/products-view/table-view";
import { STATIC_PRODUCTS } from "../../components/templates/home/modules";

export default function ProductsPage() {
  const initGridLayout = getInitialGridLayout();

  const [gridLayout, setGridLayout] = useState(initGridLayout || TABLE_VIEW);

  const toggleLayout = () => {
    const TableView = gridLayout == TABLE_VIEW ? GRID_VIEW : TABLE_VIEW;

    setGridLayout(TableView);
    localStorage.setItem("gridLayout", TableView);
  };

  return (
    <>
      <ProductsPageHeader
        onGridLayoutChanged={toggleLayout}
        currentGridLayout={gridLayout}
      />
      <section className="mt-10">
        {gridLayout == TABLE_VIEW ? (
          <ProductsTableView products={STATIC_PRODUCTS} />
        ) : (
          <ProductsGridView products={STATIC_PRODUCTS} />
        )}
      </section>
    </>
  );
}
