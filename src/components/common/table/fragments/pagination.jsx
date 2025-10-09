"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

const Pagination = ({ items, itemsPerView, savePaginatedItems }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(items.length / itemsPerView);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerView;
    const endIndex = startIndex + itemsPerView;
    const paginatedItems = items.slice(startIndex, endIndex);
    savePaginatedItems(paginatedItems);
  }, [currentPage, items, itemsPerView, savePaginatedItems]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisible = 5;

    if (pageCount <= maxVisible) {
      for (let i = 1; i <= pageCount; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={clsx("pagination-button", {
              "active-tab": currentPage === i,
              "not-active-tab": currentPage !== i,
            })}
          >
            {i}
          </button>
        );
      }
    } else {
      pageNumbers.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={clsx("pagination-button", {
            "active-tab": currentPage === 1,
            "not-active-tab": currentPage !== 1,
          })}
        >
          1
        </button>
      );

      if (currentPage > 3) {
        pageNumbers.push(
          <span key="ellipsis-start" className="px-2 text-gray-600">
            ...
          </span>
        );
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(pageCount - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={clsx("pagination-button", {
              "active-tab": currentPage === i,
              "not-active-tab": currentPage !== i,
            })}
          >
            {i}
          </button>
        );
      }

      if (currentPage < pageCount - 2) {
        pageNumbers.push(
          <span key="ellipsis-end" className="px-2 text-gray-600">
            ...
          </span>
        );
      }

      pageNumbers.push(
        <button
          key={pageCount}
          onClick={() => handlePageChange(pageCount)}
          className={clsx("pagination-button", {
            "active-tab": currentPage === pageCount,
            "not-active-tab": currentPage !== pageCount,
          })}
        >
          {pageCount}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination bg-zinc-50/40" dir="rtl">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={clsx(
            "pagination-prev-button",
          {
            "pages-ended active-tab":
              currentPage === 1,
          }
        )}
      >
        قبلی
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === pageCount}
        className={clsx(
          "pagination-next-button ",
          {
            "pages-ended":
              currentPage === pageCount,
          }
        )}
      >
        بعدی
      </button>
    </div>
  );
};

export default Pagination;
