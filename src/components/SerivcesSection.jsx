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
    image: "https://via.placeholder.com/300x200?text=AC",
    color: "bg-yellow-400",
  },
  {
    title: "Tankless Water Heater",
    image: "https://via.placeholder.com/300x200?text=Heater",
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
      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
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
        <h3 className="text-xl italic text-gray-400 mb-4">/Services</h3>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
<h2 className="text-3xl sm:text-6xl md:text-5xl lg:text-8xl font-light tracking-tight">
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

        <div
          className="overflow-x-hidden py-4"
          ref={scrollRef}
        >
          <div className="flex space-x-6 w-max">
            {[...services, ...services].map((service, index) => (
           <div className="relative min-w-[240px] sm:min-w-[280px] h-[300px] rounded-[1.5rem] overflow-hidden shadow-lg bg-white/5 backdrop-blur-md">
  <img
    src={service.image}
    alt={service.title}
    className="absolute inset-0 w-full h-full object-cover opacity-30"
  />

  <div
    className="absolute bottom-0 right-0  w-16 h-16 rounded-tl-[1.5rem] z-10"
    style={{
      background: "linear-gradient(135deg, #0a0f1a 0%, #003f2f 100%)"
    }}
  />

  <div
    className={`absolute bottom-2 right-2 w-12 h-12 rounded-full ${service.color} flex items-center justify-center z-20`}
  >
    <ArrowUpRight className="w-4 h-4 text-black" />
  </div>

  <div className="relative z-10 h-full flex flex-col justify-end p-4">
    <h3 className=" font-semibold text-sm text-white">{service.title}</h3>
  </div>
</div>



            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
