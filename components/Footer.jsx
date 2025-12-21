import React from "react";

// Animated brand text
import TextType from "./React Bits/TextType";

let Footer = () => {
  return (
    <>
      {/* Footer wrapper*/}
      <section
        id="contact"
        className="mt-40 md:mt-60 lg:mt-80 bg-linear-to-b from-black to-zinc-900"
        data-aos="slide-up"
        data-aos-delay="100"
      >
        <hr className="h-0.5 border-0 bg-gradient-to-r from-transparent via-white/50 to-transparent" />

        {/* Part-A: Primary footer content*/}
        <div className="flex flex-col lg:flex-row justify-between py-16 lg:py-20 px-6 md:px-12 lg:px-20 gap-12 lg:gap-0 text-left lg:text-left">
          {/*Profile block*/}
          <div>
            <h2 className="font-[space] opacity-100 mt-3">Hi, I’m Vedhesh</h2>
            <h3 className="font-[space] opacity-100">
              Building reliable, high-converting web solutions for businesses
              and professionals.
            </h3>

            {/* 
              Contact actions

            */}
            <div className="mt-8 text-center text-sm lg:text-base">
              <a href="mailto:vbyte.02@gmail.com">
                <div className="mt-2">
                  <button className="font-[space] bg-linear-to-br from-green-900 to-green-800 hover:opacity-90 active:opacity-90 mt-2 w-full rounded py-2 text-white">
                    Email Me
                  </button>
                </div>
              </a>

              {/* 
                Primary CTA button

              */}
              <a href="https://app.youform.com/forms/7eqd21qr" target="_blank">
                <div className="">
                  <button className="font-[space] bg-linear-to-br from-green-900 to-green-800 hover:opacity-90 active:opacity-90 mt-2 w-full rounded py-2 text-white">
                    Work With Me
                  </button>
                </div>
              </a>
              <a href="https://linktr.ee/vbyte" target="_blank">
                <div>
                  <button className="font-[space] bg-linear-to-br from-green-900 to-green-800 hover:opacity-90 active:opacity-90 mt-2 w-full rounded py-2 text-white">
                    Connect
                  </button>
                </div>
              </a>
            </div>
          </div>

          {/* Navigation block*/}
          <div className="text-right lg:text-left">
            <h1 className="font-[inter] text-base lg:text-lg">Navigation</h1>
            <div className="font-[space] mt-3 opacity-80 space-y-1">
              <div>
                <a
                  className="hover:underline active:underline underline-offset-4 transition-all"
                  href="#about"
                >
                  About
                </a>
              </div>
              <div>
                <a
                  className="hover:underline active:underline underline-offset-4 transition-all"
                  href="#service"
                >
                  Services
                </a>
              </div>
              <div>
                <a
                  className="hover:underline active:underline underline-offset-4 transition-all"
                  href="#contact"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Presence block*/}
          <div className="text-left w-30">
            <h1 className="font-[inter] text-base lg:text-lg">Presence</h1>
            <div className="font-[space] mt-3 opacity-80 space-y-2">
              {/* Individual social links with subtle motion feedback */}
              <div>
                <a
                  className="flex lg:justify-start gap-2 hover:gap-4 active:gap-4 transition-all"
                  href="https://github.com/VByte-dev"
                  target="_blank"
                >
                  <span className="hover:underline active:underline underline-offset-4">
                    Github
                  </span>
                  <i className="ri-arrow-right-up-long-line"></i>
                </a>
              </div>

              <div>
                <a
                  className="flex lg:justify-start gap-2 hover:gap-4 active:gap-4 transition-all"
                  href="https://www.instagram.com/vbyte.dev/"
                  target="_blank"
                >
                  <span className="hover:underline active:underline underline-offset-4">
                    Instagram
                  </span>
                  <i className="ri-arrow-right-up-long-line"></i>
                </a>
              </div>

              <div>
                <a
                  className="flex lg:justify-start gap-2 hover:gap-4 active:gap-4 transition-all"
                  href="https://x.com/VByteDev"
                  target="_blank"
                >
                  <span className="hover:underline active:underline underline-offset-4">
                    X
                  </span>
                  <i className="ri-arrow-right-up-long-line"></i>
                </a>
              </div>

              <div>
                <a
                  className="flex lg:justify-start gap-2 hover:gap-4 active:gap-4 transition-all"
                  href="https://www.linkedin.com/in/vedhesh-narayanan-m-750a52283/"
                  target="_blank"
                >
                  <span className="hover:underline active:underline underline-offset-4">
                    LinkedIn
                  </span>
                  <i className="ri-arrow-right-up-long-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Part-B: Brand reinforcement strip*/}
        <div className="mt-24 md:mt-40 lg:mt-60 flex flex-col lg:flex-row justify-between items-center lg:items-end p-6 md:p-10 gap-6 text-center lg:text-left">
          {/* Dynamic copyright year */}
          <h2 className="font-[bricolage] text-xs md:text-base order-1 lg:order-0">
            <span className="font-[inter]"> ©</span> {new Date().getFullYear()}{" "}
            - All Rights Reserved
          </h2>

          {/* Animated brand identity*/}
          <div>
            <TextType
              className="font-[akira] text-5xl md:text-7xl lg:text-9xl overflow-hidden"
              text={["VByte", "Code", "Craft", "Conquer"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter=""
            />
          </div>

          {/* Creator credit */}
          <h2 className="font-[bricolage] text-xs md:text-base order-2">
            Crafted by VByte
          </h2>
        </div>
      </section>
    </>
  );
};

export default Footer;
