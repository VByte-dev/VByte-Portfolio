import React from "react";

let TestiCard = ({ data }) => {
  // Reusable single testimonial card
  const CreateCard = ({ testimonial }) => (
    <div className="p-5 rounded-lg mx-4 border border-white/10 bg-white/5 backdrop-blur shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0">
      {/* Card header: client identity */}
      <div className="flex flex-col gap-1">
        <p className="font-medium">{testimonial.name}</p>
        <span className="text-xs text-white/60">{testimonial.role}</span>
      </div>

      {/* Client feedback content */}
      <p className="text-sm py-4 text-white/80 leading-relaxed">
        “{testimonial.feedback}”
      </p>

      {/* Card footer: context and timestamp */}
      <div className="flex items-center justify-between text-white/50 text-xs">
        <span>Client feedback</span>
        <p>{testimonial.date}</p>
      </div>
    </div>
  );

  return (
    <>
      {/* Inline animation definitions for marquee scrolling */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        /* Default marquee animation */
        .marquee-inner {
          animation: marqueeScroll 25s linear infinite;
        }

        /* Reverse direction for alternating row */
        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      {/* Marquee Row 1 */}
      <div className="w-full mx-auto max-w-5xl overflow-hidden relative">
        {/* Left fade gradient for smooth edge masking */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent" />

        {/* Scrolling container */}
        <div className="marquee-inner flex min-w-[200%] pt-10 pb-5">
          {/* Duplicate data for seamless infinite scroll */}
          {[...data, ...data].map((item, index) => (
            <CreateCard key={index} testimonial={item} />
          ))}
        </div>

        {/* Right fade gradient for smooth edge masking */}
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent" />
      </div>

      {/* Marquee Row 2 (reverse direction for visual balance) */}
      <div className="w-full mx-auto max-w-5xl overflow-hidden relative">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent" />

        {/* Reverse scrolling container */}
        <div className="marquee-inner marquee-reverse flex min-w-[200%] pt-10 pb-5">
          {[...data, ...data].map((item, index) => (
            <CreateCard key={index} testimonial={item} />
          ))}
        </div>

        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent" />
      </div>
    </>
  );
};

export default TestiCard;
