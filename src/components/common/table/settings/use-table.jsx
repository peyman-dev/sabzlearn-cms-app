import { use } from "react";
import { TableContext } from "./context";

const useTable = () => {
  return use(TableContext);
};

export default useTable;
