import Languages from "./Languages";
import Login from "./Login";
import MenuIcon from '@mui/icons-material/Menu';

function NavigationBar() {
  return (
    <nav className="bg-white w-full h-[63px] flex flex-row border-b border-[#e0e0e0] fixed z-50">
      <div className="md:hidden">
        <button>
          <MenuIcon/>
        </button>
      </div>
      <div className=" w-[6rem] md:w-[22%] lg:w-[35%]  h-full flex items-center ">
        <a href="#">
          <img
            src="src/assets/TuDestinoLogo.png"
            alt="Logo Tu Destino"
            className="ml-12  w-28 "
          />
        </a>
      </div>
      <div className="bg-slate-300 w-[30%] h-full"></div>
      <div className="flex md:w-[48%] lg:w-[35%] h-full  items-center justify-around ">
        <div className="hidden md:flex flex-1 justify-around">
          <a className="w-28 h-10 flex items-center justify-center rounded-3xl hover:bg-slate-100" href="">Descubrir</a>
          <a className="w-24 h-10 flex items-center justify-center rounded-3xl hover:bg-slate-100" href="">Lugares</a>
        </div>
        <div className="flex">
          <Languages/>
          <Login/>
        </div>
        

      </div>
    </nav>
  );
}

export default NavigationBar;
