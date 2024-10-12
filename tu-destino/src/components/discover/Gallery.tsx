"use client";

import { useState, useEffect, FC } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Redirect from "./Redirect";

type Place = {
  img: string;
  name: string;
};

type CardImgProps = {
  place: Place;
};

type GalleryProps = {
  initialPlaces: Place[];
};
const CardImg: FC<CardImgProps> = ({ place }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  const handleClick = () => {
    setSelectedPlace(place);
    onOpen();
  };

  return (
    <>
      <img
        className="w-full h-[316px] cursor-pointer"
        onClick={handleClick}
        src={place.img}
        alt={`imagen de ${place.name}`}
      />
      {selectedPlace && (
        <Modal
          size="4xl"
          backdrop="blur"
          closeButton={
            <span
              className="custom-close-button "
              style={{
                zIndex: "100",
              }}
            >
              <span className="icon-[teenyicons--x-solid]"></span>
            </span>
          }
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <section className="flex  w-full flex-col sm:flex-row  h-[35rem] sm:h-[30rem]">
                  <div className="w-full sm:w-[70%]  h-[300px] sm:h-full relative ">
                    <img
                      className="h-full w-full object-cover"
                      src={place.img}
                      alt={`imagen del ${place.name}`}
                    />
                  </div>
                  <div className=" w-full sm:w-[30%] h-full relative flex  flex-col justify-center">
                    <h1 className="p-4 absolute w-[85%] top-0">
                      {place.name} 
                    </h1>
                    <p className="p-4 relative h-[50%] sm:h-[60%] overflow-y-scroll ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dignissimos, excepturi, reiciendis similique veniam
                      accusantium ratione libero repellat facilis illo sapiente
                      nisi saepe ad quas natus sunt dicta voluptates ipsum
                      maxime architecto blanditiis sit? Praesentium repellendus
                      deleniti placeat ipsum quae distinctio maxime hic totam
                      fuga eos? Voluptates veritatis saepe obcaecati aliquam!
                    </p>
                    <div className="absolute bottom-0 flex items-center justify-center w-full h-[20%] sm:h-auto ">
                      <Redirect name={selectedPlace.name} />
                      <Button color="danger" variant="light" onClick={onClose}>
                        Close
                      </Button>
                    </div>
                  </div>
                </section>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

const Gallery: FC<GalleryProps> = ({ initialPlaces }) => {
  const [places, setPlaces] = useState<Place[]>(initialPlaces);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Solo se ejecuta en el cliente
  }, []);

  const loadMorePlaces = () => {
    if (isClient) {
      setPlaces((prev) => [...prev, ...prev]);
    }
  };

  useEffect(() => {
    if (!isClient) return;
    const container = document.querySelector(".gallery-container");

    const handleScroll = () => {
      if (
        container &&
        container.scrollTop + container.clientHeight >= container.scrollHeight * 0.95
      ) {
        loadMorePlaces();
      }
    };
    

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isClient]);

  return (
    <div className="md:w-[90%] lg:w-[80%] h-full bg-slate-800 flex items-center justify-center overflow-scroll gallery-container">
      <div className="mt-8 grid grid-cols-3 gap-1 h-full w-full md:w-[90%] lg:w-[90%]">
        {places.map((place, index) => (
          <CardImg key={index} place={place} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
