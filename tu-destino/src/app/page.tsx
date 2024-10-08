
import Image from "next/image";
import Footer from './ui/Footer'
import NavigationBar from "./ui/main/nav/NavigationBar";
import SearchBar from "./ui/main/SearchBar";
export default function Home() {
  return (<>
      <NavigationBar/>
      <SearchBar/>
      <Footer/>
   </>
  );
}
