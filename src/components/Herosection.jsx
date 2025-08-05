import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const imagesRef = useRef([]);
  const textRef = useRef(null);
  const rotatingTextRef = useRef(null);
  const services = [
    "We Build World-Class Turfs",
    "We Design International Arenas",
    "We Maintain Sports Infrastructure",
    "We Deliver Stadium Projects",
  ];

  useEffect(() => {
    const images = imagesRef.current;

    // Reset all images
    gsap.set(images, { autoAlpha: 0, scale: 1.1 });

    // Background Image Slideshow
    const tl = gsap.timeline({ repeat: -1 });
    images.forEach((img, index) => {
      tl.to(img, {
        autoAlpha: 1,
        scale: 1.05,
        duration: 1.5,
        ease: "power3.out",
      }).to(
        img,
        {
          autoAlpha: 0,
          scale: 1.15,
          duration: 1.5,
          ease: "power3.inOut",
        },
        "+=2"
      );
    });

    // Text mount animation
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.4, ease: "power3.out", delay: 0.5 }
    );

    // Rotating Text animation
    let index = 0;
    const rotate = () => {
      const el = rotatingTextRef.current;
      gsap.to(el, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        onComplete: () => {
          el.textContent = services[index % services.length];
          index++;
          gsap.fromTo(
            el,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.3 }
          );
        },
      });
    };

    rotate();
    const interval = setInterval(rotate, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-gray-950 overflow-hidden flex items-center justify-center">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {[
          "https://plus.unsplash.com/premium_photo-1684446464405-71867f88356b?w=500&auto=format&fit=crop&q=60",
          "https://images.unsplash.com/photo-1646343251574-a7b03ee3dbaf?w=500&auto=format&fit=crop&q=60",
          "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500&auto=format&fit=crop&q=60",
        ].map((src, index) => (
          <img
            key={index}
            ref={(el) => (imagesRef.current[index] = el)}
            src={src}
            alt={`background-${index}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ))}
        <div className="absolute inset-0 bg-black/70" />
      </div>

     <div
  className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center text-white space-y-8"
  ref={textRef}
>
  {/* Big Watermark Text */}
  <h1 className="text-[9vw] font-black text-white/25 select-none leading-none">
    Hatrick Sports
  </h1>

  {/* Rotating Text */}
  <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-yellow-300">
    <span ref={rotatingTextRef}>
      We Build World-Class Turfs
    </span>
  </h2>

  {/* Subtext Paragraph */}
  <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
    End-to-End design, build & maintain solutions for turfs, arenas & stadiums. <br />
    Trusted by 200+ clients. ISO Certified. International Standards.
  </p>

  {/* Call-to-Action Buttons */}
  <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
    <a
      href="#contact"
      className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg text-lg shadow-md transition duration-300"
    >
      Get Free Estimate
    </a>
    <a
      href="#projects"
      className="border border-yellow-300 text-yellow-300 hover:bg-yellow-400 hover:text-black font-bold py-3 px-8 rounded-lg text-lg shadow-md transition duration-300"
    >
      View Our Work
    </a>
  </div>

  {/* Feature Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-10">
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md hover:scale-105 transition-transform">
      <h4 className="text-yellow-300 font-semibold text-lg mb-2">FIFA / IAAF Certified</h4>
      <p className="text-gray-300 text-sm leading-relaxed">
        Surfaces and materials certified for global events and competitions.
      </p>
    </div>
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md hover:scale-105 transition-transform">
      <h4 className="text-yellow-300 font-semibold text-lg mb-2">₹500Cr+ Delivered</h4>
      <p className="text-gray-300 text-sm leading-relaxed">
        Projects executed for schools, clubs, universities, and state bodies across India.
      </p>
    </div>
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md hover:scale-105 transition-transform">
      <h4 className="text-yellow-300 font-semibold text-lg mb-2">ISO 9001:2015 Certified</h4>
      <p className="text-gray-300 text-sm leading-relaxed">
        Quality assurance systems for streamlined execution and client satisfaction.
      </p>
    </div>
  </div>
</div>

    </section>
  );
}
