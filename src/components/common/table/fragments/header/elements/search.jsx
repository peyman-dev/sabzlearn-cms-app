import React from "react";
import { HiSearch } from "react-icons/hi";

const Search = () => {
  const handleSearch = (value) => {
    console.log(value);
  };
  return (
    <div className="relative w-[256px] flex items-center">
      <HiSearch className="absolute" />
      <input
        className="absolute size-full outline-none px-8 text-sm left-0 right-0"
        placeholder="جستجو کنید"
        onChange={({ target }) => {
          handleSearch(target.value);
        }}
      />
    </div>
  );
};

export default Search;
