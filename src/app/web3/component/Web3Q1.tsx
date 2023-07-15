"use client";
import React from "react";
import { useState } from "react";
import Web3Card from "./Web3Card";
import data from "./Web3Data";
import { WebIcon1 } from "./WebIcon";
import { WebIcon2 } from "./WebIcon";
import { WebIcon3 } from "./WebIcon";
import { WebIcon4 } from "./WebIcon";
import { WebIcon5 } from "./WebIcon";
import { motion } from "framer-motion";
import { zoomIn } from "../../util/motion";

const Web3Q1 = () => {
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
          <WebIcon1 />
          <p className="text-lg font-bold my-5 ">Quarter 1</p>
        </motion.button>
        <motion.button
          variants={zoomIn(0.7, 1)}
          initial="hidden"
          whileInView="show"
          onClick={() => setActive("SecondQuarter")}
          className=" flex  w-48 mx-auto"
        >
          <WebIcon2 />
          <p className="text-lg font-bold my-5">Quarter 2</p>
        </motion.button>
        <motion.button
          variants={zoomIn(0.9, 1)}
          initial="hidden"
          whileInView="show"
          onClick={() => setActive("ThirdQuarter")}
          className=" flex  w-48 mx-auto"
        >
          <WebIcon3 />
          <p className="text-lg font-bold my-5">Quarter 3</p>
        </motion.button>
        <motion.button
          variants={zoomIn(1.1, 1)}
          initial="hidden"
          whileInView="show"
          onClick={() => setActive("FourthQuarter")}
          className=" flex  w-48 mx-auto"
        >
          <WebIcon4 />
          <p className="text-lg font-bold my-5">Quarter 4</p>
        </motion.button>
        <motion.button
          variants={zoomIn(1.3, 1)}
          initial="hidden"
          whileInView="show"
          onClick={() => setActive("FifthQuarter")}
          className=" flex  w-48 mx-auto"
        >
          <WebIcon5 />
          <p className="text-lg font-bold my-5">Quarter 5</p>
        </motion.button>
      </div>
      <div>
        {active === "FirstQuarter" && (
          <Web3Card data={data} Web3CardIndex={0} />
        )}
        {active === "SecondQuarter" && (
          <Web3Card data={data} Web3CardIndex={1} />
        )}
        {active === "ThirdQuarter" && (
          <Web3Card data={data} Web3CardIndex={2} />
        )}
        {active === "FourthQuarter" && (
          <Web3Card data={data} Web3CardIndex={3} />
        )}
        {active === "FifthQuarter" && (
          <Web3Card data={data} Web3CardIndex={4} />
        )}
      </div>
    </div>
  );
};

export default Web3Q1;
