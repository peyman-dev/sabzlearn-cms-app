import React, { useState } from "react";
import Header from "../../components/templates/home/header/index.jsx";
import Summaries from "../../components/templates/home/summaries/index.jsx";
import Table from "../../components/common/table/index.jsx";
import {
  classNames,
  items,
} from "../../components/common/table/settings/utils.js";
import TableRow from "../../components/common/table/fragments/table-row/index.jsx";
import clsx from "clsx";
import TableCell from "../../components/common/table/fragments/table-row/table-cell.jsx";
import TableHead from "../../components/common/table/fragments/table-head/index.jsx";
import TableHeadCell from "../../components/common/table/fragments/table-head/table-head-cell.jsx";
import TableBody from "../../components/common/table/fragments/table-body/index.jsx";
import { FaEllipsis } from "react-icons/fa6";
import { FaEllipsisV } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { Link } from "react-router-dom";

const HomePage = () => {
  const headRows = ["شناسه", "عنوان محصول", "وضعیت نمایش", "قیمت", ""];
  const [paginatedItems, setPaginatedItems] = useState(items)


  console.log(paginatedItems)


  /* --------------------------- توجه بفرمایید --------------------------- */
  //? اگر می‌خواهید در هدرِِ تِیبل دکمه های مدیریتی داشته باشید, محتوای خود را وارد کامپوننت زیر کنید.
  //? !! و اگر نه می‌خواید از فیلتر/سرچ استفاده بفرمایید - آن را ارسال نکنید

  const Buttons = () => {
    return (
      <>
        <Link
          to={"/products"}
          className="underline hover:text-blue-400 text-blue-500 flex-center gap-1"
        >
          <span>صفحه محصولات</span>
          <MdOpenInNew />
        </Link>
      </>
    );
  };

  return (
    <>
      <Header />
      <Summaries />
      <div className="pb-20">
        <Table
          headRows={headRows}
          header={{
            title: "لیست محصولات",
            Buttons,
          }}
        pagination={{
          initialItems: items,
          setPaginatedItems,
          itemsPerView: 10
        }}
        >
          {/* --------------------------------- Header --------------------------------- */}
          <TableHead>
            {headRows.map((row) => (
              <TableHeadCell key={row}>{row}</TableHeadCell>
            ))}
          </TableHead>
          {/* --------------------------------- Header --------------------------------- */}

          {/* --------------------------------- Body --------------------------------- */}
          <TableBody>
            {paginatedItems.map((row) => (
              <TableRow>
                <TableCell>{String(row.id).slice(0, 10)}...</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>
                  <p
                    className={clsx(
                      row.isPublished
                        ? classNames.isPublished
                        : classNames.isPrivate,
                      classNames.defaultBadge
                    )}
                  >
                    {row.isPublished ? "عمومی" : "خصوصی"}
                  </p>
                </TableCell>
                <TableCell>
                  <span>{row.price.toLocaleString("fa-IR")}</span>
                  تومان
                </TableCell>
                <TableCell>
                  <button className="cursor-pointer text-gray-500">
                    <FaEllipsisV />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          {/* --------------------------------- Body --------------------------------- */}
        </Table>
      </div>
    </>
  );
};

export default HomePage;
