"use client";
import React from "react";
import { useState } from "react";
import IotCard from "./IotCard";
import data from "./IotData";
import { IotIcon1 } from "./IotIcon";
import { IotIcon2 } from "./IotIcon";
import { IotIcon3 } from "./IotIcon";
import { IotIcon4 } from "./IotIcon";
import { IotIcon5 } from "./IotIcon";
import { motion } from "framer-motion";
import { zoomIn } from "../../util/motion";

const IotQ1 = () => {
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
          <IotIcon1 />
          <p className="text-lg font-bold my-5 ">Quarter 1</p>
        </motion.button>
        <motion.button
          variants={zoomIn(0.7, 1)}
          initial="hidden"
          whileInView="show"
          onClick={() => setActive("SecondQuarter")}
          className=" flex  w-48 mx-auto"
        >
          <IotIcon2 />
          <p className="text-lg font-bold my-5">Quarter 2</p>
        </motion.button>
        <motion.button
          variants={zoomIn(0.9, 1)}
          initial="hidden"
          whileInView="show"
          onClick={() => setActive("ThirdQuarter")}
          className=" flex  w-48 mx-auto"
        >
          <IotIcon3 />
          <p className="text-lg font-bold my-5">Quarter 3</p>
        </motion.button>
        <motion.button
          variants={zoomIn(1.1, 1)}
          initial="hidden"
          whileInView="show"
          onClick={() => setActive("FourthQuarter")}
          className=" flex  w-48 mx-auto"
        >
          <IotIcon4 />
          <p className="text-lg font-bold my-5">Quarter 4</p>
        </motion.button>
        <motion.button
          variants={zoomIn(1.3, 1)}
          initial="hidden"
          whileInView="show"
          onClick={() => setActive("FifthQuarter")}
          className=" flex  w-48 mx-auto"
        >
          <IotIcon5 />
          <p className="text-lg font-bold my-5">Quarter 5</p>
        </motion.button>
      </div>
      <div>
        {active === "FirstQuarter" && <IotCard data={data} IotCardIndex={0} />}
        {active === "SecondQuarter" && <IotCard data={data} IotCardIndex={1} />}
        {active === "ThirdQuarter" && <IotCard data={data} IotCardIndex={2} />}
        {active === "FourthQuarter" && <IotCard data={data} IotCardIndex={3} />}
        {active === "FifthQuarter" && <IotCard data={data} IotCardIndex={4} />}
      </div>
    </div>
  );
};

export default IotQ1;
