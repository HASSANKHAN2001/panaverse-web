"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../../util/motion";

const Formvalid = () => {
  const [height, setHeight] = useState("auto");
  const myfun = (d: any) => {
    alert(d.fullname + "with" + d.subject);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <motion.div
      variants={slideIn("left", "spring", 0.5, 1.5)}
      initial="hidden"
      whileInView="show"
      className="text-white  my-4"
    >
      <form onSubmit={handleSubmit(myfun)}>
        <div>
          <div className="flex md:flex-row flex-col md:gap-8 gap-2 w-full">
            <div className="md:w-1/2 w-full">
              <input
                className="bg-[#072E33] text-white  w-full px-4 py-3 outline-none shadow-[0 6px 16px rgb(0 0 0 / 20%)] transition border-b-2 border-[#1d1d1d] focus:border-b-[#072E33]"
                type="text"
                placeholder="Name"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && errors.fullname.type == "required" && (
                <p className="text-red-500">*please enter the full name</p>
              )}
            </div>
            <div className="md:w-1/2 w-full">
              <input
                className="bg-[#072E33] text-white w-full px-4 py-3 outline-none shadow-[0 6px 16px rgb(0 0 0 / 20%)] transition border-b-2 border-[#1d1d1d] focus:border-b-[#072E33]"
                placeholder="Email"
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                })}
              />
              {errors.email && errors.email.type == "required" && (
                <p className="text-red-500">*please enter valid pattern</p>
              )}
            </div>
          </div>
          <div className="md:my-8 my-2">
            <input
              className="bg-[#072E33] text-white w-full px-4 py-3 outline-none shadow-[0 6px 16px rgb(0 0 0 / 20%)] transition border-b-2 border-[#1d1d1d] focus:border-b-[#072E33]"
              type="text"
              placeholder="Subject"
              {...register("subject", {
                required: true,
              })}
            />
            {errors.subject && errors.subject.type == "required" && (
              <p className="text-red-500">*please fill the field</p>
            )}
          </div>
          <div className="md:my-8 my-2">
            <textarea
              className="bg-[#072E33] text-white  w-full px-4 py-3 outline-none shadow-[0 6px 16px rgb(0 0 0 / 20%)] transition border-b-2 border-[#1d1d1d] focus:border-b-[#072E33] min-h-[125px]"
              style={{ height }}
              placeholder="Message"
              {...register("message", {
                required: true,
              })}
            />
            {errors.message && errors.message.type == "required" && (
              <p className="text-red-500">*please fill the field</p>
            )}
          </div>
          <div className="inline px-6 py-3 text-lg rounded border border-[#072E33] bg-[#1d5a5d] hover:cursor-pointer">
            <input type="submit" value="Send Message" className="" />
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default Formvalid;
