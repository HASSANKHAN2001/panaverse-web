"use client";
import React from "react";
import { useState } from "react";
import NetCard from "./NetCard";
import data from "./NetData";
import { NetIcon1 } from "./NetIcon";
import { NetIcon2 } from "./NetIcon";
import { NetIcon3 } from "./NetIcon";
import { NetIcon4 } from "./NetIcon";
import { NetIcon5 } from "./NetIcon";
import { motion } from "framer-motion";
import { zoomIn } from "../../util/motion";

const NetQ1 = () => {
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
          <NetIcon1 />
          <p className="text-lg font-bold my-5 ">Quarter 1</p>
        </motion.button>
        <motion.button
          variants={zoomIn(0.7, 1)}
          initial="hidden"
          whileInView="show"
          onClick={() => setActive("SecondQuarter")}
          className=" flex  w-48 mx-auto"
        >
          <NetIcon2 />
          <p className="text-lg font-bold my-5">Quarter 2</p>
        </motion.button>
        <motion.button
          variants={zoomIn(0.9, 1)}
          initial="hidden"
          whileInView="show"
          onClick={() => setActive("ThirdQuarter")}
          className=" flex  w-48 mx-auto"
        >
          <NetIcon3 />
          <p className="text-lg font-bold my-5">Quarter 3</p>
        </motion.button>
        <motion.button
          variants={zoomIn(1.1, 1)}
          initial="hidden"
          whileInView="show"
          onClick={() => setActive("FourthQuarter")}
          className=" flex  w-48 mx-auto"
        >
          <NetIcon4 />
          <p className="text-lg font-bold my-5">Quarter 4</p>
        </motion.button>
        <motion.button
          variants={zoomIn(1.3, 1)}
          initial="hidden"
          whileInView="show"
          onClick={() => setActive("FifthQuarter")}
          className=" flex  w-48 mx-auto"
        >
          <NetIcon5 />
          <p className="text-lg font-bold my-5">Quarter 5</p>
        </motion.button>
      </div>
      <div>
        {active === "FirstQuarter" && <NetCard data={data} NetCardIndex={0} />}
        {active === "SecondQuarter" && <NetCard data={data} NetCardIndex={1} />}
        {active === "ThirdQuarter" && <NetCard data={data} NetCardIndex={2} />}
        {active === "FourthQuarter" && <NetCard data={data} NetCardIndex={3} />}
        {active === "FifthQuarter" && <NetCard data={data} NetCardIndex={4} />}
      </div>
    </div>
  );
};

export default NetQ1;
