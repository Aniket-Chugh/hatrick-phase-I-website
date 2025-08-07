import React, { useState } from "react";

export default function ContactPage() {
  const [serviceType, setServiceType] = useState("");
  const [location, setLocation] = useState("");
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  const getCurrentLocation = async () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported by your browser.");
      return;
    }

    setIsLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
          );
          const data = await response.json();

          if (data && data.display_name) {
            setLocation(data.display_name);
          } else {
            setLocation(`${lat}, ${lon}`);
          }
        } catch (error) {
          console.error("Error fetching address:", error);
          setLocation(`${lat}, ${lon}`);
        }

        setIsLoadingLocation(false);
      },
      (error) => {
        alert("Location access denied or unavailable.");
        setIsLoadingLocation(false);
      }
    );
  };

  return (
    <section className="w-full px-6 md:px-16 py-24 bg-gradient-to-br from-[#e3f8ec] via-[#d0f1e3] to-[#c0ebd9] text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Headings */}
        <h3 className="text-base italic text-yellow-600 mb-2">/Contact</h3>
        <h2 className="text-5xl sm:text-6xl font-light mb-4 leading-tight tracking-tight">
          Let’s <span className="font-semibold italic text-yellow-500">Build Your Vision</span>
        </h2>
        <p className="text-gray-700 max-w-2xl mb-10 text-base sm:text-lg leading-relaxed">
          Got a turf, gym, or sports project in mind? We handle everything from design to delivery.
          Fill in your vision and we’ll help bring it to life — exactly how you want it.
        </p>

        {/* Form + Map Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-yellow-100">
            <form className="space-y-6">
              <div>
                <label className="block font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Project Location (Manual or Auto)</label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="Enter location or use button"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none"
                  />
                  <button
                    type="button"
                    onClick={getCurrentLocation}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-xl"
                  >
                    {isLoadingLocation ? "Loading..." : "Auto-Fill"}
                  </button>
                </div>
              </div>

              {/* HCPatha (bot-resistant hint) */}
              <div>
                <label className="block font-medium mb-1">
                  HCPatha (Write area landmark, not required)
                </label>
                <input
                  type="text"
                  name="hcaptcha-trap"
                  autoComplete="off"
                  placeholder="e.g. Landmark near XYZ Gate"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Service Type</label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none"
                >
                  <option value="">Select service type</option>
                  <option value="turf">Football Turf</option>
                  <option value="cricket">Cricket Pitch</option>
                  <option value="gym">Gym Setup</option>
                  <option value="swimming">Swimming Pool</option>
                  <option value="court">Basketball/Tennis Court</option>
                  <option value="consultation">Consultation Only</option>
                </select>
              </div>

              {(serviceType === "turf" ||
                serviceType === "court" ||
                serviceType === "swimming") && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium mb-1">Length (ft)</label>
                    <input
                      type="number"
                      placeholder="e.g. 100"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-1">Breadth (ft)</label>
                    <input
                      type="number"
                      placeholder="e.g. 60"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block font-medium mb-1">Estimated Budget</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none">
                  <option>Less than ₹5 Lakhs</option>
                  <option>₹5–10 Lakhs</option>
                  <option>₹10–25 Lakhs</option>
                  <option>₹25 Lakhs+</option>
                </select>
              </div>

              <div>
                <label className="block font-medium mb-1">Timeline to Start</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none">
                  <option>Immediately</option>
                  <option>Within 1 month</option>
                  <option>1–3 months</option>
                  <option>More than 3 months</option>
                </select>
              </div>

              <div>
                <label className="block font-medium mb-1">Upload Layout / Site Images</label>
                <input
                  type="file"
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-yellow-100 file:text-yellow-700 hover:file:bg-yellow-200"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Project Details</label>
                <textarea
                  rows="4"
                  placeholder="Timeline, goals, preferences etc."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-xl shadow transition"
              >
                Submit Project Request
              </button>

              <p className="text-center text-sm text-gray-500 mt-4 italic">
                Trusted by 100+ clubs, schools, and corporates across India.
              </p>
            </form>
          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden border border-yellow-200 shadow-md min-h-[500px]">
            <div className="bg-yellow-100 py-2 px-4 font-medium text-yellow-700 border-b border-yellow-300">
              📍 Project Locations
            </div>
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/d/embed?mid=1R9MZewfvnFak2jfBdLf6bPSh7_rTfA4&ehbc=2E312F"
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
