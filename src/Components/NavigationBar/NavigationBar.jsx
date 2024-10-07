import Languages from "./Languages";
import Login from "./Login";

function NavigationBar() {
  return (
    <nav className="bg-white w-full h-16 flex flex-row border-b border-[#e0e0e0] fixed z-50">
      <div className=" w-[40%] h-full flex items-center ">
        <a href="#">
          <img
            src="src/assets/TuDestinoLogo.png"
            alt="Logo Tu Destino"
            className="ml-12  w-28 "
          />
        </a>
      </div>
      <div className="bg-slate-300 w-[20%] h-full"></div>
      <div className=" w-[40%] h-full flex items-center pl-8">
        <div className="w-1/3 ">
          <a className="w-28 h-10 flex items-center justify-center rounded-3xl hover:bg-slate-100" href="">Descubrir</a>
        </div>
        <div className="w-1/3 ">
          <a className="w-24 h-10 flex items-center justify-center rounded-3xl hover:bg-slate-100" href="">Lugares</a>
        </div>
        <div className="w-1/3 flex">
          <Languages/>
          <Login/>
        </div>
        

      </div>
    </nav>
  );
}

export default NavigationBar;
