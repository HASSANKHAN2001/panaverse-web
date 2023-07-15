"use clinet";
import React from "react";
import Cloud from "./component/Cloud";
import CloudQ from "./component/CloudQ";
import Footer from "component/Footer";

const page = () => {
  return (
    <div className="bg-white font-serif">
      <Cloud />
      <CloudQ />
      <Footer />
    </div>
  );
};

export default page;
