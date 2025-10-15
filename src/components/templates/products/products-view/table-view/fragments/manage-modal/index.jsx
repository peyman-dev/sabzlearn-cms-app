import React from "react";
import Modal from "../../../../../../common/modal";
import { methods, renderModalTitle } from "../../../../settings/utils";
import EditProduct from "./contents/edit-product";
import RemoveProduct from "./contents/remove-product";
import ChangeVisibility from "./contents/change-visibility";

export default function ManageModal({
  method,
  isOpen,
  onToggle,
  clickedProduct,
}) {
  console.log(clickedProduct);
  const RenderContent = () => {
    switch (method) {
      case methods.EDIT_PRODUCT:
        return <EditProduct product={clickedProduct} />;

      case methods.REMOVE_PRODUCT:
        return <RemoveProduct product={clickedProduct} />;

      case methods.CHANGE_VISIBILITY:
        return <ChangeVisibility product={clickedProduct} />;
    }
  };

  const RenderFooter = () => {
    switch (method) {
      case methods.EDIT_PRODUCT:
        return <EditProduct product={clickedProduct} />;

      case methods.REMOVE_PRODUCT:
        return <RemoveProduct product={clickedProduct} />;

      case methods.CHANGE_VISIBILITY:
        return (
          <>
            <button className="bg-red-600/10 text-red-600 duration-150 transition-all focus-within:ring-4  px-4 py-1.5 text-sm cursor-pointer  rounded-md hover:opacity-70">
              خیر, انصراف
            </button>
            <button
              className="bg-emerald-500 text-white duration-150 transition-all focus-within:ring-4! px-4 py-1.5 text-sm cursor-pointer  rounded-md hover:opacity-70"
            >
              بله مخفی شود
            </button>
          </>
        );
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onToggle={onToggle}
      title={renderModalTitle(method)}
      FooterButtons={() => <RenderFooter />}
    >
      <RenderContent />
    </Modal>
  );
}
