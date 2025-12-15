import React from "react";

import TestiCard from "./testimonial/TestiCard";

let Testimonial = () => {
  // Static testimonial data
  // Represents real client feedback to build trust and social proof
  const cardsData = [
    {
      name: "Vetri",
      role: "Small Business Owner",
      feedback:
        "Clear communication and smooth delivery. The site feels professional and does exactly what we needed.",
      date: "3-18-2025",
    },
    {
      name: "Prabhakaran",
      role: "Startup Founder",
      feedback:
        "Understood our requirements quickly and executed without overcomplicating things. Very reliable.",
      date: "4-2-2025",
    },
    {
      name: "Rajaperumal",
      role: "Graphic Designer",
      feedback:
        "The website looks clean, loads fast, and customers find it easy to use. Happy with the outcome.",
      date: "12-25-2025",
    },
    {
      name: "Thileepan",
      role: "Freelance Consultant",
      feedback:
        "Simple process, honest pricing, and quality work. Would definitely recommend.",
      date: "5-9-2025",
    },
  ];

  return (
    <>
      {/* Testimonial section wrapper */}
      <section className="my-0">
        {/* Section heading and context copy */}
        <div className="text-left px-8 lg:px-40">
          {/* Section title emphasizing client validation */}
          <h1 className="font-[akira] text-xl md:text-2xl lg:text-3xl">
            Words from
            <span className="bg-linear-to-br from-green-500 to-green-800 text-transparent bg-clip-text">
              {" "}
              Clients
            </span>
          </h1>

          {/* Supporting description reinforcing credibility */}
          <h3 className="font-[bricolage] text-md md:text-lg lg:text-xl mt-4 opacity-80 w-fit md:w-2/3">
            Real-world projects built for clients and personal products. Each
            one focuses on clarity, performance, and business outcomes.
          </h3>
        </div>

        {/* Testimonial cards container */}
        <div className="mt-8 md:mt-16">
          {/* Pass testimonial data to reusable card component */}
          <TestiCard data={cardsData} />
        </div>
      </section>
    </>
  );
};

export default Testimonial;
