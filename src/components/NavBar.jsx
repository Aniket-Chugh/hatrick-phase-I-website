import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../index.css";
import image from "../assets/20250722_234551.png";
import { Link } from "react-router-dom";
import football from "../assets/football-ball.png";
import { Menu, X } from "lucide-react";

export default function Preloader() {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Animate mobile menu
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

  // Custom cursor movement
  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorDotRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
      gsap.to(cursorOutlineRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.7,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Preloader animation
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
    <div className="font-[Poppins] relative overflow-hidden">
      {/* Preloader */}
      <div className="preloader fixed top-0 left-0 w-full h-screen bg-black z-50 flex flex-col justify-center items-center">
        <div className="preloader-logo text-white text-4xl font-bold">
          Hatrick Sports<span className="text-pink-500">.</span>
        </div>
        <div className="preloader-progress w-1/2 h-2 bg-gray-700 mt-4 rounded-full overflow-hidden">
          <div className="preloader-bar h-full bg-pink-500 transition-all duration-1000 ease-out"></div>
        </div>
      </div>

      {/* Custom Cursor */}
      <div className="cursor pointer-events-none fixed top-0 left-0 z-[100]">
          <div
    ref={cursorDotRef}
    className="pointer-events-none fixed top-0 left-0 z-[99] w-16 h-16 rounded-full bg-green-400 opacity-20 blur-2xl"
  ></div>
        <img
          src={football}
          className="w-5 h-5 rounded-full object-cover"
          ref={cursorOutlineRef}
          alt=""
        />
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-3/4 bg-black/90 backdrop-blur-md shadow-lg p-6 z-40 lg:hidden text-white"
        style={{ transform: "translateX(100%)", opacity: 0, display: "none" }}
      >
        <div className="fixed inset-0 bg-white z-50 flex flex-col   p-6">
  {/* Logo at top center */}
  <div className="flex justify-between items-center mb-8">
    <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
      <img src={image} alt="Logo" className="h-10 w-auto" />
    </Link>
    {/* Close Icon */}
    <button onClick={() => setIsOpen(false)} className="text-gray-700 text-3xl font-bold">
      ×
    </button>
  </div>

  {/* Menu links */}
  <div className="flex flex-col gap-6 text-xl font-semibold text-gray-800 text-center">
    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
    <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
    <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
    <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
  </div>
</div>

      </div>

      {/* NavBar */}
      <nav className="glass-effect z-100 flex items-center justify-around px-4 py-3">
        <Link to="/">
          <img
            src={image}
            alt="Hatrick Sports Logo"
            className="w-28 sm:w-36 object-contain drop-shadow-lg mt-[-20px]"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-8 mt-3">
          <Link to="/about" className="text-white group relative">
            About Us
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/services" className="text-white group relative">
            Services
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/projects" className="text-white group relative">
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/company" className="text-white group relative">
            Company
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Contact Button */}
        <a
          href="#_"
          className="hidden lg:inline-flex relative items-center justify-center px-4 py-2 overflow-hidden text-green-600 transition duration-300 ease-out border-2 border-green-500 rounded-full shadow-md group text-sm sm:text-base"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-500 group-hover:translate-x-0 ease">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-green-500 transition-all duration-300 transform group-hover:translate-x-full ease">
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
