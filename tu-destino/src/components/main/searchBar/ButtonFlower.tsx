import React from "react";
import FlowerForButton from "./FlowerForButton";
import "../../../styles/buttonFlower.css";
import { inter } from "@/styles/fonts";
import Link from "next/link";

export default function ButtonFlower() {
  return (
    <Link href={`/discover`} className="btn mt-11">
      <div className="wrapper">
        <p className={`text ${inter.className}`}>Descubrir</p>
        <FlowerForButton  number="1" />
        <FlowerForButton  number="2" />
        <FlowerForButton  number="3" />
        <FlowerForButton  number="4" />
        <FlowerForButton  number="5" />
        <FlowerForButton  number="6" />
      </div>
    </Link>
  );
}
