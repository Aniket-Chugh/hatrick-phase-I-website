import React from "react";

export default function AboutUsSection() {
  return (
    <section
      className="w-full  px-6 md:px-16 py-24 bg-gradient-to-br from-[#f0fdf4] via-[#ecfdf5] to-[#f6fff9] text-gray-800 "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="relative z-10">
          <h3 className="text-lg md:text-xl italic text-green-700 mb-4 tracking-wide">
            /About Us
          </h3>

          <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight italic mb-6 text-gray-800">
            We <span className="font-semibold text-green-900">engineer</span> sports dreams — from{" "}
            <em className="text-green-700 font-medium">gritty turf</em> to{" "}
            <em className="text-green-700 font-medium">elite arenas</em>.
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            At{" "}
            <span className="font-semibold bg-gradient-to-r from-teal-500 via-green-400 to-yellow-400 bg-clip-text text-transparent">
              Hattrick Sports
            </span>
            , we turn your vision into top-tier sports experiences — with quality,
            speed, and purpose built into every project.
          </p>

          <button className="mt-6 inline-flex items-center px-6 py-2 bg-[#F4A300] hover:bg-[#e39400] text-black text-sm rounded-full transition group shadow hover:shadow-lg">
            Learn more
            <span className="ml-2 group-hover:translate-x-1 transition-transform">↗</span>
          </button>
        </div>

        {/* Right Section */}
        <div className="relative">
          {/* Optional Background Number */}
          <div className="absolute -top-10 -right-4 text-[120px] font-extrabold text-green-700/10 blur-sm select-none pointer-events-none z-0">
            24
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-green-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-green-600 mb-2">
                Our Vision
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Redefining sports infrastructure with sustainable, performance-driven innovation.
              </p>
            </div>

            <div className="bg-white border border-green-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h4 className="text-lg font-semibold text-green-600 mb-2">
                Core Values
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Commitment, precision, and passion power everything we build.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
