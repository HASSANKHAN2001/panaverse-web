import React from "react";

const CloudCard = ({
  data,
  CloudCardIndex,
}: {
  data: any;
  CloudCardIndex: any;
}) => {
  console.log("data ", data);
  console.log("CloudCardIndex ", CloudCardIndex);
  return (
    <div>
      {data[CloudCardIndex].map(({ title }: { title: any }, index: number) => (
        <h1 key={index}>{title}</h1>
      ))}
    </div>
  );
};

export default CloudCard;
