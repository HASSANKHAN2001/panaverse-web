"use clinet";
import React from "react";
import Web3Q1 from "./component/Web3Q1";
import Web3 from "@/app/web3/component/Web3";
import Footer from "component/Footer";

const page = () => {
  return (
    <div className="bg-white font-serif">
      <Web3 />
      <Web3Q1 />
      <Footer />
    </div>
  );
};

export default page;
