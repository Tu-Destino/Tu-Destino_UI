import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

function Login() {
  return (
    <div>
      <Popover placement="bottom-start" offset={10} className="w-52">
        <PopoverTrigger>
          <button className="w-20 mr-4 h-12 rounded-3xl border border-[#e0e0e0] flex items-center justify-center gap-2 hover:drop-shadow-md">
            <MenuIcon />
            <AccountCircleIcon />
          </button>
        </PopoverTrigger>
        <PopoverContent className=" w-full px-0 py-2 rounded-xl">
          <div className="flex flex-col gap-2 w-full">
            <a href="#" className="w-full h-10 flex items-center pl-2 rounded-t-[2.5px] hover:bg-slate-100">Regístrate</a>
            <a href="#" className="w-full h-10 flex items-center pl-2 rounded-b-[2.5px] hover:bg-slate-100">Inicia sesión</a>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default Login;