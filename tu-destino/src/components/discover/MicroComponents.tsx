
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { ChangeEvent, ReactNode, useEffect, useState } from "react";

type IconsProps={
  Component: ReactNode
}
type AutocompleteProps = {
  suggestions: string[];
};

type TagsProps = {
  labels: string[];
};

export const Tags: React.FC<TagsProps> = ({ labels }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleClick = (label: string) => {
    if (selectedTags.includes(label)) {
      setSelectedTags(selectedTags.filter(tag => tag !== label));
    } else {
      setSelectedTags([...selectedTags, label]);
    }
  };

  return (
    <div>
      {labels.map((label, index) => (
        <button
          key={index}
          onClick={() => handleClick(label)}
          style={{
            backgroundColor: selectedTags.includes(label) ? 'blue' : 'initial',
            color: selectedTags.includes(label) ? 'white' : 'black',
            padding: '5px',
            border: '1px solid black',
            cursor: 'pointer',
            margin: '5px'
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

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

  return (
    <>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imageSrc && <img src={imageSrc as string} alt="preview" className=' h-[200px] w-full object-cover' />}
    </>
  );
}

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
        <ul className="absolute border border-t-0 bg-white w-full max-h-60 overflow-y-auto">
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
}

export const Drop: React.FC<IconsProps> = ({ Component }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleBox = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event: MouseEvent | Event) => {
    if (isVisible && !(event.target as HTMLElement).closest('.drop-box')) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('click', handleClickOutside);
      window.addEventListener('scroll', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleClickOutside);
    };
  }, [isVisible]);

  return (
    <>
      <button
        onClick={toggleBox}
        className="px-4 py-2 text-white"
      >
        {Component}
      </button>
      {isVisible && (
        <div className="drop-box absolute bottom-[4.2rem] h-[18rem] w-full left-0 bg-white border border-gray-300 p-4 shadow-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nobis aperiam dolorem explicabo asperiores animi assumenda voluptates! Dolores laboriosam voluptates aspernatur deserunt minima accusantium, et obcaecati atque eius voluptatibus maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ab temporibus dolorem assumenda quae.
        </div>
      )}
    </>
  );
};