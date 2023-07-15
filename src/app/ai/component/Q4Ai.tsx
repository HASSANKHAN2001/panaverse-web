import React from "react";
import Link from "next/link";
import { textVariant2, slideIn, zoom } from "../../util/motion";
import { motion } from "framer-motion";

const Q4Ai = () => {
  return (
    <div className="my-1 py-8 px-2 mx-1 leading-loose bg-gradient-to-r from-white via-teal-100/70 to-green-100/70 text-black">
      <motion.h1
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="text-4xl font-semibold text-center my-4"
      >
        Quarter 4
      </motion.h1>
      <motion.h2
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="mb-4  font-semibold lg:text-2xl md:text-2xl text-xl
 text-teal-800  underline underline-offset-4"
      >
        AI-351: Developing Planet-Scale Intelligent APIs and Python Programming
      </motion.h2>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <h1
          className="font-bold lg:text-5xl md:text-5xl text-2xl
 my-4"
        >
          Course Description:
        </h1>
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal my-2"
        >
          Artificial intelligence is the simulation of human intelligence
          processes by machines, especially computer systems. The AI and Deep
          Learning Specialization is a foundational program that will aid in
          your comprehension of deep learning potential, difficulties, and
          effects as well as equip you to take part in the creation of
          cutting-edge AI technology.
        </p>
      </motion.div>
      <motion.p
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="lg:text-lg md:text-lg text-base
 font-normal my-6"
      >
        We will start this course by understanding the fundamentals and use
        cases for AI and move on to building next-gen intelligent apps using
        OpenAI’s powerful models and Next.js 13.
      </motion.p>
      <motion.p
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="lg:text-lg md:text-lg text-base
 font-normal mb-4"
      >
        We will conclude the course by learning about basic programming concepts
        using Python, such as lists, dictionaries, classes, functions, and
        loops, and practice writing clean and readable code with exercises for
        each topic. We will also learn how to make your programs interactive and
        how to test your code safely before adding it to a project. It is a
        fast-paced, thorough introduction to programming with Python 3.10+ that
        will have you writing programs, solving problems, and making things that
        work in no time. In this quarter we will also learn Git, the distributed
        version control system. We will also review Git-based GitHub services.
      </motion.p>
      <motion.div
        variants={zoom("up", "bounce")}
        initial="hidden"
        whileInView="show"
        className="mt-8  border-teal-700 rounded-xl border-2 flex lg:flex-row md:flex-row flex-col lg:w-2/4 w-full "
      >
        <div className="lg:w-2/4 md:w-2/4 w-full font-bold text-3xl  text-teal-900 lg:h-40 lg:py-16 lg:px-6 md:h-40 md:py-14 md:px-8 px-6  py-6">
          Specialized Track
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
        <h1
          className="font-bold lg:text-5xl md:text-5xl text-2xl
 my-8"
        >
          Course Outline:
        </h1>

        <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold mb-2 mt-4">
          Introduction to Machine Learning, Data Science, and AI
        </h2>
      </motion.div>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <Link
          className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
          href="https://www.coursera.org/learn/ai-for-everyone"
          target={"_blank"}
        >
          AI for Everyone
        </Link>
        <h2
          className="my-2 lg:text-xl md:text-xl text-lg
 font-medium"
        >
          AI for Everyone Quiz in Week 3
        </h2>
        <p
          className="lg:text-xl md:text-xl text-lg
 font-normal my-2"
        >
          Total Questions: 60, Total Time: 75 minutes
        </p>
        <p
          className="lg:text-xl md:text-xl text-lg
 font-normal my-2"
        >
          Building Next-Gen Intelligent Apps with OpenAI’s Powerful Models
        </p>
        <p
          className="lg:text-xl md:text-xl text-lg
 font-normal my-2"
        >
          We will cover GPT-4, ChatGPT, etc. and Next.js 13
        </p>
        <Link
          className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
          href="https://openai.com/product"
          target={"_blank"}
        >
          https://openai.com/api/
        </Link>
        <Link
          className="block lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
          href="https://openai.com/api/https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45"
          target={"_blank"}
        >
          https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45
        </Link>
      </motion.div>
      <motion.h2
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-4xl md:text-4xl text-2xl font-bold mb-2 mt-4"
      >
        Python Crash Course for TypeScript Developers
      </motion.h2>
      <motion.p
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="lg:text-xl md:text-xl text-lg
 font-normal my-4"
      >
        Python Crash Course, 2nd Edition:
        <Link
          className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-4"
          href="https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5"
          target={"_blank"}
        >
          A Hands-On, Project-Based Introduction to Programming 2nd Edition
        </Link>
      </motion.p>
    </div>
  );
};

export default Q4Ai;
