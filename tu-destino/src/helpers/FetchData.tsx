import { NewPost, Post } from "@/types/types";

const API_BASE_URL = "https://bl-monolith-td.onrender.com/TD/api/v1"; // Reemplaza con tu URL de la API

// Función genérica para obtener todos los datos
export const getAll = async (endpoint: string) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`Error al obtener los datos de ${endpoint}`);
  }
  return response.json();
};

// Función genérica para obtener datos por ID
export const getById = async (endpoint: string, id: string | number) => {
  const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`);
  if (!response.ok) {
    throw new Error(`Error al obtener los datos de ${endpoint} con ID ${id}`);
  }
  return response.json();
};

// Función genérica para crear datos (objeto o lista de objetos)
export const create = async (endpoint: string, data: any | any[]) => {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Error al crear datos en ${endpoint}`);
  }
  return response.json();
};

// Función genérica para actualizar datos
export const update = async (
  endpoint: string,
  id: string | number,
  data: any
) => {
  const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Error al actualizar datos de ${endpoint} con ID ${id}`);
  }
  return response.json();
};

// Función genérica para eliminar datos
export const remove = async (endpoint: string, id: string | number) => {
  const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Error al eliminar datos de ${endpoint} con ID ${id}`);
  }
  return response.json();
};

export const createNewPost= async(post: NewPost)=>{

  const newPost ={
    "title": post.title,
    "description": post.description,
    "tags": post.tags,
    "urlImg":await addImg(post.urlImg) ,
    "place_id": await getById('place/getIdByTitle',post.title),
    "user_id":"0d215f49-a3f4-4165-bf52-b42649bc85c3"
  }

  try{
    console.log(newPost);
    return create('postDiscover', newPost,)

  }
  catch(error:any){
   return error.message
  }
}

export async function addImg(file: string | ArrayBuffer|null): Promise<string> {
  let url = "";
  const formData = new FormData();

  if (typeof file === 'string' || file instanceof ArrayBuffer) {
    formData.append("file", new Blob([file], { type: 'image/jpeg' })); // Ajusta el tipo según la imagen que tengas
    formData.append("upload_preset", "dnrb6puh"); // Reemplaza con tu propio upload preset

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dhtmy6izv/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(`Error al subir la imagen: ${data.error.message}`);
    }

    const { secure_url } = data;
    url = secure_url;
  }

  return url;
}
