"use client";
import { useState, useEffect, ChangeEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { bebas_Neue, poppins } from "@/styles/fonts";

function SearchBar() {
  const [textInput, setTextInput] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [sizeWidth, setSizeWidth] = useState(230);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      
      if (window.scrollY > sizeWidth) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = (): void => {
      if (window.innerWidth < 495) {
        setSizeWidth(283);
      } else if (window.innerWidth < 640) {
        setSizeWidth(235);
      } else if (window.innerWidth < 718) {
        setSizeWidth(280);
      } else if (window.innerWidth < 768) {
        setSizeWidth(219);
      } else if (window.innerWidth < 888) {
        setSizeWidth(290);
      } else {
        setSizeWidth(247);
      }
    };

    // Ejecutar las funciones al cargar el componente
    handleScroll();
    handleResize();

    // Agregar los event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Limpiar los event listeners al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isScrolled, sizeWidth]);

  const words = [
    "bogota",
    "medellin",
    "cali",
    "bucaramanga",
    "villavicencio",
    "villanueva",
    "villa",
  ];

  // Manejador de cambio de texto en el input
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTextInput(e.target.value.toLowerCase());
    console.log(isScrolled);
  };

  // Filtra los lugares según el texto ingresado
  const filteredWords = words.filter((word) =>
    word.toLowerCase().includes(textInput)
  );

  return (
    <div className=" flex  flex-col w-full pt-20 items-center justify-center">
      <section className=" relative mb-[23rem] mt-28 flex flex-col justify-center items-center">
        <h1
          className={`mb-14 text-[2rem] sm:text-5xl px-6 md:text-6xl ${poppins.className} from-neutral-600 text-center text-[#1d1d1f]`}
        >
          ¿Tienes un lugar en mente?
        </h1>
        <div className="relative flex flex-col w-full items-center justify-center">
          <div
            className={`z-[45] bg-white flex items-center rounded-full mb-[3px] justify-between border border-indigo-100
            ${
              isScrolled
                ? " h-12 w-[35%] sm:w-[50%] md:w-[30%] fixed left-[100px] sm:left-auto md:left-[223px] lg:left-auto top-[5px] transform translate-y-0"
                : " h-16  w-[22rem] sm:w-[30rem]  md:w-[42rem] top-[50px] transform translate-y-[0]"
            }
            transition-all duration-200 ease-in-out`}
          >
            {/* Input de búsqueda */}
            <input
              onChange={handleSearch}
              className=" h-full w-[60%] sm:flex-1 outline-none ml-3 sm:ml-6 rounded-2xl sm:rounded-lg text-ellipsis"
              type="text"
              placeholder="Lugares para visitar, cosas que hacer, hoteles..."
            />
            {/* Botón de búsqueda */}
            <button
              className={`bg-[#ff5757] hover:bg-[#ff8181] rounded-3xl text-white  mr-2 sm:mx-[9px] ${
                isScrolled ? "w-8 h-8" : "w-12 h-12"
              }`}
            >
              <SearchIcon />
            </button>
          </div>

          {/* Selector de resultados que aparece debajo del input */}
          {textInput && (
            <div
              className={`  max-h-48 min-h-[${
                filteredWords.length * 3.5
              }rem] bg-white w-3/4 mt-2 rounded-lg shadow-lg  overflow-y-auto ${
                isScrolled ? "fixed top-[66px] w-[26rem]" : "absolute top-16"
              }`}
            >
              {filteredWords.length > 0 ? (
                filteredWords.map((word, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-indigo-100 text-gray-700"
                    onClick={() => {
                      setTextInput(word); // Establece el valor seleccionado en el input
                    }}
                  >
                    {word}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-500">
                  No se encontraron resultados.
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      <section className="flex items-center justify-center flex-col">
        <h2
          className={` mt-[6.5rem] ${poppins.className} text-3xl font-semibold text-[#1d1d1f]`}
        >
          ¿No sabes a dónde ir?
        </h2>
        <p
          className={` mt-[1rem] ${poppins.className} text-xl font-semibold text-[#8a8989]`}
        >
          Déjate sorprender y explora lo inesperado
        </p>
        <button className="mt-8 ">Descubrir</button>
      </section>
    </div>
  );
}

export default SearchBar;
