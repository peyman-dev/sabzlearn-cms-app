import React from "react";
import { HiEye } from "react-icons/hi2";
import Modal from "../../../../common/modal";
import clsx from "clsx";

export default function ChangeVisibility({ row }) {
  const Trigger = () => (
    <button className="cursor-pointer text-sky-500 text-xl">
      <HiEye />
    </button>
  );

  const isProductVisible = row.isPublished;

  return (
    <div>
      <Modal title={"تغییر وضعیت انتشار"} Trigger={<Trigger />}>
        <div className="flex items-center justify-center">
          <p>
            آیا از{" "}
            <span
              className={clsx(
                isProductVisible ? "text-blue-500" : "text-green-500"
              )}
            >
              {" "}
              <strong> {isProductVisible ? "خصوصی" : "عمومی"} </strong>
            </span>{" "}
            کردن این محصول اطمینان دارید؟
          </p>
        </div>
      </Modal>
    </div>
  );
}
