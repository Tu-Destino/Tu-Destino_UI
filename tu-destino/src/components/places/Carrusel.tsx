'use client';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/carrusel.css";
import { useState } from "react";

interface ImgCardProps {
  url: string;
  name: string;
}

const ImgCard: React.FC<ImgCardProps> = ({ url, name }) => {
  const [nameSearch, setNameSearch] = useState(name);
  const searchPlace = () => {
    console.log(nameSearch);
  };

  return (
    <div className="card__content rounded-sm aspect-square relative">
      <img
        src={url}
        alt={`imagen de ${name}`}
        className="aspect-square w-full object-cover card__background rounded-md"
      />
    </div>
  );
};

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const ArrowRight: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      background: "black",
      height: "2rem",
      width: "1.5rem",
      display: "flex",
      alignItems: "center",
      borderRadius: "2rem",
      justifyContent: "center",
      position: 'absolute',
      top: '-4%',
      right: '1rem',
      transform: 'translateY(-50%)',
      zIndex: 10
    }}
    onClick={onClick}
  />
);

const ArrowLeft: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      background: "red",
      height: "2rem",
      width: "1.5rem",
      display: "flex",
      alignItems: "center",
      borderRadius: "2rem",
      justifyContent: "center",
      position: 'absolute',
      top: '-4%',
      right: '48px',
      transform: 'translateY(-50%)',
      zIndex: 10
    }}
    onClick={onClick}
  />
);
const ArrowDisamble: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      background: "red",
      height: "2rem",
      width: "1.5rem",
      display: "none",
      alignItems: "center",
      borderRadius: "2rem",
      justifyContent: "center",
      position: 'absolute',
      top: '-4%',
      right: '48px',
      transform: 'translateY(-50%)',
      zIndex: 10
    }}
    onClick={onClick}
  />
);

interface CarruselProps {
  places: { img: string; name: string }[];
  title: string;
  text: string;
}

const Carrusel: React.FC<CarruselProps> = ({ places, title, text }) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    speed: 300,
    slidesToShow: 1,
    nextArrow: <ArrowDisamble />,
    prevArrow: <ArrowDisamble />,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          nextArrow: <ArrowRight />,
          prevArrow: <ArrowLeft />,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: <ArrowDisamble />,
          prevArrow: <ArrowDisamble />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          nextArrow: <ArrowDisamble />,
          prevArrow: <ArrowDisamble />,
        },
      },
    ],
  };

  return (
    <section className="w-full flex items-center justify-center flex-col relative">
      <div className="w-full px-8 h-auto relative">
        <h1>{title}</h1>
        <h3>{text}</h3>
      </div>
      <div className="w-[90%] relative">
        <Slider {...settings}>
          {places.map((imagen, index) => (
            <ImgCard key={index} url={imagen.img} name={imagen.name} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carrusel;
