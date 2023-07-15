"use client";
import React from "react";
import { useState } from "react";
import CloudCard from "./CloudCard";
import data from "./CloudData";
import { CloudIcon1 } from "./CloudIcon";
import { CloudIcon2 } from "./CloudIcon";
import { CloudIcon3 } from "./CloudIcon";
import { CloudIcon4 } from "./CloudIcon";
import { CloudIcon5 } from "./CloudIcon";
import { motion } from "framer-motion";
import { zoomIn } from "../../util/motion";

const CloudQ1 = () => {
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
          <CloudIcon1 />
          <p className="text-lg font-bold my-5 ">Quarter 1</p>
        </motion.button>
        <motion.button
          variants={zoomIn(0.7, 1)}
          initial="hidden"
          whileInView="show"
          onClick={() => setActive("SecondQuarter")}
          className=" flex  w-48 mx-auto"
        >
          <CloudIcon2 />
          <p className="text-lg font-bold my-5">Quarter 2</p>
        </motion.button>
        <motion.button
          variants={zoomIn(0.9, 1)}
          initial="hidden"
          whileInView="show"
          onClick={() => setActive("ThirdQuarter")}
          className=" flex  w-48 mx-auto"
        >
          <CloudIcon3 />
          <p className="text-lg font-bold my-5">Quarter 3</p>
        </motion.button>
        <motion.button
          variants={zoomIn(1.1, 1)}
          initial="hidden"
          whileInView="show"
          onClick={() => setActive("FourthQuarter")}
          className=" flex  w-48 mx-auto"
        >
          <CloudIcon4 />
          <p className="text-lg font-bold my-5">Quarter 4</p>
        </motion.button>
        <motion.button
          variants={zoomIn(1.3, 1)}
          initial="hidden"
          whileInView="show"
          onClick={() => setActive("FifthQuarter")}
          className=" flex  w-48 mx-auto"
        >
          <CloudIcon5 />
          <p className="text-lg font-bold my-5">Quarter 5</p>
        </motion.button>
      </div>
      <div>
        {active === "FirstQuarter" && (
          <CloudCard data={data} CloudCardIndex={0} />
        )}
        {active === "SecondQuarter" && (
          <CloudCard data={data} CloudCardIndex={1} />
        )}
        {active === "ThirdQuarter" && (
          <CloudCard data={data} CloudCardIndex={2} />
        )}
        {active === "FourthQuarter" && (
          <CloudCard data={data} CloudCardIndex={3} />
        )}
        {active === "FifthQuarter" && (
          <CloudCard data={data} CloudCardIndex={4} />
        )}
      </div>
    </div>
  );
};

export default CloudQ1;
