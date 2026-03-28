// "use client";
// import React, { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";

// // Create context
// const ProductContext = createContext();

// export const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:8000/api/get-products"
//       );
//       setProducts(response.data);
//     } catch (err) {
//       console.error("Failed to fetch products:", err);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <ProductContext.Provider value={{ products }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export const useProducts = () => useContext(ProductContext);
