import React from "react";
import { motion } from "framer-motion";

const clients = [
  {
    name: "Elite Sports Club",
    logo: "https://hatricksports.in/resources/images/Projects/turf2.jpg",
    message: "Their turf setup exceeded expectations. Truly professional!",
  },
  {
    name: "FitZone Gym",
    logo: "https://hatricksports.in/resources/images/Projects/turf3.jpg",
    message: "Our gym transformation was seamless with their expert team.",
  },
  {
    name: "AquaSplash Pools",
    logo: "https://hatricksports.in/resources/images/Projects/turf1.jpg",
    message: "They delivered a world-class swimming facility on time.",
  },
  {
    name: "Track Masters",
    logo: "https://via.placeholder.com/300x200?text=Track+Masters",
    message: "Reliable team for premium track installations.",
  },
  {
    name: "Cycle Pro Arena",
    logo: "https://via.placeholder.com/300x200?text=Cycling+Arena",
    message: "They built India’s first high-speed velodrome flawlessly.",
  },
  {
    name: "Zenith School",
    logo: "https://via.placeholder.com/300x200?text=School+Sports",
    message: "Our students love the new multi-sport playground!",
  },
  {
    name: "National Sports Hub",
    logo: "https://via.placeholder.com/300x200?text=Sports+Hub",
    message: "An exceptional team that understands world-class delivery.",
  },
  {
    name: "Victory Wellness Center",
    logo: "https://via.placeholder.com/300x200?text=Wellness+Center",
    message: "Complete transformation of our fitness area. Loved it!",
  },
];

export default function ClientSection() {
  return (
    <section className="w-full px-6 md:px-16 py-32 bg-gradient-to-br from-[#e3f8ec] via-[#d0f1e3] to-[#c0ebd9] text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h3 className="text-lg italic text-yellow-700 mb-3 tracking-wide">/Clients</h3>

        {/* Headline */}
        <h2 className="text-4xl sm:text-7xl font-light tracking-tight leading-tight mb-8">
          Trusted by <span className="font-semibold italic text-[#F4A300]">Champions</span>
        </h2>

        {/* Description */}
        <p className="text-gray-800 max-w-2xl mb-12 text-base sm:text-lg leading-relaxed">
          We've partnered with some of the most respected names in sports, fitness, and
          wellness. Here’s what they say about us.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-white border border-yellow-100 rounded-2xl p-6 flex flex-col items-center text-center shadow hover:shadow-xl transition"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-28 h-28 object-cover rounded-xl mb-4 shadow"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{client.name}</h3>
              <p className="text-sm text-gray-600 italic">"{client.message}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
