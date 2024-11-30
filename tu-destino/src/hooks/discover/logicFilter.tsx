
import { useSelectContext } from "@/context/SelectContext";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { colors, icons } from "./relactiveIcons";


export function LogicButtonFilter(
  tag: string,
  handleCLick: (tag: string) => void
) {
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
  }),
    [isClean];

  const getColorByTag = (tag: string): string | undefined => {
    const item = colors.find(
      (item) => item.nickname.trim().toLowerCase() == tag.trim().toLowerCase()
    );
    return item ? item.color : "bg-red-300";
  };

  const color = getColorByTag(tag);

  const getFilteredIcons = (filter: string): React.ReactElement[] => {
    const item = icons.find(
      (icon) =>
        icon.nickname.trim().toLowerCase() == filter.trim().toLowerCase()
    );
    return item ? [item.icon] : [<AcUnitIcon />]; // Icono de respaldo
  };
  const FilteredIcons = getFilteredIcons(tag);

  return {
    handleCliking,
    FilteredIcons,
    isClick,
    color,
  };
}

export function LogicFilter( setStateValue:React.Dispatch<React.SetStateAction<string[]>>) {
;
  const [istable,setIsTable]= useState(false)


    useLayoutEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 1024) {
          setIsTable(true);
        } else {
          setIsTable(false);
        }
      };
   
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  
  
    const handleClick = (tag: string) => {
      setStateValue(prevSelectedTags => {
        if (prevSelectedTags.includes(tag)) {
          return prevSelectedTags.filter(select => select !== tag);
        } else {
          return [...prevSelectedTags, tag];
        }
      });
    };  
  
  
    return{
      handleClick,
      istable,

    }  
}