import './../styles/globals.css'
import Image from "next/image";
import Footer from '../components/Footer'
import NavigationBar from "../components/main/nav/NavigationBar";
import SearchBar from "../components/main/SearchBar";
import Pacman from '@/components/common/Pacman';
export default function Home() {
  return (<>
      <NavigationBar/>
      <SearchBar/>
      <section className='h-[100vh]'></section>
      <Pacman/>
   </>
  );
}
