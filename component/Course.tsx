import { courses } from "./data";
import { CoursesType } from "./DataType";
import Link from "next/link";
import React from "react";
import CourseCard from "./CourseCard";

const Course = () => {
  return (
    <div className="bg-fixed bg-bg-card bg-no-repeat bg-center bg-cover w-full py-8">
      <h1 className="text-center text-white font-semibold md:text-5xl text-3xl">
        Specialization Track
      </h1>
      <div
        className={` rounded-xl grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 text-xl text-black font-semibold  justify-center items-center   px-8 lg:px-20 w-full py-8 gap-6 lg:gap-10 `}
      >
        {courses.map((item, index) => (
          <>
            <CourseCard
              href={item.href}
              key={index}
              title={item.title}
              image={item.image}
              id={item.id}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Course;
