"use client";

import Image from "next/image";
import { places } from "./pla";

interface ImageProps {
  name: string;
  description: string;
  images: string[];
}

interface ImageCollageProps {
  images: ImageProps[];
}

const ImageCollage: React.FC<ImageCollageProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-4 sm:grid-rows-2 gap-4 h-[470px] md:mb-12">
      <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-lg">
        <Image
          src={images[2].images[1]}
          alt={images[0].name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          width={1000}
          height={1000}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-white text-2xl font-bold text-center px-4">
            {images[0].description}
          </p>
        </div>
      </div>
      {images.slice(0, 4).map((place, index) => (
        <div key={index} className="relative group overflow-hidden rounded-lg ">
          <Image
            src={place.images[0]}
            alt={place.name}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-white text-lg font-semibold text-center px-4">
              {place.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Collage() {
  return (
    <div className="container mx-auto px-4 pb-12 pt-[9rem] max-w-6xl ">
      <div className="md:mx-8  lg:mx-12 mt-6">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Destinos fascinantes que te sorprenderán
        </h1>
        <p className="text-xl text-center mb-16 text-gray-600">
          Descubre paisajes espectaculares en cada rincón de Medellín
        </p>
        <ImageCollage images={places} />
      </div>
    </div>
  );
}
