import { ChangeEvent, forwardRef, ReactNode, useEffect, useRef, useState } from "react";
import Flicking from "@egjs/react-flicking";
import { Sync } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import '@egjs/react-flicking/dist/flicking.css';
import '../../styles/globals.css';
import { useSelectContext } from "@/context/SelectContext";
import { AutocompleteProps, ButtomPromp, FiltersType, IconsProps, TagsProps } from "@/types/types";
import UploadFileIcon from '@mui/icons-material/UploadFile';




export const Tags: React.FC<TagsProps> = ({ labels }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const flicking0 = useRef<Flicking>(null);
  const flicking1 = useRef<Flicking>(null);
  const [plugins, setPlugins] = useState([new Sync({ type: 'camera', synchronizedFlickingOptions: [] })]);
  
  const tags: string[] = labels.split(',');

  useEffect(() => {
    if (flicking0.current && flicking1.current ) {
      const syncPlugin = new Sync({
        type: "camera",
        synchronizedFlickingOptions: [
          {
            flicking: flicking0.current,
            isClickable: false
          },
          {
            flicking: flicking1.current,
            isClickable: false
          }
        ]
      });
      setPlugins([syncPlugin]);
    }
  }, [flicking0, flicking1]);

  const half = Math.ceil(tags.length / 2);
  const tags0 = tags.slice(0,  half);
  const tags1 = tags.slice(half);
  
  const handleClick = (tag: string) => {
    setSelectedTags(prevSelectedTags => {
      if (prevSelectedTags.includes(tag)) {
        return prevSelectedTags.filter(selectedTag => selectedTag !== tag);
      } else {
        return [...prevSelectedTags, tag];
      }
    });
  }

  return (
    <>
      <Flicking ref={flicking0}
        className="mb-4 w-auto"
        align="prev"
        bound={true}
        bounce={30}
        plugins={plugins}
        key={ "0"}
      >
        {tags0.map((tag, index) => (
         <ButtomTagsPos key={index} tag={tag} handleCLick={handleClick}/> 
        ))}
      </Flicking>
      <Flicking ref={flicking1}
        className="mb-4 w-auto"
        align="prev"
        bound={true}
        bounce={30}
        key={"1"}
      >
        {tags1.map((tag, index) => (
            <ButtomTagsPos key={index} tag={tag} handleCLick={handleClick}/> 
        ))}
      </Flicking>
    </>
  );
};

export const ImageUploader: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImageSrc(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return  (
    <label
      className="custom-file-upload h-full w-full aspect-square flex flex-col items-center justify-center gap-5 cursor-pointer bg-white p-1 rounded-lg shadow-[0px_48px_35px_-48px_rgba(0,0,0,0.1)]"
      htmlFor="file"
    >
      {imageSrc ? (
        <img src={imageSrc as string} alt="Uploaded" className="w-full h-full object-contain aspect-square rounded-lg" />
      ) : (
        <div className="icon flex items-center justify-center">
          <UploadFileIcon className="h-[80px] text-gray-700" />
        </div>
      )}
      {!imageSrc && (
        <div className="text flex items-center justify-center">
          <span className="font-normal text-gray-700">Click to upload image</span>
        </div>
      )}
      <input type="file" id="file" className="hidden" onChange={handleImageChange} />
    </label>
  );
};

export const SearchPlaces: React.FC<AutocompleteProps> = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.length > 0) {
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
    setShowSuggestions(false); // Cierra la lista de sugerencias
  };

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
        <ul className="absolute border border-t-0 bg-white w-full max-h-40 overflow-y-auto z-20" >
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

const Filter: React.FC<FiltersType> = ({ suggestions, select, setStateValue }) => {

    const flickingRef = useRef<Flicking>(null);
    const [plugins, setPlugins] = useState<Sync[]>([]);

    useEffect(() => {
      if (flickingRef.current) {
        const syncPlugin = new Sync({
          type: "index",
          synchronizedFlickingOptions: [
            {
              flicking: flickingRef.current,
              isClickable: false
            }
          ]
        });
        setPlugins([syncPlugin]);
      }
    }, [flickingRef]);
  
    const handleClick = (tag: string) => {
      setStateValue(prevSelectedTags => {
        if (prevSelectedTags.includes(tag)) {
          return prevSelectedTags.filter(select => select !== tag);
        } else {
          return [...prevSelectedTags, tag];
        }
      });
    };  

  
    return (
      <Flicking ref={flickingRef}
        className="mb-4"
        align="prev"
        bound={true}
        bounce={30}
        plugins={plugins}
      >
        {suggestions.map((tag, index) => (
          <ButtomTagsPos key={index} tag={tag} handleCLick={handleClick}/>
        ))}
      </Flicking>
    );
};

export const Drop: React.FC<IconsProps> = ({ Component, list }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [filterTags, setFilterTags] = useState<string[]>([]);
  const {setIsClean}= useSelectContext();
  const toggleBox = () => {
    setIsVisible(!isVisible);
  };


  const handleClean = () =>{
    setFilterTags([])
    setIsClean(true)
  }


  const tags: string[] = list.split(',');
  const third = Math.ceil(tags.length / 3);
  const tags0 = tags.slice(0, third);
  const tags1 = tags.slice(third, third * 2);
  const tags2 = tags.slice(third * 2);

  return (
    <>
      <button
        onClick={toggleBox}
        className="px-4 py-2 text-white"
      >
        {Component}
      </button>
      {isVisible && (
        <div className="drop-box absolute bottom-[4.2rem] h-[18rem] w-full left-0 bg-white border border-gray-300 p-4 shadow-lg overflow-y-scroll">
          <Filter suggestions={tags0} select={filterTags} setStateValue={setFilterTags}/>
          <Filter suggestions={tags1} select={filterTags} setStateValue={setFilterTags}/>
          <Filter suggestions={tags2} select={filterTags} setStateValue={setFilterTags}/>
        
          <div className=" w-full bg-slate-400 h-[10%]"> 
            <button onClick={handleClean}>Limpiar</button> <button> Buscar</button> 
          </div>
          <div>
          {filterTags.map((tag, index) => (
            <span key={index}>{tag}</span>
        ))}
          </div>
        </div>
      )}
    </>
  );
};

export const ButtomTagsPos = forwardRef<HTMLButtonElement, ButtomPromp>(({ tag, handleCLick }, ref) => {
  const [isClick, setIsClick] = useState(false);
  const {isClean, setIsClean}= useSelectContext()

  const handleCliking = (tag: string) => {
    setIsClick(!isClick);
    handleCLick(tag);
  };
  useEffect(()=>{
    if(isClean){
      setIsClick(false)
      setIsClean(false)
    }
  }),[isClean];

  return (
    <button
      ref={ref}
      className={`mr-2 p-2 border ${isClick ? 'bg-blue-500 text-white' : 'bg-red-400 text-black'}`}
      onClick={() => handleCliking(tag)}
    >
      {tag}
    </button>
  );
});