"use client";
import React from "react";
import { sponsors } from "@/Assets/Data";
import { motion } from "framer-motion";
export default function SponsorSection() {
  return (
    <motion.section
      className="w-full mb-14 mt-24"
      initial={{ opacity: 0, y: 50 }} // Before scroll
      whileInView={{ opacity: 1, y: 0 }} // On scroll into view
      transition={{ duration: 1.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-12">
        <h2 className="text-3xl font-semibold text-gray-700 sm:text-xl md:text-2xl lg:text-3xl">
          Our official Sponsors
        </h2>
        <div className="relative w-full h-32 overflow-hidden mt-16">
          <div className="flex animate-marquee gap-16 whitespace-nowrap">
            {sponsors.concat(sponsors).map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}`}
                className="flex-shrink-0 inline-flex items-center"
              >
                <a href={sponsor.link}>
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    width={120}
                    height={80}
                    className="w-28 h-auto object-contain cursor-pointer"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
