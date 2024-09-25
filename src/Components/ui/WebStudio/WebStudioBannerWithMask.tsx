import React, { useState } from "react";
import WebStudioBanner from "./WebStudioBanner";
import mousePointer from "@/Components/utils/mousePointer";
import { motion } from "framer-motion";

function WebStudioBannerWithMask() {
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 40;

  const { x, y } = mousePointer();

  return (
    <>
      {" "}
      <div className="flex justify-center items-center rounded-lg">
        <WebStudioBanner />
        <motion.div
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut" }}
          style={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          className="absolute mask2 bg-gradient-to-r from-orange-500 to bg-purple-600 -mr-1"
        >
          <div className="">
            <div
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              <WebStudioBanner />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default WebStudioBannerWithMask;
