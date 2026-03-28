"use client";

import React from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { filters } from "@/Assets/Data";

const SideBar = ({
  setOpenFilter,
  openFilter,
  selectedFilters,
  handleFilterChange,
  clearAllFilters,
}) => {
  return (
    <div className="hidden  md:block w-1/5 bg-white text-gray-600 p-4 rounded-lg shadow-lg border-2 border-gray-300">
      <h2 className="text-xl mb-6 font-semibold text-gray-700">
        Sort & Filters
      </h2>
      {filters.map((filter, index) => (
        <div key={index} className="mb-4">
          <div
            onClick={() =>
              setOpenFilter(openFilter === filter.name ? null : filter.name)
            }
            className={`cursor-pointer flex items-center justify-between text-lg border-b pb-2 px-2 py-2 rounded-md hover:text-[#FF5F15] ${
              openFilter === filter.name ? "border-b border-orange-600" : ""
            }`}
          >
            {filter.name}
            {openFilter === filter.name ? (
              <MdExpandLess className="text-orange-600" />
            ) : (
              <MdExpandMore />
            )}
          </div>
          {openFilter === filter.name && (
            <ul className="pl-2 pt-2 text-md">
              {filter.options.map((option, subIndex) => (
                <li
                  key={subIndex}
                  className="flex items-center gap-2 hover:text-[#FF5F15] cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="cursor-pointer w-4 text-orange-400 hover:text-[#FF5F15] checked:bg-orange-600 active:text-[#FF5F15] active:bg-orange-600"
                    checked={selectedFilters[filter.name]?.includes(option)}
                    onChange={() => handleFilterChange(filter.name, option)}
                  />
                  <span>{option}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <button
        className="mt-4 text-orange-600 hover:underline cursor-pointer"
        onClick={clearAllFilters}
      >
        Clear all filters
      </button>
    </div>
  );
};

export default SideBar;
