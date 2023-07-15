"use client";
import React from "react";
import { motion } from "framer-motion";
import { zoomIn } from "../../util/motion";

const Header = () => {
  return (
    <motion.div
      variants={zoomIn(0.2, 0.5)}
      initial="hidden"
      whileInView="show"
      className="py-2 mx-2 px-1 text-black"
    >
      <h1 className="text-teal-900  text-4xl font-extrabold  py-2 my-2 text-center">
        The Program in a Nutshell
      </h1>
      <h3 className="text-center  text-2xl font-semibold  py-2 md:my-2 my-4 text-teal-800">
        Earn While You Learn
      </h3>
      <div className=" text-center font-bold  md:text-lg text-md py-2 my-2 px-1 md:px-20 ">
        <span>
          In this brand-new type of curriculum, students will learn how to make
          money and boost exports in the
        </span>
        <span className="md:block">
          classroom and will begin doing so within six months of the programs
          beginning. It resembles a cross
        </span>
        <span className="md:block">
          between a corporate venture and an educational project.
        </span>
      </div>
    </motion.div>
  );
};

export default Header;
