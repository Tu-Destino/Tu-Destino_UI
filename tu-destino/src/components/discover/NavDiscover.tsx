import { Modal, ModalContent, Button } from "@nextui-org/react";
import HomeIcon from "@mui/icons-material/Home";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  AlertPost,
  Drop,
  FrameDescription,
  ImageUploader,
  SearchPlaces,
  Tags,
} from "./MicroComponents";
import Link from "next/link";
import { AddPostProps, ElementProps } from "@/types/types";
import useLogicPost from "@/hooks/discover/logicPost";

export const AddPost: React.FC<ElementProps<"place">> = ({
  placeElement,
  placeList,
  placeTitles,
}) => {
  const {onOpen,onOpenChange,isOpen, newPost,message, isPost,closeAlert}= useLogicPost();
  return (
    <>
      <Button onPress={onOpen} variant="light">
        {" "}
        {placeElement}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="bottom">
        <ModalContent>
          {(onClose) => (
            <>
              <section className="PostModal flex  w-full flex-col h-[38rem] sm:h-[35rem]">
                <div className="w-full h-[30%] relative z-auto">
                  <ImageUploader />
                </div>
                <div className=" w-full  h-[60%] bg-slate-300  p-1 flex  relative flex-col justify-center items-center gap-2 ">
                  <SearchPlaces suggestions={placeTitles} />
                  <FrameDescription />
                  <div className="w-[95%] h-auto  ">
                    <Tags suggestions={placeList} />
                  </div>
                </div>
                <div className="absolute bottom-0 flex items-center justify-center w-full h-[10%] sm:h-auto ">
                  <Button color="primary" variant="light" onClick={newPost}>
                    Crear
                  </Button>
                  <Button  color="danger" variant="light" onClick={onClose}>
                    Close
                  </Button>
                </div>
              </section>
              {isPost && (
                  <AlertPost 
                    labels={message} 
                    handleClick={() => {
                      if (message =="Se a creado correctamente") {
                         closeAlert();
                         onClose();
                      }else{
                        closeAlert();
                      }
                     
                    }}
                  />
                )}

            </>
          )}
        
        </ModalContent>
      </Modal>
      
    </>
  );
};

const NavDiscover: React.FC<AddPostProps> = ({ list, titles }) => {
  return (
    <nav className="fixed bottom-0 w-full">
      <div className="flex justify-around gap-4 items-center px-4 py-1 bg-black ring-1 ring-white w-full">
        <div className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
          <Link href={"/"}>
            <HomeIcon style={{ color: "white" }} />
          </Link>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
            Home
          </div>
        </div>

        <div className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
          <AddPost
            placeElement={<PostAddIcon style={{ color: "white" }} />}
            placeList={list}
            placeTitles={titles}
          />
        </div>

        <div className=" group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
          <Drop
            Component={<FilterAltIcon style={{ color: "white" }} />}
            list={list}
          />
        </div>

        <div className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
          <AccountCircleIcon style={{ color: "white" }} />
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
            Mi Perfil
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavDiscover;
