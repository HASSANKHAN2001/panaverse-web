"use client";
import React from "react";
import Image from "next/image";
import AI from "public/AI.webp";
import Link from "next/link";
import { textVariant2, slideIn, fadeIn } from "../../util/motion";
import { motion } from "framer-motion";

const Ai = () => {
  return (
    <div>
      <div className="px-2 bg-gradient-to-r from-teal-800 to-black flex lg:flex-row flex-col  gap-2 justify-between   md:mt-[92px] md:mb-16 mt-14 mb-12 py-2">
        <div className=" px-2  lg:py-28 py-8">
          <motion.div
            variants={slideIn("left", "spring", 0.5, 1.5)}
            initial="hidden"
            whileInView="show"
          >
            <h1 className="mb-4  font-semibold text-2xl text-slate-200  underline underline-offset-4">
              Specialized Track
            </h1>
            <h2 className="my-8 text-white font-bold text-4xl">
              Artificial Intelligence (AI) and Deep Learning Specialization
            </h2>
          </motion.div>
          <motion.div
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
          >
            <p className="font-normal text-xl text-white">
              The AI and Deep Learning specialization focuses on building and
              deploying intelligent APIs using OpenAI models and building custom
              Deep Learning Tensorflow models.
            </p>
            <Link target={"_blank"} href="https://portal.piaic.org/signup">
              <button className=" mt-8  py-2  px-4 rounded transition ease-in delay-150 bg-teal-100 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-100 text-teal-900 duration-300 text-xl font-bold ">
                Enroll Now
              </button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 1.8)}
          initial="hidden"
          whileInView="show"
          className=" mb-2 shrink-0 lg:mx-0 md:mx-auto mx-0"
        >
          <Image src={AI} width={"500"} alt={"bg"} />
        </motion.div>
      </div>
    </div>
  );
};

export default Ai;
