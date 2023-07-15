import { CoursesType, Menu } from "./DataType";

export const menu: Menu[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Courses",
    url: "/courses/web-3-and-metaverse-developer",
  },
  {
    id: 3,
    title: "About Us",
    url: "/about-us",
  },
  {
    id: 4,
    title: "Contact Us",
    url: "/contact-us",
  },
];

export const courses: CoursesType[] = [
  {
    id: 1,
    basepath: "/web3",
    href: "/web3",
    title: "Web 3.0 (Blockchain) and Metaverse",
    image: "/Web3C.png",
  },
  {
    id: 2,
    basepath: "/ai",
    href: "/ai",
    title: "Artificial Intelligence (AI) and Deep Learning",
    image: "/AiC.png",
  },
  {
    id: 3,
    basepath: "/cloud",
    href: "/cloud",
    title: "Cloud-Native Computing",
    image: "/CloudC.png",
  },
  {
    id: 4,
    basepath: "/iot",
    href: "/iot",
    title: "Ambient Computing and IoT",
    image: "/IotC.png",
  },
  {
    id: 5,
    basepath: "/bio",
    href: "/bio",
    title: "Genomics and Bioinformatics",
    image: "/BioC.png",
  },
  {
    id: 6,
    basepath: "/net",
    href: "/net",
    title: "Network Programmability and Automation Specialization",
    image: "/NetC.png",
  },
];
