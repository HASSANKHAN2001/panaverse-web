"use client";

import React from "react";
import Faculty from "./component/Faculty";
import ArifAbout from "./component/ArifAbout";
import Footer from "component/Footer";
import Sponser from "component/Sponser";

export default function Home() {
  return (
    <div className="bg-white font-serif">
      <ArifAbout />
      <Faculty />
      <Sponser />
      <Footer />
    </div>
  );
}
