import React, { useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Furnaces",
    image: "https://via.placeholder.com/300x200?text=Furnace",
    color: "bg-yellow-400",
  },
  {
    title: "Central Air Conditioning",
    image: "https://via.placeholder.com/300x200?text=AC",
    color: "bg-[#2c2c2c]",
  },
  {
    title: "Tankless Water Heater",
    image: "https://via.placeholder.com/300x200?text=Heater",
    color: "bg-[#2c2c2c]",
  },
  {
    title: "Underfloor Heating System",
    image: "https://via.placeholder.com/300x200?text=Heating",
    color: "bg-[#2c2c2c]",
  },
  {
    title: "New House Plumbing",
    image: "https://via.placeholder.com/300x200?text=Plumbing",
    color: "bg-[#2c2c2c]",
  },
];

export default function ServicesSection() {
  const scrollRef = useRef(null);


  useEffect(() => {
  const slider = scrollRef.current;
  let scrollAmount = 0;
  const slideSpeed = 1;

  const autoScroll = () => {
    if (slider) {
      scrollAmount += slideSpeed;
      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
      }
      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const interval = setInterval(autoScroll, 30); // Speed of animation
  return () => clearInterval(interval);
}, []);


  return (
    <section
      className="w-full text-white px-6 md:px-16 py-24"
      style={{
        background: "linear-gradient(135deg, #0b0b13 0%, #003f2f 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h3 className="text-xl italic text-gray-400 mb-4">/Services</h3>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h2 className="text-8xl font-light tracking-tight">
            Certified <span className="font-semibold italic">Excellence</span>
          </h2>
          <div className="flex gap-6 text-sm font-medium mt-2 md:mt-0">
            <a href="#" className="text-yellow-400 hover:underline">
              View All Services →
            </a>
            <a href="#" className="text-yellow-400 hover:underline">
              Call For Booking →
            </a>
          </div>
        </div>

        {/* Auto Sliding Cards */}
        <div
          className="overflow-x-hidden py-4"
          ref={scrollRef}
        >
          <div className="flex space-x-6 w-max">
            {[...services, ...services].map((service, index) => (
              <div
                key={index}
                className="relative min-w-[240px] sm:min-w-[280px] h-[300px] rounded-2xl overflow-hidden shadow-lg bg-white/5 border border-white/10 backdrop-blur-md"
              >
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />

                {/* Content */}
                <div className="relative z-10 p-4 h-full flex items-end justify-between">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>

                {/* Floating Arrow Button */}
                <div
                  className={`absolute -bottom-4 -right-4 w-10 h-10 rounded-full ${service.color} flex items-center justify-center z-20 shadow-xl`}
                >
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
