"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "../ProductCard/ProductCard";
import { AppContext } from "@/app/Context/AppContext";
import { useContext } from "react";

const ProductSlider = ({ tag_category, related_type }) => {
  const { productsList: ProductsList } = useContext(AppContext);
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={1.2} // Default for mobile
      centeredSlides={false}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        500: {
          slidesPerView: 1,
          centeredSlides: false,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 1,
          centeredSlides: false,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      className="w-full py-4"
    >
      {ProductsList.filter((product) => {
        // Ensure the comparison is case-insensitive
        const typeMatch = product.type === related_type;
        const tagMatch = product.tag === tag_category;
        return typeMatch || tagMatch;
      }).map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard {...product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
