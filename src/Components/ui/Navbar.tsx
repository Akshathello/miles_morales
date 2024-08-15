"use client";

import React, { useRef } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// gsap.registerPlugin(useGSAP);

function Navbar() {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  // useGSAP(
  //   () => {
  //     if (container.current) {
  //       tl.current = gsap.timeline();

  //       tl.current
  //         .from(container.current, {
  //           opacity: 0,
  //           duration: 0.3,
  //           delay: 0.2,
  //         })
  //         .from(container.current, {
  //           transform: "scaleX(0.7) scaleY(0) translateY(80%)",
  //           borderRadius: "100px",
  //           duration: 2,
  //           ease: "expo.out",
  //         });

  //       // .from("#nav", {
  //       //   opacity: 0,
  //       // });
  //     }
  //   },
  //   {
  //     scope: container,
  //   }
  // );

  return (
    <nav id="nav" className="sticky h-16 top-0 inset-x-0 z-10 bg-black">
      <MaxWidthWrapper>
        <div className=" flex h-16 items-center justify-between border-b border-zinc-200">
          <Link
            href="/"
            className="flex text-white z-40 font-semibold hover:text-orange-500 font-serif"
          >
            <span>Miles Morales</span>
          </Link>

          <div className=" text-white hidden items-center space-x-4 sm:flex gap-3 font-serif">
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

            <Link href="/sign-in" className="text-white hover:text-orange-500">
              Sign In
            </Link>
          </div>

          <Link
            href="/sign-up"
            className=" hover:duration-300 border-2 border-white hover:border-orange-500 duration-200 text-white font-semibold p-1 rounded-lg px-3 font-serif "
          >
            Get Started
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default Navbar;
