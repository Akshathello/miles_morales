"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import Navbar from "./Navbar";

gsap.registerPlugin(useGSAP);

function LandingPage() {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  // useEffect(() => {

  useGSAP(
    () => {
      if (container.current) {
        tl.current = gsap.timeline();

        tl.current
          .from(container.current, {
            opacity: 0,
          })

          .from(container.current, {
            transform: "scaleX(0.7) scaleY(0) translateY(80%)",
            borderRadius: "100px",
            duration: 2,
            ease: "expo.out",
            onStart: () => console.log("radius animation started"),
            onComplete: () => console.log("radius animation completed"),
          })

          .from("#nav", {
            opacity: 0,
            duration: 0.2,
            stagger: 0.3,
            onStart: () => console.log("nav animation started"),
            onComplete: () => console.log("Nav animation completed"),
          })

          .from("#Writeup", {
            opacity: 0,
            duration: 0.7,
            stagger: 0.7,
          })

          .from("#MM", {
            opacity: 0,
            duration: 0.9,
            stagger: 0.9,
          });
      }
    },
    {
      scope: container,
    }
  );

  return (
    <div id="landingPage" ref={container}>
      <div className="min-h-screen bg-black ">
        <Navbar />

        <div className=" flex items-center justify-center pb-5">
          <div
            id="Writeup"
            className="bg-gradient-to-r from-orange-500 to bg-purple-600 text-transparent bg-clip-text"
          >
            <div className="font-serif text-[10rem] leading-none hover:text-orange-500 transition text-center">
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
  );
}

export default LandingPage;
