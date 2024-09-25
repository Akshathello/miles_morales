import { useGSAP } from "@gsap/react";
import React, { forwardRef, ReactElement, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);
interface WebProps {
  className?: string;
  id?: string;
}

const WebStudioMaterial = forwardRef<HTMLDivElement, WebProps>(
  ({ id }, ref) => {
    const container = useRef<HTMLDivElement>(null);
    // const tl = useRef<gsap.core.Timeline | null>(null);
    const lettersRef = useRef<Array<HTMLSpanElement | null>>([]);

    const splitTextIntoSpans = (
      text: string,
      baseIndex = 0,
      insertInstructions?: {
        Nodes: ReactElement | ReactElement[];
        index: number;
      }[]
    ): ReactNode[] => {
      const spans = text.split("").map((char, index) => (
        <span
          key={`char- ${baseIndex + index}`}
          className="inline-block"
          ref={(el) => {
            lettersRef.current[baseIndex + index] = el;
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ));

      if (insertInstructions) {
        insertInstructions.forEach(({ Nodes, index }) => {
          if (Array.isArray(Nodes)) {
            spans.splice(
              index,
              0,
              ...Nodes.map((node, i) =>
                React.cloneElement(node, {
                  key: `insert- ${baseIndex + index}- ${i}`,
                })
              )
            );
          } else {
            spans.splice(
              index,
              0,
              React.cloneElement(Nodes, {
                key: `insert - ${baseIndex + index}`,
              })
            );
          }
        });
      }

      return spans;
    };

    useGSAP(
      () => {
        if (container.current) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container.current,
              start: "10% bottom",
              end: "bottom bottom",
              scrub: 2,
              // markers: true,
            },
          });

          tl.from(container.current, {
            y: "600px",
            scale: 1,
            opacity: 0.5,
            duration: 1,
            ease: "power3.out",
          });

          lettersRef.current.forEach((char, index) => {
            if (char) {
              tl.fromTo(
                char,
                {
                  opacity: 0,
                  // y: -50,
                  // x: -70,
                  z: 100,
                  scaleX: 3,
                  color: "#f97316",
                },
                {
                  opacity: 1,
                  scaleX: 1,
                  y: 0,
                  x: 0,
                  z: 0,
                  color: "#ffffff",
                  duration: 1,
                  delay: index * 0.04,
                  ease: "power3.out",
                },
                index * 0.05
              );
            }
          });
        }
        console.log("LettersRef:", lettersRef);
        console.log("totalLetter:", lettersRef.current.length);
      },
      {
        scope: container,
      }
    );

    const word = "captivating";

    const splitLetters = word.split(" ").map((char, index) => {
      return (
        <span
          key={index}
          className="libre-baskerville-bold italic pr-2 pl-2 serif-stroke3"
        >
          {char}
        </span>
      );
    });

    const word1 = "Web Studio";

    const splitLetters1 = word1.split(" ").map((char, index) => {
      return (
        <span
          key={index}
          className="libre-baskerville-bold italic pr-2 pl-2 serif-stroke3"
        >
          {char}
        </span>
      );
    });

    const word2 = "in-depth";

    const splitLetters2 = word2.split(" ").map((char, index) => {
      return (
        <span
          key={index}
          className="libre-baskerville-bold italic pr-2 pl-2 serif-stroke3"
        >
          {char}
        </span>
      );
    });

    const word3 = "hypothetically";

    const splitLetters3 = word3.split(" ").map((char, index) => {
      return (
        <span
          key={index}
          className="libre-baskerville-bold italic pr-2 pl-2 serif-stroke3"
        >
          {char}
        </span>
      );
    });

    const word4 = "agility";

    const splitLetters4 = word4.split(" ").map((char, index) => {
      return (
        <span
          key={index}
          className="libre-baskerville-bold italic pr-2 pl-2 serif-stroke3"
        >
          {char}
        </span>
      );
    });

    const word5 = `"Web Studio"`;

    const splitLetters5 = word5.split(" ").map((char, index) => {
      return (
        <span
          key={index}
          className="libre-baskerville-bold italic pr-2 pl-2 serif-stroke3"
        >
          {char}
        </span>
      );
    });

    return (
      <div
        id="WebElem"
        ref={container}
        className="flex flex-1 flex-wrap absolute justify-center items-center mb-72"
      >
        <div className="lg:h-[580px] lg:w-[1500px] md:h-[340px] md:w-[1100] h-[200px] w-[1000px] rounded-lg absolute inset-0.5 bg-gradient-to-r from-orange-500 to bg-purple-600 opacity-100 blur-lg">
          {""}
        </div>

        <span className="lg:h-[580px] lg:w-[1500px] md:h-[510px] md:w-[1100] h-[200px] w-[1000px] rounded-lg relative bg-black lg:text-[3rem] md:text-[1.75rem] text-[1rem] font-serif z-10 text-center lg:leading-[3.25rem] md:leading-[2.25rem] leading-[1rem]  p-10 inline-block text-white">
          {splitTextIntoSpans(
            `We can steer the audience, only if we are enough to do so. The name is a culmination of generic words but it engulfs the constant stream of creativity. Fundamentally speaking, A website offers an analysis into your business and it tailors an intricate discussion with the user which acts as a precursor to the of the business. The underlying passion can be highlighted through this facade,hence the name`,
            0,
            [
              { Nodes: splitLetters, index: 42 },
              { Nodes: <br />, index: 55 },
              { Nodes: splitLetters1, index: 69 },
              { Nodes: <br />, index: 112 },
              { Nodes: <br />, index: 156 },
              { Nodes: <br />, index: 157 },
              { Nodes: splitLetters2, index: 203 },
              { Nodes: splitLetters3, index: 236 },
              { Nodes: <br />, index: 272 },
              { Nodes: splitLetters4, index: 320 },
              { Nodes: <br />, index: 327 },
              { Nodes: <br />, index: 394 },
              { Nodes: splitLetters5, index: 417 },
            ]
          )}
        </span>
      </div>
    );
  }
);
WebStudioMaterial.displayName = "WebStudioMaterial";

export default WebStudioMaterial;
