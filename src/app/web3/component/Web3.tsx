"use client";
import React from "react";
import Image from "next/image";
import web4 from "public/web4.png";
import Link from "next/link";
import { textVariant2, slideIn } from "../../util/motion";
import { motion } from "framer-motion";

const Web3 = () => {
  return (
    <div>
      <div className="px-2 bg-teal-900 flex lg:flex-row flex-col  lg:gap-2 justify-between   md:mt-[92px] md:mb-16 mt-14 mb-12 py-2">
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
              Web 3.0 (Blockchain) and Metaverse Specialization
            </h2>
          </motion.div>
          <motion.div
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
          >
            <p className="font-normal text-xl text-white">
              This Web 3.0 and Metaverse specialization focuses on developing
              full-stack Web 3.0 and Metaverse experiences for the next
              generation of the internet by specializing in building worlds that
              merge the best of cutting-edge decentralized distributed
              blockchains with 3D metaverse client experiences.
            </p>
            <Link target={"_blank"} href="https://portal.piaic.org/signup">
              <button className=" mt-8  py-2  px-4 roundedtransition ease-in delay-150 bg-slate-100 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 text-teal-900 duration-300 text-xl font-bold ">
                Enroll Now
              </button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn("right", "spring", 0.5, 1.5)}
          initial="hidden"
          whileInView="show"
          className=" mb-2 shrink-0"
        >
          <Image src={web4} width={"700"} alt={"bg"} />
        </motion.div>
      </div>
    </div>
  );
};

export default Web3;
