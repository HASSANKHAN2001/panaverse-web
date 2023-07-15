"use client";
import React from "react";
import CountUp from "react-countup";
import MedalIcon from "./MedalIcon";
import ProjectsIcon from "./ProjectsIcon";
import StudentIcon from "./StuddentIcon";
import TeacherIcon from "./TeacherIcon";

const Count = () => {
  return (
    <div>
      <h1 className="md:px-6 px-2 pt-8 md:text-3xl text-2xl font-bold bg-[#fff]">
        Achivements Goals:
      </h1>
      <div className="bg-bg-count bg-fixed  bg-no-repeat font-serif md:py-6 py-10  grid md:grid-cols-4 text-white">
        <div className="text-center   md:py-16 py-10 ">
          <MedalIcon />
          <h1 className="text-2xl font-bold hover:text-teal-400">
            <CountUp
              enableScrollSpy
              start={0}
              end={32}
              duration={2}
              delay={0.5}
            />
            +
          </h1>
          <h1 className=" my-2 font-medium hover:text-yellow-200">
            AWARDS WINNING
          </h1>
        </div>
        <div className=" text-center  md:py-16 py-10">
          <TeacherIcon />
          <h1 className="text-2xl font-bold hover:text-teal-400">
            <CountUp
              enableScrollSpy
              start={0}
              end={30}
              duration={2}
              delay={0.5}
            />
            +
          </h1>
          <h1 className=" my-2 font-medium hover:text-yellow-200">Teachers</h1>
        </div>
        <div className=" text-center  md:py-16 py-10">
          <StudentIcon />
          <h1 className="text-2xl font-bold hover:text-teal-400">
            <CountUp
              enableScrollSpy
              start={3400}
              end={3500}
              duration={2}
              delay={0.5}
            />
            +
          </h1>
          <h1 className=" my-2 font-medium hover:text-yellow-200">
            Enrolled Student
          </h1>
        </div>
        <div className="text-center  md:py-16 py-10">
          <ProjectsIcon />
          <h1 className="text-2xl font-bold hover:text-teal-400">
            <CountUp
              enableScrollSpy
              start={0}
              end={315}
              duration={2}
              delay={0.5}
            />
            +
          </h1>
          <h1 className="my-2 font-medium hover:text-yellow-200">
            PROJECTS DONE
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Count;
