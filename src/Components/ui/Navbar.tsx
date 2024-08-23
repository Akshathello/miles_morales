"use client";

import React, { useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import ButtonAnimate from "./ButtonAnimate";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { color, easeInOut, motion } from "framer-motion";

interface NavbarProps {
  className?: string;
  id?: string;
}

const DURATION1 = 0.5;
const STAGGER1 = 0.04;

const Navbar: React.FC<NavbarProps> = ({ className, id }) => {
  const btnRef = useRef<HTMLDivElement>(null);
  const btnRef1 = useRef<HTMLDivElement>(null);
  const btnRef2 = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLDivElement>(null);
  const spanRef1 = useRef<HTMLDivElement>(null);
  const spanRef2 = useRef<HTMLDivElement>(null);
  const anchorRef = useRef<HTMLAnchorElement>(null);

  let inactivityTimeout: NodeJS.Timeout;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(inactivityTimeout);
      const target = e.target as HTMLElement;

      const { width } = target?.getBoundingClientRect();
      const offset = e.offsetX;

      const left = `${(offset / width) * 100}%`;

      gsap.to(spanRef.current, {
        duration: 0.5,
        xPercent: -50, // Keeps the center alignment
        left,
        opacity: 1,
        ease: "power2.out",
      });

      gsap.to(anchorRef.current, {
        duration: 0.5,
        xPercent: -50, // Keeps the center alignment
        left,
        opacity: 1,
        ease: "power4.out",
      });
    };

    const handleMouseMove2 = (e: MouseEvent) => {
      clearTimeout(inactivityTimeout);
      const target = e.target as HTMLElement;

      const { width } = target?.getBoundingClientRect();
      const offset = e.offsetX;

      const left = `${(offset / width) * 100}%`;

      gsap.to(spanRef2.current, {
        duration: 0.5,
        xPercent: -50, // Keeps the center alignment
        left,
        opacity: 1,
        ease: "power2.out",
      });

      gsap.to(anchorRef.current, {
        duration: 0.5,
        xPercent: -50, // Keeps the center alignment
        left,
        opacity: 1,
        ease: "power4.out",
      });
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const { width } = target?.getBoundingClientRect();
      const offset = e.offsetX;

      const left = `${(offset / width) * 100}%`;

      inactivityTimeout = setTimeout(() => {
        gsap.to(spanRef.current, {
          duration: 0.9,
          xPercent: -50, // Keeps the center alignment
          left: "50%",
          opacity: 0,
          ease: "power2.out",
        });
      }, 300);

      gsap.to(anchorRef.current, {
        duration: 0.9,
        xPercent: "", // Keeps the center alignment
        left,
        ease: "power4.out",
      });
    };

    const handleMouseLeave2 = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const { width } = target?.getBoundingClientRect();
      const offset = e.offsetX;

      const left = `${(offset / width) * 100}%`;

      inactivityTimeout = setTimeout(() => {
        gsap.to(spanRef2.current, {
          duration: 0.9,
          xPercent: -50, // Keeps the center alignment
          left: "50%",
          opacity: 0,
          ease: "power2.out",
        });
      }, 300);

      gsap.to(anchorRef.current, {
        duration: 0.9,
        xPercent: "", // Keeps the center alignment
        left,
        ease: "power4.out",
      });
    };

    btnRef.current?.addEventListener("mousemove", handleMouseMove);
    btnRef.current?.addEventListener("mouseleave", handleMouseLeave);
    btnRef2.current?.addEventListener("mousemove", handleMouseMove2);
    btnRef2.current?.addEventListener("mouseleave", handleMouseLeave2);

    return () => {
      clearTimeout(inactivityTimeout);
      btnRef.current?.removeEventListener("mousemove", handleMouseMove);
      btnRef.current?.removeEventListener("mouseleave", handleMouseLeave);
      btnRef2.current?.removeEventListener("mousemove", handleMouseMove2);
      btnRef2.current?.removeEventListener("mouseleave", handleMouseLeave2);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove1 = (e: MouseEvent) => {
      clearTimeout(inactivityTimeout);
      const target = e.target as HTMLElement;

      const { width } = target?.getBoundingClientRect();
      const offset = e.offsetX;

      const left = `${(offset / width) * 100}%`;

      gsap.to(spanRef1.current, {
        duration: 0.5,
        xPercent: -50, // Keeps the center alignment
        left,
        opacity: 1,
        ease: "power2.out",
      });

      gsap.to(anchorRef.current, {
        duration: 0.5,
        xPercent: -50, // Keeps the center alignment
        left,
        opacity: 1,
        ease: "power4.out",
      });
    };

    const handleMouseLeave1 = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const { width } = target?.getBoundingClientRect();
      const offset = e.offsetX;

      const left = `${(offset / width) * 100}%`;

      inactivityTimeout = setTimeout(() => {
        gsap.to(spanRef1.current, {
          duration: 0.9,
          xPercent: -50, // Keeps the center alignment
          left: "50%",
          opacity: 0,
          ease: "power2.out",
        });
      }, 300);

      gsap.to(anchorRef.current, {
        duration: 0.9,
        xPercent: "", // Keeps the center alignment
        left,
        ease: "power4.out",
      });
    };

    btnRef1.current?.addEventListener("mousemove", handleMouseMove1);
    btnRef1.current?.addEventListener("mouseleave", handleMouseLeave1);

    return () => {
      clearTimeout(inactivityTimeout);
      btnRef1.current?.removeEventListener("mousemove", handleMouseMove1);
      btnRef1.current?.removeEventListener("mouseleave", handleMouseLeave1);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove2 = (e: MouseEvent) => {
      clearTimeout(inactivityTimeout);
      const target = e.target as HTMLElement;

      const { width } = target?.getBoundingClientRect();
      const offset = e.offsetX;

      const left = `${(offset / width) * 100}%`;

      gsap.to(spanRef2.current, {
        duration: 0.5,
        xPercent: -50, // Keeps the center alignment
        left,
        opacity: 1,
        ease: "power2.out",
      });

      gsap.to(anchorRef.current, {
        duration: 0.5,
        xPercent: -50, // Keeps the center alignment
        left,
        opacity: 1,
        ease: "power4.out",
      });
    };

    const handleMouseLeave2 = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const { width } = target?.getBoundingClientRect();
      const offset = e.offsetX;

      const left = `${(offset / width) * 100}%`;

      inactivityTimeout = setTimeout(() => {
        gsap.to(spanRef2.current, {
          duration: 0.9,
          xPercent: -50, // Keeps the center alignment
          left: "50%",
          opacity: 0,
          ease: "power2.out",
        });
      }, 300);

      gsap.to(anchorRef.current, {
        duration: 0.9,
        xPercent: "", // Keeps the center alignment
        left,
        ease: "power4.out",
      });
    };

    btnRef2.current?.addEventListener("mousemove", handleMouseMove2);
    btnRef2.current?.addEventListener("mouseleave", handleMouseLeave2);

    return () => {
      clearTimeout(inactivityTimeout);
      btnRef2.current?.removeEventListener("mousemove", handleMouseMove2);
      btnRef2.current?.removeEventListener("mouseleave", handleMouseLeave2);
    };
  }, []);

  const word = "Miles Morales";
  const letterVariants = {
    initial: { opacity: 1, color: "#ffffff" },
    hover: { opacity: 0.3, color: "#f97316" },
  };

  const splitLetters = word.split("").map((letter, index) => {
    return (
      <motion.span
        key={index}
        variants={letterVariants}
        transition={{
          duration: DURATION1,
          delay: index * STAGGER1,
          ease: "easeOut",
          repeat: 4,
        }}
        className="text-white font-semibold z-40 font-serif pointer-events-none mix-blend-difference"
      >
        {letter}
      </motion.span>
    );
  });

  const word1 = "Web Studio";
  const letterVariants1 = {
    initial: { opacity: 1, color: "#ffffff" },
    hover: { opacity: 0.3, color: "#f97316" },
  };

  const splitLetters1 = word1.split("").map((letter, index) => {
    return (
      <motion.span
        key={index}
        variants={letterVariants1}
        transition={{
          duration: DURATION1,
          delay: index * STAGGER1,
          ease: "easeOut",
          repeat: 4,
        }}
        className="text-white font-serif pointer-events-none mix-blend-difference"
      >
        {letter}
      </motion.span>
    );
  });

  const word2 = "Vision Studio";
  const letterVariants2 = {
    initial: { opacity: 1, color: "#ffffff" },
    hover: { opacity: 0.3, color: "#f97316" },
  };

  const splitLetters2 = word2.split("").map((letter, index) => {
    return (
      <motion.span
        key={index}
        variants={letterVariants2}
        transition={{
          duration: DURATION1,
          delay: index * STAGGER1,
          ease: "easeOut",
          repeat: 4,
        }}
        className="text-white font-serif pointer-events-none mix-blend-difference"
      >
        {letter}
      </motion.span>
    );
  });

  const word3 = "Design Studio";
  const letterVariants3 = {
    initial: { opacity: 1, color: "#ffffff" },
    hover: { opacity: 0.3, color: "#f97316" },
  };

  const splitLetters3 = word3.split("").map((letter, index) => {
    return (
      <motion.span
        key={index}
        variants={letterVariants3}
        transition={{
          duration: DURATION1,
          delay: index * STAGGER1,
          ease: "easeOut",
          repeat: 4,
        }}
        className="text-white font-serif pointer-events-none mix-blend-difference"
      >
        {letter}
      </motion.span>
    );
  });

  const word4 = "Catalyst";
  const letterVariants4 = {
    initial: { opacity: 1, color: "#ffffff" },
    hover: { opacity: 0.3, color: "#f97316" },
  };

  const splitLetters4 = word4.split("").map((letter, index) => {
    return (
      <motion.span
        key={index}
        variants={letterVariants4}
        transition={{
          duration: DURATION1,
          delay: index * STAGGER1,
          ease: "easeOut",
          repeat: 4,
        }}
        className="text-white font-serif pointer-events-none mix-blend-difference"
      >
        {letter}
      </motion.span>
    );
  });

  const word5 = "Sign In";
  const letterVariants5 = {
    initial: { opacity: 1, color: "#ffffff" },
    hover: { opacity: 0.3, color: "#f97316" },
  };

  const splitLetters5 = word5.split("").map((letter, index) => {
    return (
      <motion.span
        key={index}
        variants={letterVariants5}
        transition={{
          duration: DURATION1,
          delay: index * STAGGER1,
          ease: "easeOut",
          repeat: 4,
        }}
        className="text-white font-serif pointer-events-none mix-blend-difference"
      >
        {letter}
      </motion.span>
    );
  });

  const word6 = "Get Started";
  const letterVariants6 = {
    initial: { opacity: 1, color: "#ffffff" },
    hover: { opacity: 0.3, color: "#f97316" },
  };

  const splitLetters6 = word6.split("").map((letter, index) => {
    return (
      <motion.span
        key={index}
        variants={letterVariants6}
        transition={{
          duration: DURATION1,
          delay: index * STAGGER1,
          ease: "easeOut",
          repeat: 4,
          border: "",
        }}
        className="text-white font-semibold border-white rounded-lg font-serif pointer-events-none mix-blend-difference"
      >
        {letter}
      </motion.span>
    );
  });
  return (
    <>
      <nav id="nav" className=" h-16 inset-x-0 bg-black/10 backdrop-blur-lg">
        <MaxWidthWrapper>
          <div className=" flex h-16 items-center justify-between border-b border-zinc-200">
            <div
              ref={btnRef}
              id="magneto"
              className=" relative block cursor-pointer p-6"
            >
              <div
                ref={spanRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full h-12 w-12 blur-lg bg-gradient-to-r from-orange-500 to bg-purple-600 text-transparent opacity-0"
              />
              <motion.div
                className="relative inline-block cursor-pointer"
                whileHover="hover"
                initial="initial"
              >
                <Link
                  id="text"
                  href="/"
                  className="relative inline-block cursor-pointer"
                >
                  <span>{splitLetters}</span>
                </Link>
              </motion.div>
            </div>

            <div className=" text-white flex gap-3 font-serif relative justify-center items-center">
              <div
                ref={btnRef1}
                id="magneto"
                className="relative flex space-x-9 whitespace-nowrap p-3 items-center cursor-pointer"
              >
                <div
                  ref={spanRef1}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full h-12 w-12 blur-lg bg-gradient-to-r from-orange-500 to bg-purple-600 text-transparent opacity-0"
                />
                <motion.div
                  className="relative"
                  whileHover="hover"
                  initial="initial"
                >
                  <Link
                    href="/Web Studio"
                    className="text-white pointer-events-none mix-blend-difference"
                  >
                    {splitLetters1}
                  </Link>
                </motion.div>

                <motion.div
                  className="relative "
                  whileHover="hover"
                  initial="initial"
                >
                  <Link
                    href="/Vision Studio"
                    className="text-white hover:text-orange-500"
                  >
                    {splitLetters2}
                  </Link>
                </motion.div>

                {/* <motion.div
                  className="relative inline-block cursor-pointer "
                  whileHover="hover"
                  initial="initial"
                > */}
                <ButtonAnimate id="Animate"></ButtonAnimate>
                {/* </motion.div> */}

                {/* <motion.div
                  className="relative inline-block cursor-pointer "
                  whileHover="hover"
                  initial="initial"
                > */}
                <Link
                  href="/Design Studio"
                  className="text-white hover:text-orange-500"
                >
                  {splitLetters3}
                </Link>
                {/* </motion.div> */}

                {/* <motion.div
                  className="relative inline-block cursor-pointer "
                  whileHover="hover"
                  initial="initial"
                > */}
                <Link
                  href="/Catlyst Studio"
                  className="text-white hover:text-orange-500"
                >
                  {splitLetters4}
                </Link>
                {/* </motion.div> */}

                {/* <motion.div
                  className="relative inline-block cursor-pointer "
                  whileHover="hover"
                  initial="initial"
                > */}
                <Link
                  href="/sign-in"
                  className="text-white hover:text-orange-500 z-10"
                >
                  {splitLetters5}
                </Link>
                {/* </motion.div> */}
              </div>
            </div>

            <div ref={btnRef2} className="relative block p-3 ">
              <div
                ref={spanRef2}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full h-12 w-12 blur-lg bg-gradient-to-r from-orange-500 to bg-purple-600 text-transparent opacity-0"
              />
              <motion.div
                className="relative inline-block cursor-pointer "
                whileHover="hover"
                initial="initial"
              >
                <Link
                  href="/sign-up"
                  className=" hover:duration-300 border-2 border-white hover:border-orange-500 duration-200 text-white font-semibold p-1 rounded-lg px-3 font-serif"
                >
                  {splitLetters6}
                </Link>
              </motion.div>
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    </>
  );
};

export default Navbar;
