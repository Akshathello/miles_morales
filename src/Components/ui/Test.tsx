// "use Client";
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// function Test() {
//   const element = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: element,
//     offset: ["start 0.65", "end start"],
//   });

//   // Transformations for the "Web Studio" opening effect
//   const scale = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);
//   const letterSpacing = useTransform(
//     scrollYProgress,
//     [0, 0.3],
//     ["-1em", "0em"]
//   );
//   const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

//   return (
//     <div className="h-[200rem] bg-[#030712]">
//       <div className="px-[18rem] py-9 items-start pt-[10rem]">
//         <div className="flex relative">
//           {/* Gradient background animation */}
//           <motion.div
//             ref={element}
//             style={{
//               opacity,
//               scale,
//             }}
//             className=" absolute inset-0.5 rounded-lg bg-gradient-to-r from-orange-500 to-purple-600 blur-lg"
//           ></motion.div>

//           {/* Web Studio content */}
//           <motion.div
//             ref={element}
//             style={{ opacity, scale, letterSpacing }}
//             className="relative px-5 py4 bg-black rounded-lg leading-none flex items-center justify-center"
//           >
//             <motion.span
//               style={{ scale, letterSpacing }}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-gray-100 text-[11rem] whitespace-nowrap font-serif serif-stroke2 italic"
//             >
//               Web Studio
//             </motion.span>

//             <motion.span
//               style={{ opacity, letterSpacing }}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="absolute text-gray-100 text-[10.8rem] whitespace-nowrap font-serif italic"
//             >
//               Web Studio
//             </motion.span>

//             <span className="absolute text-[10.8rem] whitespace-nowrap font-serif italic blur-sm">
//               Web Studio
//             </span>

//             <motion.span
//               style={{ opacity, letterSpacing }}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="absolute text-[#ff6590] text-[10.8rem] whitespace-nowrap font-serif italic blur-sm"
//             >
//               Web Studio
//             </motion.span>
//           </motion.div>
//         </div>
//       </div>
//       {/* Additional content below */}
//       {/* ... */}
//     </div>
//   );
// }

// export default Test;

"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Navbar from "./Navbar";
import MovingAnimation from "./MovingAnimation";
import Marquee from "./Marquee";
import { motion } from "framer-motion";
import mousePointer from "../utils/mousePointer";
import { FactoryIcon } from "lucide-react";

gsap.registerPlugin(useGSAP);

function LandingPage() {
  const { x, y } = mousePointer();

  const [isHovered, setIsHovered] = useState(false);

  const size = isHovered ? 400 : 40;

  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const [isAnimationstopped, setIsAnimationStopped] = useState(false);

  useGSAP(
    () => {
      if (container.current) {
        tl.current = gsap.timeline();

        tl.current
          .from(container.current, {
            opacity: 0,
          })

          .from(container.current, {
            x: "740px",
            y: "325px",
            transform: "scaleX(0) scaleY(0) translateX(100%)",
            duration: 2,
            ease: "ease.out",
            borderRadius: "100px",
          })

          .from("#Writeup", {
            opacity: 0,
            duration: 0.4,
            stagger: 0.4,
          })

          .from("#Writeup1", {
            opacity: 0,
            duration: 0.4,
            stagger: 0.4,
          })

          .from("#MM", {
            opacity: 0,
            duration: 0.8,
            stagger: 0.8,
          });
      }
    },
    {
      scope: container,
    }
  );

  return (
    <>
      <MovingAnimation />

      <div id="landingPage" ref={container} className="overflow-hidden">
        <div className="min-h-screen bg-black pt-11">
          {/* <div className="flex justify-evenly"> */}
          {/* <div className=" flex "> */}
          <div className="flex justify-around">
            <div
              id="Writeup1"
              className=" absolute serif-stroke3 font-serif text-[10rem] leading-none text-center p-40 "
            >
              Miles <br></br> Morales
            </div>
            <Image
              id="MM"
              src="MM Homepage element.svg"
              alt="Product preview"
              width={500}
              height={500}
              quality={100}
              style={{ objectFit: "fill" }}
              className=""
            />
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
            id="Writeup"
            className=" absolute font-serif text-black text-[10rem] leading-none text-center mask1 p-44"
          >
            <div
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
              className=""
            >
              {" "}
              Miles <br></br> Morales
              <Image
                id="MM"
                src="MM Homepage element.svg"
                alt="Product preview"
                width={500}
                height={500}
                quality={100}
                style={{ objectFit: "fill" }}
                className="absolute"
              />
            </div>
          </motion.div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default LandingPage;
