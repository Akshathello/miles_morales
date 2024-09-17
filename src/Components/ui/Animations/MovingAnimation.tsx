// import React, { useRef } from "react";
// import { motion } from "framer-motion";

// interface movProps {
//   href?: string;
//   variants?: string;
//   children?: string;
// }

// const DURATION = 0.5;
// const STAGGER = 0.025;

// const DURATION1 = 0.75;
// const STAGGER1 = 0.05;

// const MovingAnimation: React.FC<movProps> = ({ href, variants, children }) => {
//   const word = "Creative";
//   const letterVariants = {
//     hidden: { x: "70%", opacity: 0, scaleX: -3, scale: 0 },
//     visible: { x: "0%", opacity: 1, scaleX: 1, scale: 1 },
//   };
//   const letterVariants2 = {
//     hidden: { x: "-70%", opacity: 0, scaleX: -3, scale: 0 },
//     visible: { x: "0%", opacity: 1, scaleX: 1, scale: 1 },
//   };
//   const splitLetters = word.split("").map((letter, index) => (
//     <motion.span
//       key={index}
//       variants={letterVariants}
//       initial="hidden"
//       animate="visible"
//       transition={{
//         duration: DURATION1,
//         delay: index * STAGGER1,
//         // repeat: Infinity,
//         ease: "easeInOut",
//       }}
//       className="inline-block lg:text-[10rem] md:text-[7.5rem] text-[5rem] lg:serif-stroke md:serif-stroke01 serif-stroke02 font-extrabold bg-gradient-to-r from-orange-500 to bg-purple-600 text-transparent bg-clip-text italic tracking-wide whitespace-nowrap"
//     >
//       {letter}
//     </motion.span>
//   ));

//   const splitLettersWithoutFill = word.split("").map((letter, index) => (
//     <motion.span
//       key={index}
//       variants={letterVariants}
//       initial="hidden"
//       animate="visible"
//       transition={{
//         // repeat: Infinity,
//         duration: DURATION,
//         delay: index * STAGGER,
//         ease: "easeInOut",
//       }}
//       className="inline-block lg:text-[10rem] md:text-[7.5rem] text-[5rem] lg:serif-stroke md:serif-stroke01 serif-stroke02 font-extrabold tracking-wide text-black whitespace-nowrap"
//     >
//       {letter}
//     </motion.span>
//   ));
//   const splitLetters1 = word.split("").map((letter, index) => (
//     <motion.span
//       key={index}
//       variants={letterVariants2}
//       initial="hidden"
//       animate="visible"
//       transition={{
//         // repeat: Infinity,
//         duration: DURATION1,
//         delay: index * STAGGER1,
//         ease: "easeInOut",
//       }}
//       className="inline-block lg:text-[10rem] md:text-[7.5rem] text-[5rem] lg:serif-stroke md:serif-stroke01 serif-stroke02 font-extrabold tracking-wide bg-gradient-to-r from-orange-500 to bg-purple-600 text-transparent bg-clip-text italic whitespace-nowrap"
//     >
//       {letter}
//     </motion.span>
//   ));

//   const word1 = "Embarking";

//   const letterVariants1 = {
//     hidden: { x: "200%", opacity: 0, scaleX: -3, scaleY: 0 },
//     visible: { x: "0%", opacity: 1, scaleX: 1, scaleY: 1 },
//   };

//   const letterVariants3 = {
//     hidden: { x: "-1500%" },
//     visible: { x: "0%" },
//   };

//   const splitLetters0 = word1.split("").map((letter, index) => (
//     <motion.span
//       key={index}
//       variants={letterVariants1}
//       initial="hidden"
//       animate="visible"
//       transition={{
//         duration: DURATION1,
//         delay: index * STAGGER1,
//         // repeat: Infinity,
//         ease: "easeInOut",
//       }}
//       className="inline-block lg:text-[10rem] md:text-[7.5rem] text-[5rem] lg:serif-stroke md:serif-stroke01 serif-stroke02 text-orange-500 italic "
//     >
//       {letter}
//     </motion.span>
//   ));

//   const splitLetters01 = word1.split("").map((letter, index) => (
//     <motion.span
//       key={index}
//       variants={letterVariants3}
//       initial="hidden"
//       animate="visible"
//       transition={{
//         // repeat: Infinity,
//         duration: DURATION1,
//         delay: index * STAGGER1,
//         ease: "easeInOut",
//       }}
//       className="inline-block lg:text-[10rem] md:text-[7.5rem] text-[5rem] lg:serif-stroke md:serif-stroke01 serif-stroke02 text-black italic "
//     >
//       {letter}
//     </motion.span>
//   ));

