import React from "react";

let Service = () => {
  // Centralized service data for scalable, reusable service cards
  const servicesData = [
    {
      title: "Business Website",
      subheadline:
        "A professional online presence built to earn trust and grow your business",
      points: [
        "Clear presentation of services and offerings",
        "Trust-focused layout with strong content flow",
        "Mobile-first, fast, and SEO-ready setup",
      ],
      price: "₹12,999", // Anchor price
      offeredPrice: "₹5,999", // Strong psychological discount
    },
    {
      title: "Landing Page",
      subheadline:
        "Focused pages designed to convert visitors into leads or customers",
      points: [
        "Single-goal, conversion-focused layout",
        "Strong messaging with clear call-to-action",
        "Optimized for performance and campaign use",
      ],
      price: "₹6,999", // Anchor price
      offeredPrice: "₹3,499", // Very affordable for small campaigns
    },
    {
      title: "Portfolio Website",
      subheadline:
        "Clean and credible websites for individuals and professionals",
      points: [
        "Structured project and work showcase",
        "Strong personal positioning and credibility",
        "Recruiter and client-friendly layout",
      ],
      price: "₹4,999", // Anchor price
      offeredPrice: "₹1,999", // Extremely attractive for students/freelancers
    },
    {
      title: "Custom Website",
      subheadline:
        "Tailored solutions for businesses with specific requirements",
      points: [
        "Custom layouts and interactive elements",
        "Flexible structure built to scale",
        "Designed around unique business needs",
      ],
      offeredPrice: "Custom Quote", // Flexible, premium feel
    },
  ];

  return (
    <>
      <section className="my-0 px-8 lg:px-40" data-aos="fade" id="service">
        {/* Services section header: context-setting and value positioning */}
        <div className="text-center">
          <h1
            className="font-[akira]  text-xl md:text-2xl lg:text-3xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="bg-linear-to-br from-green-500 to-green-800 text-transparent bg-clip-text">
              Services
            </span>{" "}
          </h1>
          <p
            className="font-[akira] text-sm md:text-md lg:text-lg mt-4 opacity-80 md:px-20 lg:px-30"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Websites designed to build trust and drive action
          </p>
          <h5
            className="font-[bricolage] text-xs md:text-sm lg:text-base mt-3 opacity-80 px-10 md:px-20 lg:px-30"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Simple, fast, and professional web solutions for modern businesses.
          </h5>
        </div>

        {/* Service cards grid: primary conversion area */}
        <div className="mt-10 md:mt-20 px-0 md:px-8 lg:px-20 xl:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 select-none">
          {servicesData.map((v, i, a) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="border-2 border-green-900 text-center bg-linear-to-tr from-green-950 to-green-900 mx-2 my-4 px-6 py-6 backdrop-blur-lg rounded-md overflow-hidden grid"
                key={i}
              >
                {/* Service title */}
                <h1 className="font-[bricolage] text-lg md:text-2xl">
                  {v.title}
                </h1>

                {/* Trust-focused service description */}
                <h2 className="text-sm md:text-base mt-6 font-[inter] text-zinc-300">
                  {v.subheadline}
                </h2>

                {/* Key value points highlighting outcomes */}
                <div className="text-left font-[space] text-zinc-300 text-sm md:text-base bg-green-900 p-3 rounded-md mt-6">
                  <h5 className="my-2">• {v.points[0]}</h5>
                  <h5 className="my-3">• {v.points[1]}</h5>
                  <h5 className="my-2">• {v.points[2]}</h5>
                </div>

                {/* Pricing anchor with discounted starting point */}
                <div className="mt-8">
                  <a
                    href="https://app.youform.com/forms/7eqd21qr"
                    target="_blank"
                    className="whitespace-nowrap truncate bg-linear-to-br w-40 from-green-800 via-green-600 to-green-800 border-2 border-green-600 font-[space] text-xs md:text-base rounded px-4 py-2 active:from-green-600 active:via-green-800 active:to-green-600 hover:from-green-600 hover:via-green-800 hover:to-green-600 transition-colors duration-150"
                  >
                    <span className="line-through opacity-80">{v.price}</span>
                    <span> {v.offeredPrice}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary CTA for users unsure about scope or service fit */}
        <h4
          className="text-center mt-10 md:mt-20 text-xs md:text-sm lg:text-base font-[inter] text-white/50 pb-20"
          data-aos="fade"
          data-aos-delay="300"
        >
          Not sure what you need?{" "}
          <a
            href="https://app.youform.com/forms/7eqd21qr"
            target="_blank"
            className="underline underline-offset-6 text-green-500 hover:text-green-600 active:text-green-600 transition-all"
          >
            Let’s figure it out →
          </a>
        </h4>

        {/* Trust reinforcement: pricing transparency and working process */}
        <h4
          className="text-center mt-0 text-xs md:text-sm lg:text-base font-[inter] text-white/50 pb-40"
          data-aos="fade"
          data-aos-delay="300"
        >
          ❝Clear communication, transparent pricing, and no hidden costs. A
          straightforward process from start to finish❞
        </h4>
      </section>
    </>
  );
};

export default Service;
