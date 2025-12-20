import React from "react";

let About = () => {
  // Bento grid content defining core value pillars
  const bentoData = [
    {
      headline: "Fast Development",
      content:
        "Ship production-ready features quickly with a clean, scalable setup.",
    },
    {
      headline: "Modern UI",
      content:
        "Minimal, motion-first interfaces that feel premium and intentional.",
    },
    {
      headline: "Performance Focused",
      content: "Optimized rendering, smooth interactions, and fast load times.",
    },
    {
      headline: "Conversion Driven",
      content: "Every section is designed to guide users toward action.",
    },
    {
      headline: "Scalable Code",
      content: "Built to grow without becoming a maintenance nightmare.",
    },
  ];

  return (
    <>
      <section className="relative px-8 lg:px-40" data-aos="fade" id="about">
        {/* Primary introduction outlining working philosophy */}
        <div className="text-center">
          <h1
            className="font-[akira]  text-xl md:text-2xl lg:text-3xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            How I{" "}
            <span className="bg-linear-to-br from-green-500 to-green-800 text-transparent bg-clip-text">
              Work
            </span>{" "}
          </h1>
          <p
            className="font-[inter] text-md md:text-lg lg:text-xl mt-4 opacity-80 px-1 md:px-20 lg:px-30"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            I build production-ready web products with a focus on clarity,
            performance, and real outcomes. My work isn’t about shipping
            features quickly - it’s about building solutions that are reliable,
            scalable, and easy to maintain. I approach every project with a
            product mindset: understanding the problem, designing with intent,
            and writing clean code that holds up in production.
          </p>
        </div>

        {/* Value pillars presented as a bento-style grid */}
        <div className="mt-20 md:mt-30 lg:mt-40 px-0 md:px-8 lg:px-20 xl:px-20">
          <h1
            className="font-[akira] text-base md:text-xl lg:text-xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            What I Focus On
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-dense mt-6 select-none ">
            {bentoData.map((v, i) => (
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                key={i}
                className={`border-2 border-green-900 bg-linear-to-br from-green-950 to-green-900 m-2 px-6 py-6 backdrop-blur-lg rounded-md overflow-hidden
          ${(i + 1) % 3 === 0 ? "md:col-span-2" : "lg:col-span-1"}
        `}
              >
                <h1 className="font-[bricolage] text-center md:text-left text-lg md:text-2xl">
                  {v.headline}
                </h1>
                <p className="font-[space] text-center md:text-left text-zinc-300 mt-2">
                  {v.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle credibility statement reinforcing real-world experience */}
        <h4 className="text-center mt-20 text-xs md:text-sm lg:text-base font-[inter] text-white/50 pb-40">
          ❝I’ve worked on real client projects and continue to ship and refine
          production-ready tools through hands-on building❞
        </h4>
      </section>
    </>
  );
};

export default About;
