"use client";
import React from "react";
import Image from "next/image";
import Amb from "public/Amb.webp";
import { textVariant2, slideIn, zoomIn } from "../../util/motion";
import { motion } from "framer-motion";
import Link from "next/link";

const Net = () => {
  return (
    <div>
      <div className="px-2 bg-gradient-to-r from-cyan-800 to-gray-900 flex lg:flex-row flex-col  gap-2 justify-between   md:mt-[92px] md:mb-16 mt-14 mb-12 py-2 relative">
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
              Network Programmability and Automation Specialization
            </h2>
          </motion.div>
          <motion.div
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
          >
            <p className="font-normal text-xl text-white">
              More than ever, network engineers are finding it challenging to
              complete their duties entirely manually. Network automation is now
              crucial due to new protocols, technologies, delivery models, and
              the requirement for enterprises to become more adaptable and
              agile. This course teaches network engineers how to automate
              systems with code using a variety of technologies and tools,
              including Linux, Python, APIs, and Git.
            </p>
            <Link target={"_blank"} href="https://portal.piaic.org/signup">
              <button className=" mt-8  py-2  px-4 rounded transition ease-in delay-150 bg-cyan-100 hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 text-black duration-300 text-xl font-bold ">
                Enroll Now
              </button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          variants={zoomIn(0.8, 1)}
          initial="hidden"
          whileInView="show"
          className=" my-auto shrink-0 lg:mx-0 md:mx-auto mx-0 "
        >
          <Image src={Amb} width={"450"} alt={"bg"} />
        </motion.div>
      </div>
    </div>
  );
};

export default Net;
