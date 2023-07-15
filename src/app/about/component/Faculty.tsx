import React from "react";
import HiraFaculty from "./HiraFaculty";
import ZiaFaculty from "./ZiaFaculty";
import AdilFaculty from "./AdilFaculty";
import DaniyalFaculty from "./DaniyalFaculty";
import { textVariant2 } from "../../util/motion";
import { motion } from "framer-motion";

const Faculty = () => {
  return (
    <div className="  bg-gradient-to-r from-white to-teal-100/70 py-8 mx-1">
      <motion.h1
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="pb-18 pt-2 lg:text-5xl md:text-5xl text-3xl
 font-bold underline underline-offset-2 text-center text-black"
      >
        Faculty Members
      </motion.h1>
      <ZiaFaculty />
      <AdilFaculty />
      <HiraFaculty />
      <DaniyalFaculty />
    </div>
  );
};

export default Faculty;
