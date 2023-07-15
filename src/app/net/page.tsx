"use clinet";
import React from "react";
import Footer from "component/Footer";
import Net from "./component/Net";
import NetQ from "./component/NetQ";

const page = () => {
  return (
    <div className=" bg-white font-serif">
      <Net />
      <NetQ />
      <Footer />
    </div>
  );
};

export default page;
