import React from "react";
import Message from "./Message";
import Info from "./Info";

const Section = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-8">
      <Message />
      <Info />
    </div>
  );
};

export default Section;
