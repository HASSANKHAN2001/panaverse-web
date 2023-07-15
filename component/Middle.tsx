import React from "react";
import Link from "next/link";
import Image from "next/image";
import mid1 from "../public/mid1.png";
import mid2 from "../public/mid2.png";
import mid3 from "../public/mid3.png";
import mid4 from "../public/mid4.png";

const Middle = () => {
  return (
    <div className="md:px-4 px-3 pt-6 grid md:grid-cols-2 gap-3 text-black bg-[#fff]">
      <div className="my-2 py-3 ">
        <h1 className="text-3xl font-semibold text-teal-600 underline underline-offset-8 decoration-teal-600">
          About PIAIC
        </h1>
        <div className="w-full mt-[2.5px] border border-[#e1e1e1]" />
        <h1 className="md:text-4xl text-xl font-bold md:my-4 my-3">
          Welcome To Panacloude{" "}
        </h1>
        <p className="text-[#666666] text-lg">
          This curriculum is intended for beginners who want to learn software
          development from the ground up. The first two quarters are shared by
          all specialties and are dedicated to studying Object-Oriented
          Programming and cutting-edge Full-Stack Web 2.0 development. It is
          going to be a fifteen-month-long hybrid program that includes both
          onsite and online classes and is divided into five quarters of 13
          weeks each. The emphasis will be on hands-on learning by educating
          students to produce projects. To accommodate everyone, courses will be
          held primarily on weekends or after 6:00 p.m. (Pakistan Time) on
          weekdays. It employs a hybrid teaching format, with core onsite
          classes complemented by online Zoom laboratories and recorded videos.
        </p>
        <Link target={"_blank"} href="https://portal.piaic.org/signup">
          <button className="my-4 md:mt-4 py-2  px-4 rounded border border-teal-800 bg-white text-teal-800  text-xl font-bold ">
            Enroll Now
          </button>
        </Link>
      </div>
      <div className="grid lg:grid-cols-2 md:gap-3 gap-0 p-2 my-2 ">
        <div>
          <div>
            <Image src={mid1} alt={"scolar"} />
            <h1 className="text-2xl font-semibold py-2 hover:cursor-pointer hover:text-teal-600">
              Degree Program
            </h1>
            <p className="text-[#666666] text-lg ">
              Web3 and Metaverse, Artificial Intelligence, Internet of Things,
              Networking and Programming, Cloud Computing, Genomics and Biotics.
            </p>
          </div>
          <div className="my-3">
            <Image src={mid2} alt={"scolar"} />
            <h1 className="text-2xl font-semibold py-2 hover:cursor-pointer hover:text-teal-600">
              Scholars
            </h1>
            <p className="text-[#666666] text-lg">
              There are many certified students in our certificated associative
              programs and highly qualified american employeed developers and
              teachers.
            </p>
          </div>
        </div>
        <div>
          <div>
            <Image src={mid4} alt={"scolar"} />
            <h1 className="text-2xl font-semibold py-2 hover:cursor-pointer hover:text-teal-600">
              Alumni Directory
            </h1>
            <p className="text-[#666666] text-lg">
              Classroom and will begin doing so within six months of the
              program's beginning. It resembles a cross an educational project.
            </p>
          </div>
          <div className="my-4">
            <Image src={mid3} alt={"scolar"} />
            <h1 className="text-2xl font-semibold py-1 hover:cursor-pointer hover:text-teal-600">
              Training Centers
            </h1>
            <p className="text-[#666666] text-lg">
              Our many institues are present in major cities of Pakistan,
              Karachi, Lahore, Islamabad, Quetta, Peshawar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
