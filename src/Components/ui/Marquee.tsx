import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { StarIcon } from "lucide-react";
import { useEffect, useRef } from "react";

function Marquee() {
  const marqueeText = (
    <>
      <StarIcon
        width="100"
        height="100"
        fill="black"
        className="mt-10 ml-28 mr-28"
      />
      Conventionality is a Myth{""}
      <StarIcon
        width="100"
        height="100"
        fill="black"
        className="mt-10 ml-28 mr-28"
      />
      <div className=" italic serif-stroke ">Conventionality is a Myth </div>
      <StarIcon
        width="100"
        height="100"
        fill="black"
        className="mt-10 ml-28 mr-28"
      />
      Conventionality is a Myth{" "}
      <StarIcon
        width="100"
        height="100"
        fill="black"
        className="mt-10 ml-28 mr-28"
      />
      <div className="italic serif-stroke">Conventionality is a Myth </div>
    </>
  );
  return (
    <div id="marquee" className="bg-black">
      <div className="flex py-8 rounded-tl-3xl rounded-tr-3xl h-[50vh] bg-gradient-to-r from-orange-500 to bg-purple-600 overflow-hidden">
        <div className=" text border-t-2 border-b-2 border-black flex whitespace-nowrap mt-3 ">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            <div className="inline-flex text-[10vw] leading-none font-serif pt-10 -mb-12">
              {marqueeText}
            </div>
            <div className=" inline-flex text-[10vw] leading-none font-serif pt-10 -mb-12">
              {marqueeText}
            </div>

            <div className=" inline-flex text-[10vw] leading-none font-serif pt-10 -mb-12">
              {marqueeText}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
