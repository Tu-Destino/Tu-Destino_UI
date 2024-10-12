"use client";
import { useState, useEffect, ChangeEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { poppins } from "@/styles/fonts";

function SearchBar() {
  const [textInput, setTextInput] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      //console.log(window.scrollY);

      if (window.scrollY > 250) {
        // Ajusta este valor según tu preferencia
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll()
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
  };

  // Filtra los lugares según el texto ingresado
  const filteredWords = words.filter((word) =>
    word.toLowerCase().includes(textInput)
  );

  return (
    <div className=" flex h-[34rem] w-full pt-16 items-center justify-center">
      <section className=" relative h-4/5 w-3/4 md:w-[56rem] flex flex-col justify-center items-center">
        <h1
          className={`mb-14 text-[2rem] sm:text-5xl md:text-6xl ${poppins.className} text-center font-semibold text-zinc-800`}
        >
          ¿Tienes un lugar en mente?
        </h1>
        <div
          className={`z-[45] bg-white h-16 flex items-center rounded-full mb-[3px] justify-between border border-indigo-100
            ${isScrolled ? ' w-[35%] sm:w-[50%] md:w-[30%] fixed left-[100px] sm:left-auto md:left-[223px] lg:left-auto top-[5px] transform translate-y-0' : ' w-[22rem] sm:w-[30rem]  md:w-[42rem] top-[50px] transform translate-y-[0]'}
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
          <button className="bg-[#ff5757] hover:bg-[#ff8181] w-12 h-12 rounded-3xl text-white  mr-2 sm:mx-[10px]">
            <SearchIcon />
          </button>
        </div>

        {/* Selector de resultados que aparece debajo del input */}
        {textInput && (
          <div
            className={` top-[17.2rem] max-h-48 min-h-[${
              filteredWords.length * 3.5
            }rem] bg-white w-3/4 mt-2 rounded-lg shadow-lg  overflow-y-auto ${isScrolled ? "fixed top-[75px] w-[26rem]":"absolute"}` }
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
      </section>
    </div>
  );
}

export default SearchBar;
