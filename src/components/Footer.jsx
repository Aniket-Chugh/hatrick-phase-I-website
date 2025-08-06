import React from "react";

export default function CustomFooter() {
  return (
    <footer className="bg-gradient-to-br from-[#d7f0e4] via-[#c6e6dc] to-[#bfe2d7] text-gray-800 px-8 py-16 rounded-t-3xl mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Brand & Description */}
        <div className="col-span-1">
          <h2 className="text-2xl font-semibold mb-4">Hatrick Sports</h2>
          <p className="text-sm leading-relaxed mb-6">
            One-stop solution for building world-class sports infrastructure — from football turfs and athletic tracks to gym setups and velodromes.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#F4A300] hover:bg-[#e59500] text-white px-4 py-2 rounded-md text-sm font-medium">
              Get Quote
            </button>
            <button className="bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-md text-sm font-medium">
              Contact Us
            </button>
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/projects" className="hover:underline">Projects</a></li>
            <li><a href="/clients" className="hover:underline">Our Clients</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Stadium Construction</li>
            <li>Football Turf Setup</li>
            <li>Swimming Pools</li>
            <li>Gym Setup</li>
            <li>Athletic Tracks</li>
          </ul>
        </div>

        {/* Links Column 3 */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:info@hatricksports.in">info@hatricksports.in</a></li>
            <li><a href="tel:+919876543210">+91 98765 43210</a></li>
            <li>Instagram / LinkedIn</li>
            <li>Delhi, India</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-12 border-t pt-6">
        © {new Date().getFullYear()} Hatrick Sports. All rights reserved.
      </div>
    </footer>
  );
}
