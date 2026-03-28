"use client";
import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [searchData, setSearchData] = useState();
  const [productsList, setProductsList] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/get-products"
      );
      setProductsList(response.data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Removed console.log for Search Bar Visible

  return (
    <AppContext.Provider
      value={{
        searchBarVisible,
        setSearchBarVisible,
        searchData,
        setSearchData,
        productsList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
