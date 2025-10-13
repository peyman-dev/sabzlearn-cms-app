import { useState } from "react";
import { TableContext } from "./context";

export const TableProvider = ({ children }) => {
  const [headRows, setHeadRows] = useState();

  console.log(headRows)

  return (
    <TableContext.Provider
      value={{
        setHeadRows,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
