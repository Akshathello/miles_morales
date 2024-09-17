"use client";

import React, { useEffect, useRef, useState } from "react";
import LandingPage from "@/Components/ui/LandingPage";
import Marquee from "@/Components/ui/Marquee";
import WebStudioMain from "@/Components/ui/WebStudio/WebStudioMain";
import Navbar from "@/Components/ui/Navbar/Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DesignStudioMain from "@/Components/ui/DesignStudio/DesignStudioMain";
import VisionStudioMain from "@/Components/ui/VisionStudio/VisionStudioMain";
import Test from "@/Components/ui/Test";

// import Test from "@/Components/ui/Test";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      if (container.current) {
        tl.current = gsap.timeline();

        tl.current
          .from(container.current, {
            opacity: 0,
          })

          .from(container.current, {
            transform: "scaleX(0) scaleY(0) translateX(100%)",
            duration: 2,
            ease: "ease.out",
            borderRadius: "100px",
          })

          .from("#nav", {
            opacity: 0,
            duration: 0.3,
            stagger: 0.3,
          });
      }
    },
    {
      scope: container,
    }
  );

  return (
    <>
      <div ref={container} className=" h-5 bg-black sticky top-0 z-50">
        <div className="bg-black/0 backdrop-blur-lg scroll-smooth">
          <Navbar />
        </div>
      </div>
      <div>
        <LandingPage></LandingPage>
        <Marquee></Marquee>
        <WebStudioMain></WebStudioMain>
        <DesignStudioMain></DesignStudioMain>
        <VisionStudioMain></VisionStudioMain>
        <Test></Test>
      </div>
    </>
  );
}
