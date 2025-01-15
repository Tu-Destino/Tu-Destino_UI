
import Footer from "../../components/common/footer/Footer";
import OrganizeCarrusel from "../../components/places/Carrusel";
import Collage from "../../components/places/Collage";
import NavigationBar from "@/components/common/nav/NavigationBar";

export default function PlacesPage() {
  return (
    <>
      <NavigationBar />
      <Collage title="Destinos fascinantes que te sorprenderán" description="Descubre paisajes espectaculares en cada rincón de Medellín"/>
      <OrganizeCarrusel title="Cultura" text="Descubre lugares culturales fascinantes que enriquecen tu alma y expanden tus horizontes."/>
      <OrganizeCarrusel title="Historia" text="Explora sitios históricos y sumérgete en el pasado que ha dado forma a nuestro presente."/>
      <Collage title="Lugares asombrosos que te dejarán sin palabras" description="Déjate envolver por paisajes que parecen salidos de un sueño en Medellín"/>
      <OrganizeCarrusel title="Naturaleza" text="Sumérgete en la belleza natural de nuestro mundo, desde majestuosos parques hasta tranquilos jardines."/>
      <OrganizeCarrusel title="Gastronomia" text="Descubre restaurantes que deleitan tu paladar con sabores exquisitos y experiencias únicas."/>
      <div className="w-full h-16"></div>
      <Footer />
    </>
  );
}

