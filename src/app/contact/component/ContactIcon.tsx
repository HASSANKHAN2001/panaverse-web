import React from "react";
import { IoLogoIonic } from "react-icons/io";
import { IoMapSharp } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdSend } from "react-icons/md";

const ContactIcon = () => {
  return (
    <div className="py-6 ">
      <div>
        <IoLogoIonic className="w-9 h-9 fill-[#072E33] my-4" />
        <IoMapSharp className="w-9 h-9 fill-[#072E33]  my-8" />
        <BsTelephone className="w-9 h-9 fill-[#072E33] my-8" />
        <MdSend className="w-9 h-9 fill-[#072E33] my-8" />
      </div>
    </div>
  );
};

export default ContactIcon;
