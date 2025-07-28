import React, { useEffect } from "react";
import gsap from "gsap";
import "./index.css";
import HeroSection from "./components/Herosection";

export default function Preloader() {
  useEffect(() => {
    // Preloader animation
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

    // Cursor logic
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
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="font-[Poppins] relative overflow-hidden">
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

      <div class="noise-overlay"></div>

<div class="mobile-menu">
        <div class="mobile-menu-header">
          <h1>Hatrick Sports<span class="dot">.</span></h1>
          <div class="mobile-close">
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="mobile-menu-content">
          <div class="mobile-menu-item">
            <h3>Our Projects</h3>
          </div>
          <div class="mobile-menu-item">
            <h3>Infrastructure Types</h3>
          </div>
          <div class="mobile-menu-item">
            <h3>Design & Planning</h3>
          </div>
          <div class="mobile-menu-item">
            <h3>Construction Services</h3>
          </div>
          <div class="mobile-menu-item">
            <h3>Development Process</h3>
          </div>
          <div class="mobile-menu-item">
            <h3>About Us</h3>
          </div>
        </div>
        <div class="mobile-menu-footer">
          <button class="btn-primary">
            Contact Us
            <svg fill="none" viewBox="0 0 20 20">
              <path
                fill="currentColor"
                d="M2.5 14.375V17.5h3.125l9.217-9.217-3.125-3.125L2.5 14.375Zm14.758-8.508a.83.83 0 0 0 0-1.175l-1.95-1.95a.83.83 0 0 0-1.175 0l-1.525 1.525 3.125 3.125 1.525-1.525Z"
              ></path>
            </svg>
          </button>
          <div class="social-links">
            <a href="#" class="social-link" data-cursor-text="YouTube">
              <i class="ri-youtube-line"></i>
            </a>
            <a href="#" class="social-link" data-cursor-text="Instagram">
              <i class="ri-instagram-line"></i>
            </a>
            <a href="#" class="social-link" data-cursor-text="Twitter">
              <i class="ri-twitter-x-line"></i>
            </a>
            <a href="#" class="social-link" data-cursor-text="LinkedIn">
              <i class="ri-linkedin-line"></i>
            </a>
          </div>
        </div>
      </div>


            <nav>
        <h1>Hatrick Sports<span class="dot">.</span></h1>
        <div class="nav-part2">
          <div class="nav-elem">
            <h4>Our Projects</h4>
            <div class="dropdown-content">
              <h5><span>Stadium Development</span></h5>
            </div>
          </div>
          <div class="nav-elem">
            <h4>Infrastructure Types</h4>
            <div class="dropdown-content">
              <h5><span>Cricket Grounds</span></h5>
              <h5><span>Football Fields</span></h5>
              <h5><span>Indoor Arenas</span></h5>
              <h5><span>Multi-sport Complexes</span></h5>
            </div>
          </div>
          <div class="nav-elem">
            <h4>Design & Planning</h4>
            <div class="dropdown-content">
              <h5><span>Concept to Execution</span></h5>
              <h5><span>3D Modeling</span></h5>
              <h5><span>Blueprint Planning</span></h5>
            </div>
          </div>
          <div class="nav-elem">
            <h4>Construction Services</h4>
            <div class="dropdown-content">
              <h5><span>Ground Laying</span></h5>
              <h5><span>Track & Turf Setup</span></h5>
              <h5><span>Lighting & Seating</span></h5>
            </div>
          </div>
          <div class="nav-elem">
            <h4>Development Process</h4>
            <div class="dropdown-content">
              <h5><span>Consultation</span></h5>
              <h5><span>Approval & Planning</span></h5>
            </div>
          </div>
          <div class="nav-elem">
            <h4>About Us</h4>
            <div class="dropdown-content">
              <h5><span>Mission</span></h5>
              <h5><span>Team</span></h5>
              <h5><span>Careers</span></h5>
            </div>
          </div>
        </div>
<a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
     <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
         <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
     </span>
     <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Contact Us</span>
     <span class="relative invisible">Button Text</span>
 </a>

        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="nav-bottom"></div>
      </nav>

     
<HeroSection></HeroSection>
    </div>
  );
}
