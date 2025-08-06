import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import image from "../assets/20250722_234551.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { MessageCircle } from "lucide-react"; // closest icon to WhatsApp in Lucide


export default function Preloader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

   const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;
    if (progress < 100) {
      timer = setTimeout(() => setProgress(progress + 1), 15); // smoother load
    }
    return () => clearTimeout(timer);
  }, [progress]);

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

  // Animate Mobile Menu
  useEffect(() => {
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        x: isOpen ? 0 : "100%",
        opacity: isOpen ? 1 : 0,
        display: isOpen ? "block" : "none",
        duration: 0.4,
        ease: isOpen ? "power3.out" : "power3.in",
      });
    }
  }, [isOpen]);

  // Scroll shadow on Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="font-[Poppins] relative overflow-hidden text-black"

    >
      {/* Preloader */}
      <div className="preloader fixed top-0 left-0 w-full h-screen z-50 flex flex-col justify-center items-center bg-gradient-to-br from-[#0b0b13] to-[#003f2f]">
       <div className="preloader fixed top-0 left-0 w-full h-screen z-[9999] flex flex-col justify-center items-center bg-gradient-to-br from-[#0b0b13] to-[#003f2f] transition-all duration-700">
      <div className="text-[#00e0b3] text-4xl font-extrabold tracking-wide drop-shadow-md">
        Hatrick Sports<span className="text-[#ff4081]">.</span>
      </div>

      <div className="w-[60%] max-w-[400px] h-2 mt-6 bg-white/10 border border-[#26a69a] rounded-full overflow-hidden shadow-inner">
        <div
          className="h-full bg-[#26a69a] transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="mt-3 text-white/70 text-sm font-mono">{progress}%</div>
    </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-3/4 bg-[#0a0f1a] text-black z-50 p-6 transform translate-x-full opacity-0"
        style={{ display: "none" }}
      >
        <div className="flex justify-between items-center mb-6">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={image} alt="Logo" className="h-10 w-auto" />
          </Link>
          <button onClick={() => setIsOpen(false)} className="text-white">
            <X size={30} />
          </button>
        </div>
        <div className="flex flex-col gap-6 text-lg font-semibold">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
        <a
          href="#contact"
          className="mt-8 inline-block w-full text-center rounded-full bg-gradient-to-r from-teal-400 to-green-400 text-white py-3 font-semibold shadow-lg hover:scale-105 transition"
        >
          Contact Now
        </a>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 px-4 py-3 transition-all duration-300 flex items-center justify-around ${
          isScrolled ? "bg-transparent" : "bg-transparent"
        }`}

      >
        <Link to="/">
          <img
        src={image}
        alt="Hatrick Sports Logo"
        className="w-28 sm:w-36 object-contain -mt-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
      />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-8 mt-2">
          {["About Us", "Services", "Projects", "Company"].map((text, i) => (
            <Link
              key={i}
              to={`/${text.toLowerCase().replace(/\s/g, "")}`}
              className="text-[#F4A300] group relative"
            >
              {text}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#F4A300]/25 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
<div className="hidden lg:flex items-center gap-4">


  {/* 📞 Call Us Button */}
 <a
  href="https://wa.me/918660218317?text=Hi%20Team%2C%20I%20am%20interested%20in%20your%20services"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-yellow-300 flex items-center justify-center gap-3 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg text-lg shadow-md transition duration-300"
>
  <MessageCircle className="w-5 h-5" />
  WhatsApp Us
</a>

</div>


        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white z-50">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
    </div>
  );
}
