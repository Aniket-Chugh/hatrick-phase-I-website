import React from "react";
import { ArrowUpRight } from "lucide-react";
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
    <section
      className="w-full text-white px-6 md:px-16 py-24"
     style={{
        background: "linear-gradient(135deg, #0a0f1a 0%, #002f25 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h3 className="text-xl italic text-gray-400 mb-4">/Services</h3>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h2 className="text-5xl sm:text-6xl md:text-5xl lg:text-8xl font-light tracking-tight leading-tight">
            Elevating Sports with{" "}
            <span className="font-semibold italic text-yellow-400">Excellence</span>
          </h2>
        </div>

        <p className="text-gray-300 max-w-2xl mb-10 text-base sm:text-lg">
          Our team specializes in world-class sports infrastructure — from stadiums and turf installations to swimming pools and gym setups. Every project is a symbol of precision engineering, premium quality, and unwavering dedication to athletic excellence.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04, rotate: 0.5 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500 backdrop-blur-sm" />

              <div className="absolute bottom-5 left-5">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-300 mt-1 max-w-xs">
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
