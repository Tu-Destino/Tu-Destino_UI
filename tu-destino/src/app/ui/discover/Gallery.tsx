'use client';
import { useState, useEffect } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react';

type Place = {
  img: string;
  name: string;
};

type GalleryProps = {
  initialPlaces: Place[];
};

const Gallery: React.FC<GalleryProps> = ({ initialPlaces }) => {
  const [places, setPlaces] = useState<Place[]>(initialPlaces);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>, place: Place) => {
    event.preventDefault();
    setSelectedPlace(place);
    onOpen();
  };

  const loadMorePlaces = () => {
    setPlaces((prev) => [...prev, ...prev]);
  };

  useEffect(() => {
    const container = document.querySelector('.gallery-container');

    const handleScroll = () => {
      if (container && container.scrollHeight - container.scrollTop <= container.clientHeight) {
        loadMorePlaces();
      }
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="md:w-[90%] lg:w-[80%] h-full bg-slate-800 flex items-center justify-center overflow-scroll gallery-container">
      <div className='mt-8 grid grid-cols-3 gap-1 h-full w-full md:w-[90%] lg:w-[90%]'>
        {places.map((place, index) => (
          <img key={index} className='w-full h-[316px]' onClick={(event) => handleImageClick(event, place)} src={place.img} alt={`imagen de ${place.name}`} />
        ))}
      </div>
      {selectedPlace && (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className='flex flex-col gap-1'>
                  {selectedPlace.name}
                </ModalHeader>
                <ModalBody>
                  <p>Información adicional sobre {selectedPlace.name}</p>
                </ModalBody>
                <ModalFooter>
                  <Button color='danger' variant='light' onClick={onClose}>Close</Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default Gallery;
