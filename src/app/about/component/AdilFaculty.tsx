import Link from "next/link";
import React from "react";
import { GoKebabHorizontal } from "react-icons/go";
import { RiUserFollowFill } from "react-icons/ri";
import { FaRetweet } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";
import { FiBarChart2 } from "react-icons/fi";
import Image from "next/image";
import adil from "public/adil.jpeg";
import AdilFacultyIcon from "./AdilFacultyIcon";
import { motion } from "framer-motion";
import { textVariant2, slideIn } from "../../util/motion";

const AdilFaculty = () => {
  return (
    <motion.div
      variants={slideIn("right", "tween", 0, 1)}
      initial="hidden"
      whileInView="show"
      className="bg-gradient-to-r from-emerald-200/70 to-white max-w-xl lg:my-12 md:my-12 my-4 shadow-2xl shadow-slate-300 lg:mr-40 md:mx-auto lg:p-3 md:p-3 p-1 border border-gray-200 flex lg:flex-row md:flex-row flex-col   bg-white text-black"
    >
      <Image
        className="lg:h-28 md:h-28 h-24 lg:w-28 md:w-28 w-24 justify-center rounded-full lg:mr-3 md:mr-3 "
        src={adil}
        alt={"adil altaf"}
      />

      <motion.div
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="w-full"
      >
        <div className="flex">
          <div className="flex">
            <div>
              <Link href={"https://twitter.com/heyhira1"}>
                <strong className="text-gray-800 mr-1">Adil Khan</strong>
                <span className="text-gray-500 mr-1">@altafadil1</span>
              </Link>

              <span className="text-gray-500 mr-1">&middot;</span>
              <span className="text-gray-500">Mar 18</span>
            </div>
          </div>
          <div className="ml-auto">
            <GoKebabHorizontal />
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col gap-2">
          Internet-Scale Multi-Cloud Global App Architect | Full Stack Cloud
          Developer | Continuous Innovation Leader (PIAIC)! 🙌
          <AdilFacultyIcon />
        </div>
        <div className="mt-2 flex justify-between">
          <div className="flex items-center">
            <RiUserFollowFill className="mr-2 text-gray-600" />
            <span className="text-gray-600">2K</span>
          </div>
          <div className="flex items-center">
            <FaSignal className="mr-2 text-gray-600" />
            <span className="text-gray-600">500+</span>
          </div>
          <div className="flex items-center">
            <FaRetweet className="mr-2 text-gray-600" />
            <span className="text-gray-600">17</span>
          </div>
          <div className="flex items-center">
            <AiOutlineHeart className="mr-2 text-gray-600" />
            <span className="text-gray-600">215</span>
          </div>
          <div className="flex items-center">
            <BsUpload className="mr-2 text-gray-600" />
          </div>
          <div className="flex items-center">
            <FiBarChart2 className="mr-2 text-gray-600" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AdilFaculty;
