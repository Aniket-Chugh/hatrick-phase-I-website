import React from "react";

export default function AboutUsSection() {
  return (
    <section
      className="w-full bg-white text-white px-6 md:px-16 py-24"
      style={{
        background: "linear-gradient(135deg, #0b0b13 0%, #003f2f 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* Left Section */}
        <div className="relative z-10">
          <h3 className="text-xl italic text-gray-400 mb-4">/About Us</h3>

          <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight italic mb-6">
            We <span className="font-semibold">engineer</span> sports dreams —
            from <em>gritty turf</em> to <em>elite arenas</em>.
          </h2>

          <p className="text-white/80 leading-relaxed mb-6">
            At{" "}
            <span className="font-medium bg-gradient-to-r from-teal-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
              Hattrick Sports
            </span>
            , we turn your vision into top-tier sports experiences — with quality,
            speed, and purpose built into every project.
          </p>

          <button className="mt-6 inline-flex items-center px-6 py-2 bg-green-600 text-white text-sm rounded-full hover:bg-green-700 transition group">
            Learn more
            <span className="ml-2 group-hover:translate-x-1 transition-transform">↗</span>
          </button>
        </div>

        <div className="relative">
          <div className="absolute -top-10 -right-4 text-[120px] font-extrabold text-green-600/10 blur-sm select-none pointer-events-none z-0">
            24
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-green-300/20 rounded-xl p-6 backdrop-blur-md shadow-lg">
              <h4 className="text-xl font-semibold text-green-400 mb-2">
                Our Vision
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Redefining sports infrastructure with sustainable, performance-driven innovation.
              </p>
            </div>

            <div className="bg-white/5 border border-green-300/20 rounded-xl p-6 backdrop-blur-md shadow-lg">
              <h4 className="text-xl font-semibold text-green-400 mb-2">
                Core Values
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Commitment, precision, and passion power everything we build.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
