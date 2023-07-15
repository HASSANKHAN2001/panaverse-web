"use client";
import React from "react";
import Image from "next/image";
import footerLogoWhite from "../public/footerLogoWhite.png";
import FooterIcon from "component/FooterIcon";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { motion } from "framer-motion";
import { slideIn, zoomIn } from "../src/app/util/motion";

const Footer = () => {
  return (
    <footer className="font-serif flex lg:flex-row flex-col bg-black md:justify-between">
      <motion.div
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className=" md:my-2 my-4 md:mx-1 mx-2 px-1  lg:w-2/4 w-full"
      >
        <Image
          className=" inline"
          src={footerLogoWhite}
          width={150}
          height={80}
          alt="logo"
        />
        <h1 className="lg:text-lg text-lg md:text-xl font-semibold px-1 text-white py-2">
          Certified Web 3.0 and Metaverse Developer A One and Quarter Years
          Panaverse DAO Earn as you Learn Program Getting Ready for the Next
          Generation of the Internet
        </h1>
        <FooterIcon />
      </motion.div>
      <motion.div
        variants={zoomIn(0.5, 1)}
        initial="hidden"
        whileInView="show"
        className="lg:my-2 mx-2 py-2 pr-2 grow-0 lg:w-2/4 w-full "
      >
        <h1 className=" text-white text-2xl font-bold md:my-2 my-1 mx-2  underline underline-offset-4">
          Programs
        </h1>
        <div className="text-teal-200/80 lg:text-lg text-lg md:text-2xl font-semibold py-2">
          <div className="flex flex-row gap-1 hover:gap-4 transition-all delay-100 duration-400">
            <BsArrowRight className="w-8 h-8 pl-1" />
            <Link href={"web3"}>Web 3.0 and Metaverse Developer</Link>
          </div>
          <div className="flex flex-row gap-1 hover:gap-4 transition-all delay-100 duration-400">
            <BsArrowRight className="w-8 h-8 pl-1" />
            <Link href={"net"}>Network Programming Automation</Link>
          </div>
          <div className="flex flex-row gap-1 hover:gap-4 transition-all delay-100 duration-400">
            <BsArrowRight className="w-8 h-8 pl-1" />
            <Link href={"cloud"}>Cloud-Native Computing</Link>
          </div>
          <div className="flex flex-row gap-1 hover:gap-4 transition-all delay-100 duration-400">
            <BsArrowRight className="w-8 h-8 pl-1" />
            <Link href={"ai"}>Artificial Intelligence</Link>
          </div>
          <div className="flex flex-row gap-1 hover:gap-4 transition-all delay-100 duration-400">
            <BsArrowRight className="w-8 h-8 pl-1" />
            <Link href={"iot"}>Ambient Computing and IoT</Link>
          </div>
          <div className="flex flex-row gap-1 hover:gap-4 transition-all delay-100 duration-400">
            <BsArrowRight className="w-8 h-8 pl-1" />
            <Link href={"/"}>Genomics and Bioinformatics</Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={zoomIn(0.5, 1)}
        initial="hidden"
        whileInView="show"
        className="  my-2 mx-1 lg:w-1/4 w-full lg:py-2 py-1 "
      >
        <h1 className="text-2xl font-bold my-2 mx-2 underline underline-offset-4 text-white">
          Our Locations
        </h1>
        <div className="text-teal-200/80 lg:text-2xl text-2xl md:text-4xl font-semibold py-2">
          <div className="pb-1  flex flex-row gap-1 hover:gap-4 transition-all delay-100 duration-400">
            <MdLocationPin className="h-8 w-8 md:m-1 lg:m-0" />
            <Link
              href={
                "https://www.google.com/maps/dir//245%2FM%2F2+Block%D8%8C+Presidential+Initiative+for+Artificial+Intelligence+and+Computing+(PIAIC)+Headquarters,+6,+P.E.C.H.S.+Block+6+PECHS,+Karachi,+Karachi+City,+Sindh+75400,+Pakistan%E2%80%AD/@25.0107462,62.9095682,7z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb33ff89c73993d:0x91c53ba630675f8!2m2!1d67.0733868!2d24.8613137"
              }
            >
              Karachi,Pakistan
            </Link>
          </div>
          <div className="py-1 flex flex-row gap-1 hover:gap-4 transition-all delay-100 duration-400">
            <MdLocationPin className="h-8 w-8 md:m-1 lg:m-0" />
            <Link
              href={
                "https://www.google.com/maps/place/Lahore,+Punjab,+Pakistan/@31.4826352,74.0541894,10z/data=!3m1!4b1!4m6!3m5!1s0x39190483e58107d9:0xc23abe6ccc7e2462!8m2!3d31.5203696!4d74.3587473!16zL20vMHhudDU"
              }
            >
              Lahore,Pakistan
            </Link>
          </div>
          <div className="pb-1 flex flex-row gap-1 hover:gap-4 transition-all delay-100 duration-400">
            <MdLocationPin className="h-8 w-8 md:m-1 lg:m-0 " />
            <Link
              href={
                "https://www.google.com/maps/place/Peshawar,+Khyber+Pakhtunkhwa,+Pakistan/@33.9761075,71.024054,10z/data=!3m1!4b1!4m6!3m5!1s0x38d917b90f0e79cf:0xa816b2637558a412!8m2!3d34.0151366!4d71.5249154!16zL20vMGhqNmg"
              }
            >
              Peshawar,Pakistan
            </Link>
          </div>
          <div className="py-1 flex flex-row gap-1 hover:gap-4 transition-all delay-100 duration-400">
            <MdLocationPin className="h-8 w-8 md:m-1 lg:m-0" />
            <Link
              href={
                "https://www.google.com/maps/place/Quetta+City,+Quetta,+Balochistan,+Pakistan/@30.2441614,66.7127096,10z/data=!3m1!4b1!4m6!3m5!1s0x3ed2e0015fec6f71:0xf3ed71a56c5c19d4!8m2!3d30.2845213!4d66.9511459!16s%2Fg%2F11h9xlk7s9"
              }
            >
              Quetta,Pakistan
            </Link>
          </div>
          <div className="py-1 flex flex-row gap-1 hover:gap-4 transition-all delay-100 duration-400">
            <MdLocationPin className="h-8 w-8 md:m-1 lg:m-0" />
            <Link
              href={
                "https://www.google.com/maps/place/PIAIC+Attestation+Center,+F-10+Markaz,+Islamabad/@33.6967044,73.0098292,17z/data=!3m1!4b1!4m6!3m5!1s0x38dfbf77f1cd0fa5:0x798a2079d01c4cfb!8m2!3d33.6967044!4d73.0120179!16s%2Fg%2F11h4ln2myr"
              }
            >
              Islamabad,Pakistan
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
