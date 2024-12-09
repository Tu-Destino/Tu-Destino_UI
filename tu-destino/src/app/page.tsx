import "./../styles/globals.css";

import Footer from "../components/common/footer/Footer";
import NavigationBar from "../components/common/nav/NavigationBar";
import SearchBar from "../components/main/searchBar/SearchBar";
import GridMain from "@/components/main/gridMain/GridMain";
import EyeCatching from "@/components/main/eyeCatching/EyeCatching";
import FooterTop from "@/components/common/footer/FooterTop";

export default function Home() {
  const place = {
    title: "Title Place",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse repellat maxime ab molestiae provident, mollitia expedita nostrum veniam, minus est consequuntur aspernatur nesciunt incidunt excepturi explicabo tenetur eum? Animi, reprehenderit?",
    link: "/places/details/jijijaja",
    img: "/image.png",
    altImg: "Imagen de la región vinícola de Suiza",
  };

  return (
    <>

      <NavigationBar />
      <SearchBar />
      <GridMain place={place} />
      <EyeCatching key={1} place={place} position="1" />
      <EyeCatching key={2} place={place} position="2" />
      <EyeCatching key={3} place={place} position="1" />
      <EyeCatching key={4} place={place} position="2" />
      <EyeCatching key={5} place={place} position="1" />
      <FooterTop />
      <Footer />
    </>
  );
}
