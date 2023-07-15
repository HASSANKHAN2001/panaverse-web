import React from "react";
import Link from "next/link";
import { textVariant2, slideIn, zoom } from "../../util/motion";
import { motion } from "framer-motion";

const Q5Ai = () => {
  return (
    <div className="my-1 py-8 px-2 mx-1 leading-loose bg-gradient-to-r from-white via-teal-100/70 to-green-100/70 text-black">
      <motion.h1
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="text-4xl font-semibold text-center my-4"
      >
        Quarter 5
      </motion.h1>
      <motion.h2
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="mb-4  font-semibold lg:text-2xl md:text-2xl text-xl
 text-teal-800  underline underline-offset-4"
      >
        AI-361: Deep Learning and MLOps
      </motion.h2>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <h1
          className="font-bold lg:text-5xl md:text-5xl text-2xl
my-6"
        >
          Course Description:
        </h1>
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal my-4"
        >
          This course will help you understand the capabilities, challenges, and
          consequences of deep learning and prepare you to participate in the
          development of leading-edge AI technology. We will finish the program
          by learning how to envision, create, and maintain integrated systems
          that run constantly in production. Production systems must manage
          constantly changing data, in stark contrast to typical machine
          learning modeling. The production system must also operate
          continuously at the lowest possible cost while delivering the highest
          possible performance.
        </p>
      </motion.div>
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
      <motion.h1
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="font-bold lg:text-5xl md:text-5xl text-2xl
my-10"
      >
        Course Outline:
      </motion.h1>
      <div>
        <motion.h2
          variants={slideIn("left", "spring", 0.7, 1.5)}
          initial="hidden"
          whileInView="show"
          className="lg:text-3xl md:text-3xl text-xl
font-medium mb-2 mt-4"
        >
          Deep Learning with Tensorflow
        </motion.h2>
        <motion.div variants={textVariant2} initial="hidden" whileInView="show">
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-8"
            href="https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2"
            target={"_blank"}
          >
            Deep Learning with Python, Second Edition 2nd Edition
          </Link>
        </motion.div>
        <motion.h2
          variants={slideIn("left", "spring", 0.7, 1.5)}
          initial="hidden"
          whileInView="show"
          className="my-4 lg:text-3xl md:text-3xl text-xl
 font-medium"
        >
          Machine Learning Engineering for Production (MLOps) using Terraform
          for CDK
        </motion.h2>
        <motion.div variants={textVariant2} initial="hidden" whileInView="show">
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-6"
            href="https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351"
            target={"_blank"}
          >
            A Comprehensive Guide to MLOps Terraform: Infrastructure As
            Code(IaC)
          </Link>
          <Link
            className="block lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
            href="https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce"
            target={"_blank"}
          >
            MLOps leveraging AWS SageMaker and Terraform
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Q5Ai;
