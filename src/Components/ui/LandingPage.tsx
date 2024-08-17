"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Navbar from "./Navbar";
import MovingAnimation from "./MovingAnimation";
import Marquee from "./Marquee";

gsap.registerPlugin(useGSAP);

function LandingPage() {
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
          <div className=" flex items-center justify-center pb-5">
            <div
              id="Writeup"
              className="bg-gradient-to-r from-orange-500 to bg-purple-600 text-transparent bg-clip-text"
            >
              <div className="font-serif text-[10rem] leading-none hover:text-orange-500 duration-300 text-center">
                {" "}
                Miles <br></br> Morales
              </div>
            </div>

            <Image
              id="MM"
              src="MM Homepage element.svg"
              alt="Product preview"
              width={500}
              height={500}
              quality={100}
              style={{ objectFit: "fill" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
