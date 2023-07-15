import Section from "./component/Section";
import React from "react";
import Header from "./component/Header";
import Footer from "component/Footer";

const page = () => {
  return (
    <>
      <div className="md:pt-20 md:my-8 pt-16 md:px-4 px-1 bg-slate-50 font-serif">
        <Header />
        <Section />
      </div>
      <Footer />
    </>
  );
};

export default page;
