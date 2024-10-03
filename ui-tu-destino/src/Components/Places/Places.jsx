import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './places.css'
const obj = [
  {
    name: "Algun parque de Medellin",
    img: "https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/naturaleza/Botanico/jjjrls8pkaskjz4stuvd.jpg",
  },
  {
    name: "Nose como se llama este...",
    img: "https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/cultura/Palacio%20Rafael%20Uribe%20Cultura/hpi6dcccsvmnbpp2pzce.jpg",
  },
  {
    name: "Museo el castillo",
    img: "https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/historia/MuseoCastillo/op4ahaps1idu5uvptbwg.jpg",
  },
  {
    name: "Logo Perron de Tu Destino",
    img: "https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/den1krumk48nfabnwiir.jpg",
  },
  
  {
    name: "Logo Perron de Tu Destino",
    img: "https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/den1krumk48nfabnwiir.jpg",
  },
  
  {
    name: "Logo Perron de Tu Destino",
    img: "https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/den1krumk48nfabnwiir.jpg",
  },
  
  {
    name: "Logo Perron de Tu Destino",
    img: "https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/den1krumk48nfabnwiir.jpg",
  },
];
const ImageWithText = ({ src, text, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="relative w-full h-full border-8 border-white transition-transform duration-300 transform hover:scale-105"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover rounded-[.7rem] rounded-r-[.7rem] "
      />
      <div className="absolute bottom-0 left-0 right-0 w-2/4  rounded-bl-[.7rem] border-[1px] border-white bg-black bg-opacity-80 text-white p-2  text-[0.7rem] md:text-[0.9rem] ">
        <h2 className="text-center text-wrap">{text}</h2>
      </div>
    </div>
  );
};

const CollageColumn = ({ images, handleMouseEnter, handleMouseLeave }) => {
  return (
    <div className="w-full md:w-2/4 h-full flex flex-col">
      <div className="flex w-full h-[140px] md:h-2/4 relative">
        <ImageWithText
          src={images[0].img}
          text={images[0].name}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        />
        <ImageWithText
          src={images[1].img}
          text={images[1].name}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="relative w-full h-[11rem] md:h-2/4 ">
        <ImageWithText
          src={images[2].img}
          text={images[2].name}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};

const Collage = ({ info }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="w-full md:h-[30rem] lg:h-[40rem] flex justify-center items-center">
      <div className="w-full md:w-[99%] lg:w-[98%] h-4/5 lg:h-full border-8 border-white flex flex-col md:flex-row">
        <CollageColumn
          images={info.slice(0, 3)}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
        <div className="relative w-full md:w-2/4 h-full ">
          <ImageWithText
            src={info[3].img}
            text={info[3].name}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </section>
  );
};

///------------------------------------------





//  <Collage info={obj} />
const Places = () => {
  return (
    <>
   
   <ContainerSlider img={obj}  />
    
    </>
  );
};

export default Places;
