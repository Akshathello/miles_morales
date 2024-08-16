"use client";

import { useGSAP } from "@gsap/react";
import React, { Children, useEffect, useRef, useState } from "react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

interface PreloadProps {
  children: React.ReactNode;
}

function Preload({ children }: PreloadProps) {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      if (container.current) {
        tl.current = gsap.timeline();

        tl.current

          .from(container.current, {
            opacity: 1,
            duration: 0.6,
            delay: 0.2,
            stagger: 0.6,
          })

          .from(container.current, {
            transform: "scaleX(0.5) scaleY(0) translateX(50%)",
            borderRadius: "100px",
            duration: 3,
            ease: "expo.out",
          });
      }
    },
    {
      scope: container,
    }
  );

  const [currentValue, setCurrentValue] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const counterElement = document.querySelector(".counter");

    let interval: NodeJS.Timeout | null = null;

    function updateCounter() {
      setCurrentValue((prevValue) => {
        let newValue = prevValue + Math.floor(Math.random() * 6) + 1;

        if (newValue >= 80) {
          newValue = prevValue + Math.floor(Math.random() * 1) + 1;
          interval = setInterval(
            updateCounter,
            Math.floor(Math.random() * 90) + 50
          );
        }

        if (newValue >= 101) {
          newValue = 101;

          if (counterElement) {
            setTimeout(() => {
              (counterElement as HTMLElement).style.display = "none";
            });
            setLoading(false);
          }
          if (interval) clearInterval(interval);
        }

        if (counterElement) {
          counterElement.textContent = newValue.toString();
        }

        return newValue;
      });
    }

    interval = setInterval(updateCounter, Math.floor(Math.random() * 100) + 55);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [loading]);

  return (
    <div>
      {loading ? (
        <>
          <span
            style={{}}
            className="flex absolute text-[10rem] font-serif leading-none mt-24 ml-10 italic serif-stroke"
          >
            {" "}
            Embarking on <br></br> a Creative <br /> Journey.
          </span>
          <span
            style={{}}
            className="flex absolute text-[10rem] font-serif leading-none animate-[ping_1s_ease-in_infinite] mt-24 ml-10 italic serif-stroke"
          >
            {" "}
            Embarking on <br></br> a Creative <br /> Journey.
          </span>
          <span
            style={{}}
            className="flex absolute text-[10rem] font-serif leading-none mt-24 ml-10 animate-[ping_1s_ease-in_infinite] italic serif-stroke"
          >
            {" "}
            Embarking on <br></br> a Creative <br /> Journey.
          </span>

          <div
            ref={container}
            id="LoadingAnimation"
            className="overflow-hidden min-h-screen"
          >
            <div className="counter font-mono text-[15rem] font-extrabold min-h-screen bg-black text-white justify-end items-end flex p-14 serif-stroke">
              {" "}
              {currentValue}
            </div>
          </div>
        </>
      ) : (
        children
      )}
    </div>
  );
}

export default Preload;
