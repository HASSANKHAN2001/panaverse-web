import React from "react";
import Image from "next/image";
import arif1 from "public/arif1.webp";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";
import { slideIn, zoomIn } from "../../util/motion";
import Link from "next/link";
import Video from "./Video";

const ArifAbout = () => {
  return (
    <div className="md:pt-[91px] flex flex-col lg:flex-row justify-between">
      <div className="w-full h-full">
        <Video />
      </div>
      <div className="bg-black shrink-0 w-1/3 py-6">
        <motion.div
          variants={zoomIn(0.5, 1)}
          initial="hidden"
          whileInView="show"
          className="flex items-center justify-center "
        >
          <Image src={arif1} width={250} height={200} alt="arif" />
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0, 1)}
          initial="hidden"
          whileInView="show"
          className="text-center text-white"
        >
          <h1 className="text-2xl font-bold">Dr. Arif Alvi</h1>
          <p className="text-xl font-semibold my-1 mx-2">
            President of the Islamic Republic of Pakistan
          </p>
          <div className="flex text-cnter justify-center">
            <Link
              className="hover:scale-105 duration-300"
              target="___blank"
              href="https://www.facebook.com/Dr.ArifAlvi/"
            >
              <div className="p-2 rounded-full bg-gradient-to-t primary-gradient">
                <BsFacebook className="h-8 w-8 fill-teal-200/80" />
              </div>
            </Link>
            <Link
              className="hover:scale-105 duration-300"
              target="___blank"
              href="https://twitter.com/ArifAlvi?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            >
              <div className="p-2 rounded-full bg-gradient-to-t primary-gradient">
                <BsTwitter className="h-8 w-8 fill-teal-200/80" />
              </div>
            </Link>
            <Link
              className="hover:scale-105 duration-300"
              target="___blank"
              href="https://www.instagram.com/dr.arifalvi/?hl=en"
            >
              <div className="p-2 rounded-full bg-gradient-to-t primary-gradient">
                <BsInstagram className="h-8 w-8 fill-teal-200/80" />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ArifAbout;
