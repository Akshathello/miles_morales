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
  onClick?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className, id, ref, onClick }) => {
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
    // console.log(handleScroll, "Scroll is working");

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

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  console.log(toggleDropdown, "It is working");

  return (
    <>
      <nav
        id="nav"
        className="hidden lg:block md:block sm:hidden h-16 inset-x-0 backdrop-blur-lg max-w-full "
      >
        <MaxWidthWrapper className="">
          {isCollapsed ? (
            <div className="flex items-center justify-center h-16 ">
              <ButtonAnimate />
            </div>
          ) : (
            <div className=" flex h-16 lg:items-center justify-between border-b border-zinc-200">
              <div
                ref={btnRef}
                id="magneto"
                className=" relative cursor-pointer lg:p-6 md:p-0 p-0"
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
                  <Link
                    id="text"
                    href="/"
                    className="relative cursor-pointer inline-block whitespace-nowrap md:mt-5 lg:mt-0"
                  >
                    <span>{splitLetters}</span>
                  </Link>
                </motion.div>
              </div>

              <div className="flex gap-3">
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
                    className=" hover:duration-300 border-2 border-white hover:border-orange-500 duration-200  font-semibold md:p-0 lg:p-1 rounded-lg md:px-2 lg:px-3 inline-block whitespace-nowrap md:mt-1 lg:mt-0"
                  >
                    {splitLetters6}
                  </Link>
                </motion.div>
              </div>
            </div>
          )}
        </MaxWidthWrapper>
      </nav>

      <nav className=" block sm:block md:hidden lg:hidden">
        <div className="flex justify-between items-center p-4 ">
          <ButtonAnimate onClick={toggleDropdown} />
        </div>
        <motion.div
          initial={{ height: 1, opacity: 0 }}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          className={`${isOpen ? "block" : "hidden"} overflow-hidden`}
        >
          <ul className="flex flex-col p-4 space-y-4">
            <li>
              <Link
                href="/Web Studio"
                className="block hover:text-orange-500 text-white text-[2rem]"
              >
                {splitLetters}
              </Link>
            </li>
            <li>
              <Link
                href="/Vision Studio"
                className="block hover:text-orange-500"
              >
                Vision Studio
              </Link>
            </li>
            <li>
              <Link
                href="/Design Studio"
                className="block hover:text-orange-500"
              >
                Design Studio
              </Link>
            </li>
            <li>
              <Link
                href="/Catalyst Studio"
                className="block hover:text-orange-500"
              >
                Catalyst Studio
              </Link>
            </li>
            <li>
              <Link href="/sign-in" className="block hover:text-orange-500">
                Sign In
              </Link>
            </li>
            <li>
              <Link href="/sign-up" className="block hover:text-orange-500">
                Sign Up
              </Link>
            </li>
          </ul>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
