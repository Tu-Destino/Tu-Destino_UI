import { useSelectContext } from "@/context/SelectContext";
import { filterTags } from "@/helpers/FetchData";
import useData from "@/helpers/Zustand/DataLoad";
import { Sync } from "@egjs/flicking-plugins";
import Flicking from "@egjs/react-flicking";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export function LogicTags(suggestions: string[]) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const flicking0 = useRef<Flicking>(null);
  const flicking1 = useRef<Flicking>(null);
  const [plugins, setPlugins] = useState([
    new Sync({ type: "camera", synchronizedFlickingOptions: [] }),
  ]);
  const { setNewTags } = useSelectContext();
  useEffect(() => {
    if (flicking0.current && flicking1.current) {
      const syncPlugin = new Sync({
        type: "camera",
        synchronizedFlickingOptions: [
          {
            flicking: flicking0.current,
            isClickable: false,
          },
          {
            flicking: flicking1.current,
            isClickable: false,
          },
        ],
      });
      setPlugins([syncPlugin]);
    }
  }, [flicking0, flicking1]);

  const half = Math.ceil(suggestions.length / 2);
  const tags0 = suggestions.slice(0, half);
  const tags1 = suggestions.slice(half);

  const handleClick = (tag: string) => {
    setSelectedTags((prevSelectedTags) => {
      let updatedSelectedTags;

      if (prevSelectedTags.includes(tag)) {
        updatedSelectedTags = prevSelectedTags.filter(
          (selectedTag) => selectedTag !== tag
        );
      } else {
        updatedSelectedTags = [...prevSelectedTags, tag];
      }

      return updatedSelectedTags;
    });
  };
  useEffect(() => {
    setNewTags(selectedTags.join(","));
  }, [selectedTags]);

  return {
    flicking0,
    flicking1,
    plugins,
    tags0,
    tags1,
    handleClick,
  };
}

export function LogicImagenUploader() {
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);
  const { setNewImagen } = useSelectContext();
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
        setNewImagen(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return {
    imageSrc,
    handleImageChange,
  };
}

export function LogicSearchPlaces(suggestions: string[]) {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { setNewTitle } = useSelectContext();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.length > 0) {
      const filtered = suggestions.filter((suggestion) =>
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
    setNewTitle(suggestion);
    setFilteredSuggestions([]);
    setShowSuggestions(false); // Cierra la lista de sugerencias
  };

  return {
    inputValue,
    handleChange,
    showSuggestions,
    filteredSuggestions,
    handleSuggestionClick,
  };
}

export function LogicFilterResponsive(
  setStateValue: React.Dispatch<React.SetStateAction<string[]>>
) {
  const flickingRef = useRef<Flicking>(null);
  const [plugins, setPlugins] = useState<Sync[]>([]);

  useEffect(() => {
    if (flickingRef.current) {
      const syncPlugin = new Sync({
        type: "index",
        synchronizedFlickingOptions: [
          {
            flicking: flickingRef.current,
            isClickable: false,
          },
        ],
      });
      setPlugins([syncPlugin]);
    }
  }, [flickingRef]);

  const handleClick = (tag: string) => {
    setStateValue((prevSelectedTags) => {
      if (prevSelectedTags.includes(tag)) {
        return prevSelectedTags.filter((select) => select !== tag);
      } else {
        return [...prevSelectedTags, tag];
      }
    });
  };
  return {
    flickingRef,
    plugins,
    handleClick,
  };
}

export function LogicDrop(list: string[]) {
  const [isVisible, setIsVisible] = useState(false);
  const [filteredTags, setFilterTags] = useState<string[]>([]);
  const { setIsClean } = useSelectContext();
  const { setPostDiscover } = useData();
  const toggleBox = () => {
    setIsVisible(!isVisible);
  };

  const handleClean = async () => {
    setFilterTags([]);
    setPostDiscover(await filterTags(""));
    setIsClean(true);
  };
  const handleClick = async () => {
    const filter = await filterTags(filteredTags.join(","));
    setPostDiscover(await filter);
  };

  const third = Math.ceil(list.length / 3);
  const tags0 = list.slice(0, third);
  const tags1 = list.slice(third, third * 2);
  const tags2 = list.slice(third * 2);

  return {
    toggleBox,
    isVisible,
    tags0,
    filteredTags,
    setFilterTags,
    tags1,
    tags2,
    handleClean,
    handleClick,
  };
}

export function LogicButtonTagsPost(handleCLick: (tag: string) => void) {
  const [isClick, setIsClick] = useState(false);
  const { isClean, setIsClean } = useSelectContext();

  const handleCliking = (tag: string) => {
    setIsClick(!isClick);
    handleCLick(tag);
  };
  useEffect(() => {
    if (isClean) {
      setIsClick(false);
      setIsClean(false);
    }
  }, [isClean]);

  return {
    isClick,
    handleCliking,
  };
}
