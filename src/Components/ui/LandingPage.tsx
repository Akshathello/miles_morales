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
          <div className="flex justify-evenly">
            <div className=" flex items-center justify-center m-56 ">
              <div
                id="Writeup1"
                className=" absolute serif-stroke3 font-serif text-[10rem] leading-none text-center p-40 "
              >
                Miles <br></br> Morales <br />
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
                  Miles <br></br> Morales <br />
                </div>
              </motion.div>
            </div>
            <div className="flex">
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
                className="absolute mask1 "
              >
                <div
                  onMouseEnter={() => {
                    setIsHovered(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                  }}
                >
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
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
