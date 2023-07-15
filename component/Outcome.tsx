"use client";

import React from "react";
import Image from "next/image";
import outcome1 from "../public/outcome1.jpg";
import OutcomeIcon from "component/OutcomeIcon";
import { motion } from "framer-motion";
import { planetVariants, slideIn } from "../src/app/util/motion";

const Outcome = () => {
  return (
    <div className=" px-2 flex lg:flex-row md:flex-col flex-col justify-around  md:bg-gradient-to-r md:from-white md:to-teal-100/70 bg-gradient-to-b from-white to-teal-100/70 text-black md:pt-16 pt-12 ">
      <motion.div
        variants={slideIn("left", "tween", 0.5, 1)}
        initial="hidden"
        whileInView="show"
        className=" my-2 md:mx-4"
      >
        <Image src={outcome1} width={1700} height={400} alt="music" />
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        initial="hidden"
        whileInView="show"
        className=" my-2 lg:mx-4 py-8 grow-0 text-black"
      >
        <h1 className="text-teal-700 text-xl font-bold md:text-4xl md:font-extrabold mx-2 my-4">
          The Outcome for Participants of the Program:
        </h1>
        <p className="text-lg font-semibold mx-2 my-8 ">
          As a graduate of this program, you will own valuable products such as
          Full-Stack App Templates, AR and VR Experiences, and APIs that are
          marketed globally by the Panaverse DAO. You will also have the
          opportunity to offer your services at a rate of $50 per hour,
          providing a path to financial stability while contributing to the
          growth of Pakistan's software exports.
        </p>

        <div className="flex md:flex-row flex-col text-lg font-semibold ">
          <div className=" shadow-xl shadow-slate-400 md:shadow-none flex flex-row pr-2 my-2 md:my-0">
            <OutcomeIcon />
            <h1>Product Ownership</h1>
          </div>
          <div className="flex flex-row md:mx-24 md:px-8 mt-4 md:my-0 shadow-xl shadow-slate-400 md:shadow-none">
            <OutcomeIcon />
            <h1>Freelacing</h1>
          </div>
        </div>
        <div className="flex md:flex-row flex-col text-lg font-semibold my-4">
          <div className=" flex flex-row pr-8 shadow-xl shadow-slate-400 md:shadow-none my-2 md:my-0">
            <OutcomeIcon />
            <h1 className="shrink-0">Boosting Economy</h1>
          </div>
          <div className="max-w-xl shadow-xl shadow-slate-400 md:shadow-none  flex flex-row md:ml-20 md:mr-4 lg:mx-24 md:px-8 mx-0  md:my-0 my-4 ">
            <OutcomeIcon />
            <h1>Global Marketing by Panaverse DAO</h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Outcome;
