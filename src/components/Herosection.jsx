import React, { useEffect, useRef } from "react";
import * as THREE from 'three';

export default function HeroSection() {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x = (clientX / innerWidth) * 100;
      const y = (clientY / innerHeight) * 100;

      if (bgRef.current) {
        bgRef.current.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(0, 255, 120, 0.15), rgba(0, 0, 0, 0.9) 80%)`;
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
        background: "linear-gradient(135deg, #0a0a0a 0%, #003300 100%)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern
              id="diagonal-lines"
              x="0"
              y="0"
              width="50"
              height="3"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(-45)"
            >
              <line x1="0" y1="0" x2="0" y2="10" stroke="#00ff83" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>
      </div>

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
          Building <span className="text-gray-400">World-Class</span> Sports Infrastructure
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-10">
          From design to execution, we deliver premium sports surfaces and infrastructure for schools, stadiums,
          academies, and commercial spaces. Let’s bring your vision to life.
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
              className={`px-5 py-2 rounded-full text-sm font-semibold border ${
                index % 2 === 0
                  ? "border-[#00ff83] text-[#00ff83]"
                  : "border-gray-500 text-gray-400"
              } hover:bg-[#00ff83] hover:text-black transition-colors cursor-pointer`}
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
