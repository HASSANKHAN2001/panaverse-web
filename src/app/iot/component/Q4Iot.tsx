import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { textVariant2, slideIn, zoom } from "../../util/motion";

const Q4Iot = () => {
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
        variants={slideIn("left", "spring", 0.8, 1.5)}
        initial="hidden"
        whileInView="show"
        className="mb-4  font-semibold lg:text-2xl md:text-2xl text-xl
 text-teal-800  underline underline-offset-4"
      >
        AC-351: Ambient Computing with Voice Assistants and Matter Devices
      </motion.h2>
      <motion.h1
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="font-bold lg:text-5xl md:text-5xl text-2xl
 my-4"
      >
        Course Description:
      </motion.h1>

      <motion.p
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="lg:text-lg md:text-lg text-base
 font-normal"
      >
        Ambient computing, also commonly referred to as ubiquitous computing, is
        the concept of blending computing power into our everyday lives in a way
        that is embedded into our surroundings - invisible but useful. In a
        multi-device world, people do not want to spend their life fussing with
        technology. An ambient approach gets the tech out of your way so you can
        live your life while getting the help you need. It does not matter what
        device you were using, what context you were in, whether you were
        talking, typing, or tapping. The technology in your life works together
        seamlessly. Ambient computing uses all aspects of modern-day technology,
        including voice assistants, artificial intelligence, sensors,
        connectivity, cloud computing and more.
      </motion.p>
      <motion.p
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="lg:text-lg md:text-lg text-base
 font-normal my-4"
      >
        If you were thinking that the IoT and ambient computing sound a lot
        alike, you are not wrong; the two concepts are intertwined. IoT refers
        to the vast array of devices that connect to the internet to optimize
        their functionality, like smart sensors and smart speakers: ambient
        computing builds on that. Ambient computing focuses on the interaction
        between these devices once they are connected.
      </motion.p>
      <motion.p
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="lg:text-lg md:text-lg text-base
 font-normal mb-4"
      >
        Matter, the next-generation smart home standard, solves many smart home
        pain points while bringing all our IoT devices together. Some of the
        biggest tech companies are working together to make Matter a unified
        protocol for future smart homes. These companies include Apple, Amazon,
        and Google. This means Apple HomeKit, Amazon Alexa, Samsung SmartThings,
        Google Nest, and Samsung SmartThings will support the Matter standard by
        default for all new devices.
      </motion.p>
      <motion.p
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="lg:text-lg md:text-lg text-base
 font-normal mb-4"
      >
        In this course we will learn to build smart homes with Amazon Alexa and
        Matter protocol.
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
      <motion.h1
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="font-bold lg:text-5xl md:text-5xl text-2xl
 my-8"
      >
        Course Outline:
      </motion.h1>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold mb-2 mt-4">
          Alexa Skill Developement
        </h2>
        <Link
          className="lg:text-xl md:text-xl text-lg
font-normal text-blue-600 underline underline-offset-2 my-2"
          href="https://developer.amazon.com/en-US/alexa"
          target={"_blank"}
        >
          https://developer.amazon.com/en-US/alexa
        </Link>
      </motion.div>
      <motion.h2
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-4xl md:text-4xl text-2xl font-bold my-4"
      >
        Alexa with Matter Protocol
      </motion.h2>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <Link
          className="lg:text-xl md:text-xl text-lg
 font-normal text-blue-600 underline underline-offset-2"
          href="https://developer.amazon.com/en-US/alexa/matter"
          target={"_blank"}
        >
          https://developer.amazon.com/en-US/alexa/matter
        </Link>
        <Link
          className="block lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-4"
          href="https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html"
          target={"_blank"}
        >
          https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-
          <br className="md:hidden" />
          matter.htmlhttps://developer.amazon.com
          <br className="md:hidden" />
          /en-US/alexa/matter
        </Link>
      </motion.div>
    </div>
  );
};

export default Q4Iot;
