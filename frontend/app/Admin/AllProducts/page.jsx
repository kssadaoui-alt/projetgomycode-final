"use client";

import React from "react";
import { useContext, useState } from "react";
import { MdClose } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { AppContext } from "@/app/Context/AppContext";
import ProductCard from "@/Components/ProductCard/ProductCard";

const page = () => {
  const { productsList } = useContext(AppContext);
  const { searchBarVisible, setSearchData, searchData } =
    useContext(AppContext);

  // Filter products based on search input
  const filteredProducts = productsList.filter((product) =>
    searchData
      ? product.productName.toLowerCase().includes(searchData.toLowerCase())
      : true
  );
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-8">
      {/* Search Bar */}
      <div className="flex items-center justify-center w-full mb-8">
        <div className="relative w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search..."
            value={searchData || ""}
            onChange={(e) => setSearchData(e.target.value)}
            className="w-full pl-12 py-2 border border-gray-400 rounded-sm focus:outline-none focus:border-gray-600 text-gray-700"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
          {searchData && (
            <MdClose
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg cursor-pointer"
              onClick={() => setSearchData("")}
            />
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} {...product} className="w-full" />
        ))}

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-600 col-span-full">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default page;
