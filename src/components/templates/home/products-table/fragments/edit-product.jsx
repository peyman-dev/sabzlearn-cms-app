import React, { useState } from "react";
import { HiEye } from "react-icons/hi2";
import Modal from "../../../../common/modal";
import clsx from "clsx";
import { BiEdit } from "react-icons/bi";
import { createAnArrayFromObject } from "../../../../../core/settings";

export default function EditProduct({ row }) {
    const [values, setValues] = useState([
        {
            label: "عنوان محصول",
            key: "title",
            value: row.title
        },
        {
            label: "وضعیت انتشار",
            key: "isPublished",
            value: row.isPublished
        },
        {
            label: "تصویر محصول",
            key: "img",
            value: row.img
        },
        {
            label: 'قیمت محصول',
            key: "price",
            value: row.price
        },
        {
            label: "توضیحات محصول",
            key: "description",
            value: row.description
        }
    ])
  const Trigger = () => (
    <button className="cursor-pointer text-green-500 text-xl">
      <BiEdit />
    </button>
  );




  return (
    <div>
      <Modal title={"تغییر جزئیات محصول"} Trigger={<Trigger />}>
        <div className="space-y-4 grow">
            {values.map((field) => 
            <div>
                <label htmlFor="" className="text-xs select-none text-neutral-500">
                    {field.label}:
                </label>
                <input type="text" name="" className="block mt-2! px-3 rounded-md bg-gradient-to-t from-zinc-100/70 shadow placeholder:text-sm! h-10 border outline-none! primary-border-color w-full!" placeholder={`لطفا ${field.label} را وارد نمائید`} id="" value={typeof field.value == "number" ? String(Number(field.value).toLocaleString('fa-IR')) : String(field.value)} />
            </div>)}
        </div>
      </Modal>
    </div>
  );
}
