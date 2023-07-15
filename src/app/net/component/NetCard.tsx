import React from "react";

const NetCard = ({ data, NetCardIndex }: { data: any; NetCardIndex: any }) => {
  console.log("data ", data);
  console.log("NetCardIndex ", NetCardIndex);
  return (
    <div>
      {data[NetCardIndex].map(({ title }: { title: any }, index: number) => (
        <h1 key={index}>{title}</h1>
      ))}
    </div>
  );
};

export default NetCard;
