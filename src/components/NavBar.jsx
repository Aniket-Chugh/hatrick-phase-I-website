import React, { useEffect } from "react";
import gsap from "gsap";
import "../index.css";
import image from "../assets/20250722_234551.png"

export default function Preloader() {
  useEffect(() => {
    // GSAP Timeline for Preloader Animation
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

    // Cursor Animation
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");

    const moveCursor = (e) => {
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
      gsap.to(cursorOutline, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.7,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Mobile Menu Animation
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeBtn = document.querySelector(".mobile-close");

    const openMenu = () => {
      gsap.to(mobileMenu, {
        x: 0,
        duration: 0.6,
        ease: "power4.out",
        display: "block",
        opacity: 1,
      });
    };

    const closeMenu = () => {
      gsap.to(mobileMenu, {
        x: "100%",
        duration: 0.6,
        ease: "power4.inOut",
        onComplete: () => {
          mobileMenu.style.display = "none";
        },
      });
    };

    hamburger?.addEventListener("click", openMenu);
    closeBtn?.addEventListener("click", closeMenu);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hamburger?.removeEventListener("click", openMenu);
      closeBtn?.removeEventListener("click", closeMenu);
    };
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

      {/* Cursor */}
      <div className="cursor pointer-events-none fixed top-0 left-0 z-[100]">
        <div className="cursor-dot w-2 h-2 bg-pink-500 rounded-full absolute -translate-x-1/2 -translate-y-1/2" />
        <div className="cursor-outline w-8 h-8 border border-pink-500 rounded-full absolute -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Noise */}
      <div className="noise-overlay"></div>

      {/* Mobile Menu */}
      <div className="mobile-menu fixed top-0 right-0 w-full h-screen bg-black z-50 text-white p-6 translate-x-full opacity-0 hidden">
        <div className="mobile-menu-header flex items-center justify-between">
          <h1 className="text-xl font-bold">
            Hatrick Sports<span className="dot text-pink-500">.</span>
          </h1>
          <div className="flex items-center gap-4">
            <button className="btn-primary flex items-center gap-2 border border-white px-4 py-2 rounded-full">
              Contact Us
              <svg fill="none" viewBox="0 0 20 20" className="w-4 h-4">
                <path
                  fill="currentColor"
                  d="M2.5 14.375V17.5h3.125l9.217-9.217-3.125-3.125L2.5 14.375Zm14.758-8.508a.83.83 0 0 0 0-1.175l-1.95-1.95a.83.83 0 0 0-1.175 0l-1.525 1.525 3.125 3.125 1.525-1.525Z"
                ></path>
              </svg>
            </button>
            <div className="mobile-close flex flex-col gap-1 cursor-pointer">
              <span className="w-5 h-0.5 bg-white"></span>
              <span className="w-5 h-0.5 bg-white"></span>
            </div>
          </div>
        </div>

        <div className="mobile-menu-content mt-6 space-y-3">
          <div className="mobile-menu-item"><h3>Our Projects</h3></div>
          <div className="mobile-menu-item"><h3>Infrastructure Types</h3></div>
          <div className="mobile-menu-item"><h3>Design & Planning</h3></div>
          <div className="mobile-menu-item"><h3>Construction Services</h3></div>
          <div className="mobile-menu-item"><h3>Development Process</h3></div>
          <div className="mobile-menu-item"><h3>About Us</h3></div>
        </div>

        <div className="mobile-menu-footer mt-6">
          <div className="social-links flex gap-4 mt-4">
            <a href="#" className="social-link" data-cursor-text="YouTube">
              <i className="ri-youtube-line"></i>
            </a>
            <a href="#" className="social-link" data-cursor-text="Instagram">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#" className="social-link" data-cursor-text="Twitter">
              <i className="ri-twitter-x-line"></i>
            </a>
            <a href="#" className="social-link" data-cursor-text="LinkedIn">
              <i className="ri-linkedin-line"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="glass-effect z-100">
        <h1>
    <img src={image} alt="Hatrick Sports Logo"     className="w-28 sm:w-36 object-contain drop-shadow-lg mt-[-20px]" />
        </h1>
        <div className="nav-part2">
          <div className="nav-elem">
          <h3 className="relative group text-white cursor-pointer">
  About Us
  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
</h3>


          </div>
          <div className="nav-elem">
           <h3 className="relative group text-white cursor-pointer">
   Services
  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
</h3>
          </div>
          <div className="nav-elem">
<h3 className="relative group text-white cursor-pointer">
  Projects
  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
</h3>
          </div>

          <div className="nav-elem">
<h3 className="relative group text-white cursor-pointer">
  Company
  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
</h3>            <div className="dropdown-content">
              <h5><span>Mission</span></h5>
              <h5><span>Team</span></h5>
              <h5><span>Careers</span></h5>
            </div>
          </div>
        </div>
        <a
          href="#_"
          className="relative inline-flex items-center justify-center p-2 px-4 py-2 overflow-hidden text-green-600 transition duration-300 ease-out border-2 border-green-500 rounded-full shadow-md group text-sm sm:text-base"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-500 group-hover:translate-x-0 ease">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-green-500 transition-all duration-300 transform group-hover:translate-x-full ease">
            Contact Us
          </span>
          <span className="relative invisible">Contact Us</span>
        </a>
        <div className="hamburger cursor-pointer z-50">
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>

        <div id="nav-bottom"></div>
      </nav>
    </div>
  );
}
