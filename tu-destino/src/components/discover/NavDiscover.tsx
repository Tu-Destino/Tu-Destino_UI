import React, { useState, ChangeEvent } from 'react'
import { Modal, ModalContent, Button, useDisclosure} from "@nextui-org/react";
import HomeIcon from '@mui/icons-material/Home';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Drop, ImageUploader, SearchPlaces, Tags } from './MicroComponents';
import Link from 'next/link';


const labels=['cultura','historia','lugares','cultura','historia','lugares','cultura','historia','lugares','historia','lugares','cultura','historia','lugares','cultura','historia','lugares']



function AddPost() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [textInput, setTextInput] = useState("");

  const words = [
    "bogota",
    "medellin",
    "cali",
    "bucaramanga",
    "villavicencio",
    "villanueva",
    'villa'
  ];


  const handleResult=(e:ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault();
    setTextInput(e.target.value.toLowerCase());
  }
  const filteredWords = words.filter((word) =>
    word.toLowerCase().includes(textInput)
  );

  return(
    <>
    <Button onPress={onOpen} variant='light'>    <PostAddIcon style={{color:'white'}}/></Button>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}  placement='center'>
      <ModalContent>
        {(onClose) => (
        <>
        <section className="flex  w-full flex-col sm:flex-row   h-[35rem] sm:h-[30rem]">
          <div className="w-full h-[30%]  ">
          <ImageUploader/>
          </div>
          <div className=" w-full  h-[60%] bg-slate-300  p-1 flex  relative flex-col justify-center items-center gap-2 overflow-scroll">
          
              <SearchPlaces suggestions={labels}/>

            <textarea rows={5} cols={20} placeholder='Escribe una descripcion del lugar' className="p-4  h-[50%] sm:h-[60%]  w-[90%]  placeholder:text-black border border-black rounded-md">
            </textarea>
            <div className='w-full h-[20%] overflow-x-auto'>
            <div className='flex '>
            <Tags labels={labels} />
            </div>
            </div>
            
          </div>
          <div className="absolute bottom-0 flex items-center justify-center w-full h-[10%] sm:h-auto ">
            <Button color="primary" variant="light" onClick={onClose}>
                Crear
              </Button>
              <Button color="danger" variant="light" onClick={onClose}>
                Close
              </Button>
            </div>
        </section>
      </>
                    )}
                    </ModalContent>
                  </Modal>
                </>
  )
}


export default function NavDiscover() {
  return (
    <nav className='fixed bottom-0 w-full'>
    
<div
  className="flex justify-around gap-4 items-center px-4 py-1 bg-black ring-1 ring-white w-full"
>
  <div
    className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
  >
   
    <Link href={'/'}><HomeIcon style={{color:'white'}}/></Link>
    <div
      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
    >
      Home
    </div>
  </div>

  <div
    className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
  >

    <AddPost/>

    <div
      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
    >
      Crear Post
    </div>
  </div>

  <div
    className=" group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
  >
  <Drop Component={<FilterAltIcon style={{color:'white'}}/>}/>
    <div
      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
    >
      Filtra
    </div>
  </div>

  <div
    className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
  >
    <AccountCircleIcon style={{color:'white'}}/>
    <div
      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
    >
      Mi Perfil
    </div>
  </div>

</div>

    </nav>
  )
}

