import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Service from "../components/Service";
import Project from "../components/Project";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

let App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });
  }, []);
  return (
    <>
      <section className="selection:bg-green-800 selection:text-white">
        <Hero />
        <About />
        <Service />
        <Project />
        <Testimonial />
        <Footer />
      </section>
    </>
  );
};

export default App;
