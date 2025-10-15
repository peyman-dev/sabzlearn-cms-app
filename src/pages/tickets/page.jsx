import React from "react";
import PageHeader from "../../components/common/page-header";
import Table from "../../components/common/table";
import TableHead from "../../components/common/table/fragments/table-head";
import TableHeadCell from "../../components/common/table/fragments/table-head/table-head-cell";
import { tickets } from "../../core/settings/constants";
import TableBody from "../../components/common/table/fragments/table-body";
import TableRow from "../../components/common/table/fragments/table-row";
import TableCell from "../../components/common/table/fragments/table-row/table-cell";
import { getBadgeStyles } from "../../components/templates/products/settings/utils";
import { Link } from "react-router-dom";
import { BsMailbox } from "react-icons/bs";

export default function TicketsPage() {
  return (
    <>
      <PageHeader title={"مدیریت تیکت ها"} />
      <Table
        header={{
          title: `تیکت ها (${tickets.length} تیکت) `,
        }}
      >
        <TableHead>
          <TableHeadCell>شناسه تیکت</TableHeadCell>
          <TableHeadCell>توسط کاربر</TableHeadCell>
          <TableHeadCell>عنوان تیکت</TableHeadCell>
          <TableHeadCell>وضعیت پاسخگویی</TableHeadCell>
          <TableHeadCell>تاریخ ایجاد</TableHeadCell>
          <TableHeadCell></TableHeadCell>
        </TableHead>
        <TableBody>
          {tickets.map((ticket) => {
            const { classNames } = getBadgeStyles(ticket.isAnswered);

            return (
              <TableRow key={ticket.id}>
                <TableCell>{ticket.id}</TableCell>
                <TableCell>{ticket.fullName}</TableCell>
                <TableCell>{ticket.title}</TableCell>
                <TableCell>
                  <span className={classNames}>
                    {ticket.isAnswered ? "پاسخ داده شده" : "در انتظار پاسخگویی"}
                  </span>
                </TableCell>
                <TableCell>
                  {ticket.date}
                </TableCell>
                <TableCell>
                  <div className="flex w-full! items-center justify-end">
                    <Link to={`/tickets/${ticket.id}`} className="text-blue-500 flex items-center gap-1 hover:text-blue-400 underline underline-offset-1">
                    <BsMailbox className="text-xl"/>
                    <span>
                      مشاهده پیغام
                    </span>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
