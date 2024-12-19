import Image from "next/image";
import Link from "next/link";
import { PlaceProps } from "@/types/types";

export default function EyeCatching({
  place,
  position,
}: {
  place: PlaceProps;
  position: string;
  
}) {
  const isPositionOne = position === "1";
  
  return (
    <div className="bg-white py-16 flex items-center justify-center">
      <article className="flex-col  sm:flex-row px-6 sm:px-12 flex justify-center max-w-[1300px]">
        <div
          className={`flex flex-col sm:w-[40%] ${
            isPositionOne
              ? "order-2 sm:order-2 pl-4 sm:pl-8 lg:pl-[4rem]"
              : "order-2 sm:order-1 pr-4 sm:pr-8 lg:pr-[4rem]"
          } justify-center`}
        >
          <h2 className="text-3xl text-[#1d1d1f] mb-3">{place.title}</h2>
          <p className="text-[#6e6e73] mb-3">{place.description}</p>
          <Link target="_blank" href={`/places/details/${place.title}`} className="text-indigo-400">
            Conocer más →
          </Link>
        </div>

        <Link
          target="_blank"
          href={`/places/details/${place.title}`}
          className={` sm:w-[60%]  mb-8 sm:mb-0 flex  ${
            isPositionOne
              ? "order-1 sm:order-1 "
              : "order-1 sm:order-1 justify-end"
          }`}
        >
          <div className="w-full max-h-[40rem] max-w-[40rem] overflow-hidden rounded-2xl transform transition-transform duration-400 hover:scale-[99%]">
            <Image
              src={place.img}
              alt={place.altImg}
              width={700}
              height={700}
              className="w-full h-full aspect-square cursor-pointer  object-cover rounded-2xl transform transition-transform duration-700 ease-out hover:scale-105"
              priority // Esto asegura una carga prioritaria para mejorar el LCP
            />
          </div>
        </Link>
      </article>
    </div>
  );
}
