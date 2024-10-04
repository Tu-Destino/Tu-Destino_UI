import { useState } from "react";

const ImageWithText = ({ src, text, onMouseEnter, onMouseLeave }) => {
  const [namePlace, setnamePlace] = useState(text);
  const searchPlace = () => {
    console.log(namePlace);
  };
  return (
    <div
      onClick={searchPlace}
      className="cursor-pointer relative w-full h-full border-8 border-white transition-transform duration-300 transform hover:scale-105"
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
    <section className="w-full md:h-[30rem] lg:h-[38rem] flex flex-col justify-center items-center">
      <h1 className="h-[6%] w-[95%]"> Descubre estos Lugares</h1>
      <div className="w-full md:w-[99%] lg:w-[98%] h-4/5 lg:h-[96%] border-8 border-white flex flex-col md:flex-row">
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
export default Collage;
