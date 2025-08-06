import React, { useState, useRef } from "react";
import { Play, ArrowUpRight } from "lucide-react";

const reels = [
  {
    title: "Behind the Stadium Build",
    src: "https://yourcdn.com/video1.mp4",
    thumbnail: "https://yourcdn.com/thumb1.jpg",
  },
  {
    title: "Turf Laying in Slow Motion",
    src: "https://yourcdn.com/video2.mp4",
    thumbnail: "https://yourcdn.com/thumb2.jpg",
  },
  {
    title: "Grass Rollout Timelapse",
    src: "https://yourcdn.com/video3.mp4",
    thumbnail: "https://yourcdn.com/thumb3.jpg",
  },
];

export default function InstaReelSection() {
  const [modal, setModal] = useState(null);
  const scrollRef = useRef(null);

  return (
    <section className="w-full px-6 md:px-16 py-24 bg-gradient-to-br from-[#e3f8ec] via-[#d0f1e3] to-[#c0ebd9] text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h3 className="text-xl italic text-green-800 mb-4 tracking-wide">/Reels</h3>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h2 className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl font-light tracking-tight leading-tight">
            Our{" "}
            <span className="font-semibold italic text-yellow-500">Content </span>
          </h2>

        </div>

        <p className="text-gray-700 max-w-2xl mb-8 text-sm sm:text-base">
          Here's a glimpse into our on-ground execution and behind-the-scenes moments.
          Every reel captures the hustle, precision, and passion that goes into each project.
        </p>

     <h2 className="text-2xl">Working on this</h2>

        {/* Modal Player */}
        {modal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-xl overflow-hidden max-w-2xl w-full shadow-2xl">
              <div className="relative pb-[56.25%]">
                <video
                  src={modal.src}
                  controls
                  autoPlay
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex justify-between items-center">
                <h4 className="text-lg font-semibold">{modal.title}</h4>
                <button
                  onClick={() => setModal(null)}
                  className="text-gray-600 hover:text-black font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
