"use client";

import { useGSAP } from "@gsap/react";
import React, { Children, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import MovingAnimation from "@/Components/ui/MovingAnimation";

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

          .to(container.current, {
            opacity: 1,
          })

          .to(container.current, {
            x: "740px",
            y: "325px",
            transform: "scaleX(0) scaleY(0) translateX(100%)",
            borderRadius: "100px",
            duration: 2,
            ease: "power2.in",
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
        let newValue = prevValue + Math.floor(Math.random() * 10) + 1;

        if (newValue >= 80) {
          newValue = prevValue + Math.floor(Math.random() * 1) + 1;
          interval = setInterval(
            updateCounter,
            Math.floor(Math.random() * 3000) + 500
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
          counterElement.textContent = `${newValue}%`;
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
          <div className="overflow-hidden">
            <MovingAnimation />

            <div
              ref={container}
              id="LoadingAnimation"
              className="overflow-hidden min-h-screen"
            >
              <div className="counter font-mono text-[15rem] font-extrabold min-h-screen bg-black text-white justify-end items-end flex p-14 serif-stroke">
                {""}
                {`${currentValue}%`}
              </div>
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
