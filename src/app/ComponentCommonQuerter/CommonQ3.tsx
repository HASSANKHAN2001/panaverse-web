import React from "react";
import Link from "next/link";
import { textVariant2, slideIn, zoom } from "../util/motion";
import { motion } from "framer-motion";

const CommonQ3 = () => {
  return (
    <div className="my-1 py-8 px-2 mx-1 leading-loose bg-gradient-to-r from-white via-teal-100/70 to-green-100/70 text-black">
      <motion.h1
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="text-4xl font-semibold text-center my-4"
      >
        Quarter 3
      </motion.h1>
      <motion.h2
        variants={slideIn("left", "spring", 0.9, 2)}
        initial="hidden"
        whileInView="show"
        className="mb-4  font-semibold lg:text-2xl md:text-2xl text-xl
text-teal-800  underline underline-offset-4"
      >
        $-101: Dollar Making Bootcamp - Full-Stack Template and API Product
        Development
      </motion.h2>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <h1 className="font-bold lg:text-5xl md:text-5xl text-2xl my-4">
          Course Description:
        </h1>
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal"
        >
          In this course, you will be tasked with building APIs and a template
          to be sold on the Panaverse DAO Marketplace and Theme Forest. The
          Panaverse DAO will receive 25% of the sale for platform management and
          an additional 15% for marketing purposes. 60% of the revenues will be
          distributed to the developer as Panaverse tokens.
        </p>
      </motion.div>
      <motion.div
        variants={zoom("up", "bounce")}
        initial="hidden"
        whileInView="show"
        className="mt-8  border-teal-700 rounded-xl border-2 flex lg:flex-row md:flex-row flex-col lg:w-2/4 w-full "
      >
        <div className="lg:w-2/4 md:w-2/4 w-full font-bold text-3xl  text-teal-900 lg:h-40 lg:py-12 lg:px-8 md:h-40 md:py-14 md:px-8 px-6 py-6">
          <h1>Core Track</h1>
          <p className="lg:text-base md:text-lg text-base font-medium text-teal-600">
            (Common in All Specializations)
          </p>
        </div>
        <div className="bg-gradient-to-r from-teal-800/70 to-green-500/70 md:w-2/4 lg:w-2/4 w-full text-white font-semibold text-2xl md:py-10 lg:px-12 lg:py-10 md:px-12 px-6 py-6">
          <h1>Duration</h1>
          <h3 className="lg:my-2 md:my-2 ">13 Weeks</h3>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
      >
        <h1 className="font-bold lg:text-5xl md:text-5xl text-2xl mt-4">
          Course Outline:
        </h1>
      </motion.div>
      <div>
        <motion.h2
          variants={slideIn("left", "spring", 0.9, 1.5)}
          initial="hidden"
          whileInView="show"
          className="lg:text-4xl md:text-4xl text-2xl font-bold mb-2 mt-4"
        >
          Earn While You Learn Projects:
        </motion.h2>
        <motion.div variants={textVariant2} initial="hidden" whileInView="show">
          <h2
            className="lg:text-2xl md:text-2xl text-xl
 font-medium mb-2 mt-4"
          >
            A. Build Full-Stack Next.js 13 Jamstack Templates
          </h2>
          <p
            className="lg:text-lg md:text-lg text-base
 font-normal"
          >
            (Common in All Specializations)You will be assigned to build a
            template which we will sell on Theme Forest and Panaverse DAO
            marketplace. The Panaverse DAO will receive 25% share on the sale of
            the template which will be used to manage the platform. An
            additional 15% will be spent on marketing the template. 60% of the
            revenues will be distributed to the developer through the Panaverse
            DAO in the form of Panaverse tokens.{" "}
            <div>The Template Standard:</div>
          </p>
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
            href="https://github.com/panaverse/panaverse-template-standard"
            target={"_blank"}
          >
            https://github.com/panaverse/panaverse-template-standard
          </Link>
        </motion.div>
      </div>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <h2
          className="lg:text-2xl md:text-2xl text-xl
 font-medium mb-2 mt-4"
        >
          B. Build QraphQL APIs
        </h2>
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal"
        >
          You will be assigned to build APIs for which you will sell
          subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will
          receive 25% share on the sale of the template which will be used to
          manage the platform. An additional 15% will be spent on marketing the
          template. 60% of the revenues will be distributed to the developer
          through the Panaverse DAO in the form of Panaverse tokens.
        </p>
      </motion.div>
    </div>
  );
};

export default CommonQ3;
