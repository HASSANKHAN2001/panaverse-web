import React, { useEffect, useState } from "react";
import { ImageSlider } from "./ImgData";

const BackgroundSlider = () => {
  const { imageSlide } = ImageSlider();

  const [currentState, setCurrentState] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 2) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 9000);
    return () => clearTimeout(timer);
  }, [currentState]);
  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  const gotoNext = (currentState: any) => {
    setCurrentState(currentState);
  };
  return (
    <div className="h-screen hidden md:block relative pt-[90px]">
      <div style={bgImageStyle}></div>
      <div>
        <div className="w-full absolute  top-[40%] text-center flex-grow flex flex-col justify-center items-center h-auto text-white px-2">
          <div>
            <h1 className="text-3xl font-semibold underline underline-offset-8">
              {imageSlide[currentState].title}
            </h1>
            <p className="font-semibold text-2xl my-4">
              {imageSlide[currentState].body}
            </p>
          </div>
        </div>
        <div className="flex absolute inset-x-0 bottom-0 my-4 gap-6 items-center justify-center text-white">
          {imageSlide.map((imageSlide, currentState) => (
            <span
              className="w-10 h-2 bg-black text-center cursor-pointer shadow-xl mx-2   rounded-lg items-center"
              key={currentState}
              onClick={() => gotoNext(currentState)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackgroundSlider;
