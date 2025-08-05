import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Stadium Construction",
    image: "https://hatricksports.in/resources/images/Projects/turf2.jpg",
  },
  {
    title: "Football Turf Setup",
    image: "https://hatricksports.in/resources/images/Projects/turf3.jpg",
  },
  {
    title: "Swimming Pools",
    image: "https://hatricksports.in/resources/images/Projects/turf1.jpg",
  },
  {
    title: "Gym Setup",
    image: "https://via.placeholder.com/300x200?text=Gym+Setup",
  },
  {
    title: "Athletic Tracks",
    image: "https://via.placeholder.com/300x200?text=Athletic+Tracks",
  },
  {
    title: "Cycling Velodrome",
    image: "https://via.placeholder.com/300x200?text=Cycling+Velodrome",
  },
];

export default function SportsServicesSection() {
  return (
    <section className="w-full px-6 md:px-16 py-32 bg-gradient-to-br from-[#f0fdf4] via-[#ecfdf5] to-[#f6fff9] text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h3 className="text-lg italic text-green-600 mb-3">/Services</h3>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl font-light tracking-tight leading-tight mb-8">
          Elevating Sports with{" "}
          <span className="font-semibold italic text-[#F4A300]">Excellence</span>
        </h2>

        {/* Description */}
        <p className="text-gray-700 max-w-2xl mb-12 text-base sm:text-lg leading-relaxed">
          We craft world-class sports infrastructure — from stadiums and turf setups
          to pools and velodromes. Every project is precision-built with premium materials and care.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative rounded-2xl overflow-hidden bg-white border border-green-100 shadow-md hover:shadow-lg transition"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-white/30 backdrop-blur-sm hover:bg-white/50 transition duration-500" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Engineered with precision. Built to inspire performance.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
