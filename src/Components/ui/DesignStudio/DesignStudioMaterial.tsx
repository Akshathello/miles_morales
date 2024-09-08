import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function DesignStudioMaterial() {
  const container = useRef<HTMLDivElement>(null);
  const container2 = useRef<HTMLDivElement>(null);

  const letterRef = useRef<Array<HTMLSpanElement | null>>([]);
  const letterRef2 = useRef<Array<HTMLSpanElement | null>>([]);
  const letterRef3 = useRef<Array<HTMLSpanElement | null>>([]);

  const word = "The secret";

  const splitLetters = word.split("").map((char, index) => {
    return (
      <span
        key={index}
        ref={(el) => {
          letterRef.current[index] = el;
        }}
        className="text-[12rem] text-white Stardom-Regular"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    );
  });

  const word2 = "is in";

  const splitLetters2 = word2.split("").map((char, index) => {
    return (
      <span
        key={index}
        ref={(el) => {
          letterRef2.current[index] = el;
        }}
        className="text-[12rem] text-white Stardom-Regular inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    );
  });

  const word3 = "presentation !";

  const splitLetters3 = word3.split("").map((char, index) => {
    return (
      <span
        key={index}
        ref={(el) => {
          letterRef3.current[index] = el;
        }}
        className="text-[12rem] text-white Stardom-Regular "
      >
        {char === " " ? "\u00A0" : char}
      </span>
    );
  });

  useGSAP(() => {
    if (container.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "-10% top",
          end: "bottom bottom",
          scrub: 2,
        },
      });

      tl.fromTo(
        letterRef.current,
        {
          opacity: 0.3,
          y: 100,
          x: 100,
          scaleX: 3,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scaleX: 1,
          stagger: 0.7,
          ease: "power4.in",
          filter: "blur(0px)",
        }
      );

      tl.fromTo(
        letterRef2.current,
        {
          opacity: 0.3,
          y: 100,
          x: -900,
          scaleX: 3,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scaleX: 1,
          stagger: 0.7,
          ease: "power4.in",
          filter: "blur(0px)",
        }
      );
      tl.fromTo(
        letterRef3.current,
        {
          opacity: 0.3,
          y: 100,
          x: 100,
          scaleX: 3,
          delay: 2,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scaleX: 1,
          stagger: 0.7,
          ease: "power2.in",
          filter: "blur(0px)",
        }
      );
    }
  });

  return (
    <>
      <div className=" min-h-screen bg-black">
        <div ref={container}>
          <div className=" w-full flex justify-center items-center text-[10rem] text-white Stardom-Regular">
            {splitLetters}
          </div>
          <div className="  -mt-24 flex justify-end items-center pr-7">
            {splitLetters2}
          </div>

          <div className=" flex justify-center items-center -mt-24 pr-6 text-[10rem] text-white Stardom-Regular mb-16">
            {splitLetters3}
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignStudioMaterial;
