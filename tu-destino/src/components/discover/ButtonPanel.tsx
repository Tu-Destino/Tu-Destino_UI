import { AutocompleteProps, FiltersType } from "@/types/types";
import React, { useState } from "react";
import ButtomFilter from "./ButtonFilter";
import { filterTags } from "@/helpers/FetchData";
import useData from "@/helpers/Zustand/DataLoad";
import { LogicFilter } from "@/hooks/discover/logicFilter";
import { LogicDrop } from "@/hooks/discover/logicMicroComponents";
import Link from "next/link";

const LogoDiscover: React.FC = () => {
  return (
    <>
      <div className=" w-full h-[13%]">
        <Link className="flex justify-center items-center" href={"/"}>
          <img
            className="w-2/3 h-full"
            src="/logoYourDestiny.png"
            alt="Logo of Tu Destino"
            style={{
              filter: "invert(100%) brightness(200%)",
            }}
          />
        </Link>
      </div>
    </>
  );
};

const Filters: React.FC<FiltersType> = ({ suggestions, setStateValue }) => {
  const { handleClick, istable } = LogicFilter(setStateValue);
  return (
    <>
      <div
        className={`grid grid-cols-2 gap-1 ${
          istable ? "w-[75%]" : "w-[90%]"
        }  h-full overflow-y-scroll scrollbar-hide overflow-x-hidden justify-center`}
      >
        {suggestions.map((tag, index) => (
          <ButtomFilter key={index} tag={tag} handleCLick={handleClick} />
        ))}
      </div>
    </>
  );
};

const ButtonPanel: React.FC<AutocompleteProps> = ({ suggestions }) => {
  const [tags, setTags] = useState<string[]>([]);
  const { setPostDiscover } = useData();
  const { handleClean } = LogicDrop([]);
  const handleClick = async () => {
    const filter = await filterTags(tags.join(","));
    setPostDiscover(await filter);
  };

  return (
    <div className="md:w-[20%] lg:w-[20%] h-full bg-[#1E1E1E]">
      <LogoDiscover />
      <div className=" w-full h-[80%] flex  justify-center overflow-hidden items-center">
        <Filters
          suggestions={suggestions}
          select={tags}
          setStateValue={setTags}
        />
      </div>
      <div className="w-full h-auto p-1 flex gap-1">
        <button
          className="w-2/4 bg-slate-700 rounded-md h-auto p-2 text-white "
          onClick={handleClick}
        >
          filtrar
        </button>
        <button
          className="w-2/4 bg-slate-700 rounded-md h-auto p-2 text-white"
          onClick={handleClean}
        >
          limpiar
        </button>
      </div>
      <div className="bg-[#282828] text-[#616c7b] bg-[#f2f2f2] bg-blue-300 bg-green-400 bg-purple-300 bg-gray-400 bg-yellow-300 bg-red-300 bg-orange-300 bg-yellow-500 bg-blue-500 bg-pink-300 bg-green-500 bg-indigo-300 bg-teal-300 bg-blue-700 bg-[#9f7d50] bg-green-700 bg-green-300 bg-gray-500"></div>
    </div>
  );
};

export default ButtonPanel;
