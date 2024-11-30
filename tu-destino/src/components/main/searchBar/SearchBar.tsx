"use client";
import SearchIcon from "@mui/icons-material/Search";
import { poppins } from "@/styles/fonts";
import ButtonFlower from "./ButtonFlower";
import Link from "next/link";
import { useSearchBar } from "./useSearchBar";

// import getPLace from "@/redux/places/thunks";

function SearchBar() {
  const { isScrolled, textInput, handleSearch, filteredWords, setTextInput } =
    useSearchBar();

  // Filtra los lugares según el texto ingresado

  return (
    <div className=" flex  flex-col w-full items-center justify-center">
      <section className=" h-[700px] sm:h-[860px] md:h-[750px] xl:h-[800px] 2xl:h-[860px] relative  flex flex-col justify-center items-center">
        <h1
          className={`mb-14 text-[2.3rem] sm:text-5xl px-6 md:text-6xl xl:text-7xl ${poppins.className} from-neutral-600 text-center text-[#1d1d1f]`}
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
              value={textInput}
              onChange={handleSearch}
              className=" h-full w-[60%] sm:flex-1 outline-none ml-3 sm:ml-6 rounded-2xl sm:rounded-lg text-ellipsis"
              type="text"
              placeholder="Lugares para visitar, cosas que hacer, hoteles..."
            />
            {/* Botón de búsqueda */}
            <button
              className={`bg-[#ff414d] hover:bg-[#FF5D67] rounded-3xl text-white  mr-2 sm:mx-[9px] ${
                isScrolled ? "w-8 h-8" : "w-12 h-12"
              }`}
            >
              <SearchIcon />
            </button>

            {/* Selector de resultados que aparece debajo del input */}
            {textInput && (
              <div
                className={` z-40 max-h-48 min-h-[${
                  filteredWords.length * 3.5
                }rem] bg-white w-full mt-2 rounded-lg shadow-lg  overflow-y-auto ${
                  isScrolled ? "fixed top-[66px] w-[26rem]" : "absolute top-16"
                }`}
              >
                {filteredWords.length > 0 ? (
                  filteredWords.map((word) => (
                    <Link
                      key={word}
                      href={`/places/details/${word}`}
                      target="_blank"
                    >
                      <div
                        className="px-4 py-2 cursor-pointer hover:bg-indigo-100 text-gray-700"
                        onClick={() => {
                          setTextInput(""); // Establece el valor seleccionado en el input
                        }}
                      >
                        {word}
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="px-4 py-2 text-gray-500">
                    No se encontraron resultados.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
      <section className=" flex items-center h-[700px] justify-center flex-col">
        <h2
          className={`${poppins.className} text-center text-balance text-3xl md:text-5xl lg:text-6xl  text-[#1d1d1f]`}
        >
          ¿No sabes a dónde ir?
        </h2>
        <p
          className={`px-3 mt-[1rem] ${poppins.className} text-2xl text-center text-balance text-[#8a8989]`}
        >
          Déjate sorprender y explora lo inesperado
        </p>
        <ButtonFlower />
      </section>
    </div>
  );
}

export default SearchBar;
