import React from "react";
import Link from "next/link";
import { textVariant2, slideIn, zoom } from "../../util/motion";
import { motion } from "framer-motion";

const Q4Cloud = () => {
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
        CN-351: Certified Kubernetes Application Developer (CKAD)
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
        font-normal"
        >
          Cloud-native architecture and technologies are an approach to
          designing, constructing, and operating workloads that are built in the
          cloud and take full advantage of the cloud computing model.
          Cloud-native technologies empower organizations to build and run
          scalable applications in modern, dynamic environments such as public,
          private, and hybrid clouds. Containers, service meshes, microservices,
          immutable infrastructure, and declarative APIs exemplify this
          approach.
        </p>
      </motion.div>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal my-4"
        >
          These techniques enable loosely coupled systems that are resilient,
          manageable, and observable. Combined with robust automation, they
          allow engineers to make high-impact changes frequently and predictably
          with minimal toil.
        </p>
      </motion.div>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal mb-4"
        >
          Kubernetes is an open-source system for automating the deployment,
          scaling, and management of containerized applications. In this course,
          you will learn how to develop cloud applications using cloud-native
          technologies like Containers, Kubernetes, and CDK for Kubernetes.
          Specialized Track Duration
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
 my-8"
      >
        Course Outline:
      </motion.h1>

      <motion.h2
        variants={slideIn("left", "spring", 0.7, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-4xl md:text-4xl text-2xl
 font-bold mb-2 mt-4"
      >
        Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd
        Edition
      </motion.h2>

      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <Link
          className="lg:text-lg md:text-lg text-base
        font-normal text-blue-600 underline underline-offset-2 my-2"
          href="https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3"
          target={"_blank"}
        >
          https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3
        </Link>
      </motion.div>
      <motion.h2
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-4xl md:text-4xl text-2xl
 font-bold mb-2 mt-4"
      >
        Cloud Development Kit for Kubernetes
      </motion.h2>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <Link
          className="lg:text-lg md:text-lg text-base
        font-normal text-blue-600 underline underline-offset-2 my-4"
          href="https://cdk8s.io/"
          target={"_blank"}
        >
          https://cdk8s.io/
        </Link>
      </motion.div>
    </div>
  );
};

export default Q4Cloud;
