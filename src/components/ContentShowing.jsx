import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";

const reels = [
  {
    id: 1,
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    user: "hatricksports",
    location: "Mumbai, India",
    isFollowing: false,
    caption: "Setting up the perfect football turf with precision ⚽️🌱",
  },
  {
    id: 2,
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    user: "kickzone",
    location: "Delhi, India",
    isFollowing: true,
    caption: "Drills that improve your first touch 🔥",
  },
  {
    id: 3,
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4",
    user: "goalacademy",
    location: "Bangalore, India",
    isFollowing: false,
    caption: "Training never stops 💪",
  },
  {
    id: 4,
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4",
    user: "nextgenfootball",
    location: "Chennai, India",
    isFollowing: true,
    caption: "Youth league final moments ⚡",
  },
  {
    id: 5,
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
    user: "elitekick",
    location: "Hyderabad, India",
    isFollowing: false,
    caption: "Speed training on turf 🚀",
  },
];

export default function ReelSliderSection() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [muted, setMuted] = useState(true);
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    const scrollAmount = 320;
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full px-6 md:px-16 py-24 bg-gradient-to-br from-[#e3f8ec] via-[#d0f1e3] to-[#c0ebd9] text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h3 className="text-xl italic text-green-800 mb-4 tracking-wide">/Reels</h3>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h2 className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl font-light tracking-tight leading-tight">
            Our{" "}
            <span className="font-semibold italic text-yellow-500">
              Field Moments
            </span>
          </h2>
        </div>

        <p className="text-gray-700 max-w-2xl mb-8 text-sm sm:text-base">
          A glimpse into our on-ground action — from training sessions to matchday
          intensity. Real turf. Real sweat. Real stories. ⚽️📹
        </p>

        {/* Slider Buttons */}
        <div className="relative w-full">
          <button
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            onClick={() => scrollSlider("left")}
          >
            <ChevronLeft />
          </button>
          <button
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            onClick={() => scrollSlider("right")}
          >
            <ChevronRight />
          </button>

          {/* Reel Slider */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-4 py-6 px-4 scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            {reels.map((reel, index) => (
              <div
                key={reel.id}
                className="min-w-[300px] cursor-pointer relative aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-md group"
                onClick={() => setSelectedIndex(index)}
              >
                <video
                  src={reel.videoUrl}
                  muted={muted}
                  loop
                  autoPlay
                  className="object-cover w-full h-full"
                />
                <button
                  className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-1 z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMuted(!muted);
                  }}
                >
                  {muted ? <VolumeX /> : <Volume2 />}
                </button>

                <div className="absolute bottom-0 left-0 p-3 text-white bg-gradient-to-t from-black via-black/40 to-transparent w-full space-y-1">
                  <h3 className="text-lg font-semibold">@{reel.user}</h3>
                  <p className="text-xs opacity-90">📍 {reel.location}</p>
                  <p className="text-xs opacity-90">📝 {reel.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popup Reel Viewer */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
            <div className="relative w-[90vw] max-w-[400px] aspect-[9/16] bg-black rounded-xl overflow-hidden">
              <video
                src={reels[selectedIndex].videoUrl}
                muted={muted}
                autoPlay
                loop
                className="object-cover w-full h-full"
              />
              <button
                className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-1 z-10"
                onClick={() => setMuted(!muted)}
              >
                {muted ? <VolumeX /> : <Volume2 />}
              </button>
              <button
                className="absolute top-2 left-2 text-white bg-black/50 rounded-full px-2 py-1 text-xs"
                onClick={() => setSelectedIndex(null)}
              >
                Close
              </button>
              <div className="absolute bottom-0 left-0 p-4 text-white bg-gradient-to-t from-black via-black/40 to-transparent w-full space-y-1">
                <h3 className="text-xl font-semibold">@{reels[selectedIndex].user}</h3>
                <p className="text-sm opacity-90">📍 {reels[selectedIndex].location}</p>
                <p className="text-sm opacity-90">📝 {reels[selectedIndex].caption}</p>
              </div>
            </div>

            {/* Navigation */}
            {selectedIndex > 0 && (
              <button
                onClick={() => setSelectedIndex((prev) => prev - 1)}
                className="absolute left-4 text-white text-2xl bg-black/50 rounded-full p-2"
              >
                <ChevronLeft />
              </button>
            )}
            {selectedIndex < reels.length - 1 && (
              <button
                onClick={() => setSelectedIndex((prev) => prev + 1)}
                className="absolute right-4 text-white text-2xl bg-black/50 rounded-full p-2"
              >
                <ChevronRight />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
