import { Card, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";

export default function CardGridMain({span = "4"}: {span?: string}) {
  return (
    <Link className={`col-span-12 sm:col-span-${span}`} href={"/places/details/cooco"}>
      <Card className="h-[320px]">
        <CardHeader className="absolute z-10 bottom-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            What to watch
          </p>
          <h4 className="text-white font-medium text-large">
            Stream the Acme event
          </h4>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/tombo.webp"
        />
      </Card>
    </Link>
  );
}
