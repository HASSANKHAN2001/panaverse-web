import React from "react";

const IotCard = ({ data, IotCardIndex }: { data: any; IotCardIndex: any }) => {
  console.log("data ", data);
  console.log("IotCardIndex ", IotCardIndex);
  return (
    <div>
      {data[IotCardIndex].map(({ title }: { title: any }, index: number) => (
        <h1 key={index}>{title}</h1>
      ))}
    </div>
  );
};

export default IotCard;
