import React from "react";
import Link from "next/link";
import { textVariant2, slideIn, zoom } from "../../util/motion";
import { motion } from "framer-motion";

const Q5Web3 = () => {
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
        MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse
        Experiences
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
          The Web is the Metaverse. The metaverse requires an infrastructure
          that connects all of the metaverses so that we can travel between
          them. This is only achievable with open web-based metaverses. The
          internet and its browsers are magical. Federated but linked
          experiences connect pages, people, technology, businesses, standards,
          and nations. Its unlike anything else. The metaverse should replicate
          the best qualities of the web - it should just be the web. We just
          have to extend online responsive design from mobile to desktop to 3D,
          Augmented Reality, and Virtual Reality. This course will teach you how
          to build the Open Social Spatial Web with WebXR and WebGPU
          technologies.
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
 mt-4"
      >
        Course Outline:
      </motion.h1>
      <div>
        <motion.div variants={textVariant2} initial="hidden" whileInView="show">
          <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold mb-2 mt-4">
            Open Metaverse Web Development
          </h2>
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
            href="https://github.com/panaverse/metaverse-web"
            target={"_blank"}
          >
            Open Metaverse Learning Repo
          </Link>
        </motion.div>
        <motion.h2
          variants={slideIn("left", "spring", 0.5, 1.5)}
          initial="hidden"
          whileInView="show"
          className="lg:text-2xl md:text-2xl text-xl
font-medium mb-2 mt-4"
        >
          Blender 3D asset Creation for the Metaverse (Remote Zoom Class)
        </motion.h2>
        <motion.div variants={textVariant2} initial="hidden" whileInView="show">
          <p
            className="lg:text-lg md:text-lg text-base
font-normal"
          >
            Blender development is being funded by heavyweights in the real-time
            3D (RT3D) space such as Apple, Unity, AMD, Intel, Meta, NVIDIA, AWS,
            Epic Games, Adobe, Microsoft, and Decentraland. It is expected to
            become the standard asset creation tool for metaverse.
          </p>
          <p
            className="lg:text-lg md:text-lg text-base
 font-normal"
          >
            Blender 3.3+
            <Link
              className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
              href="https://www.blender.org/download/"
              target={"_blank"}
            >
              Download
            </Link>
          </p>
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
            href="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD"
            target={"_blank"}
          >
            Blender 3.0 Beginner Tutorial
          </Link>
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
            href="https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit"
            target={"_blank"}
          >
            Blender 3.0 Hotkey
          </Link>
          <p
            className="lg:text-lg md:text-lg text-base
 font-normal"
          >
            Blender Projects Textbook:
            <Link
              className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2 mx-1 "
              href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
              target={"_blank"}
            >
              Blender by Example 2nd Edition
            </Link>
          </p>
          <p
            className="lg:text-lg md:text-lg text-base
 font-normal"
          >
            Blender Textbook: The Complete Guide to Blender Graphics:
            <Link
              className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2 mx-1"
              href="https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5"
              target={"_blank"}
            >
              Computer Modeling & Animation 7th Edition by John M. Blain
            </Link>
          </p>
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2 "
            href="https://www.youtube.com/watch?v=H7T0SzdFHwg"
            target={"_blank"}
          >
            Best Hardware Performance for Blender Rendering
          </Link>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
      >
        <h2
          className="lg:text-xl md:text-xl text-lg
          font-medium mb-2 mt-4"
        >
          Assignment 1:
        </h2>
        <p
          className="lg:text-lg md:text-lg text-base
          font-normal"
        >
          Build a 3D Donut using Blender 3 as shown in these
          <Link
            className="lg:text-lg md:text-lg text-base
            font-normal text-blue-600 underline underline-offset-2 my-2 mx-1"
            href="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD"
            target={"_blank"}
          >
            video tutorials
          </Link>
        </p>
      </motion.div>
      <motion.div
        variants={slideIn("left", "spring", 0.7, 1.5)}
        initial="hidden"
        whileInView="show"
      >
        <h2
          className="lg:text-xl md:text-xl text-lg
 font-medium mb-2 mt-4"
        >
          Assignment 2:
        </h2>
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal"
        >
          Build a Viking Scene using Blender 3 as shown in chapter 2 of the Book
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2 mx-1"
            href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
            target={"_blank"}
          >
            Blender by Example 2nd Edition
          </Link>
        </p>
      </motion.div>
      <motion.div
        variants={slideIn("left", "spring", 0.9, 1.5)}
        initial="hidden"
        whileInView="show"
      >
        <h2
          className="lg:text-xl md:text-xl text-lg
 font-medium mb-2 mt-4"
        >
          Assignment 3:
        </h2>
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal"
        >
          Modeling a Time Machine using Blender 3 as shown in chapters 3 and 4
          of the Book
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2 mx-1"
            href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
            target={"_blank"}
          >
            Blender by Example 2nd Edition
          </Link>
        </p>
      </motion.div>
      <motion.div
        variants={slideIn("left", "spring", 1.1, 1.5)}
        initial="hidden"
        whileInView="show"
      >
        <h2
          className="lg:text-xl md:text-xl text-lg
 font-medium mb-2 mt-4"
        >
          Assignment 4:
        </h2>
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal"
        >
          Build a Modern Kitchen using Blender 3 as shown in chapters 5, 6, and
          7 of the Book
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2 mx-1"
            href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
            target={"_blank"}
          >
            Blender by Example 2nd Edition
          </Link>
        </p>
      </motion.div>
      <motion.div
        variants={slideIn("left", "spring", 1.3, 1.5)}
        initial="hidden"
        whileInView="show"
      >
        <h2
          className="lg:text-xl md:text-xl text-lg
 font-medium mb-2 mt-4"
        >
          Assignment 5:
        </h2>
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal"
        >
          Illustrating an Alien Hero with Grease Pencil as shown in chapter 8 of
          the Book
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2 mx-1"
            href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
            target={"_blank"}
          >
            Blender by Example 2nd Edition
          </Link>
        </p>
      </motion.div>
      <motion.div
        variants={slideIn("left", "spring", 1.5, 1.5)}
        initial="hidden"
        whileInView="show"
      >
        <h2
          className="lg:text-xl md:text-xl text-lg
 font-medium mb-2 mt-4"
        >
          Assignment 6:
        </h2>
        <p
          className=" lg:text-lg md:text-lg text-base
font-normal"
        >
          Build a 3D Sword in the Stone using Blender 3 as shown in these
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2 mx-1"
            href="https://www.youtube.com/watch?v=bpvh-9H8S1g"
            target={"_blank"}
          >
            video tutorials
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Q5Web3;
