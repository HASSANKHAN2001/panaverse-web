"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../src/app/util/motion";
import Link from "next/link";
import { CoursesType } from "./DataType";
const CourseCard = ({ title, image, id, href }: CoursesType) => {
  return (
    <Link
      href={href}
      className=" flex h-80 flex-col items-center justify-center w-full  "
      key={id}
    >
      <motion.div
        whileHover={{
          scale: 1.1,
          backgroundColor: "teal",
        }}
        key={id}
        variants={fadeIn("up", "spring", id * 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        className="w-full h-80 flex flex-col items-center justify-center p-6 rounded-xl hover:ring-2 cursor-pointer hover:ring-white  drop-shadow-2xl  bg-white  text-black hover:text-white"
      >
        <div>
          <Image
            src={image}
            alt={title}
            width={100}
            height={100}
            className="w-2/2 h-2/2 "
          />
        </div>
        <div className="w-full">
          <h1 className="pt-2 text-center py-6 text-black">{title}</h1>
        </div>
      </motion.div>
    </Link>
  );
};

export default CourseCard;
