import Link from "next/link";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { GrYoutube } from "react-icons/gr";

const FooterIcon = () => {
  return (
    <div className="flex gap-3 mt-2 ">
      <Link
        className="hover:scale-105 duration-300"
        target="___blank"
        href="https://www.facebook.com/groups/panaverse"
      >
        <div className="p-2 rounded-full bg-gradient-to-t primary-gradient">
          <BsFacebook className="h-8 w-8 fill-teal-200/80" />
        </div>
      </Link>
      <Link
        className="hover:scale-105 duration-300"
        target="___blank"
        href="https://www.youtube.com/@panaverse/streams "
      >
        <div className="p-2 rounded-full bg-gradient-to-t primary-gradient">
          <GrYoutube className="h-8 w-8 fill-teal-200/80" />
        </div>
      </Link>

      <Link
        className="hover:scale-105 duration-300"
        target="___blank"
        href=" https://github.com/panaverse"
      >
        <div className="p-2 rounded-full bg-gradient-to-t primary-gradient">
          <BsGithub className="h-8 w-8 fill-teal-200/80" />
        </div>
      </Link>
      <Link
        className="hover:scale-105 duration-300"
        target="___blank"
        href="https://twitter.com/Panaverse_edu"
      >
        <div className="p-2 rounded-full bg-gradient-to-t primary-gradient">
          <BsTwitter className="h-8 w-8 fill-teal-200/80" />
        </div>
      </Link>
    </div>
  );
};

export default FooterIcon;
