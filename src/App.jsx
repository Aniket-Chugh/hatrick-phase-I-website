import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";

import Preloader from "./components/NavBar";
import HeroSection from "./components/Herosection";
import IndiaMapSection from "./components/Aboutus";
import ServicesSection from "./components/SerivcesSection";
import AnimatedSportsSection from "./components/Project";
import Services from "./components/Project";
import SportsServices from "./components/Project";
import ReelCarousel from "./components/ContentShowing";
import ClientsSection from "./components/ClientPage";
import ContactPage from "./components/CTA";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollSmoother);

const App = () => {
  useEffect(() => {
    if (!ScrollSmoother.get()) {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.8,
        effects: true,
        normalizeScroll: true,
        smoothTouch: 0.1,
      });
    }
  }, []);

  return (
    <>
      <Preloader />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <IndiaMapSection />
          <ServicesSection />
       <SportsServices></SportsServices>
       <ReelCarousel></ReelCarousel>
       <ClientsSection></ClientsSection>
       <ContactPage></ContactPage>
       <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default App;
