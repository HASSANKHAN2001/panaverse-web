import { useState, useEffect } from "react";

const specialities = [
  { name: "KARACHI." },
  { name: "LAHORE." },
  { name: "ISLAMABAD." },
  { name: "PESHAWARE." },
  { name: "QUETTA." },
];

const colors = ["#8be5dd", "#F1916D", "#D1114D", "#f5e688", "#dbfa8a"];

export const ImageSlider = () => {
  const [specialityIndex, setSpecialityIndex] = useState(0);

  useEffect(() => {
    // Creating a timeout within the useEffect hook
    const specialitySlider = setInterval(() => {
      if (specialityIndex === specialities.length - 1) {
        setSpecialityIndex(0);
        return;
      }
      setSpecialityIndex(specialityIndex + 1);
    }, 2000);

    return () => {
      clearInterval(specialitySlider);
    };
  }, [specialities, specialityIndex]);

  const imageSlide = [
    {
      url: "hero7.jpg",
      title:
        "Presidential Initiative for Artificial Intelligence and Computing (PIAIC)",
      body: (
        <>
          Certified Web 3.0 and Metaverse Developer in{" "}
          <span
            className="font-bold text-4xl px-1 text-[#dbfa8a]"
            style={{
              color: colors[specialityIndex],
            }}
          >
            {specialities[specialityIndex].name}
          </span>
        </>
      ),
    },
    {
      url: "hero9.png",
      title: "Launch Your Dev Career With Web 3 and Metaverse",
      body: "A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet.",
    },
    {
      url: "hero4.webp",
      title: "The Program in a Nutshell",
      body: "Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet",
    },
  ];

  const imageSlideSm = [
    {
      url: "hero11.jpg",
      title:
        "Presidential Initiative for Artificial Intelligence and Computing (PIAIC)",
      body: (
        <>
          Certified Web 3.0 and Metaverse Developer in{" "}
          <span
            className="font-bold text-2xl"
            style={{
              color: colors[specialityIndex],
            }}
          >
            {specialities[specialityIndex].name}
          </span>
        </>
      ),
    },
    {
      url: "hero13.jpg",
      title: "Launch Your Dev Career With Web 3 and Metaverse",
      body: "A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet.",
    },
    {
      url: "hero14.png",
      title: "The Program in a Nutshell",
      body: "Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet",
    },
  ];

  return { imageSlide, imageSlideSm };
};