//   const word2 = "On a";
//   const letterVariants4 = {
//     hidden: { x: "-200%" },
//     visible: { x: "0" },
//   };
//   const splitLetters02 = word2.split("  ").map((letter, index) => (
//     <motion.span
//       key={index}
//       variants={letterVariants4}
//       initial="hidden"
//       animate="visible"
//       transition={{
//         // repeat: Infinity,
//         duration: DURATION1,
//         delay: index * STAGGER1,
//         ease: "easeInOut",
//       }}
//       className="inline-block lg:text-[10rem] md:text-[7.5rem] text-[5rem] lg:serif-stroke md:serif-stroke01 serif-stroke02 text-purple-600 italic leading-9"
//     >
//       {letter}
//     </motion.span>
//   ));

//   const word3 = "Journey";
//   const letterVariants5 = {
//     hidden: { y: "100%", opacity: 0, scaleX: 3, scale: 0 },
//     visible: { y: "0", opacity: 1, scaleX: 0, scale: 1 },
//   };
//   const splitLetters03 = word3.split("").map((letter, index) => (
//     <motion.span
//       key={index}
//       variants={letterVariants5}
//       initial="hidden"
//       animate="visible"
//       transition={{
//         // repeat: Infinity,
//         duration: DURATION,
//         delay: index * STAGGER,
//         ease: "easeInOut",
//       }}
//       className="inline-block lg:text-[10rem] md:text-[7.5rem] text-[5rem] lg:serif-stroke md:serif-stroke01 serif-stroke02 text-orange-500 italic"
//     >
//       {letter}
//     </motion.span>
//   ));

//   return (
//     <>
//       <div className="flex relative px-8 p-5 -z-10 min-h-screen -mt-10">
//         {/* <div className="relative flex justify-start items-start leading-none pl-10"> */}
//         <div className=" justify-start items-start lg:leading-[170px] md:leading-[130px] leading-[90px] ">
//           {/* //Splitletters0 is Embarking */}
//           <div className="flex flex-1 pt-20 text-black italic ">
//             {splitLetters0}

//             <span className="absolute text-black italic">{splitLetters01}</span>
//           </div>

//           <div className=" hidden sm:hidden md:flex lg:flex flex-1 whitespace-nowrap lg:text-[10rem] md:text-[7.5rem] text-[5rem] lg:serif-stroke md:serif-stroke01 serif-stroke02 text-black italic ">
//             On a{/* splitLetters02 is "On a" */}
//             <span className="absolute text-black italic">{splitLetters02}</span>
//             <div className=" flex flex-1 whitespace-nowrap font-extrabold bg-gradient-to-r from-orange-500 to bg-purple-600 text-transparent bg-clip-text italic tracking-wide lg:pl-24 md:pl-10 pl-10">
//               {/* splitLetters is "creative" */}

//               {splitLetters}

//               <span className=" absolute font-extrabold bg-gradient-to-r from-orange-500 to bg-purple-600 text-transparent bg-clip-text italic tracking-wide">
//                 {/* splitLetters is "creative" */}
//                 {splitLetters1}
//               </span>
//               <span className="absolute font-extrabold italic tracking-wide">
//                 {/* splitLetters is "creative" */}
//                 {splitLettersWithoutFill}
//               </span>
//             </div>
//           </div>

//           <div className=" flex sm:flex md:hidden lg:hidden flex-1 lg:text-[10rem] md:text-[7.5rem] text-[5rem] lg:serif-stroke md:serif-stroke01 serif-stroke02 text-black italic">
//             On a{/* splitLetters02 is "On a" */}
//             <span className="absolute text-black italic">{splitLetters02}</span>
//           </div>

//           <div className=" flex sm:flex md:hidden lg:hidden flex-1 font-extrabold bg-gradient-to-r from-orange-500 to bg-purple-600 text-transparent bg-clip-text italic tracking-wide lg:pl-24 md:pl-10 pl-10">
//             {/* splitLetters is "creative" */}

//             {splitLetters}

//             <span className=" absolute font-extrabold bg-gradient-to-r from-orange-500 to bg-purple-600 text-transparent bg-clip-text italic tracking-wide">
//               {/* splitLetters is "creative" */}
//               {splitLetters1}
//             </span>
//             <span className="absolute font-extrabold italic tracking-wide">
//               {/* splitLetters is "creative" */}
//               {splitLettersWithoutFill}
//             </span>
//           </div>

