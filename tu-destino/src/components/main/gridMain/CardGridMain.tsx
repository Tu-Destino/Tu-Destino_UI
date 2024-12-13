import { Card, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";
import { PlaceProps } from "@/types/types";

// 

export default function CardGridMain({span='4', place}: {place: PlaceProps, span?: string}) {


  return (
    <Link target="_blank" className={`col-span-12 md:col-span-${span}`} href={"/places/details"+place.title}>
      <Card className="h-[320px] overflow-hidden rounded-2xl transform transition-transform duration-400 hover:scale-[99%]">
        <CardHeader className="absolute z-10 bottom-1 flex-col items-start">
          <p className="md:col-span-4 text-tiny text-white/60 uppercase font-bold">
            What to watch 
          </p>
          <h4 className="md:col-span-5 text-white font-medium text-large">
            {place.title}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt={place.altImg}
          className="md:col-span-7 z-0 w-full h-full object-cover transform transition-transform duration-300 ease-[cubic-bezier(0,-0.01,.08,1)] hover:scale-105"
          src={place.img}
        />
      </Card>
    </Link>
  );
}
