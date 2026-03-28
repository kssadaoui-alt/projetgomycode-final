import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import ProductSlider from "../ProductSlider/ProductSlider";
import Link from "next/link";
import { motion } from "framer-motion";
const PopularProductSection = () => {
  return (
    <motion.div
      className="w-full my-14"
      initial={{ opacity: 0, y: 50 }} // Before scroll
      whileInView={{ opacity: 1, y: 0 }} // On scroll into view
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-6">
          <h2 className="text-3xl font-semibold text-gray-700 sm:text-xl md:text-2xl lg:text-3xl">
            Featured Products
          </h2>
          <Link
            href="/Shop"
            className="text-lg text-[#FF5F15] hover:text-[#FF5F15] transition-all duration-400 font-semibold hover:underline flex items-center gap-2"
          >
            View All <IoIosArrowForward />
          </Link>
        </div>
        <div className="mt-12">
          <ProductSlider tag_category="Featured" related_type="Featured" />
        </div>
      </div>
    </motion.div>
  );
};

export default PopularProductSection;
