import React from "react";
import Switch from "../../../../ui/switch";

export default function EditProductModal({ product }) {
  return (
    <div className="space-y-2 h-full! w-full!">
      <div>
        <label htmlFor="#" className="text-xs text-neutral-500">
          عنوان محصول:
        </label>
        <input
          type="text"
          className="w-full h-10 rounded-md border primary-border-color mt-2  focus-within:outline-black/10! px-3 placeholder:text-xs text-sm"
        />
      </div>
      <div>
        <label htmlFor="#" className="text-xs text-neutral-500">
          آدرس تصویر محصول:
        </label>
        <input
          type="text"
          className="w-full h-10 rounded-md border primary-border-color mt-2  focus-within:outline-black/10! px-3 placeholder:text-xs text-sm"
          placeholder="/images/peyman-ahmadi-example-pfp.jpg"
          dir="ltr"
        />
      </div>
      <div>
        <label htmlFor="#" className="text-xs text-neutral-500">
          توضیحات محصول:
        </label>
        <textarea
          className="w-full min-h-[140px] pt-2 rounded-md  border primary-border-color mt-2  focus-within:outline-black/10! px-3 placeholder:text-xs text-sm"
          name="product-description-field"
        />
      </div>
      <div>
        <label htmlFor="#" className="text-xs text-neutral-500">
          مقدار موجودی:
        </label>
        <input
          type="number"
          className="w-full h-10 rounded-md border primary-border-color mt-2  focus-within:outline-black/10! px-3 placeholder:text-xs text-sm"
        />
      </div>
      <div className="mt-3">
        <Switch label={"آیا منتشر شده؟"} />
      </div>
    </div>
  );
}
