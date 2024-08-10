import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";

function Navbar() {
  return (
    <nav
      id="nav"
      className="sticky h-16 top-0 inset-x-0 backdrop-blur-lg transition-all z-10 bg-[#030712]/40"
    >
      <MaxWidthWrapper>
        <div className=" flex h-16 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex text-white z-40 font-semibold">
            <span>Miles Morales</span>
          </Link>

          <div className=" text-white hidden items-center space-x-4 sm:flex gap-3">
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
            className="hover:bg-orange-500 bg-white text-black font-semibold p-1 rounded-lg px-3"
          >
            Get Started
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default Navbar;
