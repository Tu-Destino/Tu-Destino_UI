import React, { useRef, useState, useEffect } from "react";
import Flicking from "@egjs/react-flicking";
import { Sync } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
//import "@egjs/flicking-plugins/dist/sync.css";
import { AutocompleteProps } from "@/types/types";
import "../../../styles/details.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useParams } from "next/navigation";
import { inter, poppins } from "@/styles/fonts";

const SliderDetails: React.FC<AutocompleteProps> = ({ suggestions }) => {
  const flicking0 = useRef<Flicking>(null);
  const flicking1 = useRef<Flicking>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [plugins, setPlugins] = useState<Sync[]>([]);
  const params = useParams();
  const { id } = params;

  const [decodedId, setDecodedId] = useState<string>("");

  useEffect(() => {
    if (id) {
      const decodedIdValue = Array.isArray(id)
        ? decodeURIComponent(id[0])
        : decodeURIComponent(id);
      setDecodedId(decodedIdValue);
    }
  }, [id]);

  useEffect(() => {
    if (flicking0.current && flicking1.current) {
      const syncPlugin = new Sync({
        type: "index",
        synchronizedFlickingOptions: [
          {
            flicking: flicking0.current,
            isSlidable: true,
          },
          {
            flicking: flicking1.current,
            isClickable: true,
            activeClass: "active",
          },
        ],
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
    if (
      !isAnimating &&
      flicking0.current &&
      flicking0.current.index < suggestions.length - 1
    ) {
      setIsAnimating(true);
      await flicking0.current?.next();
      await flicking1.current?.next();
      setIsAnimating(false);
    }
  };

  return (
    <div>
      <section className="w-full h-auto flex flex-col justify-center relative items-center">
        <div className="h-[11rem] max-w-[1300px] pt-[117px] w-full content-center ">
          <h1
            className={`pl-[57px] text-start text-xl md:text-3xl text-[#1d1d1f] ${inter.className}`}
          >
            {decodedId}
          </h1>
        </div>
        <div className="w-full max-w-[1300px] h-auto relative px-6 md:px-14 ">
          <Flicking
            ref={flicking0}
            className="mb-4"
            bounce={30}
            plugins={plugins}
          >
            {suggestions.map((item, index) => (
              <div
                key={index}
                className="flicking-panel w-full h-[500px] flex content-center items-center overflow-hidden full has-background-primary "
              >
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
              <div
                key={index}
                className="flicking-panel thumb has-background-primary "
              >
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
          <button
            onClick={handlePrev}
            className="hidden md:block absolute left-[4px] top-1/2 transform -translate-y-1/2 h-[516px]"
          >
            <KeyboardArrowLeftIcon className="size-9 hover:bg-[#e3e3e7] bg-[#dedee2] m-1 rounded-full" />
          </button>
          <button
            onClick={handleNext}
            className="hidden md:block absolute right-[4px] top-1/2 transform -translate-y-1/2 h-[516px]"
          >
            <KeyboardArrowRightIcon  className="size-9 hover:bg-[#e3e3e7] bg-[#dedee2] m-1 rounded-full" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default SliderDetails;
