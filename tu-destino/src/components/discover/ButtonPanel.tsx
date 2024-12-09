import { AutocompleteProps, FiltersType } from "@/types/types";
import React, { useEffect, useState } from "react";
import ButtomFilter from "./ButtonFilter";
import { LogicFilter } from "@/hooks/discover/logicFilter";
import { LogicDrop } from "@/hooks/discover/logicMicroComponents";
import Link from "next/link";
import { useGetPostsByTagsMutation } from "@/redux/apis/postApi";
import { useAppDispatch } from "@/hooks/redux";
import {  setPostShowDiscover } from "@/redux/postsShowDiscover/postsShowDiscoverSlice";


const LogoDiscover: React.FC = () => {
  return (
    <>
      <div className="absolute  z-10 w-full h-[60px] flex justify-between items-center p-2">
        <Link href={"/"}>
          <img
            className="size-12"
            src="/logoSmall.png"
            alt="Logo of Tu Destino"
            style={{
              filter: "invert(100%) brightness(200%)",
            }}
          />
        </Link>
        <Link
          href={"/"}
          className="group h-8 mr-1 w-28 justify-center bg-white bg-opacity-30 rounded-md tracking-widest cursor-pointer border-none flex items-center transition-all duration-200 ease-in hover:shadow-[2px_2px_10px_#d1d1d1,-2px_-2px_10px_#bcbcbc] "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1024 1024"
            className="size-8 mx-1 transition-all duration-300 ease-in group-hover:scale-110 group-hover:-translate-x-1"
          >
            <path
              className=""
              d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"
            ></path>
          </svg>
          <span>Back</span>
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
  const { handleClean } = LogicDrop([]);

  const [getPostsByTags, { data: postFilterData,  }] =
    useGetPostsByTagsMutation();

  const dispatch = useAppDispatch();
  const handleClick = async () => {
    getPostsByTags({ array: tags.join(",") });

    // const filter = await filterTags(tags.join(","));
    // setPostDiscover(await filter);
  };

  useEffect(() => {
    if (postFilterData) {
      dispatch(setPostShowDiscover({ posts: postFilterData }));
    }
  }, [postFilterData]);

  return (
    <div className="relative md:w-[20%]  lg:w-[20%] h-full bg-[#1E1E1E]">
      <LogoDiscover />
      <div className="py-16 w-full h-full flex  justify-center overflow-hidden items-center">
        <Filters
          suggestions={suggestions}
          select={tags}
          setStateValue={setTags}
        />
      </div>
      <div className="absolute bottom-0 left-0 z-10 w-full h-[55px] p-1 flex gap-1">
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
