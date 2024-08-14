// "use client";

// import { useGSAP } from "@gsap/react";
// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// gsap.registerPlugin(useGSAP);

// function Preload() {
//   const container = useRef<HTMLDivElement>(null);
//   const tl = useRef<gsap.core.Timeline | null>(null);

//   useGSAP(
//     () => {
//       if (container.current) {
//         tl.current = gsap.timeline();

//         tl.current

//           .from(container.current, {
//             opacity: 0,
//             duration: 0.3,
//             delay: 0.2,
//             stagger: 1,
//           })

//           .from(container.current, {
//             transform: "scaleX(0) scaleY(0) translateX(80%)",
//             borderRadius: "100px",
//             duration: 2,
//             ease: "expo.out",
//           });
//       }
//     },
//     {
//       scope: container,
//     }
//   );

//   const [currentValue, setCurrentValue] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const counterElement = document.querySelector(".counter");

//     if (counterElement) {
//       setTimeout(() => {
//         (counterElement as HTMLElement).style.display = "none";
//         setLoading(false);
//       }, 3000);
//     }

//     function updateCounter() {
//       let newValue = currentValue + Math.floor(Math.random() * 5) + 1;

//       if (newValue === 100) {
//         return;
//       }

//       if (newValue > 100) {
//         newValue = 100;
//       }

//       if (counterElement) {
//         counterElement.textContent = newValue.toString();
//       }

//       let delay = Math.floor(Math.random() * 500) + 50;

//       setTimeout(updateCounter, delay);
//       setCurrentValue(newValue);
//     }

//     updateCounter();
//   }, [currentValue]);

//   //   window.addEventListener("load", () => {
//   //     const Preload = document.querySelector(".preloader");
//   //     Preload!.classList.add("preload-finish");
//   //   });

//   return (
//     <div ref={container} id="LoadingAnimation">
//       <div className="counter font-mono text-[15rem] font-extrabold min-h-screen bg-black text-white justify-end items-end flex p-14">
//         {" "}
//         {currentValue}
//       </div>
//     </div>
//   );
// }

// export default Preload;
