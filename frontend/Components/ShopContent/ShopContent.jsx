"use client";
import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import SearchBar from "../SearchBar/SearchBar";
import { MdOutlineError } from "react-icons/md";
const ShopContent = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Slice Product For Pagination
  const slicedProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Create Pagination Controls
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex-1  px-4 rounded-lg shadow-lg">
      <SearchBar />
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {slicedProducts.map((product, index) => {
          return <ProductCard key={index} {...product} />;
        })}
      </div>
      <div className="w-ful bg-orange-200">
        {slicedProducts.length === 0 ? (
          <div>
            <h1 className="text-xl py-4 rounded-xl text-center flex items-center gap-2 justify-center">
              <MdOutlineError /> Sorry! We were not able to find any products
              for your desired Choice!
            </h1>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className={`flex w-full justify-center items-center space-x-4 my-8 ${
          slicedProducts.length === 0 ? "hidden" : ""
        }`}
      >
        <button
          className=" bg-gray-200  text-gray-600 py-2 px-6 rounded-xl hover:bg-gray-300 cursor-pointer"
          disabled={currentPage === 1}
          onClick={prevPage}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-lg cursor-pointer ${
              currentPage === index + 1
                ? "bg-orange-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="bg-gray-200   text-gray-600 py-2 px-6 rounded-xl hover:bg-gray-300 cursor-pointer"
          disabled={currentPage === totalPages}
          onClick={nextPage}
        >
          Forward
        </button>
      </div>
    </div>
  );
};

export default ShopContent;
