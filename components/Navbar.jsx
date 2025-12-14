import React from "react";

let Navbar = () => {
  return (
    <>
      <section className="w-5/6 lg:w-2/5 lg:hover:w-4/6 transition-all duration-200">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 flex justify-between items-center rounded-full px-6 md:px-8 py-3 ">
          <h1 className="font-[bricolage] text-lg md:text-xl">VByte</h1>
          <div>
            <button className="bg-linear-to-b from-green-900 to-green-700 font-[space] text-md md:text-md px-4 py-1 rounded-full active:bg-linear-to-bl active:from-green-700 active:to-green-900 transition-colors duration-100 hover:bg-linear-to-bl hover:from-green-700 hover:to-green-900">
              Contact
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
