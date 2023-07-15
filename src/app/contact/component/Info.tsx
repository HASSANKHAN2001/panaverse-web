"use client";
import React from "react";
import ContactIcon from "./ContactIcon";
import { motion } from "framer-motion";
import { zoomIn } from "../../util/motion";

const Info = () => {
  return (
    <motion.div
      variants={zoomIn(0.5, 1)}
      initial="hidden"
      whileInView="show"
      className="text-[#1d5a5d] lg:w-[40%] w-full"
    >
      <h1 className="text-3xl text-[#072E33] font-semibold my-4 font-serif">
        Contact Info
      </h1>
      <p className="text-base leading-loose text-[#1d5a5d]">
        Always available for freelance work if the right project comes along,
        Feel free to contact me!
      </p>
      <div className="flex font-serif md:px-0 px-1">
        <div className="flex">
          <ContactIcon />
          <div className=" w-0 border border-[#1d5a5d]  mx-6 my-8" />
        </div>
        <div className="my-4">
          <div className="my-3">
            <h1 className="font-semibold text-lg">Organization</h1>
            <h1 className="text-[#1d5a5d] text-lg ">PIAIC</h1>
          </div>
          <div className="my-3">
            <h1 className="font-semibold text-lg">Location</h1>
            <h1 className="text-[#1d5a5d] text-lg ">Karachi, Pakistan</h1>
          </div>
          <div className="my-3">
            <h1 className="font-semibold text-lg">Call Me</h1>
            <h1 className="text-[#1d5a5d] text-lg ">0300-1234567</h1>
          </div>
          <div className="my-3">
            <h1 className="font-semibold text-lg">Email Me</h1>
            <h1 className="text-[#1d5a5d] text-lg ">panacloude@gmail.com</h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Info;
