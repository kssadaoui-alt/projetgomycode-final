"use client";

import React, { useContext, useEffect, useState } from "react";
import products from "@/Assets/Products.assets";
import ShopContent from "../ShopContent/ShopContent";
import MobileMenu from "./MobileMenu";
import SideBar from "./SideBar";
import { AppContext } from "@/app/Context/AppContext";
const ShopSideBar = ({}) => {
  const { productsList } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(null);
  const { searchData, searchBarVisible, setSearchBarVisible } = useContext(AppContext);

  const [selectedFilters, setSelectedFilters] = useState({
    Availability: [],
    Brands: [],
    Type: [],
  });
  const [filteredProducts, setFilteredProducts] = useState(productsList);

  useEffect(() => {
    setSearchBarVisible(true);
  }, [setSearchBarVisible]);

  // Handle filter selection
  const handleFilterChange = (filterName, option) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      if (newFilters[filterName].includes(option)) {
        newFilters[filterName] = newFilters[filterName].filter(
          (item) => item !== option
        );
      } else {
        newFilters[filterName] = [...newFilters[filterName], option];
      }
      return newFilters;
    });
  };

  // Filter products based on selected filters
  useEffect(() => {
    const filtered = productsList.filter((product) => {
      // Availability filter
      if (
        selectedFilters.Availability.length > 0 &&
        !selectedFilters.Availability.includes(product.availability)
      ) {
        return false;
      }

      // Type Filter
      if (
        selectedFilters.Type.length > 0 &&
        !selectedFilters.Type.includes(product.type)
      ) {
        return false;
      }

      // Brand filter
      if (
        selectedFilters.Brands.length > 0 &&
        !selectedFilters.Brands.some((brand) =>
          product.brand.trim().toLowerCase().includes(brand.toLowerCase())
        )
      ) {
        return false;
      }

      // Search Filter
      if (searchData && searchBarVisible) {
        return product.name.toLowerCase().includes(searchData.toLowerCase());
      }
      return true;
    });

    setFilteredProducts(filtered);
  }, [selectedFilters, searchData, searchBarVisible]);

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedFilters({
      Availability: [],
      Brands: [],
      Type: [],
    });
  };

  return (
    <>
      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        openFilter={openFilter}
        setOpenFilter={setOpenFilter}
        handleFilterChange={handleFilterChange}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />

      {/* Desktop Side Bar */}
      <SideBar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        openFilter={openFilter}
        setOpenFilter={setOpenFilter}
        handleFilterChange={handleFilterChange}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        clearAllFilters={clearAllFilters}
      />
      {/* Main Content Page */}
      <ShopContent products={filteredProducts} />
    </>
  );
};

export default ShopSideBar;
