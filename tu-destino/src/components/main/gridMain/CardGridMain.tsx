import { Card, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";

export default function CardGridMain({span = "4"}: {span?: string}) {
  return (
    <Link className={`col-span-12 sm:col-span-${span}`} href={"/places/details/cooco"}>
      <Card className="h-[320px] overflow-hidden rounded-2xl transform transition-transform duration-400 hover:scale-[99%]">
        <CardHeader className="absolute z-10 bottom-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            What to watch
          </p>
          <h4 className="text-white font-medium text-large">
            Stream the Acme event
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover transform transition-transform duration-300 ease-[cubic-bezier(0,-0.01,.08,1)] hover:scale-105"
          src="/tombo.webp"
        />
      </Card>
    </Link>
  );
}
