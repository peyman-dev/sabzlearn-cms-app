import React from "react";
import PageHeader from "../../../common/page-header";
import { CiGrid41, CiViewTable } from "react-icons/ci";
import clsx from "clsx";
import { TABLE_VIEW } from "../settings/grid-layout";

export default function ProductsPageHeader({
  currentGridLayout,
  onGridLayoutChanged,
}) {
  const gridBtnStyles = clsx(
    "text-2xl size-10 flex-center bg-[#ECEFF3] text-[#818898] *:stroke-1 rounded-md hover:bg-[#e1e4e7] active:scale-90 active:bg-[#ECEFF3]  duration-150 transition-all primary-border-color border cursor-pointer shadow"
  );


  return (
    <>
      <PageHeader title={"لیست محصولات"}>
        {/* childrens = buttons */}
        <button className={gridBtnStyles} onClick={onGridLayoutChanged}>
          {currentGridLayout == TABLE_VIEW ? <CiGrid41 /> : <CiViewTable />}
        </button>
        <button className="primary-bg px-3 py-1.5">ایجاد محصول</button>
      </PageHeader>
    </>
  );
}
