"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/carrusel.css";
import { Card } from "@nextui-org/react";
import { CardContent } from "@mui/material";
import Image from "next/image";
import React, { useRef } from "react";
import { Place } from "@/types/types";
import { useLogicInfoPlaces } from "@/hooks/places/logicPlaces";

interface ImgCardProps {
  url: string;
  name: string;
}

const ImgCard: React.FC<ImgCardProps> = ({ url, name }) => {
  /*const [nameSearch, setNameSearch] = useState(name);
  const searchPlace = () => {
    console.log(nameSearch);
  };*/

  return (
    <div className="group rounded-lg relative inline-block">
      <div className="overflow-hidden relative rounded-lg">
        <Image
          className="max-w-none object-cover w-[15rem] h-[20rem] transition-transform duration-300 group-hover:scale-110 rounded-lg"
          src={url}
          alt={`Imagen de ${name}`}
          width={300}
          height={300}
        />
      </div>
      <button
        /* onClick={searchPlace}*/
        className="w-[15rem] absolute inset-0 rounded-lg bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
      >
        <p className="text-white text-lg font-bold text-center px-4">{name}</p>
      </button>
    </div>
  );
};

interface CarruselProps {
  places: Place[];
  title: string;
  text: string;
}

const Carruseln: React.FC<CarruselProps> = ({ places, title, text }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -257, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 257, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full mt-12 flex flex-col items-center justify-center">
      <Card className="overflow-hidden w-full sm:w-[87%] md:w-[79%]">
        <CardContent className="p-6 container">
          <h2 className="text-2xl px-2 font-semibold mb-4">{title}</h2>
          <p className="text-xl font-semibold mb-5 px-4">{text}</p>
          <div className="relative w-full">
            <div
              ref={carouselRef}
              className="w-full px-4 overflow-x-auto whitespace-nowrap scrollbar-hide"
            >
              <div className="flex space-x-4">
                {places.map((place, index) => (
                  <ImgCard key={index} url={place.img} name={place.name} />
                ))}
              </div>
            </div>
            <button
              onClick={scrollLeft}
              className="absolute right-[36px] top-[-12%] z-10 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1 rounded-full"
            >
              ◀️
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-[4px] top-[-12%] z-10 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-1 rounded-full"
            >
              ▶️
            </button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

const SkeletonLoader: React.FC = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-4 bg-gray-400 rounded w-3/4"></div>
      <div className="h-4 bg-gray-400 rounded w-1/2"></div>
      <div className="h-48 bg-gray-400 rounded"></div>
    </div>
  );
};

const OrganizeCarrusel: React.FC<{ title: string; text: string }> = ({
  title,
  text,
}) => {
  const { listType, loading } = useLogicInfoPlaces(title);
  if (loading) {
    return <SkeletonLoader />;
  }
  return <Carruseln places={listType} title={title} text={text} />;
};
export default OrganizeCarrusel;
