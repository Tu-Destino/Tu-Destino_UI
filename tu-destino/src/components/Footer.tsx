'use client'
import Link from "next/link";
import  { useState ,FC } from "react";

interface OptionProps {
  text: string;
  url: string;
  css: string;
}

const Option: FC<OptionProps> = ({ text, url, css }) => {
  return (
    <Link href={url} className={`  ${css}`}>
      {text}
    </Link>
  );
}

function Higher() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Lógica para manejar la suscripción con el correo electrónico
    console.log(email);
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-4/5 bg-red-400 border-y-2 border-black"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/main/logo_tres_skzy9y.jpg)",
        backgroundPositionX: "center",
        backgroundPositionY: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "40% 50%",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  justify-center items-center bg-olive-500 p-6 rounded-md"
      >
        <div className="flex flex-col items-center">
          <label htmlFor="email" className="text-white block mb-2 text-6xl">
            ¿Quieres recomendaciones?
          </label>
          <p className="text-yellow-400 mb-4 text-3xl">
            Te enviaremos recomendaciones semanales para que descubras un nuevo
            lugar para ti.
          </p>
        </div>
        <div className="flex items-center justify-center w-5/6">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingrese su correo electrónico..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="imputEmail flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 "
          />
          <button
            type="submit"
            className="bg-blue-500 p-2 rounded-r-md text-white"
          >
            →
          </button>
        </div>
      </form>
      <div className="h-96 w-full"></div>
    </div>
  );
}
function Down() {
  return (
    <div className="flex flex-col md:flex-row h-1/4 md:h-1/5 bg-slate-50 justify-around w-full ">
      <div className="flex flex-col md:flex-row items-center justify-center  md:w-2/4 w-full">
        <img
          src="https://res.cloudinary.com/dhtmy6izv/image/upload/f_png/Multimedia/main/xifc580gecox85cpz8zv.jpg"
          alt="Logo Tu Destino"
          className="w-32 ml-2 md:ml-8"
        />
        <p className="ml-4  md:w-4/5 text-center md:text-left">
          © 2024 Tu Destino All rights reserved.
        </p>
      </div>
      <div className="flex  justify-center md:justify-end mb-4 md:mb-0  items-center gap-6 w-full md:w-2/4">
        <Option text="Home" url="Html" css="" />
        <Option text="Lugares" url="Html" css="" />
        <Option text="Contacto" url="mailto:" css=" mr-0 md:mr-8" />
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="flex-col contain-none h-[48rem]">
      <Higher />
      <Down />
    </footer>
  );
};
export default Footer;
