import React from "react";

const BioCard = ({ data, BioCardIndex }: { data: any; BioCardIndex: any }) => {
  console.log("data ", data);
  console.log("BioCardIndex ", BioCardIndex);
  return (
    <div>
      {data[BioCardIndex].map(({ title }: { title: any }, index: number) => (
        <h1 key={index}>{title}</h1>
      ))}
    </div>
  );
};

export default BioCard;
