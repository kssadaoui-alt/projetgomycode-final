"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { motion } from "framer-motion";
const ProductPageSlider = ({ product }) => {
  const [zoomStyle, setZoomStyle] = useState({});
  const containerRef = useRef(null);

  const images = [product.image_1, product.image_2, product.image_3];

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();

    // Calculate mouse position percentage
    const x = ((e.clientX - containerRect.left) / containerRect.width) * 100;
    const y = ((e.clientY - containerRect.top) / containerRect.height) * 100;

    setZoomStyle({
      transform: "scale(1.5)",
      transformOrigin: `${x}% ${y}%`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transform: "scale(1)",
      transition: "transform 0.2s ease-in",
    });
  };
  return (
    <div
      className="relative overflow-hidden cursor-zoom-in"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Navigation]}
        loop={true}
        className="h-64 md:h-96"
      >
        {images.map((img, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center "
          >
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, easeOut: "easeInOut" }}
              viewport={{ once: false }}
              src={`http://localhost:8000/uploads/${img}`}
              alt={`Product ${index + 1}`}
              className="object-contain h-full w-full p-4 transition-transform duration-200"
              style={zoomStyle}
            />
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className="swiper-button-prev bg-white/80 hover:bg-white rounded-full p-2 shadow-md">
          <FaChevronLeft className="text-gray-700" size={16} />
        </div>
        <div className="swiper-button-next bg-white/80 hover:bg-white rounded-full p-2 shadow-md">
          <FaChevronRight className="text-gray-700" size={16} />
        </div>
      </Swiper>
    </div>
  );
};

export default ProductPageSlider;
