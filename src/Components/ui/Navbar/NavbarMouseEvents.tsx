// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

// interface NavbarMouseEventsProps {
//   children: React.ReactNode;
//   btnRef: React.RefObject<HTMLDivElement>;
//   spanRef: React.RefObject<HTMLDivElement>;
// }

// const NavbarMouseEvents: React.FC<NavbarMouseEventsProps> = ({
//   children,
//   btnRef,
//   spanRef,
// }) => {
//   // const btnRef = useRef<HTMLDivElement>(null);
//   const btnRef1 = useRef<HTMLDivElement>(null);
//   const btnRef2 = useRef<HTMLDivElement>(null);
//   // const spanRef = useRef<HTMLDivElement>(null);
//   const spanRef1 = useRef<HTMLDivElement>(null);
//   const spanRef2 = useRef<HTMLDivElement>(null);
//   const anchorRef = useRef<HTMLAnchorElement>(null);

//   let inactivityTimeout: NodeJS.Timeout;

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       clearTimeout(inactivityTimeout);
//       const target = e.target as HTMLElement;

//       const { width } = target?.getBoundingClientRect();
//       const offset = e.offsetX;

//       const left = `${(offset / width) * 100}%`;

//       gsap.to(spanRef.current, {
//         duration: 0.5,
//         xPercent: -50, // Keeps the center alignment
//         left,
//         opacity: 1,
//         ease: "power2.out",
//       });

//       gsap.to(anchorRef.current, {
//         duration: 0.5,
//         xPercent: -50, // Keeps the center alignment
//         left,
//         opacity: 1,
//         ease: "power4.out",
//       });
//     };

//     const handleMouseMove2 = (e: MouseEvent) => {
//       clearTimeout(inactivityTimeout);
//       const target = e.target as HTMLElement;

//       const { width } = target?.getBoundingClientRect();
//       const offset = e.offsetX;

//       const left = `${(offset / width) * 100}%`;

//       gsap.to(spanRef2.current, {
//         duration: 0.5,
//         xPercent: -50, // Keeps the center alignment
//         left,
//         opacity: 1,
//         ease: "power2.out",
//       });

//       gsap.to(anchorRef.current, {
//         duration: 0.5,
//         xPercent: -50, // Keeps the center alignment
//         left,
//         opacity: 1,
//         ease: "power4.out",
//       });
//     };

//     const handleMouseLeave = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;

//       const { width } = target?.getBoundingClientRect();
//       const offset = e.offsetX;

//       const left = `${(offset / width) * 100}%`;

//       inactivityTimeout = setTimeout(() => {
//         gsap.to(spanRef.current, {
//           duration: 0.9,
//           xPercent: -50, // Keeps the center alignment
//           left: "50%",
//           opacity: 0,
//           ease: "power2.out",
//         });
//       }, 300);

//       gsap.to(anchorRef.current, {
//         duration: 0.9,
//         xPercent: "", // Keeps the center alignment
//         left,
//         ease: "power4.out",
//       });
//     };

//     const handleMouseLeave2 = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;

//       const { width } = target?.getBoundingClientRect();
//       const offset = e.offsetX;

//       const left = `${(offset / width) * 100}%`;

//       inactivityTimeout = setTimeout(() => {
//         gsap.to(spanRef2.current, {
//           duration: 0.9,
//           xPercent: -50, // Keeps the center alignment
//           left: "50%",
//           opacity: 0,
//           ease: "power2.out",
//         });
//       }, 300);

//       gsap.to(anchorRef.current, {
//         duration: 0.9,
//         xPercent: "", // Keeps the center alignment
//         left,
//         ease: "power4.out",
//       });
//     };

//     btnRef.current?.addEventListener("mousemove", handleMouseMove);
//     btnRef.current?.addEventListener("mouseleave", handleMouseLeave);
//     btnRef2.current?.addEventListener("mousemove", handleMouseMove2);
//     btnRef2.current?.addEventListener("mouseleave", handleMouseLeave2);

