"use client";
import React from "react";
import Image from "next/image";
import Cloud2 from "public/Cloud2.png";
import { textVariant2, slideIn, zoomIn } from "../../util/motion";
import { motion } from "framer-motion";
import Link from "next/link";

const Cloud = () => {
  return (
    <div className="px-2 bg-gradient-to-r from-emerald-600 to-teal-900 flex md:flex-row flex-col  gap-2 justify-between   md:mt-[92px] md:mb-16 mt-14 mb-12 py-2">
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
            Cloud-Native Computing Specialization
          </h2>
        </motion.div>
        <motion.div variants={textVariant2} initial="hidden" whileInView="show">
          <p className="font-normal text-xl text-white">
            The Cloud-Native Computing Specialization focuses on Containers,
            Kubernetes, and CDK for Kubernetes.
          </p>
          <Link target={"_blank"} href="https://portal.piaic.org/signup">
            <button className=" mt-8  py-2  px-4 rounded transition ease-in delay-150 bg-green-100 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-100 text-teal-900 duration-300 text-xl font-bold ">
              Enroll Now
            </button>
          </Link>
        </motion.div>
      </div>
      <motion.div
        variants={zoomIn(0.5, 1)}
        initial="hidden"
        whileInView="show"
        className=" mb-2 shrink-0"
      >
        <Image src={Cloud2} width={"500"} alt={"bg"} />
      </motion.div>
    </div>
  );
};

export default Cloud;
