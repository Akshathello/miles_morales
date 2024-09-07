"use Client";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { motion, progress, useScroll, useTransform } from "framer-motion";
import WebStudioMaterial from "./WebStudioMaterial";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WebStudioBanner from "./WebStudioBanner";
import WebStudioBlurryLetters from "./WebStudioBlurryLetters";
import WebStudioBannerWithMask from "./WebStudioBannerWithMask";
import WebStudioMaterialMask from "./WebStudioMaterialMask";

gsap.registerPlugin(ScrollTrigger);

const WebStudioMain = forwardRef<HTMLDivElement>((props, ref) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top ",
        end: "+=1200",
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
  }, [scrollYProgress]);

  return (
    <div className=" h-[120rem] bg-[#030712]">
      <div ref={containerRef}>
        <WebStudioBannerWithMask />
        <div className="flex justify-center items-center">
          <WebStudioBlurryLetters></WebStudioBlurryLetters>
          <WebStudioMaterialMask></WebStudioMaterialMask>
          {/* <WebStudioMaterial></WebStudioMaterial> */}
        </div>
      </div>
    </div>
  );
});
WebStudioMain.displayName = "WebStudioMain";
export default WebStudioMain;
