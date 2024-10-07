import React, { useRef, useState } from "react";
import Carrusel from "./Carrusel";
import Collage from "./Collage";
import Footer from '../Footer/Footer'
import "./places.css";

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

const Places = () => {
  return (
    <>
      <nav className="w-full h-[4rem] fixed bg-slate-300 z-50"> </nav>
      <div className="h-[4rem]"> </div>
      <Collage info={obj} />
      <Carrusel
        places={obj}
        title={"Naturaleza"}
        text={"Lorem ipsum dolor sit amet."}
      />
      <Carrusel
        places={obj}
        title={"Cultura"}
        text={"Lorem ipsum dolor sit amet."}
      />
      <Carrusel
        places={obj}
        title={"Historia"}
        text={"Lorem ipsum dolor sit amet."}
      />
      <Carrusel
        places={obj}
        title={"Hoteles"}
        text={"Lorem ipsum dolor sit amet."}
      />
      <Footer/>
    </>
  );
};



export default Places;
