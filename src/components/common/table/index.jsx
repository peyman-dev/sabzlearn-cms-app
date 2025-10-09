import React from "react";
import Header from "./fragments/header";
import Pagination from "./fragments/pagination";

const Table = ({
  header = { title: "لیست آیتم ها", Buttons: undefined },
  children,
  pagination = {
    itemsPerView: null,
    initialItems: null,
    setPaginatedItems: null,
  },
}) => {
  return (
    <div
      className="mt-10 border bg-white primary-border-color rounded-xl overflow-hidden
    "
    >
      <Header header={header} />
      <div className="h-[568px]">{children}</div>

      {pagination.itemsPerView > 1 ? (
        <Pagination
          savePaginatedItems={pagination.setPaginatedItems}
          items={pagination.initialItems}
          itemsPerView={pagination.itemsPerView}
        />
      ) : null}
    </div>
  );
};

export default Table;
