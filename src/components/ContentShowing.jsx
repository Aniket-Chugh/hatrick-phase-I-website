import React, { useEffect, useRef, useState } from "react";

const reels = [
  {
    id: 1,
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    caption: "Football Turf - Pune",
    views: "170",
    user: "hatricksports",
    location: "Pune, India",
    likes: "1.2k",
    description: "Top-grade synthetic turf project at local training academy.",
  },
  {
    id: 2,
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    caption: "School Playground - Delhi",
    views: "188",
    user: "infra360",
    location: "Delhi, India",
    likes: "1.9k",
    description: "Custom safety turf for kids, weather-resistant and colorful.",
  },
  {
    id: 3,
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4",
    caption: "Stadium Track - Mumbai",
    views: "160",
    user: "playsmart",
    location: "Mumbai, India",
    likes: "2.3k",
    description: "400m synthetic track built to Olympic standards.",
  },
];

export default function ReelShowcase() {
  const scrollRef = useRef(null);
  const [modalReel, setModalReel] = useState(null);

  const scroll = (dir) => {
    const distance = dir === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <div className="w-full px-4 py-10 bg-white font-sans relative">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">
        Our Sports Infra Projects
      </h2>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-[60%] z-10 bg-white shadow-md p-2 rounded-full text-xl"
      >
        ⬅️
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-[60%] z-10 bg-white shadow-md p-2 rounded-full text-xl"
      >
        ➡️
      </button>

      {/* Reel Cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-10"
      >
        {reels.map((reel) => (
          <ReelCard key={reel.id} reel={reel} onClick={() => setModalReel(reel)} />
        ))}
      </div>

      {modalReel && (
        <ReelModal reel={modalReel} onClose={() => setModalReel(null)} />
      )}
    </div>
  );
}

// ReelCard Component
function ReelCard({ reel, onClick }) {
  const videoRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      isVisible ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [isVisible]);

  return (
    <div
      className="min-w-[250px] max-w-[250px] rounded-xl overflow-hidden shadow-lg bg-black relative cursor-pointer"
      onClick={onClick}
    >
      <video
        ref={videoRef}
        src={reel.videoUrl}
        muted
        loop
        playsInline
        preload="none"
        className="w-full h-[400px] object-cover"
      />
      <p className="absolute bottom-20 left-4 text-yellow-300 font-bold text-lg drop-shadow">
        {reel.caption}
      </p>
      <div className="flex justify-between items-center text-white text-sm px-4 py-2 bg-black/60">
        <span>{reel.views} Views</span>
        <span>❤️</span>
      </div>
    </div>
  );
}

// Modal Reel (Insta Style)
function ReelModal({ reel, onClose }) {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.play();
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 md:p-8">
      <div className="relative bg-black rounded-2xl overflow-hidden w-[95vw] max-w-[400px] h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-white text-2xl font-bold z-10"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Video */}
        <video
          ref={videoRef}
          src={reel.videoUrl}
          controls
          autoPlay
          muted
          className="w-full h-[65%] object-cover"
        />

        {/* Bottom Info */}
        <div className="p-4 text-white h-[35%] overflow-y-auto">
          <h3 className="text-lg font-semibold">@{reel.user}</h3>
          <p className="text-sm text-gray-400">{reel.location}</p>
          <div className="flex gap-4 mt-1 text-sm text-gray-300">
            <span>❤️ {reel.likes}</span>
            <span>👁️ {reel.views} views</span>
          </div>
          <p className="mt-3 text-base leading-relaxed">{reel.description}</p>
        </div>
      </div>
    </div>
  );
}
