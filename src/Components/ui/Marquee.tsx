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
        className="lg:ml-28 lg:mr-28 md:ml-28 md:mr-28 ml-14 mr-14 w-16 h-16 md:w-32 md:h-32 lg:w-40 lg:h-40"
      />
      Conventionality is a Myth{""}
      <StarIcon
        width="100"
        height="100"
        fill="black"
        className=" lg:ml-28 lg:mr-28 md:ml-28 md:mr-28 ml-14 mr-14 w-16 h-16 md:w-32 md:h-32 lg:w-40 lg:h-40"
      />
      <div className=" italic lg:serif-stroke md:serif-stroke01 serif-stroke02">
        Conventionality is a Myth{" "}
      </div>
      <StarIcon
        width="100"
        height="100"
        fill="black"
        className="lg:ml-28 lg:mr-28 md:ml-28 md:mr-28 ml-14 mr-14 w-16 h-16 md:w-32 md:h-32 lg:w-40 lg:h-40"
      />
      Conventionality is a Myth{" "}
      <StarIcon
        width="100"
        height="100"
        fill="black"
        className="lg:ml-28 lg:mr-28 md:ml-28 md:mr-28 ml-14 mr-14 w-16 h-16 md:w-32 md:h-32 lg:w-40 lg:h-40"
      />
      <div className="italic lg:serif-stroke md:serif-stroke01 serif-stroke02">
        Conventionality is a Myth{" "}
      </div>
    </>
  );
  return (
    <div id="marquee" className="bg-black">
      <div className="flex lg:py-8 md:py-8 py-3 rounded-tl-3xl rounded-tr-3xl lg:h-[50vh] md:h-[40vh] h-[20vh] bg-gradient-to-r from-orange-500 to bg-purple-600 overflow-hidden">
        <div className="border-t-2 border-b-2 border-black flex whitespace-nowrap mt-3 ">
          <div className=" flex justify-center items-center">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            >
              <div className="inline-flex text-[10vw] justify-center items-center leading-none font-serif">
                {marqueeText}
              </div>
              <div className=" inline-flex text-[10vw] justify-center items-center leading-none font-serif">
                {marqueeText}
              </div>

              <div className=" inline-flex text-[10vw] justify-center items-center leading-none font-serif">
                {marqueeText}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
