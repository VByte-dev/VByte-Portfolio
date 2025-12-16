import React from "react";

// Animated brand text
import TextType from "./React Bits/TextType";

let Footer = () => {
  return (
    <>
      {/* Footer wrapper*/}
      <section className="mt-40 md:mt-60 lg:mt-80 bg-linear-to-b from-green-950 to-green-900">
        {/* Part-A: Primary footer content*/}
        <div className="flex flex-col lg:flex-row justify-between py-16 lg:py-20 px-6 md:px-12 lg:px-20 gap-12 lg:gap-0 text-left lg:text-left">
          {/*Profile block*/}
          <div>
            <h1 className="font-[inter] text-base lg:text-lg">Profile</h1>
            <h2 className="font-[space] opacity-90 mt-3">Vedhesh</h2>
            <h3 className="font-[space] opacity-90">
              Building reliable web solutions for businesses.
            </h3>

            {/* 
              Contact actions

            */}
            <div className="mt-8">
              <a
                className=" hover:underline font-[space] opacity-80 active:underline underline-offset-4 transition-all"
                href="mailto:vbyte.02@gmail.com"
              >
                vbyte.02@gmail.com
              </a>

              {/* 
                Primary CTA button

              */}
              <a href="">
                <div>
                  <button className="font-[space] bg-black mt-2 w-full rounded py-2 text-white">
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
                <a className="hover:underline active:underline underline-offset-4 transition-all">
                  About
                </a>
              </div>
              <div>
                <a className="hover:underline active:underline underline-offset-4 transition-all">
                  Services
                </a>
              </div>
              <div>
                <a className="hover:underline active:underline underline-offset-4 transition-all">
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
                <a className="flex lg:justify-start gap-2 hover:gap-4 active:gap-4 transition-all">
                  <span className="hover:underline active:underline underline-offset-4">
                    Github
                  </span>
                  <i className="ri-arrow-right-up-long-line"></i>
                </a>
              </div>

              <div>
                <a className="flex lg:justify-start gap-2 hover:gap-4 active:gap-4 transition-all">
                  <span className="hover:underline active:underline underline-offset-4">
                    Instagram
                  </span>
                  <i className="ri-arrow-right-up-long-line"></i>
                </a>
              </div>

              <div>
                <a className="flex lg:justify-start gap-2 hover:gap-4 active:gap-4 transition-all">
                  <span className="hover:underline active:underline underline-offset-4">
                    X
                  </span>
                  <i className="ri-arrow-right-up-long-line"></i>
                </a>
              </div>

              <div>
                <a className="flex lg:justify-start gap-2 hover:gap-4 active:gap-4 transition-all">
                  <span className="hover:underline active:underline underline-offset-4">
                    LinkedIn
                  </span>
                  <i className="ri-arrow-right-up-long-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divide*/}
        <div className="h-[0.1px] w-full bg-white/50"></div>

        {/* Part-B: Brand reinforcement strip*/}
        <div className="mt-24 md:mt-40 lg:mt-60 flex flex-col lg:flex-row justify-between items-center lg:items-end p-6 md:p-10 gap-6 text-center lg:text-left">
          {/* Dynamic copyright year */}
          <h2 className="font-[bricolage] text-xs md:text-base order-1 lg:order-0">
            <span className="font-[inter]"> ©</span> {new Date().getFullYear()}{" "}
            - All Rights Reserved.
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
