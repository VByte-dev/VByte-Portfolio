import React from "react";

// Components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Service from "../components/Service";
import Project from "../components/Project";
import Testimonial from "../components/Testimonial";

let App = () => {
  return (
    <>
      <section>
        <Hero />
        <About />
        <Service />
        <Project />
        <Testimonial/>
      </section>
    </>
  );
};

export default App;
