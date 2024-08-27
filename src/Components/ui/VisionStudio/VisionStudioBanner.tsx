import React from "react";

function VisionStudio() {
  return (
    <div className=" px-[14rem] py-16 items-center -mb-9">
      <div className="relative">
        <div className="absolute inset-0.5 rounded-lg bg-gradient-to-r from-orange-500 to bg-purple-600  blur-lg opacity-100 animate-pulse"></div>

        <div className="relative px-5 py4 bg-black rounded-lg leading-none flex items-center justify-center">
          <span className="text-gray-100 text-[11rem] whitespace-nowrap font-serif serif-stroke2 italic">
            Vision Studio
          </span>

          <span className="absolute text-gray-100 text-[10.8rem] whitespace-nowrap font-serif italic">
            Vision Studio
          </span>

          <span className="absolute text-[10.8rem] whitespace-nowrap font-serif italic blur-sm">
            Vision Studio
          </span>

          <span className="absolute text-purple-600 text-[10.8rem] whitespace-nowrap font-serif italic blur-sm">
            Vision Studio
          </span>
        </div>
      </div>
      <div className=" bg-gradient-to-r from-orange-500 to bg-purple-600 container justify-center leading-none p-2 rounded-lg">
        <div className="text-white text-[3rem] font-serif text-center rounded-md p-2 bg-black ">
          A studio meant to intricately design a fabric of responsive website,
          which indulges the consumer into both confined and conflating
          experience designed between the lines of consumer experience.
        </div>
        <div className="font-serif font-extralight text-white"> </div>
      </div>
    </div>
  );
}

export default VisionStudio;
