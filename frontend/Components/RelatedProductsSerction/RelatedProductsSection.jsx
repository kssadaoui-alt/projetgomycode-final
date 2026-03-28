import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import ProductSlider from "../ProductSlider/ProductSlider";
import { motion } from "framer-motion";
const RelatedProductsSection = ({ related_type }) => {
  return (
    <motion.div
      className="w-full mb-14 mt-24"
      initial={{ opacity: 0, y: 50 }} // Before scroll
      whileInView={{ opacity: 1, y: 0 }} // On scroll into view
      transition={{ duration: 2.5, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-12">
        <div className="flex justify-center items-center py-6">
          <h2 className="text-3xl text-center font-semibold text-gray-700 sm:text-xl md:text-2xl lg:text-3xl">
            Related Products
          </h2>
        </div>
        <div className="mt-12">
          <ProductSlider related_type={related_type} />
        </div>
      </div>
    </motion.div>
  );
};

export default RelatedProductsSection;
