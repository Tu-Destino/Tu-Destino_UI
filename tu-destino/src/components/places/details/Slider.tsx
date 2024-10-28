import React, { useRef, useState, useEffect } from 'react';
import Flicking from "@egjs/react-flicking";
import { Sync } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
//import "@egjs/flicking-plugins/dist/sync.css";
import { AutocompleteProps } from '@/types/types';
import '../../../styles/details.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SliderDetails: React.FC<AutocompleteProps> = ({ suggestions }) => {
  const flicking0 = useRef<Flicking>(null);
  const flicking1 = useRef<Flicking>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [plugins, setPlugins] = useState<Sync[]>([]);

  useEffect(() => {
    if (flicking0.current && flicking1.current) {
      const syncPlugin = new Sync({
        type: "index",
        synchronizedFlickingOptions: [
          {
            flicking: flicking0.current,
            isSlidable: true
          },
          {
            flicking: flicking1.current,
            isClickable: true,
            activeClass: "active"
          }
        ]
      });

      setPlugins([syncPlugin]);
      flicking0.current.on("moveEnd", () => setIsAnimating(false));
      flicking1.current.on("moveEnd", () => setIsAnimating(false));
      flicking0.current.on("moveStart", () => setIsAnimating(true));
      flicking1.current.on("moveStart", () => setIsAnimating(true));
    }
  }, [flicking0, flicking1]);

  const handlePrev = async () => {
    if (!isAnimating && flicking0.current && flicking0.current.index > 0) {
      setIsAnimating(true);
      await flicking0.current?.prev();
      await flicking1.current?.prev();
      setIsAnimating(false);
    }
  };
  
  const handleNext = async () => {
    if (!isAnimating && flicking0.current && flicking0.current.index < suggestions.length - 1) {
      setIsAnimating(true);
      await flicking0.current?.next();
      await flicking1.current?.next();
      setIsAnimating(false);
    }
  };
  

  
  return (
    <section className='w-full h-auto flex justify-center relative items-center'>
     <div className='w-full px-4 md:px-0 md:w-[90%] h-auto relative'>
      <Flicking
        ref={flicking0}
        className="mb-4"
        bounce={30}
        plugins={plugins}
      >
        {suggestions.map((item, index) => (
          <div key={index} className="flicking-panel full has-background-primary">
            <img 
              className="panel-image object-cover" 
              src={item} 
              alt={`Image ${index}`} 
              draggable="false" 
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
        ))}
      </Flicking>
      <Flicking
        ref={flicking1}
        moveType="freeScroll"
        bound={true}
        bounce={30}
      >
        {suggestions.map((item, index) => (
          <div key={index} className="flicking-panel thumb has-background-primary">
            <img 
              className="thumb-image object-cover" 
              src={item} 
              alt={`Thumbnail ${index}`} 
              draggable="false" 
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
        ))}
      
      </Flicking>
      
     </div>
     <button onClick={handlePrev} className="hidden md:block absolute left-3 top-1/2 transform -translate-y-1/2  p-2  h-[516px]">
        <ArrowBackIosIcon className='text-3xl'/>
      </button>
      <button onClick={handleNext} className="hidden md:block absolute right-3 top-1/2 transform -translate-y-1/2  p-2  h-[516px]">
        <ArrowForwardIosIcon className='text-3xl'/>
      </button>
    </section>
  );
};

export default SliderDetails;
