import React, { useRef } from "react";
import { motion } from "framer-motion";

interface movProps {
  href?: string;
  variants?: string;
  children?: string;
}

const DURATION = 0.5;
const STAGGER = 0.025;

const DURATION1 = 0.75;
const STAGGER1 = 0.05;

const movingAnimation: React.FC<movProps> = ({ href, variants, children }) => {
  const word = "Creative";
  const letterVariants = {
    hidden: { y: "100%" },
    visible: { y: "0%" },
  };
  const letterVariants2 = {
    hidden: { y: "-100%" },
    visible: { y: "0%" },
  };
  const splitLetters = word.split("").map((letter, index) => (
    <motion.span
      key={index}
      variants={letterVariants}
      initial="hidden"
      animate="visible"
      transition={{
        duration: DURATION1,
        delay: index * STAGGER1,
        ease: "easeInOut",
      }}
      className="inline-block text-[10rem] font-serif serif-stroke font-extrabold bg-gradient-to-r from-orange-500 to bg-purple-600 text-transparent bg-clip-text italic tracking-wide"
    >
      {letter}
    </motion.span>
  ));

  const splitLettersWithoutFill = word.split("").map((letter, index) => (
    <motion.span
      key={index}
      variants={letterVariants}
      initial="hidden"
      animate="visible"
      transition={{
        duration: DURATION,
        delay: index * STAGGER,
        ease: "easeInOut",
      }}
      className="inline-block text-[10rem] font-serif serif-stroke font-extrabold tracking-wide"
    >
      {letter}
    </motion.span>
  ));
  const splitLetters1 = word.split("").map((letter, index) => (
    <motion.span
      key={index}
      variants={letterVariants2}
      initial="hidden"
      animate="visible"
      transition={{
        duration: DURATION1,
        delay: index * STAGGER1,
        ease: "easeInOut",
      }}
      className="inline-block text-[10rem] font-serif serif-stroke font-extrabold tracking-wide bg-gradient-to-r from-orange-500 to bg-purple-600 text-transparent bg-clip-text italic"
    >
      {letter}
    </motion.span>
  ));

  const word1 = "Embarking";

  const letterVariants1 = {
    hidden: { x: "800%" },
    visible: { x: "0%" },
  };

  const letterVariants3 = {
    hidden: { x: "-1500%" },
    visible: { x: "0%" },
  };

  const splitLetters0 = word1.split("").map((letter, index) => (
    <motion.span
      key={index}
      variants={letterVariants1}
      initial="hidden"
      animate="visible"
      transition={{
        duration: DURATION1,
        delay: index * STAGGER1,
        ease: "easeInOut",
      }}
      className="inline-block text-[10rem] font-serif serif serif-stroke text-orange-500 italic leading-9"
    >
      {letter}
    </motion.span>
  ));

  const splitLetters01 = word1.split("").map((letter, index) => (
    <motion.span
      key={index}
      variants={letterVariants3}
      initial="hidden"
      animate="visible"
      transition={{
        duration: DURATION1,
        delay: index * STAGGER1,
        ease: "easeInOut",
      }}
      className="inline-block text-[10rem] font-serif serif serif-stroke text-black italic leading-9"
    >
      {letter}
    </motion.span>
  ));

  const word2 = "On a";
  const letterVariants4 = {
    hidden: { x: "-200%" },
    visible: { x: "0" },
  };
  const splitLetters02 = word2.split("  ").map((letter, index) => (
    <motion.span
      key={index}
      variants={letterVariants4}
      initial="hidden"
      animate="visible"
      transition={{
        duration: DURATION1,
        delay: index * STAGGER1,
        ease: "easeInOut",
      }}
      className="inline-block text-[10rem] font-serif serif serif-stroke text-purple-600 italic leading-9"
    >
      {letter}
    </motion.span>
  ));

  const word3 = "Journey";
  const letterVariants5 = {
    hidden: { y: "500%" },
    visible: { y: "0" },
  };
  const splitLetters03 = word3.split("").map((letter, index) => (
    <motion.span
      key={index}
      variants={letterVariants5}
      initial="hidden"
      animate="visible"
      transition={{
        duration: DURATION,
        delay: index * STAGGER,
        ease: "easeInOut",
      }}
      className="inline-block text-[10rem] font-serif serif serif-stroke text-orange-500 italic leading-9"
    >
      {letter}
    </motion.span>
  ));

  return (
    <>
      <div className="relative flex justify-start items-start leading-none -z-10 pl-10">
        <span className=" absolute pt-20 text-[10rem] font-serif serif serif-stroke text-black italic leading-9">
          {splitLetters0}
        </span>

        <span className=" absolute pt-20 text-[10rem] font-serif serif serif-stroke text-black italic leading-9">
          {splitLetters01}
        </span>

        <span className="absolute text-[10rem] mt-48 mr-[660px] font-serif serif-stroke text-black italic">
          {splitLetters02}
        </span>

        <span className="absolute text-[10rem] mt-48 mr-[660px] font-serif serif-stroke text-black italic">
          On a
        </span>

        <span className=" absolute -z-10 text-[10rem] mt-48 ml-96 font-serif serif-stroke font-extrabold bg-gradient-to-r from-orange-500 to bg-purple-600 text-transparent bg-clip-text italic tracking-wide">
          {splitLetters}
        </span>

        <span className=" absolute -z-10 text-[10rem] mt-48 ml-96 font-serif serif-stroke font-extrabold bg-gradient-to-r from-orange-500 to bg-purple-600 text-transparent bg-clip-text italic tracking-wide">
          {splitLetters1}
        </span>

        <span className="absolute -z-10 text-[10rem] mt-48 ml-96 font-serif serif-stroke font-extrabold italic tracking-wide">
          {splitLettersWithoutFill}
        </span>

        <div className="absolute h-[300px] w-[900px] m-[345px] bg-[#FFF8DC]"></div>
        <div className="absolute h-[200px] w-[900px] ml-60 bg-[#FFF8DC] -z-10"></div>
        <div className="absolute h-[200px] w-[660px] ml-[815px] bg-[#FFF8DC]"></div>
        <div className="absolute h-[180px] w-[900px] mt-[525px] bg-[#FFF8DC] z-10"></div>

        <span className="absolute text-[10rem] mt-[350px] font-serif serif serif-stroke text-black italic font-extrabold ">
          {splitLetters03}
        </span>
        <span className="absolute text-[10rem] mt-[350px] font-serif serif serif-stroke text-black italic font-extrabold ">
          Journey
        </span>
      </div>
    </>
  );
};

export default movingAnimation;
