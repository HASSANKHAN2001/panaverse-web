"use client";
import React from "react";
import Image from "next/image";
import IOT1 from "public/IOT1.webp";
import { textVariant2, slideIn, picVariants } from "../../util/motion";
import { motion } from "framer-motion";
import Link from "next/link";

const Iot = () => {
  return (
    <div>
      <div className="px-2 bg-gradient-to-r from-[#072E33] to-green-900 flex lg:flex-row flex-col  gap-2 justify-between  md:mt-[92px] md:mb-16 mt-14 mb-12 py-2">
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
              Ambient Computing and IoT Specialization
            </h2>
          </motion.div>
          <motion.div
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
          >
            <p className="font-normal text-xl text-white">
              The Ambient Computing and IoT Specialization focuses on building
              Smart Homes, Offices, Factories, and Cities using Voice computing,
              Matter Protocol, and Embedded Devices.
            </p>
            <Link target={"_blank"} href="https://portal.piaic.org/signup">
              <button className=" mt-8  py-2  px-4 rounded transition ease-in delay-150 bg-green-100 hover:-translate-y-1 hover:scale-110 hover:bg-green-200 text-green-900 duration-300 text-xl font-bold ">
                Enroll Now
              </button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          variants={picVariants("right")}
          initial="hidden"
          whileInView="show"
          className=" mb-2 shrink-0 lg:mx-0 md:mx-auto mx-0 mt-2"
        >
          <Image src={IOT1} width={"500"} alt={"bg"} />
        </motion.div>
      </div>
    </div>
  );
};

export default Iot;
