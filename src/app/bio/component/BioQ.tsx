"use client";
import React from "react";
import { useState } from "react";
import BioCard from "./BioCard";
import data from "./BioData";
import { BioIcon1 } from "./BioIcon";
import { BioIcon2 } from "./BioIcon";
import { BioIcon3 } from "./BioIcon";
import { BioIcon4 } from "./BioIcon";
import { BioIcon5 } from "./BioIcon";
import { motion } from "framer-motion";
import { zoomIn } from "../../util/motion";

const BioQ1 = () => {
  const [active, setActive] = useState("FirstQuarter");

  return (
    <div>
      <h1 className="text-center text-4xl font-bold mb-8 text-teal-900 ">
        Course Detail
      </h1>
      <div className="flex md:flex-row flex-col rounded-lg lg:px-12 my-2  md:px-2   lg:w-2/3 w-2/3 md:w-full mx-auto px-8 lg:justify-between md:justify-between justify-center   ">
        <motion.button
          variants={zoomIn(0.5, 1)}
          initial="hidden"
          whileInView="show"
          onClick={() => setActive("FirstQuarter")}
          className=" flex  w-48 mx-auto"
        >
          <BioIcon1 />
          <p className="text-lg font-bold my-5 ">Quarter 1</p>
        </motion.button>
        <motion.button
          variants={zoomIn(0.7, 1)}
          initial="hidden"
          whileInView="show"
          onClick={() => setActive("SecondQuarter")}
          className=" flex  w-48 mx-auto"
        >
          <BioIcon2 />
          <p className="text-lg font-bold my-5">Quarter 2</p>
        </motion.button>
        <motion.button
          variants={zoomIn(0.9, 1)}
          initial="hidden"
          whileInView="show"
          onClick={() => setActive("ThirdQuarter")}
          className=" flex  w-48 mx-auto"
        >
          <BioIcon3 />
          <p className="text-lg font-bold my-5">Quarter 3</p>
        </motion.button>
        <motion.button
          variants={zoomIn(1.1, 1)}
          initial="hidden"
          whileInView="show"
          onClick={() => setActive("FourthQuarter")}
          className=" flex  w-48 mx-auto"
        >
          <BioIcon4 />
          <p className="text-lg font-bold my-5">Quarter 4</p>
        </motion.button>
        <motion.button
          variants={zoomIn(1.3, 1)}
          initial="hidden"
          whileInView="show"
          onClick={() => setActive("FifthQuarter")}
          className=" flex  w-48 mx-auto"
        >
          <BioIcon5 />
          <p className="text-lg font-bold my-5">Quarter 5</p>
        </motion.button>
      </div>
      <div>
        {active === "FirstQuarter" && <BioCard data={data} BioCardIndex={0} />}
        {active === "SecondQuarter" && <BioCard data={data} BioCardIndex={1} />}
        {active === "ThirdQuarter" && <BioCard data={data} BioCardIndex={2} />}
        {active === "FourthQuarter" && <BioCard data={data} BioCardIndex={3} />}
        {active === "FifthQuarter" && <BioCard data={data} BioCardIndex={4} />}
      </div>
    </div>
  );
};

export default BioQ1;
