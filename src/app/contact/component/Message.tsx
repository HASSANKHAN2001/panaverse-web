import React from "react";
import Formvalid from "./Formvalid";

const Message = () => {
  return (
    <div className="text-[#072E33] bg-white border border-white shadow-2xl shadow-white lg:w-[60%] w-full">
      <h1 className="text-3xl font-semibold my-5 font-serif">Message Me</h1>
      <Formvalid />
    </div>
  );
};

export default Message;
