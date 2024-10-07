import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carrusel.css";
import { useState } from "react";

function ImgCard({ url, name }) {
  const [nameSearch, setNameSearch] = useState(name);
  const seachPlace = () => {
    console.log(nameSearch);
  };
  return (
    <button
      onClick={seachPlace}
      value={name}
      className="w-full px-4 md:px-1 xl:px-3  h-full bg-center card "
      href=""
    >
      <div
        className=" card__background bg-cover bg-center rounded-2xl relative z-10"
        style={{ backgroundImage: `url(${url})` }}
      >
        <div className="card__content  mt-4">
          <p className="card__category ">Places</p>
          <h3 className="card__heading">{name}</h3>
        </div>
      </div>
    </button>
  );
}
function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "black",
        height: "3rem",
        width: "1.5rem",
        display: "flex",
        alignItems: "center",
        borderRadius: " 2rem",
        justifyContent: "center",
      }}
      onClick={onClick}
    />
  );
}
function ArrowResponsiveLeft(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "red",
        height: "3rem",
        width: "1.5rem",
        display: "flex",
        alignItems: "center",
        borderRadius: " 2rem",
        justifyContent: "center",
        position: "absolute",
        left: "-3.5%",
      }}
      onClick={onClick}
    />
  );
}

function ArrowResponsiveRight(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "red",
        height: "3rem",
        width: "1.5rem",
        display: "flex",
        alignItems: "center",
        borderRadius: " 2rem",
        justifyContent: "center",
        position: "absolute",
        right: "-3.5%",
      }}
      onClick={onClick}
    />
  );
}
function Carrusel({ places, title, text }) {
  var settings = {
    className: "center ",
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <ArrowResponsiveRight />,
          prevArrow: <ArrowResponsiveLeft />,
        },
      },
    ],
  };
  return (
    <section className=" w-full bg-slate-200 h-[25rem] md:h-[20rem] xl:h-[35rem] flex  flex-col items-center justify-center mb-4">
      <div className="w-[90%] mb-4 text-2xl">
        <h1 className="">{title}</h1>
        <p className="text-lg">{text}</p>
      </div>
      <div className="w-11/12">
        <div className="slider-container h-[20rem] md:h-[15rem] xl:h-[24.8rem]">
          <Slider {...settings}>
            {places.map((imagen, index) => {
              return (
                <ImgCard key={index} url={imagen.img} name={imagen.name} />
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Carrusel;
