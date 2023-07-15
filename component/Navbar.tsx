"use client";
import Image from "next/image";
import panaverse1 from "../public/panaverse1.png";
import Link from "next/link";
import { navVariants } from "../src/app/util/motion";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [mobiletoggle, setToggleMobile] = useState(false);
  const [submenumob, setSubMenuMob] = useState(false);

  function handlelink() {
    setToggleMobile(false);
    setToggle(false);
    setSubMenuMob(false);
  }

  const mobilestyle = mobiletoggle == false ? "hidden" : "";
  const desktopstyle = toggle == false ? "hidden" : "";
  const mobsubmenu = submenumob == false ? "hidden" : "";
  return (
    <>
      {/* desktop view */}
      <div className="z-20"></div>
      <nav className="hidden md:block font-serif fixed w-full top-0 z-10 bg-gradient-to-r from-[#0F969C] from-10% via-[#0C7075] via-30% to-[#072E33] to-90% text-white ">
        <motion.div
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className="flex flex-wrap justify-between items-center mx-4 max-w-screen-xl  md:px-1 md:py-2"
        >
          <Link
            href="https://www.panaverse.co"
            className="mx-0 mt-2"
            onClick={handlelink}
          >
            <Image
              src={panaverse1}
              className="h-16 w-24 mr-3  inline"
              alt="Panaverse Logo"
            />
          </Link>
          <button
            id="mega-menu-full-image-button"
            data-collapse-toggle="mega-menu-full-image"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={() => {
              let check = !mobiletoggle;
              setToggleMobile(!mobiletoggle);
              if (check == false) return setToggle(false);
            }}
            aria-controls="mega-menu-full-image"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            id="mega-menu-full-image"
            className="text-2xl font-bold items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          >
            <ul className=" flex flex-col mt-4 text-xl font-bold md:flex-row md:space-x-8 md:mt-0">
              <li>
                <Link
                  onClick={handlelink}
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  id="mega-menu-full-cta-image-button"
                  data-collapse-toggle="mega-menu-full-image-dropdown"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-bold text-xl text-white md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:hover:text-white md:p-0 "
                  onClick={() => setToggle(!toggle)}
                >
                  Courses{" "}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>

              <li>
                <Link
                  onClick={handlelink}
                  href="about"
                  className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 "
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={handlelink}
                  href="contact"
                  className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 "
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  target={"_blank"}
                  href="https://portal.piaic.org/signup"
                  className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 "
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
        <div id="mega-menu-full-image-dropdown" className="mt-1 ">
          <div
            className={` ${desktopstyle} grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6 bg-gradient-to-r from-[#0F969C] from-10% via-[#0C7075] via-30% to-[#072E33] to-90%`}
          >
            <ul
              className={`mb-4 space-y-4 md:mb-0 md:block`}
              aria-labelledby="mega-menu-full-image-button"
            >
              <li>
                <Link
                  onClick={handlelink}
                  href="web3"
                  className="hover:underline text-white"
                >
                  Web3 and Metaverse
                </Link>
              </li>
              <li>
                <Link
                  onClick={handlelink}
                  href="iot"
                  className="hover:underline text-white"
                >
                  Internet of things
                </Link>
              </li>
              <li>
                <Link
                  onClick={handlelink}
                  href="ai"
                  className="hover:underline text-white"
                >
                  Artifical Intelligence
                </Link>
              </li>
              <li>
                <Link
                  onClick={handlelink}
                  href="cloud"
                  className="hover:underline text-white"
                >
                  Cloud Computing
                </Link>
              </li>
              <li>
                <Link
                  onClick={handlelink}
                  href="bio"
                  className="hover:underline text-white"
                >
                  Genomics and Bioinformatics Specialization
                </Link>
              </li>
              <li>
                <Link
                  onClick={handlelink}
                  href="net"
                  className="hover:underline text-white"
                >
                  Network Programmability and Automation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile view */}

      <nav className="block md:hidden font-serif fixed w-full top-0 z-10 bg-gradient-to-r from-[#0F969C] from-10% via-[#0C7075] via-30% to-[#072E33] to-90%">
        <motion.div
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className="flex flex-wrap justify-between items-center mx-2 max-w-screen-xl  md:px-1 md:py-4"
        >
          <Link
            href="https://www.panaverse.co"
            className="mx-0 mt-2"
            onClick={handlelink}
          >
            <Image
              src={panaverse1}
              width={150}
              height={80}
              className="h-12 mr-3 sm:h-12 inline"
              alt="Panaverse Logo"
            />
          </Link>
          <button
            id="mega-menu-full-image-button"
            data-collapse-toggle="mega-menu-full-image"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:text-black"
            onClick={() => {
              let check = !mobiletoggle;
              setToggleMobile(!mobiletoggle);
              if (check == false) return setSubMenuMob(false);
            }}
            aria-controls="mega-menu-full-image"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            id="mega-menu-full-image"
            className="text-2xl font-bold items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          >
            <ul className="flex flex-col mt-4 text-xl font-bold md:flex-row md:space-x-8 md:mt-0">
              <li>
                <Link
                  onClick={handlelink}
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50  md:p-0 "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  id="mega-menu-full-cta-image-button"
                  data-collapse-toggle="mega-menu-full-image-dropdown"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-bold text-xl text-white  md:w-auto   md:border-0  md:p-0 "
                  onClick={() => {}}
                >
                  Courses{" "}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>

              <li>
                <Link
                  onClick={handlelink}
                  href="about"
                  className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 "
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={handlelink}
                  href="contact"
                  className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 "
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  onClick={handlelink}
                  target={"_blank"}
                  href="https://portal.piaic.org/signup"
                  className="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 "
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
        <div
          id="mega-menu-full-image-dropdown"
          className="mt-1 bg-gradient-to-r from-[#0F969C] from-10% via-[#0C7075] via-30% to-[#072E33] to-90% w-full"
        >
          <div
            className={`${mobilestyle} grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-md:grid-cols-3 md:px-6`}
          >
            <ul className={` mb-4 space-y-4 md:mb-0`}>
              <li>
                <Link
                  onClick={handlelink}
                  href="#"
                  className="hover:underline text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  id="mega-menu-full-cta-image-button"
                  data-collapse-toggle="mega-menu-full-image-dropdown"
                  className="flex items-center justify-between w-full py-2   text-white  md:w-auto  md:p-0 "
                  onClick={() => {
                    console.log("sub menu");
                    setSubMenuMob(!submenumob);
                  }}
                >
                  Courses{" "}
                  <svg
                    className="w-4 h-4 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div
                  className={` ${mobsubmenu} grid max-w-screen-xl px-4 py-5 mx-auto text-sm  md:grid-cols-3 md:px-6`}
                >
                  <ul
                    className={`mb-4 space-y-4 md:mb-0 md:block`}
                    aria-labelledby="mega-menu-full-image-button"
                  >
                    <li>
                      <Link
                        onClick={handlelink}
                        href="web3"
                        className="hover:underline text-white"
                      >
                        Web3 and Metaverse
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handlelink}
                        href="iot"
                        className="hover:underline text-white"
                      >
                        Internet of things
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handlelink}
                        href="ai"
                        className="hover:underline text-white"
                      >
                        Artifical Intelligence
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handlelink}
                        href="cloud"
                        className="hover:underline text-white"
                      >
                        Cloud Computing
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handlelink}
                        href="bio"
                        className="hover:underline text-white"
                      >
                        Genomics and Bioinformatics Specialization
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handlelink}
                        href="net"
                        className="hover:underline text-white"
                      >
                        Network Programmability and Automation
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  onClick={handlelink}
                  href="about"
                  className="hover:underline text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={handlelink}
                  target={"_blank"}
                  href="https://portal.piaic.org/signup"
                  className="block py-2  pr-4 text-white hover:bg-gray-50  md:hover:text-white md:p-0 "
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
