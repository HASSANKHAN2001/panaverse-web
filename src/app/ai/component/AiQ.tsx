"use client";
import React from "react";
import { useState } from "react";
import AiCard from "./AiCard";
import data from "./AiData";
import { AiIcon1 } from "./AiIcon";
import { AiIcon2 } from "./AiIcon";
import { AiIcon3 } from "./AiIcon";
import { AiIcon4 } from "./AiIcon";
import { AiIcon5 } from "./AiIcon";
import { motion } from "framer-motion";
import { zoomIn } from "../../util/motion";

const AiQ1 = () => {
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
          <AiIcon1 />
          <p className="text-lg font-bold my-5 ">Quarter 1</p>
        </motion.button>
        <motion.button
          variants={zoomIn(0.7, 1)}
          initial="hidden"
          whileInView="show"
          onClick={() => setActive("SecondQuarter")}
          className=" flex  w-48 mx-auto"
        >
          <AiIcon2 />
          <p className="text-lg font-bold my-5">Quarter 2</p>
        </motion.button>
        <motion.button
          variants={zoomIn(0.9, 1)}
          initial="hidden"
          whileInView="show"
          onClick={() => setActive("ThirdQuarter")}
          className=" flex  w-48 mx-auto"
        >
          <AiIcon3 />
          <p className="text-lg font-bold my-5">Quarter 3</p>
        </motion.button>
        <motion.button
          variants={zoomIn(1.1, 1)}
          initial="hidden"
          whileInView="show"
          onClick={() => setActive("FourthQuarter")}
          className=" flex  w-48 mx-auto"
        >
          <AiIcon4 />
          <p className="text-lg font-bold my-5">Quarter 4</p>
        </motion.button>
        <motion.button
          variants={zoomIn(1.3, 1)}
          initial="hidden"
          whileInView="show"
          onClick={() => setActive("FifthQuarter")}
          className=" flex  w-48 mx-auto"
        >
          <AiIcon5 />
          <p className="text-lg font-bold my-5">Quarter 5</p>
        </motion.button>
      </div>
      <div>
        {active === "FirstQuarter" && <AiCard data={data} AiCardIndex={0} />}
        {active === "SecondQuarter" && <AiCard data={data} AiCardIndex={1} />}
        {active === "ThirdQuarter" && <AiCard data={data} AiCardIndex={2} />}
        {active === "FourthQuarter" && <AiCard data={data} AiCardIndex={3} />}
        {active === "FifthQuarter" && <AiCard data={data} AiCardIndex={4} />}
      </div>
    </div>
  );
};

export default AiQ1;