//           <div className="flex flex-1 text-black italic font-extrabold ">
//             {/* splitLetters03 is "Journey" */}
//             {splitLetters03}
//             <span className="absolute lg:text-[10rem] md:text-[7.5rem] text-[5rem] lg:serif-stroke md:serif-stroke01 serif-stroke02 text-black italic font-extrabold ">
//               Journey
//             </span>
//           </div>
//         </div>

//         {/* </div> */}
//       </div>
//     </>
//   );
// };

// export default MovingAnimation;

import React, { useRef } from "react";
import { motion } from "framer-motion";

interface movProps {
  href?: string;
  variants?: string;
  children?: string;
}

const DURATION = 0.5;
const STAGGER = 0.03;

const DURATION1 = 0.75;
const STAGGER1 = 0.03;

const MovingAnimation: React.FC<movProps> = ({ href, variants, children }) => {
  const word = "Creative";
  const letterVariants = {
    hidden: { x: "70%", opacity: 0, scaleX: -3, scale: 0 },
    visible: { x: "0%", opacity: 1, scaleX: 1, scale: 1 },
  };
  const letterVariants2 = {
    hidden: { x: "-70%", opacity: 0, scaleX: -3, scale: 0 },
    visible: { x: "0%", opacity: 1, scaleX: 1, scale: 1 },
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
        // repeat: Infinity,
        ease: "easeInOut",
      }}
      className="inline-block lg:text-[10rem] md:text-[7.5rem] text-[5rem] lg:serif-stroke md:serif-stroke01 serif-stroke02 font-extrabold bg-gradient-to-r from-orange-500 to bg-purple-600 text-transparent bg-clip-text italic tracking-wide whitespace-nowrap"
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
        // repeat: Infinity,
        duration: DURATION,
        delay: index * STAGGER,
        ease: "easeInOut",
      }}
      className="inline-block lg:text-[10rem] md:text-[7.5rem] text-[5rem] lg:serif-stroke md:serif-stroke01 serif-stroke02 font-extrabold tracking-wide text-black whitespace-nowrap"
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
        // repeat: Infinity,
        duration: DURATION1,
        delay: index * STAGGER1,
        ease: "easeInOut",
      }}
      className="inline-block lg:text-[10rem] md:text-[7.5rem] text-[5rem] lg:serif-stroke md:serif-stroke01 serif-stroke02 font-extrabold tracking-wide bg-gradient-to-r from-orange-500 to bg-purple-600 text-transparent bg-clip-text italic whitespace-nowrap"
    >
      {letter}
    </motion.span>
  ));

  const word1 = "Embarking";

  const letterVariants1 = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const letterVariants3 = {
    hidden: { opacity: 1 },
    visible: { opacity: 0 },
  };

  const splitLetters0 = word1.split("").map((letter, index) => (
    <motion.span
      key={index}
      variants={letterVariants1}
      initial="hidden"
      animate="visible"
      transition={{
        duration: DURATION1 * 1.75,
        delay: index * STAGGER1 * 2,
        repeat: Infinity,
        ease: "easeIn",
      }}
      className="inline-block lg:text-[10rem] md:text-[7.5rem] text-[5rem] Stardom-RegularWithoutFill "
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
        repeat: Infinity,
        duration: DURATION1 * 1.25,
        delay: index * STAGGER1 * 1,
        ease: "easeOut",
      }}
      className="inline-block lg:text-[10rem] md:text-[7.5rem] text-[5rem] Stardom-RegularWithFill1 "
    >
      {" "}
      {letter}
    </motion.span>
  ));

  const word2 = "On a";
  const letterVariants4 = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const letterVariants6 = {
    hidden: { opacity: 1 },
    visible: { opacity: 0 },
  };

  const splitLetters02 = word2.split("").map((letter, index) => (
    <motion.span
      key={index}
      variants={letterVariants4}
      initial="hidden"
      animate="visible"
      transition={{
        duration: DURATION1 * 1.75,
        delay: index * STAGGER1 * 2,
        repeat: Infinity,
        ease: "easeIn",
      }}
      className="inline-block lg:text-[10rem] md:text-[7.5rem] text-[5rem] Stardom-RegularWithoutFill"
    >
      <span>{letter === " " ? "\u00A0" : letter}</span>
    </motion.span>
  ));

  const splitLetters04 = word2.split("").map((letter, index) => (
    <motion.span
      key={index}
      variants={letterVariants6}
      initial="hidden"
      animate="visible"
      transition={{
        repeat: Infinity,
        duration: DURATION1 * 1.25,
        delay: index * STAGGER1 * 1,
        ease: "easeOut",
      }}
      className="inline-block lg:text-[10rem] md:text-[7.5rem] text-[5rem] Stardom-RegularWithFill3 italic"
    >
      <span>{letter === " " ? "\u00A0" : letter}</span>
    </motion.span>
  ));

  const word3 = "Journey";
  const letterVariants5 = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const letterVariants8 = {
    hidden: { opacity: 1 },
    visible: { opacity: 0 },
  };

  const splitLetters03 = word3.split("").map((letter, index) => (
    <motion.span
      key={index}
      variants={letterVariants5}
      initial="hidden"
      animate="visible"
      transition={{
        duration: DURATION1 * 1.75,
        delay: index * STAGGER1 * 2,
        repeat: Infinity,
        ease: "easeIn",
      }}
      className="inline-block lg:text-[10rem] md:text-[7.5rem] text-[5rem] Stardom-RegularWithoutFill"
    >
      {letter}
    </motion.span>
  ));

  const splitLetters07 = word3.split("").map((letter, index) => (
    <motion.span
      key={index}
      variants={letterVariants8}
      initial="hidden"
      animate="visible"
      transition={{
        repeat: Infinity,
        duration: DURATION1 * 1.25,
        delay: index * STAGGER1 * 1,
        ease: "easeOut",
      }}
      className="inline-block lg:text-[10rem] md:text-[7.5rem] text-[5rem] Stardom-RegularWithFill3 italic"
    >
      {letter}
    </motion.span>
  ));

  return (
    <>
      <div className="flex relative max-w-full min-h-screen px-8 p-5 -z-10 -mt-16">
        {/* <div className="relative flex justify-start items-start leading-none pl-10"> */}
        <div className=" justify-start items-start lg:leading-[170px] md:leading-[130px] leading-[90px]">
          {/* //Splitletters0 is Embarking */}
          <div className="flex flex-1 pt-20">
            {splitLetters0}

            <span className="absolute italic">{splitLetters01}</span>
          </div>

          <div className=" hidden sm:hidden md:flex lg:flex flex-1 whitespace-nowrap lg:text-[10rem] md:text-[7.5rem] text-[5rem] ">
            {splitLetters04}
            {/* splitLetters02 is "On a" */}
            <span className="absolute ">{splitLetters02}</span>
            <div className=" flex flex-1 whitespace-nowrap font-extrabold bg-gradient-to-r from-orange-500 to bg-purple-600 text-transparent bg-clip-text italic tracking-wide lg:pl-24 md:pl-10 pl-10">
              {/* splitLetters is "creative" */}

              {splitLetters}

              <span className=" absolute font-extrabold bg-gradient-to-r from-orange-500 to bg-purple-600 text-transparent bg-clip-text italic tracking-wide">
                {/* splitLetters is "creative" */}
                {splitLetters1}
              </span>
              <span className="absolute font-extrabold italic tracking-wide">
                {/* splitLetters is "creative" */}
                {splitLettersWithoutFill}
              </span>
            </div>
          </div>

          <div className=" flex sm:flex md:hidden lg:hidden flex-1 whitespace-nowrap lg:text-[10rem] md:text-[7.5rem] text-[5rem] ">
            {splitLetters04}
            {/* splitLetters02 is "On a" */}
            <span className="absolute ">{splitLetters02}</span>
          </div>

          <div className=" flex sm:flex md:hidden lg:hidden flex-1 font-extrabold bg-gradient-to-r from-orange-500 to bg-purple-600 text-transparent bg-clip-text italic tracking-wide lg:pl-24 md:pl-10 pl-10">
            {/* splitLetters is "creative" */}

            {splitLetters}

            <span className=" absolute font-extrabold bg-gradient-to-r from-orange-500 to bg-purple-600 text-transparent bg-clip-text italic tracking-wide">
              {/* splitLetters is "creative" */}
              {splitLetters1}
            </span>
            <span className="absolute font-extrabold italic tracking-wide">
              {/* splitLetters is "creative" */}
              {splitLettersWithoutFill}
            </span>
          </div>

          <div className="flex ">
            {/* splitLetters03 is "Journey" */}
            {splitLetters03}
            <span className="absolute lg:text-[10rem] md:text-[7.5rem] text-[5rem]">
              {splitLetters07}
            </span>
          </div>
        </div>

        {/* </div> */}
      </div>
    </>
  );
};

export default MovingAnimation;
