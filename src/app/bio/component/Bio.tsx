"use client";
import React from "react";
import Image from "next/image";
import Bio1 from "public/Bio1.webp";
import Link from "next/link";
import { motion } from "framer-motion";
import { textVariant2, slideIn, fadeIn } from "../../util/motion";

const Bio = () => {
  return (
    <div className="px-2 bg-gradient-to-r from-gray-800 to-black flex md:flex-row flex-col  gap-2 justify-between md:mt-[92px] md:mb-16 mt-14 mb-12 py-2">
      <div className=" px-2  md:py-28 py-8">
        <motion.div
          variants={slideIn("left", "spring", 0.5, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          <h1 className="mb-4  font-semibold text-2xl text-slate-100  underline underline-offset-4">
            Specialized Track
          </h1>
          <h2 className="my-8 text-white font-bold text-4xl">
            Genomics and Bioinformatics Specialization
          </h2>
        </motion.div>
        <motion.div variants={textVariant2} initial="hidden" whileInView="show">
          <p className="font-normal text-xl text-white">
            Genomics is the study of the total genetic makeup of individual
            organisms, and how this genetic information is structured,
            functions, and has evolved; bioinformatics encompasses a diverse
            range of analytical methods and tools applied to genomic data. This
            Specialization focuses on performing complex bioinformatics analysis
            using the most essential Python libraries and applications.
          </p>
          <Link target={"_blank"} href="https://portal.piaic.org/signup">
            <button className=" mt-8  py-2  px-4 rounded transition ease-in delay-150 bg-gray-100 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 text-teal-900 duration-300 text-xl font-bold ">
              Enroll Now
            </button>
          </Link>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("left", "spring", 0.5, 1.8)}
        initial="hidden"
        whileInView="show"
        className=" my-8 shrink-0"
      >
        <Image src={Bio1} width={"500"} alt={"bg"} />
      </motion.div>
    </div>
  );
};

export default Bio;
