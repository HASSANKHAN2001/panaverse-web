"use client";

import Footer from "../../component/Footer";
import Outcome from "../../component/Outcome";
import Hero from "../../component/Hero";
import Middle from "../../component/Middle";
import Count from "../../component/Count";
import Course from "../../component/Course";

export default function Home() {
  return (
    <div className="w-full font-serif">
      <Hero />
      <Middle />
      <Count />
      <Course />
      <Outcome />
      <Footer />
    </div>
  );
}
