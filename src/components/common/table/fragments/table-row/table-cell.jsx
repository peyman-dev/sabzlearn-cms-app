import clsx from "clsx";
import React from "react";

const TableCell = ({ children, className }) => {
  return <div className={clsx(className, )}>{children}</div>;
};

export default TableCell;