//     return () => {
//       clearTimeout(inactivityTimeout);
//       btnRef.current?.removeEventListener("mousemove", handleMouseMove);
//       btnRef.current?.removeEventListener("mouseleave", handleMouseLeave);
//       btnRef2.current?.removeEventListener("mousemove", handleMouseMove2);
//       btnRef2.current?.removeEventListener("mouseleave", handleMouseLeave2);
//     };
//   }, []);

//   useEffect(() => {
//     const handleMouseMove1 = (e: MouseEvent) => {
//       clearTimeout(inactivityTimeout);
//       const target = e.target as HTMLElement;

//       const { width } = target?.getBoundingClientRect();
//       const offset = e.offsetX;

//       const left = `${(offset / width) * 100}%`;

//       gsap.to(spanRef1.current, {
//         duration: 0.5,
//         xPercent: -50, // Keeps the center alignment
//         left,
//         opacity: 1,
//         ease: "power2.out",
//       });

//       gsap.to(anchorRef.current, {
//         duration: 0.5,
//         xPercent: -50, // Keeps the center alignment
//         left,
//         opacity: 1,
//         ease: "power4.out",
//       });
//     };

//     const handleMouseLeave1 = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;

//       const { width } = target?.getBoundingClientRect();
//       const offset = e.offsetX;

//       const left = `${(offset / width) * 100}%`;

//       inactivityTimeout = setTimeout(() => {
//         gsap.to(spanRef1.current, {
//           duration: 0.9,
//           xPercent: -50, // Keeps the center alignment
//           left: "50%",
//           opacity: 0,
//           ease: "power2.out",
//         });
//       }, 300);

//       gsap.to(anchorRef.current, {
//         duration: 0.9,
//         xPercent: "", // Keeps the center alignment
//         left,
//         ease: "power4.out",
//       });
//     };

//     btnRef1.current?.addEventListener("mousemove", handleMouseMove1);
//     btnRef1.current?.addEventListener("mouseleave", handleMouseLeave1);

//     return () => {
//       clearTimeout(inactivityTimeout);
//       btnRef1.current?.removeEventListener("mousemove", handleMouseMove1);
//       btnRef1.current?.removeEventListener("mouseleave", handleMouseLeave1);
//     };
//   }, []);

//   useEffect(() => {
//     const handleMouseMove2 = (e: MouseEvent) => {
//       clearTimeout(inactivityTimeout);
//       const target = e.target as HTMLElement;

//       const { width } = target?.getBoundingClientRect();
//       const offset = e.offsetX;

//       const left = `${(offset / width) * 100}%`;

//       gsap.to(spanRef2.current, {
//         duration: 0.5,
//         xPercent: -50, // Keeps the center alignment
//         left,
//         opacity: 1,
//         ease: "power2.out",
//       });

//       gsap.to(anchorRef.current, {
//         duration: 0.5,
//         xPercent: -50, // Keeps the center alignment
//         left,
//         opacity: 1,
//         ease: "power4.out",
//       });
//     };

//     const handleMouseLeave2 = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;

//       const { width } = target?.getBoundingClientRect();
//       const offset = e.offsetX;

//       const left = `${(offset / width) * 100}%`;

//       inactivityTimeout = setTimeout(() => {
//         gsap.to(spanRef2.current, {
//           duration: 0.9,
//           xPercent: -50, // Keeps the center alignment
//           left: "50%",
//           opacity: 0,
//           ease: "power2.out",
//         });
//       }, 300);

//       gsap.to(anchorRef.current, {
//         duration: 0.9,
//         xPercent: "", // Keeps the center alignment
//         left,
//         ease: "power4.out",
//       });
//     };

//     btnRef2.current?.addEventListener("mousemove", handleMouseMove2);
//     btnRef2.current?.addEventListener("mouseleave", handleMouseLeave2);

//     return () => {
//       clearTimeout(inactivityTimeout);
//       btnRef2.current?.removeEventListener("mousemove", handleMouseMove2);
//       btnRef2.current?.removeEventListener("mouseleave", handleMouseLeave2);
//     };
//   }, []);
//   return <div>NavbarMouseEvents</div>;
// };

// export default NavbarMouseEvents;
