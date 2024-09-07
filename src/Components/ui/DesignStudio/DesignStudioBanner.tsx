import React from "react";

function DesignStudioBanner() {
  return (
    <div className=" px-[12rem] py-16 items-center">
      <div className="relative">
        <div className="absolute inset-0.5 rounded-lg bg-gradient-to-r from-orange-500 to bg-purple-600  blur-lg opacity-100 animate-pulse"></div>

        <div className="relative px-5 py4 bg-black rounded-lg leading-none flex items-center justify-center">
          <span className="text-gray-100 text-[11rem] whitespace-nowrap font-serif serif-stroke2 italic mb-7">
            Design Studio
          </span>

          <span className="absolute text-gray-100 text-[10.8rem] font-serif italic mb-7">
            Design Studio
          </span>

          <span className="absolute text-[10.8rem] font-serif italic mb-7 blur-sm">
            Design Studio
          </span>

          <span className=" text-orange-500 absolute text-[10.8rem] font-serif italic mb-7 blur-sm">
            Design Studio
          </span>
        </div>
      </div>
    </div>
  );
}

export default DesignStudioBanner;
