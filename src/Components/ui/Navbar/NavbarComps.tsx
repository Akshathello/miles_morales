import React from "react";
import { motion } from "framer-motion";

const DURATION1 = 0.5;
const STAGGER1 = 0.04;

const letterVariants = {
  initial: { opacity: 1, color: "#ffffff" },
  hover: { opacity: 0.3, color: "#f97316" },
};

const createSplitLetters = (word: string): React.ReactNode[] => {
  return word.split("").map((letter, index) => {
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
};

export const splitLetters = createSplitLetters("Miles Morales");
export const splitLetters1 = createSplitLetters("Web Studio");
export const splitLetters2 = createSplitLetters("Vision Studio");
export const splitLetters3 = createSplitLetters("Design Studio");
export const splitLetters4 = createSplitLetters("Catalyst");
export const splitLetters5 = createSplitLetters("Sign In");
export const splitLetters6 = createSplitLetters("Get Started");

function NavbarComps() {
  return <div>NavbarComps</div>;
}

export default NavbarComps;
