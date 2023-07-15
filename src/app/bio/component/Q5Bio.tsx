import React from "react";
import Link from "next/link";
import { textVariant2, slideIn, zoom } from "../../util/motion";
import { motion } from "framer-motion";

const Q5Bio = () => {
  return (
    <div className="my-1 py-8 px-2 mx-1 leading-loose bg-gradient-to-r from-white via-teal-100/70 to-green-100/70 text-black">
      <motion.h1
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="text-4xl font-semibold text-center my-4"
      >
        Quarter 5
      </motion.h1>
      <motion.h2
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="mb-4  font-semibold lg:text-2xl md:text-2xl text-xl
 text-teal-800  underline underline-offset-4"
      >
        Bio-361: Bioinformatics with Python
      </motion.h2>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <h1
          className="font-bold lg:text-5xl md:text-5xl text-2xl
 my-4"
        >
          Course Description:
        </h1>
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal"
        >
          In this course we will discover modern, next-generation sequencing
          libraries from the powerful Python ecosystem to perform cutting-edge
          research and analyze large amounts of biological data.
        </p>
      </motion.div>
      <motion.div
        variants={zoom("up", "bounce")}
        initial="hidden"
        whileInView="show"
        className="mt-8  border-teal-700 rounded-xl border-2 flex lg:flex-row md:flex-row flex-col lg:w-2/4 w-full "
      >
        <div className="lg:w-2/4 md:w-2/4 w-full font-bold text-3xl  text-teal-900 lg:h-40 lg:py-16 lg:px-6 md:h-40 md:py-14 md:px-8 px-6  py-6">
          Specialized Track
        </div>
        <div className="bg-gradient-to-r from-teal-800/70 to-green-500/70 md:w-2/4 lg:w-2/4 w-full text-white font-semibold text-2xl md:py-10 lg:px-12 lg:py-10 md:px-12 px-6 py-6">
          <h1>Duration</h1>
          <h3 className="lg:my-2 md:my-2 ">13 Weeks</h3>
        </div>
      </motion.div>
      <motion.h1
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="font-bold lg:text-5xl md:text-5xl text-2xl
 my-8"
      >
        Course Outline:
      </motion.h1>

      <motion.h2
        variants={slideIn("left", "spring", 0.7, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-4xl md:text-4xl text-2xl
 font-bold mb-2 mt-4"
      >
        Textbook:
      </motion.h2>
      <motion.div
        variants={slideIn("left", "spring", 0.8, 1.5)}
        initial="hidden"
        whileInView="show"
      >
        <Link
          className="lg:text-lg md:text-lg text-base
        font-normal text-blue-600 underline underline-offset-2 my-2"
          href="https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_1"
          target={"_blank"}
        >
          https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_1
        </Link>
      </motion.div>
    </div>
  );
};

export default Q5Bio;
