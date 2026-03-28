import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({
  _id: id,
  productName,
  originalPrice,
  discountedPrice,
  availability,
  status,
  details,
  brand,
  type,
  tag,
  image_1,
  image_2,
  image_3,
}) => {
  return (
    <Link href={`/Product/${id}`} passHref>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: false }}
        className="bg-white cursor-pointer py-4 px-4 rounded-sm w-full flex flex-col justify-between transition-all duration-300 relative shadow-stone-300 shadow-lg hover:shadow-xl hover:shadow-4xl mb-6 border-2 border-gray-300"
      >
        {/* Status Badge */}
        {status && (
          <div className="absolute top-0 left-0 z-1 bg-[#FF5F15] text-white text-xs font-semibold px-2 py-1 rounded-br-lg">
            {status}
          </div>
        )}

        {/* Product Image */}
        <div className="flex justify-center items-center h-48 sm:h-56 md:h-64">
          <img
            src={`http://localhost:8000/uploads/${image_1}`}
            className="h-full w-auto object-contain rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-700 line-clamp-2">
            {productName}
          </h3>
          <p className="text-md text-gray-700 mt-1">Brand: {brand}</p>
          <div className="mt-2">
            {discountedPrice ? (
              <>
                <span className="text-gray-500 line-through mr-2">
                  Rs. {new Intl.NumberFormat("en-US").format(originalPrice)} .00
                </span>
                <span className="text-gray-800 font-semibold">
                  Rs. {new Intl.NumberFormat("en-US").format(discountedPrice)}{" "}
                  .00
                </span>
              </>
            ) : (
              <span className="text-gray-800 font-semibold">
                Rs.{originalPrice}.00
              </span>
            )}
          </div>
        </div>

        {/* Add To Cart Button */}
        <div className="mt-4">
          <button className="bg-[#FF5F15] hover:bg-[#e65613] cursor-pointer text-white px-4 py-2 rounded-sm w-full flex items-center justify-between transition-colors duration-300 mb-4">
            Add To Cart
            <FaShoppingCart className="text-lg" />
          </button>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
