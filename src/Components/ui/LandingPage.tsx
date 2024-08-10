"use client";

import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
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
            duration: 0.3,
            delay: 0.2,
          })
          .from(container.current, {
            transform: "scaleX(0.7) scaleY(0) translateY(80%)",
            borderRadius: "100px",
            duration: 2,
            ease: "expo.out",
          })

          .from("#nav", {
            opacity: 0,
          });
      }
    },
    {
      scope: container,
    }
  );

  return (
    <>
      <div
        ref={container}
        id="landingpage"
        className="flex items-center justify-center bg-[#030712] pb-5"
      >
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 2 }}
            exit={{ opacity: 0 }}
            color="f97316"
            className="font-serif text-white text-[10rem] leading-none hover:text-orange-500 transition ease-in-out"
          >
            {" "}
            Miles <br></br> Morales
          </motion.div>
        </AnimatePresence>

        <Image
          src="MM Homepage element.svg"
          alt="Product preview"
          width={500}
          height={100}
          quality={100}
          style={{ objectFit: "contain" }}
        />
      </div>
    </>
  );
}

export default LandingPage;
