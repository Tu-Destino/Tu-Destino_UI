import './../styles/globals.css'
import Image from "next/image";
import Footer from '../components/Footer'
import NavigationBar from "../components/main/nav/NavigationBar";
import SearchBar from "../components/main/searchBar/SearchBar";
import GridMain from '@/components/main/gridMain/GridMain';

export default function Home() {
  return (<>
      <NavigationBar/>
      <SearchBar/>
      <GridMain/>
      <section className='h-[150vh]'></section>

   </>
  );
}
