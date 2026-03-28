import React from "react";
import { MdMenu, MdExpandMore, MdExpandLess } from "react-icons/md";
import { filters } from "@/Assets/Data";

const MobileMenu = ({
  isOpen,
  setIsOpen,
  setOpenFilter,
  openFilter,
  selectedFilters,
  handleFilterChange,
}) => {
  return (
    <div className="md:hidden w-full flex flex-col items-center mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg w-full text-center cursor-pointer"
      >
        <MdMenu size={20} />
        <span>Filters</span>
      </button>
      {isOpen && (
        <div className="mt-2 bg-white p-4 rounded-lg shadow-lg border w-full">
          {filters.map((filter, index) => (
            <div key={index}>
              <div
                onClick={() =>
                  setOpenFilter(openFilter === filter.name ? null : filter.name)
                }
                className={`cursor-pointer mb-4 flex items-center justify-between text-lg pb-2 px-2 py-2 rounded-md hover:text-[#FF5F15] ${
                  openFilter === filter.name ? "text-orange-600" : ""
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
                <ul className="pl-4 mb-2 text-sm text-gray-600">
                  {filter.options.map((option, subIndex) => (
                    <li
                      key={subIndex}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="cursor-pointer"
                        checked={selectedFilters[filter.name]?.includes(option)}
                        onChange={() => handleFilterChange(filter.name, option)}
                      />
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
