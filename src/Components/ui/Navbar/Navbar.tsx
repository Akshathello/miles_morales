"use client";

import React, { useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import Link from "next/link";
import ButtonAnimate from "../Animations/ButtonAnimate";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { color, easeInOut, motion } from "framer-motion";
import {
  splitLetters,
  splitLetters1,
  splitLetters2,
  splitLetters3,
  splitLetters4,
  splitLetters5,
  splitLetters6,
} from "../Navbar/NavbarComps";

// import NavbarMouseEvents from "../Navbar/NavbarMouseEvents";

interface NavbarProps {
  className?: string;
  id?: string;
  ref?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className, id, ref }) => {
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

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > 100 && currentScrollPos > prevScrollPos) {
        setIsCollapsed(true);
      } else if (currentScrollPos < prevScrollPos) {
        setIsCollapsed(false);
      }

      setPrevScrollPos(currentScrollPos);
    };
    console.log(handleScroll, "Scroll is working");

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    if (isCollapsed) {
      gsap.to("#nav", {
        // x: "700px",
        scale: 0,
        opacity: 0,
        duration: 1,
        height: 0,
        ease: "power2.inOut",
      });
    } else {
      gsap.to("#nav", {
        // x: "0px",
        opacity: 1,
        scale: 1,
        duration: 1,
        height: 63,
        ease: "power2.inOut",
      });
    }
  }, [isCollapsed]);

  return (
    <>
      <nav id="nav" className=" h-16 inset-x-0 backdrop-blur-lg">
        <MaxWidthWrapper>
          {isCollapsed ? (
            <div className=" flex items-center justify-center h-16 ">
              <ButtonAnimate />
            </div>
          ) : (
            <div className=" flex h-16 lg:items-center md:items-start items-center justify-between border-b border-zinc-200">
              <div
                ref={btnRef}
                id="magneto"
                className=" relative cursor-pointer lg:p-6 md:p-2 sm:p-0"
              >
                <div
                  ref={spanRef}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full h-12 w-12 blur-lg bg-gradient-to-r from-orange-500 to bg-purple-600 text-transparent opacity-0"
                />
                <motion.div
                  className="relative cursor-pointer"
                  whileHover="hover"
                  initial="initial"
                >
                  <Link id="text" href="/" className="relative cursor-pointer">
                    <span>{splitLetters}</span>
                  </Link>
                </motion.div>
              </div>

              <div className="  flex gap-3">
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
                    <Link href="/Web Studio">{splitLetters1}</Link>
                  </motion.div>

                  <motion.div
                    className="relative "
                    whileHover="hover"
                    initial="initial"
                  >
                    <Link
                      href="/Vision Studio"
                      className=" hover:text-orange-500"
                    >
                      {splitLetters2}
                    </Link>
                  </motion.div>

                  {/* <motion.div
                  className="relative inline-block cursor-pointer "
                  whileHover="hover"
                  initial="initial"
                > */}

                  <ButtonAnimate></ButtonAnimate>

                  {/* </motion.div> */}

                  {/* <motion.div
                  className="relative inline-block cursor-pointer "
                  whileHover="hover"
                  initial="initial"
                > */}
                  <Link
                    href="/Design Studio"
                    className=" hover:text-orange-500"
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
                    className=" hover:text-orange-500"
                  >
                    {splitLetters4}
                  </Link>
                  {/* </motion.div> */}

                  {/* <motion.div
                  className="relative inline-block cursor-pointer "
                  whileHover="hover"
                  initial="initial"
                > */}
                  <Link href="/sign-in" className=" hover:text-orange-500 z-10">
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
                    className=" hover:duration-300 border-2 border-white hover:border-orange-500 duration-200  font-semibold p-1 rounded-lg px-3"
                  >
                    {splitLetters6}
                  </Link>
                </motion.div>
              </div>
            </div>
          )}
        </MaxWidthWrapper>
      </nav>
    </>
  );
};

export default Navbar;
