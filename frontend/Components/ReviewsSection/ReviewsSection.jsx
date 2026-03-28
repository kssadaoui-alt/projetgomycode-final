"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa6";
import { reviews } from "@/Assets/Data";
import { motion } from "framer-motion";
const ReviewsSection = () => {
  return (
    <motion.div
      className="w-full mb-14 mt-20"
      initial={{ opacity: 0, y: 50 }} // Before scroll
      whileInView={{ opacity: 1, y: 0 }} // On scroll into view
      transition={{ duration: 1.6, ease: "easeInOut" }}
      viewport={{ once: false }}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-6">
          <h2 className="text-3xl font-semibold text-gray-700 sm:text-xl md:text-2xl lg:text-3xl">
            What Our Customers Say
          </h2>
        </div>
        <div className="mt-8">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            loop={true}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="cursor-pointer bg-white drop-shadow-xl border-2 border-gray-300 p-6 rounded-lg text-center">
                  <div className="flex justify-center mb-4 gap-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-[#FF5F15] text-lg" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{review.review}"</p>
                  <h4 className="mt-4 font-semibold text-lg">
                    - {review.name}
                  </h4>
                </div>
                <div className="pb-12"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewsSection;
