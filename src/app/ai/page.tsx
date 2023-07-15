"use clinet";
import React from "react";
import Ai from "./component/Ai";
import AiQ from "./component/AiQ";
import Footer from "component/Footer";

const page = () => {
  return (
    <div className="bg-white font-serif">
      <Ai />
      <AiQ />
      <Footer />
    </div>
  );
};

export default page;
