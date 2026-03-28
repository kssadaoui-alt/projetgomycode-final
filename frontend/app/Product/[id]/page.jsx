"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState, useContext } from "react";
import Nav from "@/Components/Nav/Nav";
import CartContext from "@/app/Context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import Footer from "@/Components/Footer/Footer";
import ProductPageSlider from "@/Components/ProductPageSlider/ProductPageSlider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RelatedProductsSection from "@/Components/RelatedProductsSerction/RelatedProductsSection";
import { AppContext } from "@/app/Context/AppContext";

const Page = () => {
  const { id } = useParams();
  const { productsList } = useContext(AppContext);
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  // Add to Cart Functionality
  const addItemToCart = (product) => {
    addToCart(product);
    toast.success("Item added to cart");
  };

  // Fetch Product Data
  useEffect(() => {
    const productData = productsList.find(
      (product) => String(product._id) === String(id)
    );

    if (productData) {
      setProduct(productData);
    }
  }, [id, productsList]);

  // Show fallback if product not found
  if (!product) {
    return null;
  }

  return (
    <div>
      <Nav />
      <ToastContainer theme="dark" />
      <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-12 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Left Column - Product Slider */}
          <ProductPageSlider product={product} />
          {/* Right Column */}
          <div className="bg-transparent p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
              {product.productName}
            </h2>
            <h3 className="text-xl text-orange-500 mt-5 mb-3 font-bold">
              {product.discountedPrice ? (
                <>
                  <span className="text-gray-500 line-through mr-2">
                    Rs.{product.originalPrice}.00
                  </span>
                  <span className="text-orange-500 font-semibold">
                    Rs.{product.discountedPrice}.00
                  </span>
                </>
              ) : (
                <span className="text-gray-800 font-semibold">
                  Rs.{product.originalPrice}.00
                </span>
              )}
            </h3>
            <div className="flex gap-6 w-full">
              <span className="text-lg">
                Brand: <span className="text-orange-500">{product.brand}</span>
              </span>
              <span className="text-lg">
                Availability:{" "}
                <span className="text-orange-500">{product.availability}</span>
              </span>
            </div>
            <p className="text-gray-700 mt-4">
              {product.details || "No description available for this product."}
            </p>
            <button
              onClick={() => addItemToCart(product)}
              className="bg-[#FF5F15] hover:bg-[#e65613] cursor-pointer text-white px-8 py-2 mt-4 rounded-sm gap-6 flex items-center justify-between transition-colors duration-300 mb-4"
            >
              Add To Cart
              <FaShoppingCart className="text-lg" />
            </button>
          </div>
        </div>

        <div className="mt-14 text-start">
          <h1 className="text-3xl mb-5 text-orange-600">Specifications</h1>
          <p>{product.details}</p>
        </div>
      </div>

      <div className="my-5">
        <RelatedProductsSection related_type={product.type} />
      </div>

      <Footer />
    </div>
  );
};

export default Page;
