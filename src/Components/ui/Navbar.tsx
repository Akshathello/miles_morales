"use client";

import React, { useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import ButtonAnimate from "./ButtonAnimate";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface NavbarProps {
  className?: string;
  id?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className, id }) => {
  // gsap.registerPlugin(useGSAP);

  // const magnetoRef = useRef<HTMLDivElement | null>(null);
  // const magnetoTextRef = useRef<HTMLDivElement | null>(null);

  // const dbgrRef = useRef<HTMLDivElement | null>(null);

  // const [cursorX, setCursorX] = useState<number>(0);
  // const [debugInfo, SetDebugInfo] = useState({
  //   cursorX: 0,
  //   boxLeft: 0,
  //   cursorInsideButton: 0,
  //   relativeToTotalWidth: 0,
  //   shifted: 0,
  // });

  // //The effect while the pointer is within the subject

  // useEffect(() => {
  //   const magneto = magnetoRef.current;
  //   const dbgr = dbgrRef.current;

  //   const activateMagneto = (event: MouseEvent) => {
  //     if (!magneto || !dbgr) return;

  //     const boundBox = magneto.getBoundingClientRect();
  //     const magnetoStrength = 40;
  //     const magnetoTextStrength = 80;

  //     // const cursorX = event.clientX;

  //     // setCursorX(event.clientX);

  //     const boxLeft = Math.ceil(boundBox.left);
  //     const cursorInsideButton = Math.ceil(cursorX - boxLeft);
  //     const relativeToTotalWidth = (
  //       (cursorX - boxLeft) /
  //       magneto.offsetWidth
  //     ).toFixed(2);
  //     const shifted = ((cursorX - boxLeft) / magneto.offsetWidth - 0.5).toFixed(
  //       2
  //     );
  //     console.log(cursorX);

  //     SetDebugInfo({
  //       cursorX: event.clientX,
  //       boxLeft: Math.ceil(boundBox.left),
  //       cursorInsideButton: Math.ceil(cursorX - boxLeft),
  //       relativeToTotalWidth: parseFloat(relativeToTotalWidth),
  //       shifted: parseFloat(shifted),
  //     });
  //   };

  //   //the effect while the pointer is out of the subject

  //   const resetMagneto = (event: MouseEvent) => {};

  //   //add event listeners

  //   magneto!.addEventListener("mousemove", activateMagneto);
  //   magneto!.addEventListener("mouseleave", resetMagneto);
  //   console.log(activateMagneto);
  // }, []);

  const btnRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLDivElement>(null);

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
    };

    btnRef.current?.addEventListener("mousemove", handleMouseMove);
    btnRef.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(inactivityTimeout);
      btnRef.current?.removeEventListener("mousemove", handleMouseMove);
      btnRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <nav id="nav" className=" h-16 inset-x-0 bg-black/10 backdrop-blur-lg">
        <MaxWidthWrapper>
          <div className=" flex h-16 items-center justify-between border-b border-zinc-200 ">
            <div
              ref={btnRef}
              id="magneto"
              className=" relative block cursor-pointer p-6"
            >
              <div
                ref={spanRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full h-12 w-12 blur-lg bg-orange-500 opacity-0"
              />
              <Link
                id="text"
                href="/"
                className=" flex text-white z-40 font-semibold hover:text-orange-500 font-serif pointer-events-none mix-blend-difference"
              >
                <span>Miles Morales</span>
              </Link>
            </div>

            <div className=" text-white hidden items-center space-x-4 sm:flex gap-3 font-serif ">
              <Link
                href="/Web Studio"
                className="text-white hover:text-orange-500"
              >
                {" "}
                Web Studio
              </Link>

              <Link
                href="/Vision Studio"
                className="text-white hover:text-orange-500"
              >
                {" "}
                Vision Studio
              </Link>

              <ButtonAnimate id="Animate"></ButtonAnimate>

              <Link
                href="/Design Studio"
                className="text-white hover:text-orange-500"
              >
                {" "}
                Design Studio
              </Link>

              <Link
                href="/Catlyst Studio"
                className="text-white hover:text-orange-500"
              >
                {" "}
                Catalyst
              </Link>

              <Link
                href="/sign-in"
                className="text-white hover:text-orange-500"
              >
                Sign In
              </Link>
            </div>

            <Link
              href="/sign-up"
              className=" hover:duration-300 border-2 border-white hover:border-orange-500 duration-200 text-white font-semibold p-1 rounded-lg px-3 font-serif hover:text-transparent "
            >
              Get Started
            </Link>
          </div>
        </MaxWidthWrapper>
      </nav>
    </>
  );
};

export default Navbar;
