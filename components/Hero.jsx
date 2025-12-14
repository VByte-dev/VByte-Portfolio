import React from "react";

import Navbar from "./Navbar";

let Hero = () => {
  return (
    <>
      <section className="relative bgGradient fade-end ">
        {/* Sticky navigation anchored to the top */}
        <div className="sticky z-50 top-15 md:top-20 flex justify-center">
          <Navbar />
        </div>

        {/* Hero content wrapper */}
        <div className="py-30 md:py-40 lg:py-50 px-8 lg:px-40 text-center ">
          {/* Availability indicator */}
          <h5 className="borderGlow select-none cursor-pointer  inline-flex gap-3 justify-center items-center pl-2 pr-4 rounded-full font-[space] text-xs md:text-sm text-zinc-300 ">
            <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-green-400 "></div>{" "}
            Open for Work
          </h5>

          {/* Primary hero headline */}
          <h1 className="font-[akira] text-xl mt-10 md:text-2xl lg:text-3xl md:px-20">
            I build modern{" "}
            <span className="bg-linear-to-br from-green-500 to-green-800 text-transparent bg-clip-text">
              websites
            </span>{" "}
            that convert visitors into customers
          </h1>

          {/* Supporting sub-headline */}
          <h2 className="font-[bricolage] mt-6 md:mt-8 text-sm md:text-base lg:text-lg opacity-80 leading-relaxed">
            Building production-ready web products. Open to{" "}
            <span className="underline underline-offset-6 decoration-white/40">
              internships
            </span>
            , roles, and{" "}
            <span className="underline underline-offset-6 decoration-white/40">
              client work
            </span>
            .
          </h2>

          {/* Primary and secondary call-to-action buttons */}
          <div className="mt-14 md:mt-20 block md:flex gap-4 justify-center">
            <div>
              <button className="whitespace-nowrap truncate my-2 md:my-0 bg-linear-to-br w-40 from-green-800 via-green-600 to-green-800 border-2 border-green-600 font-[space] text-xs md:text-base rounded px-4 py-2 active:from-green-600 active:via-green-800 active:to-green-600 hover:from-green-600 hover:via-green-800 hover:to-green-600 transition-colors duration-150">
                Work With Me
              </button>
            </div>
            <div>
              <button className="whitespace-nowrap truncate my-2 md:my-0 bg-linear-to-br w-40 from-green-800 via-green-600 to-green-800 border-2 border-green-600 font-[space] text-xs md:text-base rounded px-4 py-2 active:from-green-600 active:via-green-800 active:to-green-600 hover:from-green-600 hover:via-green-800 hover:to-green-600 transition-colors duration-150">
                View Work
              </button>
            </div>
          </div>

          {/* Trust signal / credibility micro-copy */}
          <h3 className="mt-12 md:mt-20 font-[space] text-xs md:text-sm opacity-70">
            ✽ Trusted by clients · Shipping real world projects
          </h3>

          {/* Scroll indicator */}
          <div className="mt-20 md:mt-30 motion-preset-oscillate-lg ">
            <i className="ri-arrow-down-long-line text-lg md:text-xl lg:text-2xl border p-3 w-4 h-4 rounded-full hover:bg-white hover:text-black transition-all duration-400 text-white"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
