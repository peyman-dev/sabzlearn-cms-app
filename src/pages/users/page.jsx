import React, { useState } from "react";
import PageHeader from "../../components/common/page-header";
import Table from "../../components/common/table";
import { usersArray } from "../../core/settings/constants";
import TableHead from "../../components/common/table/fragments/table-head";
import TableHeadCell from "../../components/common/table/fragments/table-head/table-head-cell";

export default function UsersPage() {
  const [users, setUsers] = useState(usersArray); // UsersArray is static, u need use it as State to be able
  return (
    <>
      <PageHeader title={"کاربران وبسایت "} />
      <Table
        header={{
          title: `مدیریت کاربران (${usersArray.length.toLocaleString(
            "fa-IR"
          )} کاربر)`,
          Buttons: () => (
            <button className="primary-bg text-xs px-3 py-1.5 rounded-md">
              {" "}
              ایجاد کاربر جدید
            </button>
          ),
        }}
      >
        <TableHead>
          <TableHeadCell> #شناسه </TableHeadCell>
          <TableHeadCell>نام و نام خانوادگی</TableHeadCell>
          <TableHeadCell>نام کاربری</TableHeadCell>
          <TableHeadCell>آدرس ایمیل</TableHeadCell>
          <TableHeadCell>شماره موبایل</TableHeadCell>
          <TableHeadCell>ارشدیت</TableHeadCell>
          <TableHeadCell></TableHeadCell>
        </TableHead>
      </Table>
    </>
  );
}
