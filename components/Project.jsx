import React from "react";

let Project = () => {
  return (
    <>
      {/* Wrapper section with responsive horizontal padding */}
      <section className="my-0 px-8 lg:px-40" data-aos="fade">
        {/* Section header: positioning + value statement */}
        <div className="text-center">
          {/* Primary heading with gradient emphasis on key word */}
          <h1
            className="font-[akira] text-xl md:text-2xl lg:text-3xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="bg-linear-to-br from-green-500 to-green-800 text-transparent bg-clip-text">
              Proof
            </span>{" "}
            Over Promises
          </h1>

          {/* Supporting copy explaining what the projects represent */}
          <h3
            className="font-[bricolage] text-md md:text-lg lg:text-xl mt-4 opacity-80 md:px-20 lg:px-30"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Real-world projects built for clients and personal products. Each
            one focuses on clarity, performance, and business outcomes.
          </h3>
        </div>

        {/* Primary CTA directing users to recent or featured work */}
        <div
          className="flex justify-center mt-20"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a
            href="https://linktr.ee/vbyte.products"
            target="_blank"
            className="whitespace-nowrap truncate bg-linear-to-br from-green-800 via-green-600 to-green-800 border-2 border-green-600 font-[space] text-xs md:text-base rounded px-4 py-2
                       active:from-green-600 active:via-green-800 active:to-green-600
                       hover:from-green-600 hover:via-green-800 hover:to-green-600
                       duration-150 flex justify-center gap-3 hover:gap-6 active:gap-6 transition-all"
          >
            Recent Work
            <span>
              <i className="ri-arrow-right-long-line"></i>
            </span>
          </a>
        </div>

        {/* Trust reinforcement line to subtly validate experience */}
        <h4
          className="text-center mt-20 text-xs md:text-sm lg:text-base font-[inter] text-white/50 pb-40"
          data-aos="fade"
          data-aos-delay="300"
        >
          ❝Client projects and tools built to solve real problems❞
        </h4>
      </section>
    </>
  );
};

export default Project;
