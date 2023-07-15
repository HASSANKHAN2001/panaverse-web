import React from "react";
import Link from "next/link";
import { textVariant2, slideIn, zoom } from "../util/motion";
import { motion } from "framer-motion";
const CommonQ1 = () => {
  return (
    <div className="my-1 py-8 px-2  mx-1 leading-loose bg-gradient-to-r from-white via-teal-100/70 to-green-100/70 text-black">
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <h1 className="text-4xl font-semibold text-center my-4">Quarter 1</h1>
        <motion.h2
          variants={slideIn("left", "spring", 0.5, 1.5)}
          initial="hidden"
          whileInView="show"
          className="mb-4  font-semibold md:text-2xl lg:text-2xl text-lg text-teal-800  underline underline-offset-4"
        >
          CS-101: Object-Oriented Programming using TypeScript
        </motion.h2>
        <h1 className="font-bold lg:text-5xl md:text-5xl text-2xl mt-4">
          Course Description:
        </h1>
        <p className="lg:text-lg md:text-lg text-base font-normal my-4">
          We will start the program by learning the fundamentals of
          Object-Oriented programming using JavaScript and TypeScript. We will
          also understand the latest Web trends i.e. Web 3.0 and Metaverse
          concepts and try to understand their working from the perspective of
          the users.
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
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <motion.h1
          variants={slideIn("left", "spring", 0.5, 1.5)}
          initial="hidden"
          whileInView="show"
          className="font-bold lg:text-5xl md:text-5xl text-2xl mt-4"
        >
          Course Outline:
        </motion.h1>
        <div>
          <motion.h2
            variants={slideIn("left", "spring", 0.5, 1.5)}
            initial="hidden"
            whileInView="show"
            className="lg:text-2xl md:text-2xl text-xl  font-bold mb-2 mt-4"
          >
            HTML and CSS (Homework)
          </motion.h2>
          <motion.div
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
          >
            <Link
              className="lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2"
              href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
              target={"_blank"}
            >
              Learn HTML by Hira Khan (Watch Recorded Videos)
            </Link>
            <div className="lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2">
              <Link
                href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
                target={"_blank"}
              >
                Learn CSS Intro by Hira Khan (Watch Recorded Videos)
              </Link>
            </div>
          </motion.div>
        </div>
        <div>
          <motion.h2
            variants={slideIn("left", "spring", 0.5, 1.5)}
            initial="hidden"
            whileInView="show"
            className="lg:text-2xl md:text-2xl text-xl font-bold mb-2 mt-4"
          >
            Web 3.0 and Metaverse Theory
          </motion.h2>
          <motion.div
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
          >
            <Link
              className="lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2"
              href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit#slide=id.p"
              target={"_blank"}
            >
              Introduction to Panaverse DAO
            </Link>
            <div className="lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2">
              <Link
                href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit"
                target={"_blank"}
              >
                Web 3.0 User Guide
              </Link>
            </div>
            <p className="lg:text-lg md:text-lg text-base font-normal no-underline">
              Complete Web 3 Assignments included in the Web 3 User Guide
            </p>
            <Link
              href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit#slide=id.p"
              target={"_blank"}
              className="lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2"
            >
              Virtual and Augmented Metaverse User Guide
            </Link>
          </motion.div>
        </div>
        <div>
          <motion.h2
            variants={slideIn("left", "spring", 0.5, 1.5)}
            initial="hidden"
            whileInView="show"
            className="lg:text-2xl md:text-2xl text-xl font-bold mb-2 mt-4"
          >
            Fundamentals of JavaScript (ECMAScript 2022 Language Specification)
          </motion.h2>
          <motion.div
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
          >
            <Link
              className="lg:text-lg md:text-lg text-base block font-normal text-blue-600 underline underline-offset-2 my-2"
              href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo"
              target={"_blank"}
            >
              Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)
            </Link>
            <Link
              className="lg:text-lg md:text-lg text-base block font-normal text-blue-600 underline underline-offset-2 my-2"
              href="https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4"
              target={"_blank"}
            >
              Chapters 2-6, 13 of JavaScript from Beginner to Professional:
              Learn JavaScript quickly by building fun, interactive, and dynamic
              web apps, games, and pages
            </Link>
            <Link
              className="lg:text-lg md:text-lg text-base block font-normal text-blue-600 underline underline-offset-2 my-2"
              href="https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional"
              target={"_blank"}
            >
              JavaScript Book Code
            </Link>
            <Link
              className="lg:text-lg md:text-lg text-base block font-normal text-blue-600 underline underline-offset-2 my-2"
              href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"
              target={"_blank"}
            >
              Getting Started Exercises with JavaScript and Node.js
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <motion.h2
          variants={slideIn("left", "spring", 0.5, 1.5)}
          initial="hidden"
          whileInView="show"
          className="lg:text-2xl md:text-2xl text-xl font-bold mb-2 mt-4"
        >
          Fundamentals of JavaScript and Node.js Quiz
        </motion.h2>
        <h2 className="lg:text-2xl md:text-2xl text-xl font-semibold mb-2 mt-4">
          Topics Covered in the Quiz:
        </h2>
        <div className="lg:text-lg md:text-lg text-base font-normal mx-6">
          <ol className="list-decimal">
            <motion.li
              variants={slideIn("left", "spring", 0.4, 2)}
              initial="hidden"
              whileInView="show"
            >
              Background of JavaScript and How to use JavaScript in Browser
            </motion.li>
            <motion.li
              variants={slideIn("left", "spring", 0.7, 2)}
              initial="hidden"
              whileInView="show"
            >
              Variables, Primitive data types Analyzing and modifying data
              types, and Operators (Chapter 2 of JavaScript from Beginner to
              Professional)
            </motion.li>

            <motion.li
              variants={slideIn("left", "spring", 0.9, 2)}
              initial="hidden"
              whileInView="show"
            >
              <Link
                href={
                  "https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit"
                }
                className="lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2"
                target={"_blank"}
              >
                Intro to Node.js, .mjs files, Modules, NPM, import, export, and
                using external modules with npm.
              </Link>
              How to accept user input in your Node.js JavaScript programs, this
              will allow us to create interactive Node.js console programs using
              prompt-sync library.
              <Link
                href={
                  "https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit"
                }
                className="lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2"
                target={"_blank"}
              >
                The last example in this presentation shows you how to use
                prompt-sync library in your Node.js programs.
              </Link>
              Note: After this point, we will do all our class work and
              exercises using Node.js in .mjs files. We will also be able to
              develop interactive Node.js console programs which will greatly
              help the students to learn.
            </motion.li>
            <motion.li
              variants={slideIn("left", "spring", 1.2, 2)}
              initial="hidden"
              whileInView="show"
            >
              Using Arrays and Objects in Node.js Programs (chapter 3 of
              JavaScript from Beginner to Professional)
            </motion.li>
            <motion.li
              variants={slideIn("left", "spring", 1.4, 2)}
              initial="hidden"
              whileInView="show"
            >
              Using if and if else statements, else if statements, Conditional
              ternary operators, and switch statements in Node.js programs
              (chapter 4 of JavaScript from Beginner to Professional)
            </motion.li>
            <motion.li
              variants={slideIn("left", "spring", 1.6, 2)}
              initial="hidden"
              whileInView="show"
            >
              Using while loop, do while loop, for loop, for in, and for of loop
              in Node.js (chapter 5 of JavaScript from Beginner to Professional)
            </motion.li>
            <motion.li
              variants={slideIn("left", "spring", 1.8, 2)}
              initial="hidden"
              whileInView="show"
            >
              Using Basic functions, Function arguments, Return, Variable scope
              in functions, Recursive functions, Nested functions, Anonymous
              functions, and Function callbacks in Node.js (chapter 6 of
              JavaScript from Beginner to Professional)
            </motion.li>
            <motion.li
              variants={slideIn("left", "spring", 2.0, 2)}
              initial="hidden"
              whileInView="show"
            >
              Using Concurrency, Callbacks, Promises, async / await, and Event
              loop (chapter 13 of JavaScript from Beginner to Professional)
            </motion.li>
            <motion.li
              variants={slideIn("left", "spring", 2.2, 2)}
              initial="hidden"
              whileInView="show"
            >
              JavaScript promises, mastering the asynchronous
            </motion.li>
          </ol>
        </div>
        <motion.div
          variants={slideIn("left", "spring", 2, 2)}
          initial="hidden"
          whileInView="show"
        >
          <Link
            className="lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2"
            target={"_blank"}
            href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript"
          >
            Javascript Promises by Codingame.
          </Link>
          <Link
            className="block lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2"
            target={"_blank"}
            href="https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg"
          >
            New JavaScript Features in ECMAScript 2022 and 2021.
          </Link>
        </motion.div>
      </motion.div>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <motion.h1
          variants={slideIn("left", "spring", 0.5, 1.5)}
          initial="hidden"
          whileInView="show"
          className="lg:text-2xl md:text-2xl text-xl font-semibold"
        >
          Object-Oriented Programming with TypeScript
        </motion.h1>
        <Link
          className="lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2"
          target={"_blank"}
          href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1"
        >
          Chapters 1-11 of Learning TypeScript: Enhance Your Web Development
          Skills Using Type-Safe JavaScript Learning Repository
        </Link>
        <Link
          className="lg:text-lg md:text-lg text-base block  font-normal text-blue-600 underline underline-offset-2 my-2"
          target={"_blank"}
          href="https://www.learningtypescript.com/"
        >
          In Class Companion projects and articles for Learning TypeScript
        </Link>

        <h1 className="lg:text-lg md:text-lg text-base font-semibold">
          Note: Also document the alternatives to Binance Launchpad.
        </h1>

        <h1 className="lg:text-xl md:text-xl text-lg my-2 font-semibold">
          Homework Project
        </h1>
        <Link
          className="lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2"
          target={"_blank"}
          href="https://github.com/panaverse/typescript-node-projects"
        >
          typescript-node-projects.
        </Link>
        <motion.h1
          variants={slideIn("left", "spring", 0.5, 1.5)}
          initial="hidden"
          whileInView="show"
          className="lg:text-2xl md:text-2xl text-xl my-2 font-semibold"
        >
          TypeScript Quizzes
        </motion.h1>
        <motion.div variants={textVariant2} initial="hidden" whileInView="show">
          <p className="lg:text-lg md:text-lg text-base font-normal">
            Fundamentals of TypeScript Quiz
          </p>
          <p className="lg:text-lg md:text-lg text-base font-normal">
            TypeScript Professional Proficiency Quiz
          </p>
        </motion.div>
      </motion.div>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <h1 className="lg:text-2xl md:text-2xl text-xl my-2 font-semibold">
          TypeScript for Reacts
        </h1>
        <Link
          className="lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2"
          target={"_blank"}
          href="https://profy.dev/article/react-typescript"
        >
          Minimal TypeScript Crash Course For React With Interactive Code
          Exercises
        </Link>

        <h1 className="lg:text-xl md:text-xl text-lg my-2 font-semibold">
          Quarter Break Assignments and Quizzes
        </h1>
        <p className="lg:text-lg md:text-lg text-base font-normal">
          During the Quarter Break, we do the following Assignments:
        </p>
        <div className="lg:text-lg md:text-lg text-base font-normal mx-6">
          <ol className="list-decimal  w-full">
            <motion.li
              variants={slideIn("left", "spring", 0.5, 1.5)}
              initial="hidden"
              whileInView="show"
            >
              https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud
            </motion.li>
            <motion.li
              variants={slideIn("left", "spring", 0.5, 1.6)}
              initial="hidden"
              whileInView="show"
            >
              https://github.com/panaverse/learn-nextjs/tree/main/assignment01_
              <br className="md:hidden" />
              todo_app
            </motion.li>
            <motion.li
              variants={slideIn("left", "spring", 0.6, 1.5)}
              initial="hidden"
              whileInView="show"
            >
              https://github.com/panaverse/styling-nextjsprojects/tree/main/project00_
              <br className="md:hidden" />
              pricing_ui
            </motion.li>
            <motion.li
              variants={slideIn("left", "spring", 0.7, 1.5)}
              initial="hidden"
              whileInView="show"
            >
              Build a Panaverse DAO Syllabus Website using Next.js 13 given the
              content from the following document:
              <Link
                href={
                  "https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit"
                }
                className="lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2"
                target={"_blank"}
              >
                https://docs.google.com/
                <br className="md:hidden" />
                document/d/13Z4tMKQmZpMEsO
                <br className="lg:hidden" />
                c1Y_qAXbOstRolGIFupHxQFgAFl98
                <br className="md:hidden" />
                /edit?usp=sharing
              </Link>
            </motion.li>
            <motion.p
              variants={slideIn("left", "spring", 0.9, 1.5)}
              initial="hidden"
              whileInView="show"
              className="lg:text-lg md:text-lg text-base font-normal"
            >
              The best-developed Website will be hosted on www.panaverse.co
              domain.
            </motion.p>
            <motion.li
              variants={slideIn("left", "spring", 0.8, 1.5)}
              initial="hidden"
              whileInView="show"
            >
              Build a new PIAIC Website using Next.js 13 given the content from
              the current PIAIC Website and from the following document:
              <Link
                href={
                  "https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit"
                }
                className="w-full lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 px-2 my-2"
                target={"_blank"}
              >
                https://docs.google.com/
                <br className="md:hidden" />
                document/d/13Z4tMKQmZpMEsOc1
                <br className="lg:hidden" />
                Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing
              </Link>
            </motion.li>
          </ol>
        </div>
        <motion.div
          variants={slideIn("left", "spring", 0.8, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          <p className="lg:text-lg md:text-lg text-base font-normal">
            The best-developed Website will be hosted on
            <Link
              href={
                "https://panaverse-dao-staging.vercel.app/core-track/www.piaic.org"
              }
              target={"_blank"}
              className="lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2"
            >
              www.piaic.org
            </Link>
            domain.
          </p>

          <p className="lg:text-lg md:text-lg text-base font-normal">
            After completing the above Five Assignments everyone will appear in
            the following two Quizzes covering Github and TypeScript:
          </p>
        </motion.div>
      </motion.div>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <motion.h1
          variants={slideIn("left", "spring", 0.9, 1.5)}
          initial="hidden"
          whileInView="show"
          className="lg:text-3xl md:text-3xl text-xl my-2 font-semibold"
        >
          Fundamentals of Version Control with Git (Recorded Videos)
        </motion.h1>
        <Link
          href={
            "https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF"
          }
          className="lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2"
          target={"_blank"}
        >
          Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch
          Recorded Videos)
        </Link>

        <p className="lg:text-lg md:text-lg text-base font-normal my-2">
          Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step
          course for the complete beginner by Tobias Günther
        </p>
        <h1 className="lg:text-xl md:text-xl text-lg my-2 font-semibold">
          We will also cover these readings:
        </h1>
        <motion.div
          variants={slideIn("left", "spring", 0.5, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          <Link
            href={
              "https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github"
            }
            className="lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2 block"
            target={"_blank"}
          >
            Markdown Basics
          </Link>
        </motion.div>
        <motion.div
          variants={slideIn("left", "spring", 0.6, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          <Link
            href={
              "https://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github"
            }
            className="lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2 block"
            target={"_blank"}
          >
            Difference between fork and branch on github
          </Link>
        </motion.div>
        <motion.div
          variants={slideIn("left", "spring", 0.7, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          <Link
            href={
              "https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizFhttps://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit"
            }
            className="block lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2"
            target={"_blank"}
          >
            Git branch, fork, fetch, merge, rebase and clone what are the
            differences
          </Link>
        </motion.div>
        <motion.div
          variants={slideIn("left", "spring", 0.8, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          <Link
            href={"https://git-scm.com/book/en/v2/Git-Branching-Rebasing"}
            className="block lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2"
            target={"_blank"}
          >
            Git Branching Rebasing
          </Link>
        </motion.div>
        <motion.div
          variants={slideIn("left", "spring", 0.9, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          <Link
            href={
              "https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches"
            }
            className="block lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2"
            target={"_blank"}
          >
            Git Branching Remote Branches
          </Link>
        </motion.div>
        <motion.div
          variants={slideIn("left", "spring", 1, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          <Link
            href={
              "https://docs.github.com/en/get-started/quickstart/set-up-git"
            }
            className="lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2"
            target={"_blank"}
          >
            For practice.
          </Link>
        </motion.div>
        <h1 className="lg:text-xl md:text-xl text-lg my-2 font-semibold">
          Homework:
        </h1>
        <Link
          href={"https://www.datacamp.com/courses/introduction-to-git"}
          className="lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2"
          target={"_blank"}
        >
          introduction to git for data science
        </Link>
        <h1 className="lg:text-xl md:text-xl text-lg my-2 font-semibold">
          Git Cheatsheet:
        </h1>
        <Link
          href={
            "https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html"
          }
          className="lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2"
          target={"_blank"}
        >
          Git data science cheatsheet.html
        </Link>
      </motion.div>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <h1 className="lg:text-xl md:text-xl text-lg my-2 font-semibold">
          TypeScript Proficiency Quiz:
        </h1>

        <p className="lg:text-lg md:text-lg text-base font-normal my-2">
          Total Questions: 63
        </p>
        <p className="lg:text-lg md:text-lg text-base font-normal my-2">
          Duration: 120 minutes
        </p>
        <h1 className="lg:text-xl md:text-xl text-lg my-2 font-semibold">
          Study Material:
        </h1>

        <Link
          href={"https://github.com/panaverse/learn-typescript"}
          className="lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2"
          target={"_blank"}
        >
          learn-typescript
        </Link>
      </motion.div>
    </div>
  );
};

export default CommonQ1;
