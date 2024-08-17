"use client";

import React, { useRef } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import ButtonAnimate from "./ButtonAnimate";

interface NavbarProps {
  className?: string;
  id?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className, id }) => {
  return (
    <>
      <nav id="nav" className=" h-16 inset-x-0 bg-black/40 backdrop-blur-lg">
        <MaxWidthWrapper>
          <div className=" flex h-16 items-center justify-between border-b border-zinc-200 ">
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
