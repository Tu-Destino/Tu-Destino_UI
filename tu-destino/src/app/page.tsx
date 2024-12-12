import "./../styles/globals.css";

import Footer from "../components/common/footer/Footer";
import NavigationBar from "../components/common/nav/NavigationBar";
import SearchBar from "../components/main/searchBar/SearchBar";
import GridMain from "@/components/main/gridMain/GridMain";
import EyeCatching from "@/components/main/eyeCatching/EyeCatching";
import FooterTop from "@/components/common/footer/FooterTop";

export default function Home() {
  const places = [
    {
      title: "Parque Berrío",
      description:
        "El Parque Berrío es uno de los lugares más emblemáticos de Medellín, Antioquia, ubicado en el corazón del centro de la ciudad. Este espacio público, que lleva el nombre de Pedro Justo Berrío, un destacado político y gobernador de Antioquia en el siglo XIX, ha sido un punto de encuentro y referencia histórica desde su creación.",
      link:"link_ejemplo",
      img: "/parqueBerrio.png",
      altImg: "Imagen del Parque Berrío",
    },
    {
      title: "Museo el Castillo",
      description:
        "El Museo El Castillo, en Medellín, es una icónica construcción de estilo gótico medieval rodeada de jardines. Alberga exposiciones de arte, eventos culturales y una colección de objetos históricos. Ubicado en el Poblado, ofrece vistas panorámicas, recorridos guiados y un ambiente tranquilo que combina historia, arte y naturaleza en un solo lugar.",
      img: "/museoElCastillo.png",
      link:"link_ejemplo",
      altImg: "Imagen del Museo el Castillo",
    },
    {
      title: "Parque Arví",
      description:
        "El Parque Arví, en Medellín, es una reserva natural ubicada en Santa Elena. Ofrece senderos ecológicos, actividades al aire libre y una rica biodiversidad. Accesible por metrocable, es ideal para caminatas, ciclismo y disfrutar de la naturaleza. Es un refugio de paz que combina ecoturismo, cultura y tradiciones locales en un entorno único y verde.",
      img: "/parqueArvi.png",
      link:"link_ejemplo",
      altImg: "Imagen del Parque Arví",
    },
    {
      title: "Jardin Botánico",
      description:
        "El Jardín Botánico de Medellín es un oasis natural en la ciudad, con 13 hectáreas que albergan una rica biodiversidad. Destacan el Orquideorama, senderos ecológicos y espacios para la educación ambiental. Es un lugar ideal para relajarse, aprender sobre flora tropical y disfrutar de actividades culturales en un entorno tranquilo y verde.",
      img: "/jardinBotanico.png",
      link:"link_ejemplo",
      altImg: "Imagen del Jardin Botánico",
    },
    {
      title: "Museo Casa de la Memoria",
      description:
        "El Museo Casa de la Memoria, en Medellín, es un espacio dedicado a recordar y reflexionar sobre el conflicto armado en Colombia. A través de exposiciones interactivas y testimonios, promueve la memoria histórica y la paz. Ubicado en el centro de la ciudad, es un lugar de encuentro para comprender el pasado y construir un futuro reconciliado.",
      img: "/museoCasa.png",
      link:"link_ejemplo",
      altImg: "Imagen del Museo Casa de la Memoria",
    }
  ];

  return (
    <>
      <NavigationBar />
      <SearchBar />
      <GridMain place={places} />
      <EyeCatching key={1} place={places[0]} position="1" />
      <EyeCatching key={2} place={places[1]} position="2" />
      <EyeCatching key={3} place={places[2]} position="1" />
      <EyeCatching key={4} place={places[3]} position="2" />
      <EyeCatching key={5} place={places[4]} position="1" />
      <FooterTop />
      <Footer />
    </>
  );
}
