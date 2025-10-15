import React from "react";
import TableHead from "../../../../../common/table/fragments/table-head";
import TableHeadCell from "../../../../../common/table/fragments/table-head/table-head-cell";

export default function TableHeader() {
  return (
    <TableHead>
      <TableHeadCell>شناسه</TableHeadCell>
      <TableHeadCell>تصویر</TableHeadCell>
      <TableHeadCell>عنوان</TableHeadCell>
      <TableHeadCell>قیمت</TableHeadCell>
      <TableHeadCell>موجودی</TableHeadCell>
      <TableHeadCell>وضعیت انتشار</TableHeadCell>

      <TableHeadCell></TableHeadCell>
    </TableHead>
  );
}
