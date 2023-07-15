import React from "react";
import Image from "next/image";
import saylaniLogo from "public/saylaniLogo.png";
import panacloudLogo from "public/panacloudLogo.png";
import { easeInOut, motion } from "framer-motion";
import { textVariant2, slideIn, zoomIn } from "../src/app/util/motion";

const Sponser = () => {
  return (
    <div>
      <motion.h1
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="lg:text-5xl md:text-5xl text-3xl
 font-bold underline underline-offset-2 text-center text-teal-800 my-8 py-4"
      >
        Official Partner
      </motion.h1>
      <div className="my-4  flex lg:flex-row md:flex-row flex-col md:justify-evenly">
        <motion.div
          variants={slideIn("left", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="show"
          className="lg:w-1/4 md:w-2/4  py-8 "
        >
          <Image src={saylaniLogo} alt={"Selani"} />
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="show"
          className="md:w-1/3 w-full px-2 md:px-1 md:my-0 my-2 
        "
        >
          <Image
            src={panacloudLogo}
            alt={"Panacloud"}
            className="w-full h-36 my-2"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Sponser;
