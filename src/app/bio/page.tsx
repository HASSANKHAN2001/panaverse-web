"use clinet";
import React from "react";
import Footer from "component/Footer";
import Bio from "./component/Bio";
import BioQ from "./component/BioQ";

const page = () => {
  return (
    <div className="bg-white font-serif">
      <Bio />
      <BioQ />
      <Footer />
    </div>
  );
};

export default page;
