import React from "react";
import Header from "./fragments/header";
import Pagination from "./fragments/pagination";
import clsx from "clsx";

const Table = ({
  header = { title: "لیست آیتم ها", Buttons: undefined },
  children,
  pagination = {
    itemsPerView: null,
    initialItems: null,
    setPaginatedItems: null,
  },
  className
}) => {
  return (
    <div
      className={clsx("mt-10 border bg-white primary-border-color rounded-xl overflow-hidden", className)}
    >
      <Header header={header} />
      <div className="min-h-[568px]">{children}</div>

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
