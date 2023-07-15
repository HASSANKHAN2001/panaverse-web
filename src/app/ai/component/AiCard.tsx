import React from "react";

const AiCard = ({ data, AiCardIndex }: { data: any; AiCardIndex: any }) => {
  console.log("data ", data);
  console.log("AiCardIndex ", AiCardIndex);
  return (
    <div>
      {data[AiCardIndex].map(({ title }: { title: any }, index: number) => (
        <h1 key={index}>{title}</h1>
      ))}
    </div>
  );
};

export default AiCard;
