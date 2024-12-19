import { ButtomPromp } from "@/types/types";
import { forwardRef } from "react";
import { LogicButtonFilter } from "@/hooks/discover/logicFilter";
import "../../styles/discover.css"

const ButtomFilter = forwardRef<HTMLButtonElement, ButtomPromp>(
  ({ tag, handleCLick }, ref) => {
    const { FilteredIcons, color, isClick, handleCliking } = LogicButtonFilter(
      tag,
      handleCLick
    );
    return (
      <button
        ref={ref}
        className={`flex flex-col items-center justify-center aspect-square  border border-[#4C5053] rounded-[22px] ${
          isClick ? color : "bg-[#282828] text-[#616c7b]"
        }`}
        onClick={() => handleCliking(tag)}
      >
        <span key={tag} className="ConteinerIcons">{FilteredIcons }</span>
        <h3 className="w-full text-center ">{tag.trim()}</h3>
      </button>
    );
  }
);
ButtomFilter.displayName = "ButtomFilter";
export default ButtomFilter;
