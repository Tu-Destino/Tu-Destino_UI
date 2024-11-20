import React, { forwardRef } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import "@egjs/react-flicking/dist/flicking.css";
import "../../styles/globals.css";
import { useSelectContext } from "@/context/SelectContext";
import {
  AutocompleteProps,
  ButtomPromp,
  FiltersType,
  IconsProps,
} from "@/types/types";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import {
  LogicButtonTagsPost,
  LogicDrop,
  LogicFilterResponsive,
  LogicImagenUploader,
  LogicSearchPlaces,
  LogicTags,
} from "@/hooks/discover/logicMicroComponents";

export const Tags: React.FC<AutocompleteProps> = ({ suggestions }) => {
  const { flicking0, flicking1, plugins, tags0, tags1, handleClick } =
    LogicTags(suggestions);
  return (
    <>
      <Flicking
        ref={flicking0}
        className="mb-4 w-auto"
        align="prev"
        bound={true}
        bounce={30}
        plugins={plugins}
        key={"0"}
      >
        {tags0.map((tag, index) => (
          <ButtomTagsPos key={index} tag={tag} handleCLick={handleClick} />
        ))}
      </Flicking>
      <Flicking
        ref={flicking1}
        className="mb-4 w-auto"
        align="prev"
        bound={true}
        bounce={30}
        key={"1"}
      >
        {tags1.map((tag, index) => (
          <ButtomTagsPos key={index} tag={tag} handleCLick={handleClick} />
        ))}
      </Flicking>
    </>
  );
};

export const ImageUploader: React.FC = () => {
  const { imageSrc, handleImageChange } = LogicImagenUploader();
  return (
    <label
      className="custom-file-upload h-full w-full aspect-square flex flex-col items-center justify-center gap-5 cursor-pointer bg-white p-1 rounded-lg shadow-[0px_48px_35px_-48px_rgba(0,0,0,0.1)]"
      htmlFor="file"
    >
      {imageSrc ? (
        <img
          src={imageSrc as string}
          alt="Uploaded"
          className="w-full h-full object-contain aspect-square rounded-lg"
        />
      ) : (
        <div className="icon flex items-center justify-center">
          <UploadFileIcon className="h-[80px] text-gray-700" />
        </div>
      )}
      {!imageSrc && (
        <div className="text flex items-center justify-center">
          <span className="font-normal text-gray-700">
            Click to upload image
          </span>
        </div>
      )}
      <input
        type="file"
        id="file"
        className="hidden"
        onChange={handleImageChange}
      />
    </label>
  );
};

export const SearchPlaces: React.FC<AutocompleteProps> = ({ suggestions }) => {
  const {
    inputValue,
    handleChange,
    handleSuggestionClick,
    filteredSuggestions,
    showSuggestions,
  } = LogicSearchPlaces(suggestions);

  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="border p-2"
        placeholder="Escribe algo..."
      />
      {showSuggestions && (
        <ul className="absolute border border-t-0 bg-white w-full max-h-40 overflow-y-auto z-20">
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="p-2 hover:bg-gray-200 cursor-pointer"
              >
                {suggestion}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">
              No se encontraron coincidencias.
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

const Filter: React.FC<FiltersType> = ({ suggestions, setStateValue }) => {
  const { flickingRef, plugins, handleClick } =
    LogicFilterResponsive(setStateValue);

  return (
    <Flicking
      ref={flickingRef}
      className="mb-4"
      align="prev"
      bound={true}
      bounce={30}
      plugins={plugins}
    >
      {suggestions.map((tag, index) => (
        <ButtomTagsPos key={index} tag={tag} handleCLick={handleClick} />
      ))}
    </Flicking>
  );
};

export const Drop: React.FC<IconsProps> = ({ Component, list }) => {
  const {
    toggleBox,
    tags0,
    tags1,
    tags2,
    isVisible,
    filteredTags,
    handleClean,
    handleClick,
    setFilterTags,
  } = LogicDrop(list);
  return (
    <>
      <button onClick={toggleBox} className="px-4 py-2 text-white">
        {Component}
      </button>
      {isVisible && (
        <div className="drop-box absolute bottom-[4.2rem] h-[18rem] w-full left-0 bg-white border border-gray-300 p-4 shadow-lg overflow-y-scroll">
          <Filter
            suggestions={tags0}
            select={filteredTags}
            setStateValue={setFilterTags}
          />
          <Filter
            suggestions={tags1}
            select={filteredTags}
            setStateValue={setFilterTags}
          />
          <Filter
            suggestions={tags2}
            select={filteredTags}
            setStateValue={setFilterTags}
          />

          <div className=" w-full bg-slate-400 h-[10%]">
            <button onClick={handleClean}>Limpiar</button>
            <button onClick={handleClick}> Buscar</button>
          </div>
          <div>
            {filteredTags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export const ButtomTagsPos = forwardRef<HTMLButtonElement, ButtomPromp>(
  ({ tag, handleCLick }, ref) => {
    const { isClick, handleCliking } = LogicButtonTagsPost(handleCLick);

    return (
      <button
        ref={ref}
        className={`mr-2 p-2 border ${
          isClick ? "bg-blue-500 text-white" : "bg-red-400 text-black"
        }`}
        onClick={() => handleCliking(tag)}
      >
        {tag}
      </button>
    );
  }
);
export const FrameDescription: React.FC = () => {
  const { setNewDescription } = useSelectContext();
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewDescription(e.target.value);
  };
  return (
    <textarea
      rows={5}
      cols={10}
      placeholder="Escribe una descripcion del lugar"
      className="p-4  w-[95%]  placeholder:text-black border border-black rounded-md"
      onChange={handleChange}
    ></textarea>
  );
};
