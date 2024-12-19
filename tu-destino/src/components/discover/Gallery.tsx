"use client";

import { useState, FC } from "react";
import { Modal, ModalContent, Button, useDisclosure } from "@nextui-org/react";
import Redirect from "./Redirect";
import { CardImgProps, GalleryProps, Post } from "@/types/types";
import logicGallery from "@/hooks/discover/logicGallery";
import { useAppSelector } from "@/hooks/redux";
import { Tooltip } from "@mui/material";

const CardImg: FC<CardImgProps> = ({ place }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedPlace, setSelectedPlace] = useState<Post | null>(null);

  const handleClick = () => {
    setSelectedPlace(place);
    onOpen();
  };

  return (
    <>
      <img
        className="w-full  h-auto aspect-square cursor-pointer object-cover"
        onClick={handleClick}
        src={place.urlImg}
        alt={`imagen de ${place.title}`}
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
          <ModalContent className="m-0 w-[320px] sm:w-full h-full max-h-[800px] min-h-[610px] sm:h-[30rem] ">
            {(onClose) => (
              <>
                <section className="flex  w-full flex-col  sm:flex-row  sm:h-full">
                  <div className="w-full sm:w-[70%] h-[380px] sm:h-full relative ">
                    <img
                      className="h-full w-full object-cover"
                      src={place.urlImg}
                      alt={`imagen del ${place.title}`}
                    />
                  </div>
                  <div className=" w-full sm:w-[30%] h-[420px] flex-grow sm:h-full flex  flex-col justify-between">
                    <Tooltip
                      title={place.title}
                      enterDelay={3000}
                      disableInteractive
                      slotProps={{
                        popper: {
                          modifiers: [
                            {
                              name: "offset",
                              options: {
                                offset: [35, -38],
                              },
                            },
                          ],
                        },
                      }}
                    >
                      <h1 className="max-h-20 overflow-hidden whitespace-nowrap text-ellipsis p-4 sm:pr-9 border-b-1">
                        {place.title}
                      </h1>
                    </Tooltip>
                    <p className="p-4 sm:h-[80%] overflow-y-scroll ">
                      {place.description}
                    </p>
                    <div className="flex items-center justify-evenly w-full h-[60px] sm:h-[10%] ">
                      <Redirect labels={selectedPlace.title} />
                      <Button
                        className="text-gray-500"
                        variant="light"
                        onClick={onClose}
                      >
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
  const { places } = logicGallery(initialPlaces);
  const { posts } = useAppSelector((state) => state.postShowDiscover);

  if (posts.length != 0) {
    return (
      <div className="md:w-[80%] lg:w-[80%] h-full  flex items-center justify-center overflow-scroll gallery-container">
        <div className="mt-8 grid grid-cols-3 grid-rows-subgrid gap-[2px] md:gap-1 h-full w-full md:w-[100%] lg:w-[92%]">
          {posts.map((place, index) => (
            <CardImg key={index} place={place} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="md:w-[80%] lg:w-[80%] h-full  flex items-center justify-center overflow-scroll gallery-container">
      <div className="mt-8 grid grid-cols-3 grid-rows-subgrid gap-[2px] md:gap-1 h-full w-full md:w-[100%] lg:w-[92%]">
        {places.map((place, index) => (
          <CardImg key={index} place={place} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
