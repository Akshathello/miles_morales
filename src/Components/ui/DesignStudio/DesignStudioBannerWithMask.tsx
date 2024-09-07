import React, { useState } from "react";
import mousePointer from "@/Components/utils/mousePointer";
import { motion } from "framer-motion";
import DesignStudioBanner from "./DesignStudioBanner";

function DesignStudioBannerWithMask() {
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 40;

  const { x, y } = mousePointer();

  return (
    <>
      {" "}
      <div className="flex">
        <DesignStudioBanner />
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
          className="absolute mask2"
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
              <DesignStudioBanner />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default DesignStudioBannerWithMask;
