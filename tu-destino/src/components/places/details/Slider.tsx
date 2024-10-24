import React, { useRef, useState, useEffect } from 'react';
import Flicking from "@egjs/react-flicking";
import { Sync } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
//import "@egjs/flicking-plugins/dist/sync.css";
import { AutocompleteProps } from '@/types/types';
import '../../../styles/details.css'


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

  const handlePrev = () => {
    if (!isAnimating && flicking0.current && flicking0.current.index > 0) {
      flicking0.current?.prev();
      flicking1.current?.prev();
    }
  };


  const handleNext = () => {
    if (!isAnimating && flicking0.current && flicking0.current.index < suggestions.length- 1) {
      flicking0.current?.next();
      flicking1.current?.next();
    }
  };


  
  return (
    <section className='w-full h-auto flex justify-center relative items-center'>
     <div className='w-[80%] h-auto relative'>
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
     <button onClick={handlePrev} className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full">
        Prev
      </button>
      <button onClick={handleNext} className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full">
        Next
      </button>
    </section>
  );
};

export default SliderDetails;
