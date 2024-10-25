import './../styles/globals.css'
import Image from "next/image";
import Footer from '../components/Footer'
import NavigationBar from "../components/main/nav/NavigationBar";
import SearchBar from "../components/main/searchBar/SearchBar";
import GridMain from '@/components/main/gridMain/GridMain';
import EyeCatching from '@/components/main/eyeCatching/EyeCatching';

export default function Home() {
  return (<>
      <NavigationBar/>
      <SearchBar/>
      <GridMain/>
      <EyeCatching key={1} position='1'/>
      <EyeCatching key={2} position='2'/>
      <EyeCatching key={3} position='1'/>
      <EyeCatching key={4} position='2'/>
      <EyeCatching key={5} position='1'/>
      <section className='h-[150vh]'></section>

   </>
  );
}
