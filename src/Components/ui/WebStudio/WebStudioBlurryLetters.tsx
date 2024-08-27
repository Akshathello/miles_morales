import React, { useState } from "react";
import { motion } from "framer-motion";
import mousePointer from "@/Components/utils/mousePointer";

function WebStudioBlurryLetters() {
  const { x, y } = mousePointer();

  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 40;
  return (
    <>
      <div className="  font-serif text-white text-[4rem] text-center blur-sm p-28 m-5 -mt-14 leading-[65px]">
        Godly Experience. The finer Level. The cosmic level. An experience like
        none another. What it TAKES!. Passion Driven. Take the plunge. Miles to
        Go!. Nonstop. Vision. Plan. Get Set Go!
      </div>
      <motion.div
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
        style={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        className="absolute leading-[65px] font-serif text-[4rem] mask p-28 -mt-14 m-5"
      >
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="text-center"
        >
          Godly Experience. The finer Level. The cosmic level. An experience
          like none another. What it TAKES!. Passion Driven. Take the plunge.
          Miles to Go!. Nonstop. Vision. Plan. Get Set Go!
        </div>
      </motion.div>
    </>
  );
}

export default WebStudioBlurryLetters;
