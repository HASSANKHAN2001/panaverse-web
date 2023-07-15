"use clinet";
import React from "react";
import Footer from "component/Footer";
import Iot from "./component/Iot";
import IotQ from "./component/IotQ";

const page = () => {
  return (
    <div className="bg-white font-serif">
      <Iot />
      <IotQ />
      <Footer />
    </div>
  );
};

export default page;
