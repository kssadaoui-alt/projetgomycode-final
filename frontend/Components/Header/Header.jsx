"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { slides } from "@/Assets/Data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../app/globals.css";

const HeaderSlider = () => {
  return (
    <div className="-mt-4 w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 bg-white">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={60}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col md:flex-row justify-between w-full items-center gap-8 px-4 md:px-8">
                {/* Left Text Section */}
                <div className="max-w-lg text-center md:text-left">
                  <p className="text-orange-500 sm:text-[8px] md:text-lg lg:text-lg font-semibold mb-3">
                    {slide.special}
                  </p>

                  <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl font-semibold leading-tight text-gray-700 capitalize">
                    {slide.title}
                  </h2>

                  <p className="text-gray-600 mt-4 sm:text-sm md:text-md lg:text-lg">
                    {slide.description}
                  </p>
                  <div className="mt-8 flex flex-col  sm:flex-row gap-4 sm:justify-start justify-center">
                    <a
                      href={slide.link}
                      className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600"
                    >
                      {slide.ctaText}
                    </a>
                  </div>
                </div>

                {/* Right Image Section */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
                  <img
                    src={slide.image}
                    alt="Product"
                    className="w-[90%] md:w-[75%] h-auto object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <div className="pb-16"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeaderSlider;
