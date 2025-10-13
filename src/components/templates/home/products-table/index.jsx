import React, { useState } from "react";
import Table from "../../../common/table";
import { productsTableHeadRow, STATIC_PRODUCTS } from "../modules";
import TableCell from "../../../common/table/fragments/table-row/table-cell";
import TableHeadCell from "../../../common/table/fragments/table-head/table-head-cell";
import TableHead from "../../../common/table/fragments/table-head";
import TableBody from "../../../common/table/fragments/table-body";
import TableRow from "../../../common/table/fragments/table-row";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { MdOpenInNew } from "react-icons/md";
import Modal from "../../../common/modal";
import RemoveProduct from "./fragments/remove-product";
import ChangeVisibility from "./fragments/change-visibility";
import EditProduct from "./fragments/edit-product";

const Buttons = () => {
  return (
    <>
      <Link
        to={"/products"}
        className="underline hover:text-blue-400 text-blue-500 flex-center gap-1"
      >
        <span>صفحه محصولات</span>
        <MdOpenInNew />
      </Link>
    </>
  );
};

export default function ProductsTable() {
  const [paginatedItems, setPaginatedItems] = useState(STATIC_PRODUCTS);

  return (
    <div>
      <Table
        header={{
          title: "لیست محصولات",
          Buttons,
        }}
        pagination={{
          initialItems: STATIC_PRODUCTS,
          setPaginatedItems,
          itemsPerView: 10,
        }}
      >
        {/* --------------------------------- Header --------------------------------- */}
        <TableHead>
          {productsTableHeadRow.map((row) => (
            <TableHeadCell key={row}>{row}</TableHeadCell>
          ))}
        </TableHead>
        {/* --------------------------------- Header --------------------------------- */}

        {/* --------------------------------- Body --------------------------------- */}
        <TableBody>
          {paginatedItems.map((row) => (
            <TableRow>
              <TableCell>{String(row.id).slice(0, 10)}...</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>
                <p
                  className={clsx(
                    row.isPublished ? "success-badge" : "danger-badge",
                    "badge"
                  )}
                >
                  {row.isPublished ? "عمومی" : "خصوصی"}
                </p>
              </TableCell>
              <TableCell>
                <span>{row.price.toLocaleString("fa-IR")}</span>
                تومان
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <RemoveProduct row={row} />
                  <ChangeVisibility row={row} />
                  <EditProduct row={row}/>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* --------------------------------- Body --------------------------------- */}
      </Table>
    </div>
  );
}
