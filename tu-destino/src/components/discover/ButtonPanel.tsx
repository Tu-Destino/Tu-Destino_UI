
import {  FiltersType } from "@/types/types";
import { Sync } from "@egjs/flicking-plugins";
import Flicking from "@egjs/react-flicking";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ButtomFilter from "./ButtonFilter";

const etiquetasLugares: string =
  "Parque , Playa , Home ,  Histórico, Jardín , Zoológico ,  Nacional, Montaña , Cascada , Castillo, plaza, bosque, lago, luz, restaurante, aventura, relax, compras, social, local, callejera, saludable, tarde, nocturna, cafeteria, bar, rio, mirador, biblioteca ,monumento , lujo, deporte , otros, religion, arte, internacional, naturaleza, antiguo, diseño, hospedajes, gastronomia, lugares, actividades";


const Filters: React.FC<FiltersType> = ({ suggestions, select, setStateValue }) => {
  const flickingRef = useRef<Flicking>(null);
  const flickingRef0 = useRef<Flicking>(null);
  const [istable,setIsTable]= useState(false)
  const [plugins, setPlugins] = useState<Sync[]>([]);

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

    useEffect(() => {
      if (flickingRef.current && flickingRef0.current) {
        const syncPlugin = new Sync({
          type: istable? "camera": "camera",
          synchronizedFlickingOptions: [
            {
              flicking: flickingRef.current,
              isClickable: false
            },
            {
              flicking: flickingRef0.current,
              isClickable: false
            }
          ]
        });      
             
        setPlugins([syncPlugin]);
      }
    }, [flickingRef,flickingRef0,istable? istable: null]);
  
  
    const handleClick = (tag: string) => {
      setStateValue(prevSelectedTags => {
        if (prevSelectedTags.includes(tag)) {
          return prevSelectedTags.filter(select => select !== tag);
        } else {
          return [...prevSelectedTags, tag];
        }
      });
    };  
    const half = Math.ceil(suggestions.length / 2);
    const tags0 = istable ?  suggestions.slice(0, half) : suggestions;
    const tags1 = suggestions.slice(half);
  
  
    return (<>
      <Flicking ref={flickingRef}
        className="mb-4
         flickChilds"
        align="prev"
        bound={true}
        bounce={30}
        plugins={plugins}
        horizontal={false}
        key={'4'}
      >
        {tags0.map((tag, index) => (
          <ButtomFilter key={index} tag={tag} handleCLick={handleClick}/>
        ))}
      </Flicking>
      {istable && (
        <Flicking ref={flickingRef0}
        className="mb-4 flickChilds "
        align="prev"
        bound={true}
        bounce={30}
        horizontal={false}
        key={'3'}
      >
        {tags1.map((tag, index) => (
          <ButtomFilter key={index} tag={tag} handleCLick={handleClick}/>
        ))}
      </Flicking>
      )}
      </>
    );
};

function ButtonPanel() {
  const [tags,setTags] = useState<string[]>([]);
  const listTags = etiquetasLugares.split(',');
  return(
    <div className="md:w-[20%] lg:w-[20%] h-full bg-[#1E1E1E]">
      <div className="mt-[5rem]  w-full gap-1 h-[80%] flex justify-center overflow-hidden" >
        <Filters  suggestions={listTags} select={tags} setStateValue={setTags}/>
      </div>
    </div>
  )
}

export default ButtonPanel;