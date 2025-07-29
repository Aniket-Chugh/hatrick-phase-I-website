import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../index.css";
import image from "../assets/20250722_234551.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Preloader() {
  const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        gsap.to(menuRef.current, {
          x: 0,
          opacity: 1,
          display: "block",
          duration: 0.4,
          ease: "power3.out",
        });
      } else {
        gsap.to(menuRef.current, {
          x: "100%",
          opacity: 0,
          display: "none",
          duration: 0.4,
          ease: "power3.in",
        });
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".preloader-bar", {
      width: "100%",
      duration: 1.5,
      ease: "power3.out",
    })
      .to(".preloader-bar", {
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
      })
      .to(".preloader", {
        y: "-100%",
        duration: 0.8,
        ease: "power4.inOut",
      });
  }, []);

  return (
    <div className="font-[Poppins] relative overflow-hidden"  style={{
        background: "linear-gradient(135deg, #0a0f1a 0%, #002f25 100%)",
      }}>

      {/* Preloader */}
      <div className="preloader fixed top-0 left-0 w-full h-screen linear-gradient(135deg, #0b0b13 0%, #003f2f 100%) z-50 flex flex-col justify-center items-center transition-colors duration-500">
        <div className="preloader-logo text-[#00695c] text-4xl font-bold drop-shadow-md">
          Hatrick Sports<span className="text-[#ff4081]">.</span>
        </div>
        <div className="preloader-progress w-1/2 h-2 bg-white border border-[#80cbc4] mt-4 rounded-full overflow-hidden shadow-sm">
          <div className="preloader-bar h-full bg-[#26a69a] transition-all duration-1000 ease-out"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-3/4 bg-white/90 backdrop-blur-md shadow-lg p-6 z-40 lg:hidden text-white"
        style={{ transform: "translateX(100%)", opacity: 0, display: "none" }}
      >
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6">
          <div className="flex justify-between items-center mb-8">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <img src={image} alt="Logo" className="h-10 w-auto" />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-700 text-3xl font-bold"
            >
              ×
            </button>
          </div>
          <div className="flex flex-col gap-6 text-xl font-semibold text-gray-800 text-center">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      </div>

      {/* NavBar */}
   {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 px-4 py-3 glass-effect transition-all duration-300 flex items-center justify-around ${
          isScrolled
            ? "bg-white/20 backdrop-blur-md shadow-xl"
            : "bg-transparent"
        }`}
      >        <Link to="/">
          <img
            src={image}
            alt="Hatrick Sports Logo"
            className="w-28 sm:w-36 object-contain drop-shadow-lg mt-[-20px]"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-8 mt-3">
          {["About Us", "Services", "Projects", "Company"].map((text, i) => (
            <Link
              key={i}
              to={`/${text.toLowerCase().replace(/\s/g, "")}`}
              className="text-white group relative"
            >
              {text}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0D98BA] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <a
          href="#_"
          className="hidden border-[##89C7E7] text-[#F97316] lg:inline-flex relative items-center justify-center px-4 py-2 overflow-hidden  transition duration-300 ease-out border-2  rounded-full shadow-md group text-sm sm:text-base"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-gradient-to-r from-teal-400 to-green-400  group-hover:translate-x-0 ease">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
            Contact Us
          </span>
          <span className="relative invisible">Contact Us</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white z-50">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
    </div>
  );
}
