import clsx from "clsx";
import React, { useState } from "react";
import TableCell from "../../../../../common/table/fragments/table-row/table-cell";
import TableRow from "../../../../../common/table/fragments/table-row";
import { CiSettings } from "react-icons/ci";
import { HiOutlineTrash } from "react-icons/hi2";
import TableBody from "../../../../../common/table/fragments/table-body";
import useToggle from "../../../../../../core/hooks/use-toggle";
import { BsEye } from "react-icons/bs";
import ManageModal from "./manage-modal/";
import { methods } from "../../../settings/utils";

export default function ProductRows({ products }) {
  const [modalMethod, setModalMethod] = useState();
  const [isModalOpen, toggleModal] = useToggle();
  const [clickedProduct, setClickedProduct] = useState(null);

  // Change Modal Visibility
  const toggleAction = (method) => {
    setModalMethod(method); // Modal Content Method
    toggleModal(); // Toggle Modal
  };

  return (
    <>
      <TableBody>
        {products.map((product) => (
          <TableRow
            onClick={() => setClickedProduct(product)}
            className={"h-24!"}
          >
            {/* Product ID */}
            <TableCell>
              <div className="max-w-[90px] text-blue-500  line-clamp-1">
                {product.id}
              </div>
            </TableCell>

            {/* Product Cover */}
            <TableCell>
              <div>
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-[100px] rounded-md border primary-border-color"
                />
              </div>
            </TableCell>

            {/* Product Title */}
            <TableCell>{product.title}</TableCell>

            {/* Product Price */}
            <TableCell>
              {Number(product.price).toLocaleString("fa-IR")}
            </TableCell>

            {/* Product Entity */}
            <TableCell className={"text-zinc-600"}>
              {Number(product.entity).toLocaleString("fa-IR")} عدد
            </TableCell>

            {/* Product  Publishment*/}
            <TableCell>
              <div
                className={clsx(
                  "badge",
                  product.isPublished ? "success-badge" : "danger-badge"
                )}
              >
                {product.isPublished ? "منتشر شده" : "خصوصی"}
              </div>
            </TableCell>

            {/* Product  Management */}
            <TableCell className="flex items-center gap-2">
              {/* Change Visibility (Publishment) */}
              <button
                className="cursor-pointer"
                onClick={() => {
                  toggleAction(methods.CHANGE_VISIBILITY);
                }}
              >
                <BsEye className="text-xl" />
              </button>

              {/* Edit Product */}
              <button
                className="cursor-pointer"
                onClick={() => {
                  toggleAction(methods.EDIT_PRODUCT);
                }}
              >
                <CiSettings className="text-xl" />
              </button>

              {/* Remove Product */}
              <button
                className="cursor-pointer"
                onClick={() => {
                  toggleAction(methods.REMOVE_PRODUCT);
                }}
              >
                <HiOutlineTrash className="text-lg" />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

      <ManageModal
        method={modalMethod} // Content Method (REMOVE || EDIT || CHANGE VISIBILITY)
        isOpen={isModalOpen} // is Modal Open ?
        onToggle={toggleModal} // Toggle Modal !
        clickedProduct={clickedProduct}
      />
    </>
  );
}
