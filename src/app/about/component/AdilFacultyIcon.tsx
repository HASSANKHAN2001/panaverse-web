import Link from "next/link";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const AdilFacultyIcon = () => {
  return (
    <div className="flex gap-6 my-auto ">
      <Link
        className="hover:scale-105 duration-300"
        target="___blank"
        href="https://www.facebook.com/profile.php?id=100006937879362"
      >
        <div className="my-2 rounded-full bg-gradient-to-t primary-gradient">
          <BsFacebook className="h-8 w-8 fill-teal-700/80" />
        </div>
      </Link>
      <Link
        className="hover:scale-105 duration-300"
        target="___blank"
        href="https://github.com/adil-innovation-lab"
      >
        <div className="my-2 rounded-full bg-gradient-to-t primary-gradient">
          <BsGithub className="h-8 w-8 fill-teal-700/80" />
        </div>
      </Link>
      <Link
        className="hover:scale-105 duration-300"
        target="___blank"
        href="https://twitter.com/Panaverse_edu"
      >
        <div className="my-2 rounded-full bg-gradient-to-t primary-gradient">
          <BsTwitter className="h-8 w-8 fill-teal-700/80" />
        </div>
      </Link>
    </div>
  );
};

export default AdilFacultyIcon;
