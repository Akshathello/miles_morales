"use Client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import mousePointer from "../utils/mousePointer";

function WebStudioElement() {
  const { x, y } = mousePointer();
  // const maskRef = useRef<HTMLDivElement | null>(null);

  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 40;

  // const pos = useRef({ x: 0, y: 0 });

  // useEffect(() => {
  //   if (maskRef.current) {
  //     gsap.ticker.add(() => {
  //       pos.current.x += (x - pos.current.x) * 0.1;
  //       pos.current.y += (y - pos.current.y) * 0.1;

  //       gsap.set(maskRef.current, {
  //         x: pos.current.x - 40,
  //         y: pos.current.y - 40,
  //       });
  //     });
  //   }

  //   return () => {
  //     gsap.ticker.remove(() => {});
  //   };
  // }, [x, y]);

  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  }, []);

  return (
    <div className=" h-[100rem] bg-[#030712]">
      <div className=" px-[19rem] py-9 items-start -mb-9 pt-[10rem]">
        <div className="relative">
          <div className="absolute inset-0.5 rounded-lg bg-gradient-to-r from-orange-500 to bg-purple-600  blur-lg opacity-100 animate-pulse"></div>

          <div className="relative px-5 py4 bg-black rounded-lg leading-none flex items-center justify-center">
            <span className="text-gray-100 text-[11rem] whitespace-nowrap font-serif serif-stroke2 italic">
              Web Studio
            </span>

            <motion.span
              ref={element}
              style={{ opacity: scrollYProgress }}
              className="absolute text-gray-100 text-[10.8rem] whitespace-nowrap font-serif italic"
            >
              Web Studio
            </motion.span>

            <span className="absolute text-[10.8rem] whitespace-nowrap font-serif italic blur-sm">
              Web Studio
            </span>

            <motion.span
              ref={element}
              style={{ opacity: scrollYProgress }}
              className="absolute text-[#ff6590] text-[10.8rem] whitespace-nowrap font-serif italic blur-sm"
            >
              Web Studio
            </motion.span>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center mt-20">
        <div className=" flex leading-[65px] text-center">
          <div className="font-serif text-white text-[4rem] blur-sm">
            Godly Experience. The finer Level. The cosmic level. An experience
            like none another. What it TAKES!. Passion Driven. Take the plunge.
            Miles to Go!. Nonstop. Vision. Plan. <br /> Get Set Go!
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
            className="absolute leading-[65px] font-serif text-[4rem] mask"
          >
            <div
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
              className=" bg-gradient-to-r from-orange-500 to bg-purple-600"
            >
              Godly Experience. The finer Level. The cosmic level. An experience
              like none another. What it TAKES!. Passion Driven. Take the
              plunge. Miles to Go!. Nonstop. Vision. Plan. <br /> Get Set Go!
            </div>
          </motion.div>
        </div>
      </div>
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
      </div>

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

export default WebStudioElement;
