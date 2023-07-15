import Link from "next/link";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HiraFacultyIcon = () => {
  return (
    <div className="flex gap-6 my-auto  ">
      <Link
        className="hover:scale-105 duration-300"
        target="___blank"
        href="https://www.facebook.com/heyhira/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0"
      >
        <div className="my-2 rounded-full bg-gradient-to-t primary-gradient">
          <BsFacebook className="h-8 w-8 fill-teal-700/80" />
        </div>
      </Link>
      <Link
        className="hover:scale-105 duration-300"
        target="___blank"
        href=" https://github.com/hirashoaib"
      >
        <div className="my-2 rounded-full bg-gradient-to-t primary-gradient">
          <BsGithub className="h-8 w-8 fill-teal-700/80" />
        </div>
      </Link>
      <Link
        className="hover:scale-105 duration-300"
        target="___blank"
        href="https://twitter.com/heyhira1"
      >
        <div className="my-2 rounded-full bg-gradient-to-t primary-gradient">
          <BsTwitter className="h-8 w-8 fill-teal-700/80" />
        </div>
      </Link>
    </div>
  );
};

export default HiraFacultyIcon;
