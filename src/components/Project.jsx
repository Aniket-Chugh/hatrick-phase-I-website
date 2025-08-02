import React, { useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Furnaces",
    image: "https://hatricksports.in/resources/images/Projects/turf2.jpg",
    color: "bg-yellow-400",
  },
  {
    title: "Central Air Conditioning",
    image: "https://hatricksports.in/resources/images/Projects/turf3.jpg",
    color: "bg-yellow-400",
  },
  {
    title: "Tankless Water Heater",
    image: "https://hatricksports.in/resources/images/Projects/turf1.jpg",
    color: "bg-yellow-400",
  },
  {
    title: "Underfloor Heating System",
    image: "https://via.placeholder.com/300x200?text=Heating",
    color: "bg-yellow-400",
  },
  {
    title: "New House Plumbing",
    image: "https://via.placeholder.com/300x200?text=Plumbing",
    color: "bg-yellow-400",
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
        slider.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(autoScroll, 30);
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
        <h3 className="text-xl italic text-gray-400 mb-4">/Projects</h3>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h2 className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl font-light tracking-tight leading-tight">
            Our <span className="font-semibold italic text-yellow-400">Pride-Built Projects</span>
          </h2>

          <a
            href="tel:+91XXXXXXXXXX"
            className="group flex items-center gap-2 text-black px-5 py-2 rounded-full mt-4 hover:bg-yellow-300 transition duration-300"
            style={{
              background: "linear-gradient(135deg, yellow 0%, #003f2f 100%)",
            }}
          >
            Call For Booking
            <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 text-yellow-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
          </a>
        </div>

        <p className="text-gray-300 max-w-2xl mb-8 text-sm sm:text-base">
          Here’s a quick glimpse of some of our successful infrastructure setups,
          reflecting top-tier engineering, durability, and aesthetic value. Each
          project is a testament to our promise of quality and commitment to excellence.
        </p>

        <div className="overflow-x-hidden py-4" ref={scrollRef}>
          <div className="flex space-x-6 w-max">
            {[...services, ...services].map((service, index) => (
              <div
                key={index}
                className="relative min-w-[260px] sm:min-w-[300px] h-[400px] rounded-[1.5rem] overflow-hidden shadow-xl bg-white/5 backdrop-blur-md hover:scale-[1.05] transition-transform duration-500 cursor-pointer"
              >
                <img
                  src={service.image}
                  alt={`Service - ${service.title}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />

                <div
                  className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-[1.5rem] z-10"
                  style={{
                    background: "linear-gradient(135deg, #0b0b13 0%, #003f2f 100%)",
                  }}
                />

                <div
                  className={`absolute bottom-2 right-2 w-12 h-12 rounded-full ${service.color} flex items-center justify-center z-20`}
                >
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <h3 className="font-semibold text-lg text-white drop-shadow-md">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    Successfully executed with precision & expertise.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
