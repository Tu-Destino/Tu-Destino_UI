'use client'
import React, { useState, useLayoutEffect } from 'react';
import ButtonPanel from './ButtonPanel';
import NavDiscover, { AddPost } from './NavDiscover';
import Gallery from "../../components/discover/Gallery";
import '../../styles/discover.css'
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
];

const ButtonModalDesktop: React.FC =()=>{

  return ( 
    <div className='fixed z-50 bg-green-400 bottom-[1%] right-[2%] rounded-full'>
      <AddPost element={'Postear'}/>
    </div>
)
};

const ToggleNav: React.FC = () => {
  
    const [showComponent, setShowComponent] = useState<boolean | null>(null);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setShowComponent(true);
      } else {
        setShowComponent(false);
      }
    };
 
    window.addEventListener('resize', handleResize);
    setTimeout(handleResize, 1300);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  if(showComponent ==null){
    return(<>
      <div className="loader">
        <div></div> 
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>  
    )
  }

  return (
    <>
      {showComponent ? (
        <>
        <ButtonPanel/>
        <Gallery initialPlaces={obj}/>
        <ButtonModalDesktop/>
        </>
      ) : (
        <>
        <NavDiscover/>
        <Gallery initialPlaces={obj}/>
        </>
      )}
    </>
  );
};

export default ToggleNav;
