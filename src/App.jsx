import React from "react";

// Components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services"

let App = () => {
  return (
    <>
      <section>
        <Hero />
        <About />
        <Services />
      </section>
    </>
  );
};

export default App;
