"use client";
import { useContext, useState } from "react";
import { MdClose } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { AppContext } from "@/app/Context/AppContext";

const SearchBar = () => {
  const { searchBarVisible, setSearchBarVisible, setSearchData, searchData } =
    useContext(AppContext);

  if (!searchBarVisible) return null;

  return (
    <div className="flex items-center w-full p-2 mb-6  ">
      <div className="relative w-full ">
        <input
          type="text"
          placeholder="Search..."
          value={searchData || ""}
          onChange={(e) => setSearchData(e.target.value)}
          className="w-full pl-12 py-2 border border-gray-400  rounded-sm focus:outline-none focus:border-2 focus:border-gray-400 text-gray-700"
        />
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
        {searchData && (
          <MdClose
            className="absolute -right-8 ml-20 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg cursor-pointer"
            onClick={() => setSearchData("")}
          />
        )}
        <MdClose
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg cursor-pointer"
          onClick={() => setSearchBarVisible(false)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
