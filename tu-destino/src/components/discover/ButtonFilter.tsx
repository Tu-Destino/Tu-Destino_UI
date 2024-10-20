import { useSelectContext } from "@/context/SelectContext";
import { ButtomPromp, ColorWithNickname, IconWithNickname } from "@/types/types";
import { forwardRef, useEffect, useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import CelebrationIcon from '@mui/icons-material/Celebration';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AdbIcon from '@mui/icons-material/Adb';

const icons: IconWithNickname[]=[
  {icon: <HomeIcon/>, nickname: 'Home'},
  {icon: <CelebrationIcon/>, nickname: 'parque'},
  {icon: <AdbIcon/>, nickname: 'tarde'}
]
const colors: ColorWithNickname[]=[
  {color: "bg-[#f2f2f2]", nickname: 'Home'},
  { color: 'bg-blue-300', nickname: 'parque' },
  { color: 'bg-green-400', nickname: 'tarde' }
]
const ButtomFilter = forwardRef<HTMLButtonElement, ButtomPromp>(({ tag, handleCLick }, ref) => {
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

  const getColorByTag = (tag: string): string | undefined => {
    const item = colors.find(item => item.nickname.trim().toLowerCase() == tag.trim().toLowerCase());   
    return item ? item.color : 'bg-red-300';
  };

  const color = getColorByTag(tag)

  const getFilteredIcons = (filter: string): React.ReactElement[] => {
    const item = icons.find(icon => icon.nickname.trim().toLowerCase() == filter.trim().toLowerCase());
    return item ? [item.icon] : [<AcUnitIcon />]; // Icono de respaldo
  };
  const FilteredIcons = getFilteredIcons(tag)
 
  
  
  
  return (
    <button
      ref={ref}
      className={` p-2 flex flex-col items-center justify-center aspect-square w-[90.85px] h-[90.85px] border border-[#4C5053] rounded-[22px] ${isClick ? color : 'bg-[#282828] text-[#616c7b]'}`}
      onClick={() => handleCliking(tag)}
    >
      <span>{FilteredIcons}</span>
        <h3>{tag.trim()}</h3>
    </button>
  );
});

export default ButtomFilter;