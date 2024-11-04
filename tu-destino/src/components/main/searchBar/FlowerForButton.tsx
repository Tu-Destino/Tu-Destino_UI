import React from "react";

export default function FlowerForButton({ number }: { number: string}) {
  return (
    <div
      className={`flower flower${number}`}
    >
      <div className="petal one"></div>
      <div className="petal two"></div>
      <div className="petal three"></div>
      <div className="petal four"></div>
    </div>
  );
}
