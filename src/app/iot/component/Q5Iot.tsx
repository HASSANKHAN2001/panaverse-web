import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { textVariant2, slideIn, zoom } from "../../util/motion";

const Q5Iot = () => {
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
        variants={slideIn("left", "spring", 1.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="mb-4  font-semibold lg:text-2xl md:text-2xl text-xl
 text-teal-800  underline underline-offset-4"
      >
        AC-361: Embedded Programming using C and Rust
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
          This is an introductory course about using the C and Rust Programming
          Languages on Bare Metal embedded systems, such as Microcontrollers. We
          will start by introducing embedded systems and move on to learn the
          C++ and Rust programming languages. We will learn about basic
          programming concepts using C and Rust, then we will explore key
          concepts in electronics, microcontrollers, and embedded programming.
          It is a fast-paced, thorough introduction to programming with C and
          Rust that will have you writing programs, solving problems, burning
          your code on microcontrollers, playing with GPIOs, and making things
          that work in no time.
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
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <h2 className="lg:text-4xl md:text-4xl text-2xl font-semibold mb-2 mt-4">
          Introduction to the Internet of Things and Embedded Systems (Week 1
          and 2)
        </h2>

        <Link
          className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2 mx-2"
          href="https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit"
          target={"_blank"}
        >
          https://docs.google.com/presentation/d/
          <br className="md:hidden" />
          <span className="lg:mx-0 md:mx-0 mx-2">
            {" "}
            14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMg
          </span>
          <br className="md:hidden" />
          <span className="lg:mx-0  mx-2"> fnHYB3XlEZo/edit?usp=sharing</span>
        </Link>
      </motion.div>
      <ol
        className="list-disc list-inside lg:text-lg md:text-lg text-base
 lg:mx-8 md:mx-8 mx-4 my-2"
      >
        <motion.li
          variants={slideIn("left", "spring", 0.5, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          What is the Fourth Industrial{" "}
          <span className="lg:mx-0 md:mx-0 mx-6">Revolution?</span>
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 0.6, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          What is IoT?
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 0.7, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          Embedded Systems
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 0.8, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          Hardware and Software for IoT
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 0.9, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          Edge and Cloud Computing
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 1.0, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          The future of IoT is AI
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 1.1, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          Blockchain in the Internet of{" "}
          <span className="lg:mx-0 md:mx-0 mx-6">Things?</span>
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 1.2, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          IoT + AI + Blockchain:The Fourth{" "}
          <span className="lg:mx-0 md:mx-0 mx-6">
            Industrial Revolution begun{" "}
          </span>
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 1.3, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          How will Matter change the IoT{" "}
          <span className="lg:mx-0 md:mx-0 mx-6">
            Infrastructure and address
          </span>
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 1.4, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          Metaverse and IoT
        </motion.li>
      </ol>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <h2
          className="lg:text-xl md:text-xl text-lg
 font-medium my-2"
        >
          Mid-Term I: Introduction to the Internet of Things (IoT) Quiz in Week
          3
        </h2>
        <p
          className="lg:text-lg md:text-lg text-base
"
        >
          Total Questions: 46, Total Time: 60 minutes
        </p>
      </motion.div>
      <motion.h2
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-3xl md:text-3xl text-xl
 font-semibold my-2"
      >
        The C Reference Book: The C programming language
      </motion.h2>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <p
          className="lg:text-xl md:text-xl text-lg
"
        >
          Embedded Programming book: Internet of things with ESP8266
        </p>
        <Link
          className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2"
          href="https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN"
          target={"_blank"}
        >
          Download Link:
        </Link>
      </motion.div>
      <motion.h2
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-3xl md:text-3xl text-xl
 font-semibold my-2"
      >
        Introduction to C Part 1 (Weeks 3B, 4, and 5)
      </motion.h2>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <p
          className="lg:text-xl md:text-xl text-lg
"
        >
          C environment Setup for (Windows, Linux, and Mac OS systems)
        </p>

        <p
          className="lg:text-xl md:text-xl text-lg
 my-2"
        >
          Chapters 1-2 of
          <span className="font-semibold mx-1">
            “The C programming language”
          </span>
        </p>
      </motion.div>
      <ol
        className="list-disc list-inside lg:text-lg md:text-lg text-base
 lg:mx-8 md:mx-8 mx-4 my-2"
      >
        <motion.li
          variants={slideIn("left", "spring", 0.5, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          Variable names types
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 0.6, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          Data types and sizes
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 0.7, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          Constants
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 0.8, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          Arithmetic operations
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 0.9, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          Logical and relational operators
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 1.0, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          Type conversions.
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 1.1, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          Bitwise operators
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 1.2, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          Conditional expressions.
        </motion.li>
      </ol>
      <motion.p
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="lg:text-xl md:text-xl text-lg
 font-medium my-2"
      >
        Programming Assignments will also be given.
      </motion.p>
      <motion.h2
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-3xl md:text-3xl text-xl
 font-semibold mt-6"
      >
        C Programming Part 2 (Weeks 6 and 7)
      </motion.h2>
      <motion.p
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="lg:text-xl md:text-xl text-lg
 my-4"
      >
        Topics 3 and 4 of
        <span className="font-semibold mx-1">“The C programming language”</span>
      </motion.p>
      <ol
        className="list-disc list-inside lg:text-lg md:text-lg text-base
 lg:mx-8 md:mx-8 mx-4 my-2"
      >
        <motion.li
          variants={slideIn("left", "spring", 0.7, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          Control flow statements (else if,{" "}
          <span className="mx-6 lg:mx-0 md:mx-0">
            loops, switch, break continue)
          </span>
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 0.8, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          Function and Program{" "}
          <span className="mx-6 lg:mx-0 md:mx-0">
            structure(Returning and non-
          </span>
          <span className="mx-6 lg:mx-0 md:mx-0">returning, scope rules, </span>
          <span className="mx-6 lg:mx-0 md:mx-0">Recursion)</span>
        </motion.li>
      </ol>
      <motion.p
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="lg:text-xl md:text-xl text-lg
 font-medium my-2"
      >
        Programming Assignments will also be given.
      </motion.p>
      <motion.h2
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-3xl md:text-3xl text-xl
 font-semibold mt-6"
      >
        Introduction to Embedded systems Part 1 (Weeks 8)
      </motion.h2>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <p
          className="lg:text-xl md:text-xl text-lg
 my-4"
        >
          Basic Electronics and Introduction to microcontrollers
        </p>
        <p
          className="lg:text-xl md:text-xl text-lg
 my-4"
        >
          Chapter 1 of
          <span className="font-semibold mx-1">
            “Internet of things with ESP8266”
          </span>
        </p>
      </motion.div>
      <ol
        className="list-disc list-inside lg:text-lg md:text-lg text-base
 lg:mx-8 md:mx-8 mx-4 my-2"
      >
        <motion.li
          variants={slideIn("left", "spring", 0.7, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          Arduino IDE installation and env{" "}
          <span className="lg:mx-0 md:mx-0 mx-6">setup for ESP8266</span>
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 0.9, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          Burning your first code on{" "}
          <span className="lg:mx-0 md:mx-0 mx-6"> ESP8266</span>{" "}
        </motion.li>
      </ol>

      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <p
          className="lg:text-xl md:text-xl text-lg
 font-medium my-4"
        >
          Project-based Assignments will also be given.
        </p>
        <p
          className="lg:text-xl md:text-xl text-lg
 font-medium my-2"
        >
          Mid-Term II: C Programming Quiz 1 in Week 9
        </p>

        <p
          className="lg:text-lg md:text-lg text-base
  my-2"
        >
          Chapters 2-5 of “Internet of things with ESP8266”
        </p>
      </motion.div>

      <motion.h2
        variants={slideIn("left", "spring", 0.7, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-3xl md:text-3xl text-xl
 font-semibold my-4"
      >
        Introduction to Embedded systems Part 2 (Weeks 9-12)
      </motion.h2>
      <motion.p
        variants={slideIn("left", "spring", 0.7, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-lg md:text-lg text-base
  my-2"
      >
        Total Questions: 62, Total Time: 75 minute
      </motion.p>
      <ol
        className="list-disc list-inside lg:text-lg md:text-lg text-base
 lg:mx-8 md:mx-8 mx-4 my-2"
      >
        <motion.li
          variants={slideIn("left", "spring", 0.8, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2  my-4"
            href="https://randomnerdtutorials.com/wifimanager-with-esp8266-autoconnect-custom-parameter-and-manage-your-ssid-and-password/"
            target={"_blank"}
          >
            Connecting your hardware to wifi.
          </Link>
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 0.9, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          <Link
            className=" lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-4"
            href="https://randomnerdtutorials.com/esp8266-nodemcu-digital-inputs-outputs-arduino/#:~:text=ESP8266%20NodeMCU%20Read%20Digital%20Inputs,number"
            target={"_blank"}
          >
            Reading data from{" "}
            <span className="lg:mx-0 md:mx-0 ml-6">GPIOs.</span>
          </Link>
          %20you%20are%20referring%20to.
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 0.9, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          Controlling LEDs.
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 1.0, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          <Link
            className=" lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2  my-4"
            href="https://randomnerdtutorials.com/esp32-dht11-dht22-temperature-humidity-sensor-arduino-ide/"
            target={"_blank"}
          >
            Reading data from digital sensors.
          </Link>
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 1.1, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          Cloud data logging.{" "}
        </motion.li>
      </ol>

      <ol
        className="list-disc list-inside lg:text-lg md:text-lg text-base
 lg:mx-16 md:mx-14 mx-4 my-2"
      >
        <motion.li
          variants={slideIn("left", "spring", 0.7, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          <Link
            className=" lg:text-lg md:text-lg text-sm
 font-normal text-blue-600 underline underline-offset-2 my-4"
            href="https://tttapa.github.io/ESP8266/Chap16%20-%20Data%20Logging.html"
            target={"_blank"}
          >
            https://tttapa.github.io/ESP8266/Chap16%20-%20Data%20Logging.html
          </Link>
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 0.7, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          <Link
            className=" lg:text-lg md:text-lg text-sm
 font-normal text-blue-600 underline underline-offset-2 my-4"
            href="https://circuitdigest.com/microcontroller-projects/nodemcu-datalogger-to-save-temperature-and-pressure-data-on-thinger-io-cloud-platform"
            target={"_blank"}
          >
            https://circuitdigest.com/microcontroller-projects/nodemcu-datalogger-to-
            <span className="lg:mx-0 md:mx-6 mx-0">
              save-temperature-and-pressure-data-on-thinger-io-cloud
            </span>
          </Link>
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 0.7, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          <Link
            className="lg:text-lg md:text-lg text-sm
 font-normal text-blue-600 underline underline-offset-2 my-4"
            href="https://iotdesignpro.com/projects/nodemcu-data-logger-to-upload-data-on-webserver"
            target={"_blank"}
          >
            https://iotdesignpro.com/projects/nodemcu-data-logger-to-upload-data-
            <span className="lg:mx-0 md:mx-6 mx-0">on-webserver</span>
          </Link>
        </motion.li>
      </ol>

      <ol
        className="list-disc list-inside lg:text-lg md:text-lg text-base
 lg:mx-16 md:mx-14 mx-4 my-2"
      >
        <motion.li
          variants={slideIn("left", "spring", 0.7, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 "
            href="https://github.com/adesolasamuel/NodeMCU-DHT-Data-to-Arduino-IoT-Cloud"
            target={"_blank"}
          >
            Displaying data on the cloud.
          </Link>
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 0.7, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          <Link
            className=" lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-4"
            href="https://www.instructables.com/Control-ESP8266-Over-the-Internet-from-Anywhere/"
            target={"_blank"}
          >
            Controlling controller remotely.
          </Link>
        </motion.li>
      </ol>
      <motion.h2
        variants={slideIn("left", "spring", 0.7, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-3xl md:text-3xl text-xl
 font-semibold my-4"
      >
        Embedded Programming using Rust (Extra Weeks in the Course)
      </motion.h2>

      <ol
        className="list-disc list-inside lg:text-lg md:text-lg text-base
 lg:mx-16 md:mx-14 mx-4 my-2"
      >
        <motion.li
          variants={slideIn("left", "spring", 0.7, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 "
            href="https://www.rust-lang.org/what/embedded"
            target={"_blank"}
          >
            https://www.rust-{" "}
            <span className="lg:mx-0 md:mx-0  mx-6">
              {" "}
              lang.org/what/embedded
            </span>
          </Link>
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 0.7, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          <Link
            className=" lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-4"
            href="https://crates.io/crates/esp8266"
            target={"_blank"}
          >
            https://crates.io/crates/esp8266
          </Link>
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 0.7, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          Controlling a lamp anywhere in{" "}
          <span className="lg:mx-0 md:mx-0  mx-6"> the world.</span>
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 0.7, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          Interacting with different web{" "}
          <span className="lg:mx-0 md:mx-0  mx-6">services.</span>{" "}
        </motion.li>
      </ol>
      <motion.h2
        variants={slideIn("left", "spring", 0.7, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-3xl md:text-3xl text-xl
 font-semibold my-4"
      >
        Hardware Requirements:
      </motion.h2>
      <ol
        className="list-disc list-inside lg:text-lg md:text-lg text-base
 lg:mx-16 md:mx-14 mx-4 my-2"
      >
        <motion.li
          variants={slideIn("left", "spring", 0.7, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          Esp8266 (Node MCU)
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 0.7, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          Jumper Wires
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 0.7, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          Bread Board
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 0.7, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          LEDs
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 0.7, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          Sensors: (Dht11, ultrasonic sensor,{" "}
          <span className="lg:mx-0 md:mx-0  mx-6">IR sensor)</span>
        </motion.li>
      </ol>
    </div>
  );
};

export default Q5Iot;
