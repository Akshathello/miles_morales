"use Client";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { motion, progress, useScroll, useTransform } from "framer-motion";
import WebStudioMaterial from "./WebStudioMaterial";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WebStudioBanner from "./WebStudioBanner";
import WebStudioBlurryLetters from "./WebStudioBlurryLetters";

gsap.registerPlugin(ScrollTrigger);

const WebStudioElement = forwardRef<HTMLDivElement>((props, ref) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top ",
        end: "+=1400",
        pin: true,
        pinSpacing: true,
        scrub: true,
        // markers: true,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.20"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  }, []);

  return (
    <div id="Webstudio" className=" h-[200rem] bg-[#030712]">
      <div ref={containerRef}>
        <WebStudioBanner />
        <div className="flex justify-center items-center">
          <WebStudioBlurryLetters></WebStudioBlurryLetters>
          <WebStudioMaterial></WebStudioMaterial>
          <WebStudioMaterial></WebStudioMaterial>
        </div>
      </div>
    </div>
  );
});

export default WebStudioElement;
