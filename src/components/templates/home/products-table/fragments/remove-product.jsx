import React from "react";
import Modal from "../../../../common/modal";
import { HiOutlineTrash } from "react-icons/hi2";

export default function RemoveProduct({ row }) {
  const Trigger = () => (
    <button className="cursor-pointer text-xl text-red-500">
      <HiOutlineTrash className="text-lg"/>
    </button>
  );

  return (
    <div>
      {" "}
      <Modal title={"حذف محصول"} Trigger={<Trigger />}>
        <div className="flex items-center justify-center">
          آیا از حذف محصول{" "}
          <kbd className="px-2 py-1 rounded-md bg-red-500/15 text-red-500 font-black! mx-1">
            {" "}
            {row.title}{" "}
          </kbd>{" "}
          اطمینان دارید؟
        </div>
      </Modal>
    </div>
  );
}
