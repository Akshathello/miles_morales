import { useGSAP } from "@gsap/react";
import React, { forwardRef, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
interface WebProps {
  className?: string;
  id?: string;
}

const WebStudioMaterial = forwardRef<HTMLDivElement, WebProps>(
  ({ id }, ref) => {
    const container = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    useGSAP(
      () => {
        if (container.current) {
          tl.current = gsap.timeline();

          gsap.from(container.current, {
            x: "-700px",
            y: "290px",
            transform: "scaleX(0) scaleY(0) translateX(10%) translateY(10%)",
            scrollTrigger: {
              trigger: "#WebElem",
              start: "40% center",
              end: "50% center",
              scrub: true,
              // markers: true,
            },
          });
        }
      },
      {
        scope: container,
      }
    );

    useGSAP;
    return (
      <div
        id="WebElem"
        ref={container}
        className="flex absolute justify-center items-center mb-72"
      >
        <div className="h-[580px] w-[1500px] rounded-lg absolute inset-0.5 bg-gradient-to-r from-orange-500 to bg-purple-600 opacity-100 blur-lg">
          {" "}
        </div>

        <p className="h-[580px] w-[1500px] rounded-lg relative bg-black text-[3rem] text-white font-serif z-10 text-center leading-[3.25rem] p-10 inline-block">
          We can steer the audience, only if we are
          <span className="libre-baskerville-bold italic pr-2 pl-2 inline-block serif-stroke3">
            captivating
          </span>
          enough to do so. The name{" "}
          <span className="libre-baskerville-bold italic pr-2 pl-2 inline-block serif-stroke3">
            Web studio
          </span>{" "}
          is a culmination of generic words but it engulfs the constant stream
          of creativity. <br /> <br />
          Fundamentally speaking, A website offers an{" "}
          <span className="libre-baskerville-bold italic pr-2 pl-2 inline-block serif-stroke3">
            in-depth
          </span>{" "}
          analysis into your business and it{" "}
          <span className="libre-baskerville-bold italic pr-2 pl-2 inline-block serif-stroke3">
            hypothetically
          </span>{" "}
          tailors a intricate discussion with the user which acts as a precursor
          to the{" "}
          <span className="libre-baskerville-bold italic pr-2 pl-2 inline-block serif-stroke3">
            agility
          </span>{" "}
          of the business. The underlying passion can be highlighted through
          this facade, hence the name “
          <span className="libre-baskerville-bold italic pr-2 pl-2 inline-block serif-stroke3">
            Web Studio
          </span>
          ”.
        </p>
      </div>
    );
  }
);
WebStudioMaterial.displayName = "WebStudioMaterial";

export default WebStudioMaterial;
