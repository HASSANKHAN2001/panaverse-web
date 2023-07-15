import React from "react";

const Web3Card = ({
  data,
  Web3CardIndex,
}: {
  data: any;
  Web3CardIndex: any;
}) => {
  console.log("data ", data);
  console.log("Web3CardIndex ", Web3CardIndex);
  return (
    <div>
      {data[Web3CardIndex].map(({ title }: { title: any }, index: number) => (
        <h1 key={index}>{title}</h1>
      ))}
    </div>
  );
};

export default Web3Card;
