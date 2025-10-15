import clsx from "clsx";
import React from "react";

const TableRow = ({ children, className, onClick }) => {
  return (
    <div
    onClick={onClick}
      className={clsx(
        "flex *:h-14 *:flex *:items-center text-sm items-center *:px-3 flex-1 shrink! *:flex-1 *:shrink even:bg-zinc-100",
        className
      )}
    >
      {children}
    </div>
  );
};

export default TableRow;
