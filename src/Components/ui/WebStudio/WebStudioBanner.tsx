import mousePointer from "@/Components/utils/mousePointer";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function WebStudioBanner() {
  const [isPulsing, setIsPulsing] = useState(false);

  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.20"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      if (progress > 0.99) {
        setIsPulsing(true);
        // setIsLocked(true);
      } else {
        setIsPulsing(false);
        // setIsLocked(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className=" px-[19rem] py-9 items-start -mb-9 pt-[5rem] ">
      <div className="flex relative">
        <motion.div
          ref={element}
          style={{ opacity, translateY, scale }}
          initial={{ opacity: 0, y: 100, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className={`absolute inset-0.5 rounded-lg bg-gradient-to-r from-orange-500 to bg-purple-600  blur-lg opacity-100 ${
            isPulsing ? "animate-pulse" : ""
          }`}
        ></motion.div>

        <motion.div
          ref={element}
          layout
          style={{ opacity: scrollYProgress }}
          className="relative px-5 py4 bg-black rounded-lg leading-none flex items-center justify-center"
        >
          <span className="text-gray-100 text-[11rem] whitespace-nowrap font-serif serif-stroke2 italic">
            Web Studio
          </span>

          <motion.span
            ref={element}
            layout
            style={{ opacity: scrollYProgress }}
            className="absolute text-gray-100 text-[10.8rem] whitespace-nowrap font-serif italic"
          >
            Web Studio
          </motion.span>

          <span className="absolute text-[10.8rem] whitespace-nowrap font-serif italic blur-sm">
            Web Studio
          </span>

          <motion.span
            ref={element}
            style={{ opacity: scrollYProgress }}
            className="absolute text-[#ff6590] text-[10.8rem] whitespace-nowrap font-serif italic blur-sm"
          >
            Web Studio
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
}

export default WebStudioBanner;
