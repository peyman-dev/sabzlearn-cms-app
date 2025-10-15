import React, { useState } from "react";
import Table from "../../../../common/table";
import TableHeader from "./fragments/table-header";
import ProductRows from "./fragments/product-rows";


export default function ProductsTableView({ products }) {
  const [paginatedItems, setPaginatedItems] = useState(products);

  return (
    <>
      <Table
        className={"mb-20"}
        header={{
          title: "محصولات موجود وبسایت",
        }}
        pagination={{
          initialItems: products,
          itemsPerView: 10,
          setPaginatedItems,
        }}
      >
        <TableHeader /> {/* Header Row */}
        <ProductRows products={paginatedItems} />
      </Table>

    </>
  );
}
