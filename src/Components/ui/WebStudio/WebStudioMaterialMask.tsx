import React, { useState } from "react";
import WebStudioMaterial from "./WebStudioMaterial";
import { motion } from "framer-motion";
import mousePointer from "@/Components/utils/mousePointer";

function WebStudioMaterialMask() {
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 40;

  const { x, y } = mousePointer();

  return (
    <>
      <WebStudioMaterial />

      {/* <motion.div
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
        style={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
      >
        <div>
          <div
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            <WebStudioMaterial />
          </div>
        </div>
      </motion.div> */}
    </>
  );
}

export default WebStudioMaterialMask;
