
import React, { useState } from 'react';
const obj=[
  {
    name:"prueba 11",
    img:"https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/naturaleza/Botanico/jjjrls8pkaskjz4stuvd.jpg"
  },
  {
    name:" 2222",
    img:"https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/cultura/Palacio%20Rafael%20Uribe%20Cultura/hpi6dcccsvmnbpp2pzce.jpg"
  },
  {
    name:"333333",
    img:"https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/Lugares/historia/MuseoCastillo/op4ahaps1idu5uvptbwg.jpg"
  },
  {
    name:"4444",
    img:"https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/den1krumk48nfabnwiir.jpg"
  }
]


const Collage = ({ info }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="w-full md:h-[30rem] lg:h-[35rem] flex justify-center items-center">
      <div className="w-full md:w-4/5 lg:w-3/4 h-4/5 bg-slate-300 border-8 flex flex-col md:flex-row">
        <div className="w-full md:w-2/4 h-full flex flex-col">
          <div className="flex w-full h-2/4 relative">
            <div
              className="relative w-2/4 md:f-full border-8"
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={info[0].img} alt="" className="w-full h-full object-cover" />
              <div
                className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm transition-transform duration-300 ${
                  hoveredIndex === 0 ? 'animate-slideUp' : 'animate-slideDown'
                }`}
              >
                <h1 className='text-red-700'>{info[0].name}</h1>
                <button className=''>Detalles</button>
              </div>
            </div>
            <div
              className="relative w-2/4 h-full border-8"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={info[1].img} alt="" className="w-full h-full object-cover" />
              <div
                className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm transition-transform duration-300 ${
                  hoveredIndex === 1 ? 'animate-slideUp' : 'animate-slideDown'
                }`}
              >
                {info[1].name}
              </div>
            </div>
          </div>
          <div
            className="relative w-full h-2/4 border-8"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={info[2].img} alt="" className="w-full h-40 md:h-full object-cover" />
            <div
              className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm transition-transform duration-300 ${
                hoveredIndex === 2 ? 'animate-slideUp' : 'animate-slideDown'
              }`}
            >
              {info[2].name}
            </div>
          </div>
        </div>
        <div
          className="relative w-full md:w-2/4 h-full border-8"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={info[3].img} alt="" className="w-full h-full object-cover" />
          <div
            className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm transition-transform duration-300 ${
              hoveredIndex === 3 ? 'animate-slideUp' : 'animate-slideDown'
            }`}
          >
            {info[3].name}
          </div>
        </div>
      </div>
    </section>
  );
};



 const Places = () => {  
  return <>
  <Collage info={obj}/>
  </>
}

export default Places;