'use client'
import { useState, ChangeEvent } from "react";
import SearchIcon from '@mui/icons-material/Search';


function SearchBar() {
  const [textInput, setTextInput] = useState("");

  const words = [
    "bogota",
    "medellin",
    "cali",
    "bucaramanga",
    "villavicencio",
    "villanueva",
    'villa'
  ];

  // Manejador de cambio de texto en el input
  const handleSearch = (e:ChangeEvent<HTMLInputElement> ) => {
    e.preventDefault();
    setTextInput(e.target.value.toLowerCase());
  };

  // Filtra los lugares según el texto ingresado
  const filteredWords = words.filter((word) =>
    word.toLowerCase().includes(textInput)
  );

  return (
    <div className=" flex h-[34rem] w-full pt-16 items-center justify-center">
      <section className= " relative h-4/5 w-[56rem] flex flex-col justify-center items-center">
        <h1 className="mb-14 text-6xl poppins-semibold text-zinc-800">
          ¿Tienes un lugar en mente?
        </h1>
        <div className="bg-white w-[42rem] h-16 flex items-center rounded-full mb-[3px] justify-between border-1 border-indigo-100">
          {/* Input de búsqueda */}
          <input
            onChange={handleSearch}
            className="h-full flex-1 outline-none ml-6 rounded-lg text-ellipsis"
            type="text"
            placeholder="Lugares para visitar, cosas que hacer, hoteles..."
          />
          {/* Botón de búsqueda */}
          <button className="bg-[#ff5757] hover:bg-[#ff8181] w-12 h-12 rounded-3xl text-white  mx-[10px]">
            <SearchIcon/>
          </button>
        </div>

        {/* Selector de resultados que aparece debajo del input */}
        {textInput && (
          <div className={`absolute top-[17.2rem] max-h-48 min-h-[${filteredWords.length * 3.5}rem] bg-white w-3/4 mt-2 rounded-lg shadow-lg  overflow-y-auto`}>
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
