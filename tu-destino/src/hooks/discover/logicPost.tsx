import { useGetPlaceIdByTitleQuery } from "@/redux/apis/placeApi";
import { addImg } from "../Cloudinary";
import { useCreatePostMutation } from "@/redux/apis/postApi";
import { useDisclosure } from "@nextui-org/modal";
import { useSelectContext } from "@/context/SelectContext";
import { CreatePost } from "@/types/types";
import { useState } from "react";

function isString(value: unknown): value is string { 
  return typeof value === 'string';
}

  function verifyDataPost(post: CreatePost):{ isValid: boolean, message : string}{
   const missingFields=[];

   const fieldTranslations: { [key: string]: string } = { 
    title: "título", 
    description: "descripción",
     tags: "etiquetas",
      urlImg: "imagen" 
    }
    if (!post.title || post.title.trim() === "") missingFields.push(fieldTranslations.title); 
    if (!post.description || post.description.trim() === "") missingFields.push(fieldTranslations.description); 
    if (!post.tags || post.tags.length === 0) missingFields.push(fieldTranslations.tags); 
    if (!post.urlImg || (isString(post.urlImg) && post.urlImg.trim() === "")) missingFields.push(fieldTranslations.urlImg);
     if (missingFields.length > 0) { 
      return { isValid: false, message: `Faltan los siguientes campos: ${missingFields.join(", ")}` }; 
    }
     return { isValid: true, message: "Se a creado correctamente" };

  }

 function useLogicPost() {
  const [message , setMessage] = useState<string>("")
  const [isPost, setIsPost] = useState<boolean>(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { newImagen, newTitle, newDescription, newTags ,setNewDescription,setNewTags,setNewImagen,setNewTitle } = useSelectContext();
  const [
    createPost,
    {},
  ] = useCreatePostMutation();
  const {
    data = null
  } = useGetPlaceIdByTitleQuery(newTitle, { skip: !newTitle });
   const veryfiImg= async()=>{
     if(newImagen){
      return await addImg(newImagen)
     }
     return null;

   }
  const newPost = async ( ) => {
    if (!data) {
      console.log("(Post Creation) Failed to get location id");
     
    }
    const imagen= await veryfiImg();
    const post = {
      title: newTitle,
      description: newDescription,
      tags: newTags,
      urlImg: imagen,
      user_id: "144d523f-c71c-480d-97c3-c073ecbcb45c",
      place_id: data,
    };
  
    const validationResult =  verifyDataPost(post);
     if (validationResult.isValid) {
      createPost(post)
      setIsPost(true)
      setMessage(validationResult.message) 
      setNewDescription('');
      setNewTags('');
      setNewImagen('');
      setNewTitle('');
     }else{
      setMessage(validationResult.message)  
      setIsPost(true)
      
     }
  };

  const closeAlert = ( ) =>{
    
    setIsPost(false)
  }

    return {
    onOpen,
    isOpen,
    onOpenChange,
    newPost,
    isPost,
    message,
    closeAlert
   
  }
}

export default useLogicPost;
