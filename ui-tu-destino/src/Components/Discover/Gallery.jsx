import {Modal, ModalContent, ModalHeader, ModalBody,ModalFooter,Button,useDisclosure} from '@nextui-org/react'



function FrameImg({place}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return <>
      <img className='w-full h-[316px]' onClick={onOpen} src={place.img} alt={`imagen de ${place.name}`} />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose)=>(
              <>
              <ModalHeader className='flex flex-col gap-1'>
                TItle
              </ModalHeader>
              <ModalBody>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis alias maiores voluptates fugit tempora, rerum, tempore molestias aut quibusdam minus dolores. Deleniti iste nemo nihil.</p>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onClick={onClose}>Close</Button>
                <Button color='primary' onClick={()=>{
                  console.log("DETALLES");
                  
                }}></Button>
              </ModalFooter>
              </>
            )}
          </ModalContent>
      </Modal>
  </>
}


function Gallery({places}) {
    return(
      <div className=" md:w-[90%]  lg:w-[80%] h-full bg-slate-800 flex items-center justify-center ">
        <div className='mt-8 grid grid-cols-3 gap-1 h-full w-full md:w-[90%] lg:w-[90%]'>
        {places.map((place,index)=>{
        return (
          <FrameImg key={index} place={place}/>
        )
       })}
        </div>
      </div>
    )
}

export default Gallery;