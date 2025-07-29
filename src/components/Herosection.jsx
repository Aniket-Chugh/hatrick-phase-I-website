import React, { useEffect, useRef } from "react";

export default function HeroSection() {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x = (clientX / innerWidth) * 100;
      const y = (clientY / innerHeight) * 100;

      if (bgRef.current) {
        bgRef.current.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(0, 255, 170, 0.15), rgba(5, 10, 20, 0.92) 80%)`;
      }
    };

    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    document.body.appendChild(script);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      ref={bgRef}
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-white px-6 py-16 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0f1a 0%, #002f25 100%)",
      }}
    >
      {/* Updated Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern
              id="lines-pattern"
              width="50"
              height="10"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line x1="0" y1="0" x2="0" y2="10" stroke="#00ffd5" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#lines-pattern)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
        {/* Lordicon Animation */}
        <div className="mb-10">
          <lord-icon
            src="https://cdn.lordicon.com/gkiywisz.json"
            trigger="hover"
            style={{ width: "250px", height: "250px" }}
          ></lord-icon>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Building{" "}
          <span className="bg-gradient-to-r from-teal-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
            World-Class
          </span>{" "}
          Sports Infrastructure
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-10">
          From design to execution, we deliver premium sports surfaces and infrastructure
          for schools, stadiums, academies, and commercial spaces. Let’s bring your vision to life.
        </p>

        {/* Service Tags */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Synthetic Courts",
            "Running Tracks",
            "Indoor Arenas",
            "Turf Installation",
            "Lighting Systems",
            "Sports Flooring",
            "Turnkey Solutions",
          ].map((service, index) => (
            <span
              key={index}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all cursor-pointer
                ${index % 2 === 0
                  ? "border-teal-400 text-teal-300 hover:bg-teal-400 hover:text-black"
                  : "border-gray-600 text-gray-400 hover:bg-gray-400 hover:text-black"
                }`}
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
