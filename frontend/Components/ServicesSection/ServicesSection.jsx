import React from "react";
import { BsTruck } from "react-icons/bs";
import { BsShieldCheck } from "react-icons/bs";
import { RiUserSettingsLine } from "react-icons/ri";
import { motion } from "framer-motion";
const ServicesSection = () => {
  const cards = [
    {
      title: "Secure Payment Options",
      description:
        "We offer a variety of secure payment methods, including credit/debit cards, PayPal, and more, to ensure a smooth and safe shopping experience.",
      icon: <BsShieldCheck />,
    },
    {
      title: "Free Shipping",
      description:
        "Enjoy free shipping on all orders, no matter the size or location, within Sri Lanka.",
      icon: <BsTruck />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We provide round-the-clock customer support to assist you with any questions or issues regarding your purchases.",
      icon: <RiUserSettingsLine />,
    },
  ];
  return (
    <motion.div
      className="w-full my-16 "
      initial={{ opacity: 0, y: 50 }} // Before scroll
      whileInView={{ opacity: 1, y: 0 }} // On scroll into view
      transition={{ duration: 1.8, ease: "easeIn" }}
      viewport={{ once: false }}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-6">
          <h2 className="text-3xl font-semibold text-gray-700 sm:text-xl md:text-2xl lg:text-3xl">
            What We Offer
          </h2>
        </div>
        <div className=" mt-8">
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <div
                key={index}
                className="cursor-pointer bg-white drop-shadow-xl border-2 border-gray-300 text-center shadow-lg rounded-lg p-5 flex flex-col items-center justify-center  py-8"
              >
                <span className="text-6xl mb-3">{card.icon}</span>
                <h2 className="text-xl font-semibold my-2">{card.title}</h2>
                <p className="text-gray-600 mt-2">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;
