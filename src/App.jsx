import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";

import Preloader from "./components/NavBar";
import HeroSection from "./components/Herosection";
import IndiaMapSection from "./components/Aboutus";
import ServicesSection from "./components/SerivcesSection";

gsap.registerPlugin(ScrollSmoother);

const App = () => {
  useEffect(() => {
    // Create ScrollSmoother only once
    if (!ScrollSmoother.get()) {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.8, // Higher = more buttery
        effects: true,
        normalizeScroll: true,
        smoothTouch: 0.1, // Enable on mobile too
      });
    }
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Preloader />
        <HeroSection />
        <IndiaMapSection />
        <ServicesSection />
      </div>
    </div>
  );
};

export default App;
