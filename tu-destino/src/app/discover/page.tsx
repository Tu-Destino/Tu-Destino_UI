import ButtonPanel from "../../components/discover/ButtonPanel";
import Gallery from "../../components/discover/Gallery";

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


export default function page() {
  return (
    <section className='w-full h-full bg-slate-950 flex flex-row'>
    <ButtonPanel/>
    <Gallery initialPlaces={obj}/>
    
    </section>
  )
}
