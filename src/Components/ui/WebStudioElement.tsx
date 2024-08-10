import React from "react";

function WebStudioElement() {
  return (
    <div className="min-h-screen bg-[#030712]">
      <div className=" px-[25.2rem] py-16 ">
        <div className="relative">
          <div className="absolute inset-0.5 rounded-lg bg-gradient-to-r from-orange-500 to bg-purple-600  blur-lg opacity-100"></div>

          <div className="relative px-7 py4 bg-black rounded-lg leading-none flex items-center ">
            <span className="text-gray-100 font-bold text-[5rem] font-serif">
              The Web Studio
            </span>
          </div>
        </div>
      </div>
      <div className="text-white text-[3rem] justify-center leading-none font-serif text-center">
        A studio meant to intricately design a fabric of responsive website,
        which indulges the consumer into both confined and conflating experience
        designed between the lines of consumer experience.
      </div>
    </div>
  );
}

export default WebStudioElement;
